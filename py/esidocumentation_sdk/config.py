# EsiDocumentation SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "EsiDocumentation",
            "slug": "esi-documentation",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://esi.evetech.net/latest",
            "auth": {
                "prefix": "Bearer",
            },
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
            "title": "Is Blueprint Copy",
            "type": "`$BOOLEAN`",
            "short": "is_blueprint_copy boolean",
          },
          {
            "name": "is_singleton",
            "title": "Is Singleton",
            "type": "`$BOOLEAN`",
            "req": True,
            "short": "is_singleton boolean",
          },
          {
            "name": "item_id",
            "title": "Item Id",
            "type": "`$INTEGER`",
            "req": True,
            "short": "item_id integer",
            "format": "int64",
          },
          {
            "name": "location_flag",
            "title": "Location Flag",
            "type": "`$STRING`",
            "short": "Describes the specific location within the location_type",
          },
          {
            "name": "location_id",
            "title": "Location Id",
            "type": "`$INTEGER`",
            "req": True,
            "short": "location_id integer",
            "format": "int64",
          },
          {
            "name": "location_type",
            "title": "Location Type",
            "type": "`$STRING`",
            "req": True,
            "short": "Describes the location type",
          },
          {
            "name": "quantity",
            "title": "Quantity",
            "type": "`$INTEGER`",
            "req": True,
            "short": "quantity integer",
            "format": "int32",
          },
          {
            "name": "type_id",
            "title": "Type Id",
            "type": "`$INTEGER`",
            "req": True,
            "short": "type_id integer",
            "format": "int32",
          },
        ],
        "name": "asset",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/characters/{character_id}/assets/",
                "segments": [
                  {
                    "lit": "characters",
                  },
                  {
                    "var": "character_id",
                  },
                  {
                    "lit": "assets",
                  },
                ],
                "parts": [
                  "characters",
                  "{character_id}",
                  "assets",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "character_id",
                      "orig": "character_id",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "datasource",
                      "orig": "datasource",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "tranquility",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "character_id",
                    "datasource",
                    "page",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.character",
            ],
          ],
        },
      },
      "character": {
        "fields": [
          {
            "name": "alliance_id",
            "title": "Alliance Id",
            "type": "`$INTEGER`",
            "short": "The character's alliance ID",
            "format": "int32",
          },
          {
            "name": "ancestry_id",
            "title": "Ancestry Id",
            "type": "`$INTEGER`",
            "short": "The character's ancestry ID",
            "format": "int32",
          },
          {
            "name": "birthday",
            "title": "Birthday",
            "type": "`$STRING`",
            "short": "Creation date of the character",
            "format": "date-time",
          },
          {
            "name": "bloodline_id",
            "title": "Bloodline Id",
            "type": "`$INTEGER`",
            "short": "The character's bloodline ID",
            "format": "int32",
          },
          {
            "name": "corporation_id",
            "title": "Corporation Id",
            "type": "`$INTEGER`",
            "req": True,
            "short": "The character's corporation ID",
            "format": "int32",
          },
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
            "short": "The character's bio",
          },
          {
            "name": "gender",
            "title": "Gender",
            "type": "`$STRING`",
            "short": "The character's gender",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "req": True,
            "short": "The character's name",
          },
          {
            "name": "race_id",
            "title": "Race Id",
            "type": "`$INTEGER`",
            "short": "The character's race ID",
            "format": "int32",
          },
          {
            "name": "security_status",
            "title": "Security Status",
            "type": "`$NUMBER`",
            "short": "The character's security status",
            "format": "float",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "character",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/characters/{character_id}/",
                "segments": [
                  {
                    "lit": "characters",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "characters",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "character_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "character_id",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "datasource",
                      "orig": "datasource",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "tranquility",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "datasource",
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "structure": {
        "fields": [
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
          {
            "name": "x",
            "title": "X",
            "type": "`$NUMBER`",
            "format": "double",
          },
          {
            "name": "y",
            "title": "Y",
            "type": "`$NUMBER`",
            "format": "double",
          },
          {
            "name": "z",
            "title": "Z",
            "type": "`$NUMBER`",
            "format": "double",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "structure",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/universe/structures/{structure_id}/",
                "segments": [
                  {
                    "lit": "universe",
                  },
                  {
                    "lit": "structures",
                  },
                  {
                    "var": "id",
                  },
                ],
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
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.position`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "structure_id",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "datasource",
                      "orig": "datasource",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "tranquility",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "datasource",
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
