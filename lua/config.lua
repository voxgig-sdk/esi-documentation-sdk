-- ProjectName SDK configuration

local function make_config()
  return {
    main = {
      name = "EsiDocumentation",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
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
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["active"] = true,
            ["index$"] = 0,
          },
          {
            ["name"] = "is_singleton",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
            ["active"] = true,
            ["index$"] = 1,
          },
          {
            ["name"] = "item_id",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
            ["active"] = true,
            ["index$"] = 2,
          },
          {
            ["name"] = "location_flag",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 3,
          },
          {
            ["name"] = "location_id",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
            ["active"] = true,
            ["index$"] = 4,
          },
          {
            ["name"] = "location_type",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 5,
          },
          {
            ["name"] = "quantity",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
            ["active"] = true,
            ["index$"] = 6,
          },
          {
            ["name"] = "type_id",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
            ["active"] = true,
            ["index$"] = 7,
          },
        },
        ["name"] = "asset",
        ["op"] = {
          ["list"] = {
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
                      ["active"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = "tranquility",
                      ["kind"] = "query",
                      ["name"] = "datasource",
                      ["orig"] = "datasource",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                      ["active"] = true,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/characters/{character_id}/assets/",
                ["parts"] = {
                  "characters",
                  "{character_id}",
                  "assets",
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
                ["active"] = true,
                ["index$"] = 0,
              },
            },
            ["input"] = "data",
            ["key$"] = "list",
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
            ["name"] = "alliance_id",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["active"] = true,
            ["index$"] = 0,
          },
          {
            ["name"] = "ancestry_id",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["active"] = true,
            ["index$"] = 1,
          },
          {
            ["name"] = "birthday",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 2,
          },
          {
            ["name"] = "bloodline_id",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["active"] = true,
            ["index$"] = 3,
          },
          {
            ["name"] = "corporation_id",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
            ["active"] = true,
            ["index$"] = 4,
          },
          {
            ["name"] = "description",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 5,
          },
          {
            ["name"] = "gender",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 6,
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 7,
          },
          {
            ["name"] = "race_id",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["active"] = true,
            ["index$"] = 8,
          },
          {
            ["name"] = "security_status",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["active"] = true,
            ["index$"] = 9,
          },
        },
        ["name"] = "character",
        ["op"] = {
          ["load"] = {
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
                      ["active"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = "tranquility",
                      ["kind"] = "query",
                      ["name"] = "datasource",
                      ["orig"] = "datasource",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                      ["active"] = true,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/characters/{character_id}/",
                ["parts"] = {
                  "characters",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["character_id"] = "id",
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
                ["active"] = true,
                ["index$"] = 0,
              },
            },
            ["input"] = "data",
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["structure"] = {
        ["fields"] = {
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 0,
          },
          {
            ["name"] = "owner_id",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
            ["active"] = true,
            ["index$"] = 1,
          },
          {
            ["name"] = "position",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["active"] = true,
            ["index$"] = 2,
          },
          {
            ["name"] = "solar_system_id",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
            ["active"] = true,
            ["index$"] = 3,
          },
          {
            ["name"] = "type_id",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
            ["active"] = true,
            ["index$"] = 4,
          },
        },
        ["name"] = "structure",
        ["op"] = {
          ["load"] = {
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
                      ["active"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = "tranquility",
                      ["kind"] = "query",
                      ["name"] = "datasource",
                      ["orig"] = "datasource",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                      ["active"] = true,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/universe/structures/{structure_id}/",
                ["parts"] = {
                  "universe",
                  "structures",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["structure_id"] = "id",
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
                ["active"] = true,
                ["index$"] = 0,
              },
            },
            ["input"] = "data",
            ["key$"] = "load",
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
