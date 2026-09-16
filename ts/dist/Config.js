"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'EsiDocumentation',
        slug: "esi-documentation",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://esi.evetech.net/latest",
        auth: {
            prefix: 'Bearer',
        },
        headers: {
            "content-type": "application/json"
        },
        entity: {
            asset: {},
            character: {},
            structure: {},
        }
    };
    entity = {
        "asset": {
            "fields": [
                {
                    "name": "is_blueprint_copy",
                    "short": "is_blueprint_copy boolean",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "is_singleton",
                    "req": true,
                    "short": "is_singleton boolean",
                    "type": "`$BOOLEAN`"
                },
                {
                    "format": "int64",
                    "name": "item_id",
                    "req": true,
                    "short": "item_id integer",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "location_flag",
                    "short": "Describes the specific location within the location_type",
                    "type": "`$STRING`"
                },
                {
                    "format": "int64",
                    "name": "location_id",
                    "req": true,
                    "short": "location_id integer",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "location_type",
                    "req": true,
                    "short": "Describes the location type",
                    "type": "`$STRING`"
                },
                {
                    "format": "int32",
                    "name": "quantity",
                    "req": true,
                    "short": "quantity integer",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "int32",
                    "name": "type_id",
                    "req": true,
                    "short": "type_id integer",
                    "type": "`$INTEGER`"
                }
            ],
            "name": "asset",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "character_id",
                                        "orig": "character_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "tranquility",
                                        "kind": "query",
                                        "name": "datasource",
                                        "orig": "datasource",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/characters/{character_id}/assets/",
                            "segments": [
                                {
                                    "lit": "characters"
                                },
                                {
                                    "var": "character_id"
                                },
                                {
                                    "lit": "assets"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "character_id",
                                    "datasource",
                                    "page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "characters",
                                "{character_id}",
                                "assets"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "character"
                    ]
                ]
            }
        },
        "character": {
            "fields": [
                {
                    "format": "int32",
                    "name": "alliance_id",
                    "short": "The character's alliance ID",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "int32",
                    "name": "ancestry_id",
                    "short": "The character's ancestry ID",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "date-time",
                    "name": "birthday",
                    "short": "Creation date of the character",
                    "type": "`$STRING`"
                },
                {
                    "format": "int32",
                    "name": "bloodline_id",
                    "short": "The character's bloodline ID",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "int32",
                    "name": "corporation_id",
                    "req": true,
                    "short": "The character's corporation ID",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "description",
                    "short": "The character's bio",
                    "type": "`$STRING`"
                },
                {
                    "name": "gender",
                    "short": "The character's gender",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "req": true,
                    "short": "The character's name",
                    "type": "`$STRING`"
                },
                {
                    "format": "int32",
                    "name": "race_id",
                    "short": "The character's race ID",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "float",
                    "name": "security_status",
                    "short": "The character's security status",
                    "type": "`$NUMBER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "character",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "character_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "tranquility",
                                        "kind": "query",
                                        "name": "datasource",
                                        "orig": "datasource",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/characters/{character_id}/",
                            "rename": {
                                "param": {
                                    "character_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "characters"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "datasource",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "characters",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "structure": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "format": "double",
                    "name": "x",
                    "type": "`$NUMBER`"
                },
                {
                    "format": "double",
                    "name": "y",
                    "type": "`$NUMBER`"
                },
                {
                    "format": "double",
                    "name": "z",
                    "type": "`$NUMBER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "structure",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "structure_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "tranquility",
                                        "kind": "query",
                                        "name": "datasource",
                                        "orig": "datasource",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/universe/structures/{structure_id}/",
                            "rename": {
                                "param": {
                                    "structure_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "universe"
                                },
                                {
                                    "lit": "structures"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "datasource",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.position`"
                            },
                            "parts": [
                                "universe",
                                "structures",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map