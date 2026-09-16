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
(0, node_test_1.describe)('AssetEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when ESI_DOCUMENTATION_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('ESI_DOCUMENTATION_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.EsiDocumentationSDK.test();
        const ent = testsdk.Asset();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.ESI_DOCUMENTATION_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'asset.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "is_blueprint_copy", "req": false, "short": "is_blueprint_copy boolean", "type": "`$BOOLEAN`", "index$": 0 }, { "active": true, "name": "is_singleton", "req": true, "short": "is_singleton boolean", "type": "`$BOOLEAN`", "index$": 1 }, { "active": true, "format": "int64", "name": "item_id", "req": true, "short": "item_id integer", "type": "`$INTEGER`", "index$": 2 }, { "active": true, "name": "location_flag", "req": false, "short": "Describes the specific location within the location_type", "type": "`$STRING`", "index$": 3 }, { "active": true, "format": "int64", "name": "location_id", "req": true, "short": "location_id integer", "type": "`$INTEGER`", "index$": 4 }, { "active": true, "name": "location_type", "req": true, "short": "Describes the location type", "type": "`$STRING`", "index$": 5 }, { "active": true, "format": "int32", "name": "quantity", "req": true, "short": "quantity integer", "type": "`$INTEGER`", "index$": 6 }, { "active": true, "format": "int32", "name": "type_id", "req": true, "short": "type_id integer", "type": "`$INTEGER`", "index$": 7 }], "name": "asset", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "character_id", "orig": "character_id", "reqd": true, "type": "`$INTEGER`", "index$": 0 }], "query": [{ "active": true, "example": "tranquility", "kind": "query", "name": "datasource", "orig": "datasource", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 1 }] }, "contract": { "id": "GET /characters/{character_id}/assets/", "json": "{\"operationId\":\"getCharacterAssets\",\"parameters\":[{\"description\":\"An EVE character ID\",\"in\":\"path\",\"name\":\"character_id\",\"required\":true,\"schema\":{\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"The server name you would like data from\",\"in\":\"query\",\"name\":\"datasource\",\"schema\":{\"default\":\"tranquility\",\"enum\":[\"tranquility\",\"singularity\"],\"type\":\"string\"}},{\"description\":\"Which page of results to return\",\"in\":\"query\",\"name\":\"page\",\"schema\":{\"default\":1,\"format\":\"int32\",\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"is_blueprint_copy\":{\"description\":\"is_blueprint_copy boolean\",\"type\":\"boolean\"},\"is_singleton\":{\"description\":\"is_singleton boolean\",\"type\":\"boolean\"},\"item_id\":{\"description\":\"item_id integer\",\"format\":\"int64\",\"type\":\"integer\"},\"location_flag\":{\"description\":\"Describes the specific location within the location_type\",\"type\":\"string\"},\"location_id\":{\"description\":\"location_id integer\",\"format\":\"int64\",\"type\":\"integer\"},\"location_type\":{\"description\":\"Describes the location type\",\"enum\":[\"station\",\"solar_system\",\"item\",\"other\"],\"type\":\"string\"},\"quantity\":{\"description\":\"quantity integer\",\"format\":\"int32\",\"type\":\"integer\"},\"type_id\":{\"description\":\"type_id integer\",\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"item_id\",\"type_id\",\"location_id\",\"location_type\",\"quantity\",\"is_singleton\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"A list of assets\",\"headers\":{\"X-Pages\":{\"description\":\"Maximum page number\",\"schema\":{\"type\":\"integer\"}}}},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Forbidden\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"security\":[{\"evesso\":[\"esi-assets.read_assets.v1\"]}],\"securitySchemes\":{\"evesso\":{\"description\":\"EVE Online SSO OAuth 2.0\",\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://login.eveonline.com/v2/oauth/authorize\",\"scopes\":{\"esi-assets.read_assets.v1\":\"Read character assets\",\"esi-characters.read_notifications.v1\":\"Read character notifications\",\"esi-corporations.read_structures.v1\":\"Read corporation structures\",\"esi-markets.read_character_orders.v1\":\"Read character market orders\",\"esi-markets.structure_markets.v1\":\"Read structure markets\",\"esi-universe.read_structures.v1\":\"Read structure information\"},\"tokenUrl\":\"https://login.eveonline.com/v2/oauth/token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/characters/{character_id}/assets/", "segments": [{ "lit": "characters" }, { "var": "character_id" }, { "lit": "assets" }], "select": { "exist": ["character_id", "datasource", "page"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["character"]] }, "key$": "asset", "name__orig": "asset", "Name": "Asset", "name_": "asset", "name-": "asset", "NAME": "ASSET", "index$": 0 }, { "active": true, "entity": "asset", "key$": "BasicAssetFlow", "kind": "basic", "name": "BasicAssetFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "character_id": "character01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "asset_ref01" } }], "index$": 0 }] }, 'Asset');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let asset_ref01_data = Object.values(setup.data.existing.asset)[0];
        // LIST
        const asset_ref01_ent = client.Asset();
        const asset_ref01_match = {};
        asset_ref01_match['character_id'] = setup.idmap['character01'];
        const asset_ref01_list = (await asset_ref01_ent.list(asset_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/asset/AssetTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.EsiDocumentationSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['asset01', 'asset02', 'asset03', 'character01', 'character02', 'character03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'ESI_DOCUMENTATION_TEST_ASSET_ENTID': idmap,
        'ESI_DOCUMENTATION_TEST_LIVE': 'FALSE',
        'ESI_DOCUMENTATION_TEST_EXPLAIN': 'FALSE',
        'ESI_DOCUMENTATION_APIKEY': '',
    });
    idmap = env['ESI_DOCUMENTATION_TEST_ASSET_ENTID'];
    const live = 'TRUE' === env.ESI_DOCUMENTATION_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['ESI_DOCUMENTATION_TEST_ASSET_ENTID'];
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
//# sourceMappingURL=AssetEntity.test.js.map