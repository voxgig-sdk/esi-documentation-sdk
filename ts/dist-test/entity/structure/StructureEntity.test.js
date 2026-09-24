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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 }, "x": { "a": true, "fo": "double", "h": "X", "n": "x", "r": false, "t": "`$NUMBER`", "key$": "x", "index$": 1 }, "y": { "a": true, "fo": "double", "h": "Y", "n": "y", "r": false, "t": "`$NUMBER`", "key$": "y", "index$": 2 }, "z": { "a": true, "fo": "double", "h": "Z", "n": "z", "r": false, "t": "`$NUMBER`", "key$": "z", "index$": 3 } }, "id": { "field": "id", "name": "id" }, "name": "structure", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /universe/structures/{structure_id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "structure_id", "r": true, "t": "`$INTEGER`", "index$": 0 }], "query": [{ "a": true, "ex": "tranquility", "k": "query", "n": "datasource", "or": "datasource", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/universe/structures/{structure_id}/", "q": { "exist": ["datasource", "id"] }, "r": { "param": { "structure_id": "id" } }, "s": [{ "lit": "universe" }, { "lit": "structures" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.position`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "structure", "name__orig": "structure", "Name": "Structure", "name_": "structure", "name-": "structure", "NAME": "STRUCTURE", "index$": 2 }, { "active": true, "entity": "structure", "key$": "BasicStructureFlow", "kind": "basic", "name": "BasicStructureFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "structure_ref01", "srcdatavar": "structure_ref01_data", "suffix": "_dt0" }, "m": { "id": "structure01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-structure_ref01" } }], "index$": 0 }] }, 'Structure', { "GET /universe/structures/{structure_id}/": { "protocol": "http", "operationId": "getStructure", "responses": { "200": { "description": "Data about a structure", "content": { "application/json": { "schema": { "type": "object", "required": ["name", "owner_id", "solar_system_id", "type_id"], "properties": { "name": { "type": "string", "description": "The structure name" }, "owner_id": { "type": "integer", "format": "int32", "description": "The ID of the corporation that owns the structure" }, "solar_system_id": { "type": "integer", "format": "int32", "description": "The solar system the structure is in" }, "type_id": { "type": "integer", "format": "int32", "description": "The type of structure" }, "position": { "type": "object", "description": "Coordinates of the structure in the solar system", "properties": { "x": { "type": "number", "format": "double", "key$": "x" }, "y": { "type": "number", "format": "double", "key$": "y" }, "z": { "type": "number", "format": "double", "key$": "z" } }, "index$": 0 } }, "x-ref": "#/components/schemas/Structure" } } } }, "403": { "description": "Forbidden - Not authorized to access this structure", "content": { "application/json": { "schema": { "type": "object", "required": ["error"], "properties": { "error": { "type": "string", "description": "Error message" } }, "x-ref": "#/components/schemas/Error" } } } }, "404": { "description": "Structure not found", "content": { "application/json": { "schema": { "type": "object", "required": ["error"], "properties": { "error": { "type": "string", "description": "Error message" } }, "x-ref": "#/components/schemas/Error" } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "required": ["error"], "properties": { "error": { "type": "string", "description": "Error message" } }, "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [{ "name": "structure_id", "in": "path", "required": true, "description": "An EVE structure ID", "schema": { "type": "integer", "format": "int64" }, "index$": 0 }, { "name": "datasource", "in": "query", "description": "The server name you would like data from", "schema": { "type": "string", "enum": ["tranquility", "singularity"], "default": "tranquility" }, "index$": 1 }], "security": [{ "evesso": ["esi-universe.read_structures.v1"] }], "securitySource": "operation", "securitySchemes": { "evesso": { "type": "oauth2", "description": "EVE Online SSO OAuth 2.0", "flows": { "authorizationCode": { "authorizationUrl": "https://login.eveonline.com/v2/oauth/authorize", "tokenUrl": "https://login.eveonline.com/v2/oauth/token", "scopes": { "esi-assets.read_assets.v1": "Read character assets", "esi-universe.read_structures.v1": "Read structure information", "esi-markets.read_character_orders.v1": "Read character market orders", "esi-markets.structure_markets.v1": "Read structure markets", "esi-characters.read_notifications.v1": "Read character notifications", "esi-corporations.read_structures.v1": "Read corporation structures" } } } } } } });
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