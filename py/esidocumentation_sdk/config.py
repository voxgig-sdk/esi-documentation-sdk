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
            "short": "is_blueprint_copy boolean",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_singleton",
            "req": True,
            "short": "is_singleton boolean",
            "type": "`$BOOLEAN`",
          },
          {
            "format": "int64",
            "name": "item_id",
            "req": True,
            "short": "item_id integer",
            "type": "`$INTEGER`",
          },
          {
            "name": "location_flag",
            "short": "Describes the specific location within the location_type",
            "type": "`$STRING`",
          },
          {
            "format": "int64",
            "name": "location_id",
            "req": True,
            "short": "location_id integer",
            "type": "`$INTEGER`",
          },
          {
            "name": "location_type",
            "req": True,
            "short": "Describes the location type",
            "type": "`$STRING`",
          },
          {
            "format": "int32",
            "name": "quantity",
            "req": True,
            "short": "quantity integer",
            "type": "`$INTEGER`",
          },
          {
            "format": "int32",
            "name": "type_id",
            "req": True,
            "short": "type_id integer",
            "type": "`$INTEGER`",
          },
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
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "example": "tranquility",
                      "kind": "query",
                      "name": "datasource",
                      "orig": "datasource",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
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
                "parts": [
                  "characters",
                  "{character_id}",
                  "assets",
                ],
              },
            ],
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
            "format": "int32",
            "name": "alliance_id",
            "short": "The character's alliance ID",
            "type": "`$INTEGER`",
          },
          {
            "format": "int32",
            "name": "ancestry_id",
            "short": "The character's ancestry ID",
            "type": "`$INTEGER`",
          },
          {
            "format": "date-time",
            "name": "birthday",
            "short": "Creation date of the character",
            "type": "`$STRING`",
          },
          {
            "format": "int32",
            "name": "bloodline_id",
            "short": "The character's bloodline ID",
            "type": "`$INTEGER`",
          },
          {
            "format": "int32",
            "name": "corporation_id",
            "req": True,
            "short": "The character's corporation ID",
            "type": "`$INTEGER`",
          },
          {
            "name": "description",
            "short": "The character's bio",
            "type": "`$STRING`",
          },
          {
            "name": "gender",
            "short": "The character's gender",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "short": "The character's name",
            "type": "`$STRING`",
          },
          {
            "format": "int32",
            "name": "race_id",
            "short": "The character's race ID",
            "type": "`$INTEGER`",
          },
          {
            "format": "float",
            "name": "security_status",
            "short": "The character's security status",
            "type": "`$NUMBER`",
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
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "character_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "example": "tranquility",
                      "kind": "query",
                      "name": "datasource",
                      "orig": "datasource",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/characters/{character_id}/",
                "rename": {
                  "param": {
                    "character_id": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "characters",
                  },
                  {
                    "var": "id",
                  },
                ],
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
                "parts": [
                  "characters",
                  "{id}",
                ],
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
            "type": "`$STRING`",
          },
          {
            "format": "double",
            "name": "x",
            "type": "`$NUMBER`",
          },
          {
            "format": "double",
            "name": "y",
            "type": "`$NUMBER`",
          },
          {
            "format": "double",
            "name": "z",
            "type": "`$NUMBER`",
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
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "structure_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "example": "tranquility",
                      "kind": "query",
                      "name": "datasource",
                      "orig": "datasource",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/universe/structures/{structure_id}/",
                "rename": {
                  "param": {
                    "structure_id": "id",
                  },
                },
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
                "select": {
                  "exist": [
                    "datasource",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.position`",
                },
                "parts": [
                  "universe",
                  "structures",
                  "{id}",
                ],
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
