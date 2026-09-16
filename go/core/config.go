package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "EsiDocumentation",
			"slug": "esi-documentation",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://esi.evetech.net/latest",
			"auth": map[string]any{
				"prefix": "Bearer",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"asset": map[string]any{},
				"character": map[string]any{},
				"structure": map[string]any{},
			},
		},
		"entity": map[string]any{
			"asset": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "is_blueprint_copy",
						"short": "is_blueprint_copy boolean",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_singleton",
						"req": true,
						"short": "is_singleton boolean",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "int64",
						"name": "item_id",
						"req": true,
						"short": "item_id integer",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "location_flag",
						"short": "Describes the specific location within the location_type",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "int64",
						"name": "location_id",
						"req": true,
						"short": "location_id integer",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "location_type",
						"req": true,
						"short": "Describes the location type",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "int32",
						"name": "quantity",
						"req": true,
						"short": "quantity integer",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "int32",
						"name": "type_id",
						"req": true,
						"short": "type_id integer",
						"type": "`$INTEGER`",
					},
				},
				"name": "asset",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "character_id",
											"orig": "character_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "tranquility",
											"kind": "query",
											"name": "datasource",
											"orig": "datasource",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/characters/{character_id}/assets/",
								"segments": []any{
									map[string]any{
										"lit": "characters",
									},
									map[string]any{
										"var": "character_id",
									},
									map[string]any{
										"lit": "assets",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"character_id",
										"datasource",
										"page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"characters",
									"{character_id}",
									"assets",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"character",
						},
					},
				},
			},
			"character": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "int32",
						"name": "alliance_id",
						"short": "The character's alliance ID",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "int32",
						"name": "ancestry_id",
						"short": "The character's ancestry ID",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "birthday",
						"short": "Creation date of the character",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "int32",
						"name": "bloodline_id",
						"short": "The character's bloodline ID",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "int32",
						"name": "corporation_id",
						"req": true,
						"short": "The character's corporation ID",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "description",
						"short": "The character's bio",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "gender",
						"short": "The character's gender",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The character's name",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "int32",
						"name": "race_id",
						"short": "The character's race ID",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "float",
						"name": "security_status",
						"short": "The character's security status",
						"type": "`$NUMBER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "character",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "character_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "tranquility",
											"kind": "query",
											"name": "datasource",
											"orig": "datasource",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/characters/{character_id}/",
								"rename": map[string]any{
									"param": map[string]any{
										"character_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "characters",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"datasource",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"characters",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"structure": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "double",
						"name": "x",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"format": "double",
						"name": "y",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"format": "double",
						"name": "z",
						"type": "`$NUMBER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "structure",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "structure_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "tranquility",
											"kind": "query",
											"name": "datasource",
											"orig": "datasource",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/universe/structures/{structure_id}/",
								"rename": map[string]any{
									"param": map[string]any{
										"structure_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "universe",
									},
									map[string]any{
										"lit": "structures",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"datasource",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.position`",
								},
								"parts": []any{
									"universe",
									"structures",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
