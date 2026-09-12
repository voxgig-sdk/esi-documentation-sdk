-- EsiDocumentation SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "EsiDocumentation",
      slug = "esi-documentation",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://esi.evetech.net/latest",
      auth = {
        prefix = "Bearer",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["asset"] = {},
        ["character"] = {},
        ["structure"] = {},
      },
    },
    entity = {
      ["asset"] = {
        ["fields"] = {
          {
            ["name"] = "is_blueprint_copy",
            ["short"] = "is_blueprint_copy boolean",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_singleton",
            ["req"] = true,
            ["short"] = "is_singleton boolean",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["format"] = "int64",
            ["name"] = "item_id",
            ["req"] = true,
            ["short"] = "item_id integer",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "location_flag",
            ["short"] = "Describes the specific location within the location_type",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "int64",
            ["name"] = "location_id",
            ["req"] = true,
            ["short"] = "location_id integer",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "location_type",
            ["req"] = true,
            ["short"] = "Describes the location type",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "int32",
            ["name"] = "quantity",
            ["req"] = true,
            ["short"] = "quantity integer",
            ["type"] = "`$INTEGER`",
          },
          {
            ["format"] = "int32",
            ["name"] = "type_id",
            ["req"] = true,
            ["short"] = "type_id integer",
            ["type"] = "`$INTEGER`",
          },
        },
        ["name"] = "asset",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "character_id",
                      ["orig"] = "character_id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = "tranquility",
                      ["kind"] = "query",
                      ["name"] = "datasource",
                      ["orig"] = "datasource",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/characters/{character_id}/assets/",
                ["segments"] = {
                  {
                    ["lit"] = "characters",
                  },
                  {
                    ["var"] = "character_id",
                  },
                  {
                    ["lit"] = "assets",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "character_id",
                    "datasource",
                    "page",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "characters",
                  "{character_id}",
                  "assets",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "character",
            },
          },
        },
      },
      ["character"] = {
        ["fields"] = {
          {
            ["format"] = "int32",
            ["name"] = "alliance_id",
            ["short"] = "The character's alliance ID",
            ["type"] = "`$INTEGER`",
          },
          {
            ["format"] = "int32",
            ["name"] = "ancestry_id",
            ["short"] = "The character's ancestry ID",
            ["type"] = "`$INTEGER`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "birthday",
            ["short"] = "Creation date of the character",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "int32",
            ["name"] = "bloodline_id",
            ["short"] = "The character's bloodline ID",
            ["type"] = "`$INTEGER`",
          },
          {
            ["format"] = "int32",
            ["name"] = "corporation_id",
            ["req"] = true,
            ["short"] = "The character's corporation ID",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "description",
            ["short"] = "The character's bio",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "gender",
            ["short"] = "The character's gender",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["short"] = "The character's name",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "int32",
            ["name"] = "race_id",
            ["short"] = "The character's race ID",
            ["type"] = "`$INTEGER`",
          },
          {
            ["format"] = "float",
            ["name"] = "security_status",
            ["short"] = "The character's security status",
            ["type"] = "`$NUMBER`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "character",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "character_id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = "tranquility",
                      ["kind"] = "query",
                      ["name"] = "datasource",
                      ["orig"] = "datasource",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/characters/{character_id}/",
                ["rename"] = {
                  ["param"] = {
                    ["character_id"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "characters",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "datasource",
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "characters",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["structure"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "double",
            ["name"] = "x",
            ["type"] = "`$NUMBER`",
          },
          {
            ["format"] = "double",
            ["name"] = "y",
            ["type"] = "`$NUMBER`",
          },
          {
            ["format"] = "double",
            ["name"] = "z",
            ["type"] = "`$NUMBER`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "structure",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "structure_id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = "tranquility",
                      ["kind"] = "query",
                      ["name"] = "datasource",
                      ["orig"] = "datasource",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/universe/structures/{structure_id}/",
                ["rename"] = {
                  ["param"] = {
                    ["structure_id"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "universe",
                  },
                  {
                    ["lit"] = "structures",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "datasource",
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.position`",
                },
                ["parts"] = {
                  "universe",
                  "structures",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
