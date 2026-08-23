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
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
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
						"name": "quantity",
						"req": true,
						"short": "quantity integer",
						"type": "`$INTEGER`",
					},
					map[string]any{
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
								"parts": []any{
									"characters",
									"{character_id}",
									"assets",
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
						"name": "alliance_id",
						"short": "The character's alliance ID",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "ancestry_id",
						"short": "The character's ancestry ID",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "birthday",
						"short": "Creation date of the character",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "bloodline_id",
						"short": "The character's bloodline ID",
						"type": "`$INTEGER`",
					},
					map[string]any{
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
						"name": "name",
						"req": true,
						"short": "The character's name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "race_id",
						"short": "The character's race ID",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "security_status",
						"short": "The character's security status",
						"type": "`$NUMBER`",
					},
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
								"parts": []any{
									"characters",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"character_id": "id",
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
						"name": "x",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "y",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "z",
						"type": "`$NUMBER`",
					},
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
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
