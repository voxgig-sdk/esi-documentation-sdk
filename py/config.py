# EsiDocumentation SDK configuration


def make_config():
    return {
        "main": {
            "name": "EsiDocumentation",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://esi.evetech.net/latest",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "asset": {},
                "character": {},
                "structure": {},
            },
        },
        "entity": {
      "asset": {
        "fields": [
          {
            "name": "is_blueprint_copy",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "is_singleton",
            "req": True,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "item_id",
            "req": True,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "location_flag",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "location_id",
            "req": True,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "location_type",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "quantity",
            "req": True,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "type_id",
            "req": True,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 7,
          },
        ],
        "name": "asset",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "character_id",
                      "orig": "character_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                  ],
                  "query": [
                    {
                      "example": "tranquility",
                      "kind": "query",
                      "name": "datasource",
                      "orig": "datasource",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/characters/{character_id}/assets/",
                "parts": [
                  "characters",
                  "{character_id}",
                  "assets",
                ],
                "select": {
                  "exist": [
                    "character_id",
                    "datasource",
                    "page",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [
            [
              "character",
            ],
          ],
        },
      },
      "character": {
        "fields": [
          {
            "name": "alliance_id",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "ancestry_id",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "birthday",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "bloodline_id",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "corporation_id",
            "req": True,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "gender",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "race_id",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "security_status",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 9,
          },
        ],
        "name": "character",
        "op": {
          "load": {
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "character_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                  ],
                  "query": [
                    {
                      "example": "tranquility",
                      "kind": "query",
                      "name": "datasource",
                      "orig": "datasource",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/characters/{character_id}/",
                "parts": [
                  "characters",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "character_id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "datasource",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "structure": {
        "fields": [
          {
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "owner_id",
            "req": True,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "position",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "solar_system_id",
            "req": True,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "type_id",
            "req": True,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 4,
          },
        ],
        "name": "structure",
        "op": {
          "load": {
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "structure_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                  ],
                  "query": [
                    {
                      "example": "tranquility",
                      "kind": "query",
                      "name": "datasource",
                      "orig": "datasource",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/universe/structures/{structure_id}/",
                "parts": [
                  "universe",
                  "structures",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "structure_id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "datasource",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
