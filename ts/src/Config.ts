
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'EsiDocumentation',
        slug: "esi-documentation",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://esi.evetech.net/latest",

    auth: {
      prefix: 'Bearer',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      asset: {
      },

      character: {
      },

      structure: {
      },

    }
  }


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
          "name": "quantity",
          "req": true,
          "short": "quantity integer",
          "type": "`$INTEGER`"
        },
        {
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
              "parts": [
                "characters",
                "{character_id}",
                "assets"
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
              }
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
          "name": "alliance_id",
          "short": "The character's alliance ID",
          "type": "`$INTEGER`"
        },
        {
          "name": "ancestry_id",
          "short": "The character's ancestry ID",
          "type": "`$INTEGER`"
        },
        {
          "name": "birthday",
          "short": "Creation date of the character",
          "type": "`$STRING`"
        },
        {
          "name": "bloodline_id",
          "short": "The character's bloodline ID",
          "type": "`$INTEGER`"
        },
        {
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
          "name": "name",
          "req": true,
          "short": "The character's name",
          "type": "`$STRING`"
        },
        {
          "name": "race_id",
          "short": "The character's race ID",
          "type": "`$INTEGER`"
        },
        {
          "name": "security_status",
          "short": "The character's security status",
          "type": "`$NUMBER`"
        }
      ],
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
              "parts": [
                "characters",
                "{id}"
              ],
              "rename": {
                "param": {
                  "character_id": "id"
                }
              },
              "select": {
                "exist": [
                  "datasource",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
          "name": "x",
          "type": "`$NUMBER`"
        },
        {
          "name": "y",
          "type": "`$NUMBER`"
        },
        {
          "name": "z",
          "type": "`$NUMBER`"
        }
      ],
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
              "parts": [
                "universe",
                "structures",
                "{id}"
              ],
              "rename": {
                "param": {
                  "structure_id": "id"
                }
              },
              "select": {
                "exist": [
                  "datasource",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.position`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

