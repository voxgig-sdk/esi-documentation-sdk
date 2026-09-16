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
(0, node_test_1.describe)('CharacterEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when ESI_DOCUMENTATION_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('ESI_DOCUMENTATION_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.EsiDocumentationSDK.test();
        const ent = testsdk.Character();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.ESI_DOCUMENTATION_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'character.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "format": "int32", "name": "alliance_id", "req": false, "short": "The character's alliance ID", "type": "`$INTEGER`", "index$": 0 }, { "active": true, "format": "int32", "name": "ancestry_id", "req": false, "short": "The character's ancestry ID", "type": "`$INTEGER`", "index$": 1 }, { "active": true, "format": "date-time", "name": "birthday", "req": false, "short": "Creation date of the character", "type": "`$STRING`", "index$": 2 }, { "active": true, "format": "int32", "name": "bloodline_id", "req": false, "short": "The character's bloodline ID", "type": "`$INTEGER`", "index$": 3 }, { "active": true, "format": "int32", "name": "corporation_id", "req": true, "short": "The character's corporation ID", "type": "`$INTEGER`", "index$": 4 }, { "active": true, "name": "description", "req": false, "short": "The character's bio", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "gender", "req": false, "short": "The character's gender", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "name", "req": true, "short": "The character's name", "type": "`$STRING`", "index$": 8 }, { "active": true, "format": "int32", "name": "race_id", "req": false, "short": "The character's race ID", "type": "`$INTEGER`", "index$": 9 }, { "active": true, "format": "float", "name": "security_status", "req": false, "short": "The character's security status", "type": "`$NUMBER`", "index$": 10 }], "id": { "field": "id", "name": "id" }, "name": "character", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "character_id", "reqd": true, "type": "`$INTEGER`", "index$": 0 }], "query": [{ "active": true, "example": "tranquility", "kind": "query", "name": "datasource", "orig": "datasource", "reqd": false, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /characters/{character_id}/", "json": "{\"operationId\":\"getCharacter\",\"parameters\":[{\"description\":\"An EVE character ID\",\"in\":\"path\",\"name\":\"character_id\",\"required\":true,\"schema\":{\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"The server name you would like data from\",\"in\":\"query\",\"name\":\"datasource\",\"schema\":{\"default\":\"tranquility\",\"enum\":[\"tranquility\",\"singularity\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"alliance_id\":{\"description\":\"The character's alliance ID\",\"format\":\"int32\",\"type\":\"integer\"},\"ancestry_id\":{\"description\":\"The character's ancestry ID\",\"format\":\"int32\",\"type\":\"integer\"},\"birthday\":{\"description\":\"Creation date of the character\",\"format\":\"date-time\",\"type\":\"string\"},\"bloodline_id\":{\"description\":\"The character's bloodline ID\",\"format\":\"int32\",\"type\":\"integer\"},\"corporation_id\":{\"description\":\"The character's corporation ID\",\"format\":\"int32\",\"type\":\"integer\"},\"description\":{\"description\":\"The character's bio\",\"type\":\"string\"},\"gender\":{\"description\":\"The character's gender\",\"enum\":[\"male\",\"female\"],\"type\":\"string\"},\"name\":{\"description\":\"The character's name\",\"type\":\"string\"},\"race_id\":{\"description\":\"The character's race ID\",\"format\":\"int32\",\"type\":\"integer\"},\"security_status\":{\"description\":\"The character's security status\",\"format\":\"float\",\"type\":\"number\"}},\"required\":[\"name\",\"corporation_id\"],\"type\":\"object\"}}},\"description\":\"Public data about a character\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Character not found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySchemes\":{\"evesso\":{\"description\":\"EVE Online SSO OAuth 2.0\",\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://login.eveonline.com/v2/oauth/authorize\",\"scopes\":{\"esi-assets.read_assets.v1\":\"Read character assets\",\"esi-characters.read_notifications.v1\":\"Read character notifications\",\"esi-corporations.read_structures.v1\":\"Read corporation structures\",\"esi-markets.read_character_orders.v1\":\"Read character market orders\",\"esi-markets.structure_markets.v1\":\"Read structure markets\",\"esi-universe.read_structures.v1\":\"Read structure information\"},\"tokenUrl\":\"https://login.eveonline.com/v2/oauth/token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/characters/{character_id}/", "rename": { "param": { "character_id": "id" } }, "segments": [{ "lit": "characters" }, { "var": "id" }], "select": { "exist": ["datasource", "id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "character", "name__orig": "character", "Name": "Character", "name_": "character", "name-": "character", "NAME": "CHARACTER", "index$": 1 }, { "active": true, "entity": "character", "key$": "BasicCharacterFlow", "kind": "basic", "name": "BasicCharacterFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "character_ref01", "srcdatavar": "character_ref01_data", "suffix": "_dt0" }, "match": { "id": "character01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-character_ref01" } }], "index$": 0 }] }, 'Character');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let character_ref01_data = Object.values(setup.data.existing.character)[0];
        // LOAD
        const character_ref01_ent = client.Character();
        const character_ref01_match_dt0 = {};
        character_ref01_match_dt0.id = character_ref01_data.id;
        const character_ref01_data_dt0 = (await character_ref01_ent.load(character_ref01_match_dt0)).data();
        (0, node_assert_1.default)(character_ref01_data_dt0.id === character_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/character/CharacterTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.EsiDocumentationSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['character01', 'character02', 'character03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'ESI_DOCUMENTATION_TEST_CHARACTER_ENTID': idmap,
        'ESI_DOCUMENTATION_TEST_LIVE': 'FALSE',
        'ESI_DOCUMENTATION_TEST_EXPLAIN': 'FALSE',
        'ESI_DOCUMENTATION_APIKEY': '',
    });
    idmap = env['ESI_DOCUMENTATION_TEST_CHARACTER_ENTID'];
    const live = 'TRUE' === env.ESI_DOCUMENTATION_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['ESI_DOCUMENTATION_TEST_CHARACTER_ENTID'];
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
//# sourceMappingURL=CharacterEntity.test.js.map