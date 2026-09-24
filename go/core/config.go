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
						"title": "Is Blueprint Copy",
						"type": "`$BOOLEAN`",
						"short": "is_blueprint_copy boolean",
					},
					map[string]any{
						"name": "is_singleton",
						"title": "Is Singleton",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "is_singleton boolean",
					},
					map[string]any{
						"name": "item_id",
						"title": "Item Id",
						"type": "`$INTEGER`",
						"req": true,
						"short": "item_id integer",
						"format": "int64",
					},
					map[string]any{
						"name": "location_flag",
						"title": "Location Flag",
						"type": "`$STRING`",
						"short": "Describes the specific location within the location_type",
					},
					map[string]any{
						"name": "location_id",
						"title": "Location Id",
						"type": "`$INTEGER`",
						"req": true,
						"short": "location_id integer",
						"format": "int64",
					},
					map[string]any{
						"name": "location_type",
						"title": "Location Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Describes the location type",
					},
					map[string]any{
						"name": "quantity",
						"title": "Quantity",
						"type": "`$INTEGER`",
						"req": true,
						"short": "quantity integer",
						"format": "int32",
					},
					map[string]any{
						"name": "type_id",
						"title": "Type Id",
						"type": "`$INTEGER`",
						"req": true,
						"short": "type_id integer",
						"format": "int32",
					},
				},
				"name": "asset",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"characters",
									"{character_id}",
									"assets",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "character_id",
											"orig": "character_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "datasource",
											"orig": "datasource",
											"type": "`$STRING`",
											"kind": "query",
											"example": "tranquility",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"character_id",
										"datasource",
										"page",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.character",
						},
					},
				},
			},
			"character": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "alliance_id",
						"title": "Alliance Id",
						"type": "`$INTEGER`",
						"short": "The character's alliance ID",
						"format": "int32",
					},
					map[string]any{
						"name": "ancestry_id",
						"title": "Ancestry Id",
						"type": "`$INTEGER`",
						"short": "The character's ancestry ID",
						"format": "int32",
					},
					map[string]any{
						"name": "birthday",
						"title": "Birthday",
						"type": "`$STRING`",
						"short": "Creation date of the character",
						"format": "date-time",
					},
					map[string]any{
						"name": "bloodline_id",
						"title": "Bloodline Id",
						"type": "`$INTEGER`",
						"short": "The character's bloodline ID",
						"format": "int32",
					},
					map[string]any{
						"name": "corporation_id",
						"title": "Corporation Id",
						"type": "`$INTEGER`",
						"req": true,
						"short": "The character's corporation ID",
						"format": "int32",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "The character's bio",
					},
					map[string]any{
						"name": "gender",
						"title": "Gender",
						"type": "`$STRING`",
						"short": "The character's gender",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The character's name",
					},
					map[string]any{
						"name": "race_id",
						"title": "Race Id",
						"type": "`$INTEGER`",
						"short": "The character's race ID",
						"format": "int32",
					},
					map[string]any{
						"name": "security_status",
						"title": "Security Status",
						"type": "`$NUMBER`",
						"short": "The character's security status",
						"format": "float",
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
								"kind": "http",
								"method": "GET",
								"orig": "/characters/{character_id}/",
								"segments": []any{
									map[string]any{
										"lit": "characters",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"characters",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"character_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "character_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "datasource",
											"orig": "datasource",
											"type": "`$STRING`",
											"kind": "query",
											"example": "tranquility",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"datasource",
										"id",
									},
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
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "x",
						"title": "X",
						"type": "`$NUMBER`",
						"format": "double",
					},
					map[string]any{
						"name": "y",
						"title": "Y",
						"type": "`$NUMBER`",
						"format": "double",
					},
					map[string]any{
						"name": "z",
						"title": "Z",
						"type": "`$NUMBER`",
						"format": "double",
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
								"kind": "http",
								"method": "GET",
								"orig": "/universe/structures/{structure_id}/",
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
								"parts": []any{
									"universe",
									"structures",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"structure_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.position`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "structure_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "datasource",
											"orig": "datasource",
											"type": "`$STRING`",
											"kind": "query",
											"example": "tranquility",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"datasource",
										"id",
									},
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
