"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('StructureEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when ESI_DOCUMENTATION_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('ESI_DOCUMENTATION_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.EsiDocumentationSDK.test();
        const ent = testsdk.Structure();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.ESI_DOCUMENTATION_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'structure.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "format": "double", "name": "x", "req": false, "type": "`$NUMBER`", "index$": 1 }, { "active": true, "format": "double", "name": "y", "req": false, "type": "`$NUMBER`", "index$": 2 }, { "active": true, "format": "double", "name": "z", "req": false, "type": "`$NUMBER`", "index$": 3 }], "id": { "field": "id", "name": "id" }, "name": "structure", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "structure_id", "reqd": true, "type": "`$INTEGER`", "index$": 0 }], "query": [{ "active": true, "example": "tranquility", "kind": "query", "name": "datasource", "orig": "datasource", "reqd": false, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /universe/structures/{structure_id}/", "json": "{\"operationId\":\"getStructure\",\"parameters\":[{\"description\":\"An EVE structure ID\",\"in\":\"path\",\"name\":\"structure_id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}},{\"description\":\"The server name you would like data from\",\"in\":\"query\",\"name\":\"datasource\",\"schema\":{\"default\":\"tranquility\",\"enum\":[\"tranquility\",\"singularity\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"name\":{\"description\":\"The structure name\",\"type\":\"string\"},\"owner_id\":{\"description\":\"The ID of the corporation that owns the structure\",\"format\":\"int32\",\"type\":\"integer\"},\"position\":{\"description\":\"Coordinates of the structure in the solar system\",\"properties\":{\"x\":{\"format\":\"double\",\"type\":\"number\"},\"y\":{\"format\":\"double\",\"type\":\"number\"},\"z\":{\"format\":\"double\",\"type\":\"number\"}},\"type\":\"object\"},\"solar_system_id\":{\"description\":\"The solar system the structure is in\",\"format\":\"int32\",\"type\":\"integer\"},\"type_id\":{\"description\":\"The type of structure\",\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"name\",\"owner_id\",\"solar_system_id\",\"type_id\"],\"type\":\"object\"}}},\"description\":\"Data about a structure\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Forbidden - Not authorized to access this structure\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Structure not found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"security\":[{\"evesso\":[\"esi-universe.read_structures.v1\"]}],\"securitySchemes\":{\"evesso\":{\"description\":\"EVE Online SSO OAuth 2.0\",\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://login.eveonline.com/v2/oauth/authorize\",\"scopes\":{\"esi-assets.read_assets.v1\":\"Read character assets\",\"esi-characters.read_notifications.v1\":\"Read character notifications\",\"esi-corporations.read_structures.v1\":\"Read corporation structures\",\"esi-markets.read_character_orders.v1\":\"Read character market orders\",\"esi-markets.structure_markets.v1\":\"Read structure markets\",\"esi-universe.read_structures.v1\":\"Read structure information\"},\"tokenUrl\":\"https://login.eveonline.com/v2/oauth/token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/universe/structures/{structure_id}/", "rename": { "param": { "structure_id": "id" } }, "segments": [{ "lit": "universe" }, { "lit": "structures" }, { "var": "id" }], "select": { "exist": ["datasource", "id"] }, "transform": { "req": "`reqdata`", "res": "`body.position`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "structure", "name__orig": "structure", "Name": "Structure", "name_": "structure", "name-": "structure", "NAME": "STRUCTURE", "index$": 2 }, { "active": true, "entity": "structure", "key$": "BasicStructureFlow", "kind": "basic", "name": "BasicStructureFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "structure_ref01", "srcdatavar": "structure_ref01_data", "suffix": "_dt0" }, "match": { "id": "structure01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-structure_ref01" } }], "index$": 0 }] }, 'Structure');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let structure_ref01_data = Object.values(setup.data.existing.structure)[0];
        // LOAD
        const structure_ref01_ent = client.Structure();
        const structure_ref01_match_dt0 = {};
        structure_ref01_match_dt0.id = structure_ref01_data.id;
        const structure_ref01_data_dt0 = (await structure_ref01_ent.load(structure_ref01_match_dt0)).data();
        (0, node_assert_1.default)(structure_ref01_data_dt0.id === structure_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/structure/StructureTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.EsiDocumentationSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['structure01', 'structure02', 'structure03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'ESI_DOCUMENTATION_TEST_STRUCTURE_ENTID': idmap,
        'ESI_DOCUMENTATION_TEST_LIVE': 'FALSE',
        'ESI_DOCUMENTATION_TEST_EXPLAIN': 'FALSE',
        'ESI_DOCUMENTATION_APIKEY': '',
    });
    idmap = env['ESI_DOCUMENTATION_TEST_STRUCTURE_ENTID'];
    const live = 'TRUE' === env.ESI_DOCUMENTATION_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['ESI_DOCUMENTATION_TEST_STRUCTURE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.EsiDocumentationSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.ESI_DOCUMENTATION_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.ESI_DOCUMENTATION_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=StructureEntity.test.js.map