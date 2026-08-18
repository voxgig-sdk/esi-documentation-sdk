# EsiDocumentation SDK configuration

module EsiDocumentationConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "EsiDocumentation",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://esi.evetech.net/latest",
        "auth" => {
          "prefix" => "Bearer",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "asset" => {},
          "character" => {},
          "structure" => {},
        },
      },
      "entity" => {
        "asset" => {
          "fields" => [
            {
              "name" => "is_blueprint_copy",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "is_singleton",
              "req" => true,
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "item_id",
              "req" => true,
              "type" => "`$INTEGER`",
            },
            {
              "name" => "location_flag",
              "type" => "`$STRING`",
            },
            {
              "name" => "location_id",
              "req" => true,
              "type" => "`$INTEGER`",
            },
            {
              "name" => "location_type",
              "req" => true,
              "type" => "`$STRING`",
            },
            {
              "name" => "quantity",
              "req" => true,
              "type" => "`$INTEGER`",
            },
            {
              "name" => "type_id",
              "req" => true,
              "type" => "`$INTEGER`",
            },
          ],
          "name" => "asset",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "character_id",
                        "orig" => "character_id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "example" => "tranquility",
                        "kind" => "query",
                        "name" => "datasource",
                        "orig" => "datasource",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/characters/{character_id}/assets/",
                  "parts" => [
                    "characters",
                    "{character_id}",
                    "assets",
                  ],
                  "select" => {
                    "exist" => [
                      "character_id",
                      "datasource",
                      "page",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "character",
              ],
            ],
          },
        },
        "character" => {
          "fields" => [
            {
              "name" => "alliance_id",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "ancestry_id",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "birthday",
              "type" => "`$STRING`",
            },
            {
              "name" => "bloodline_id",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "corporation_id",
              "req" => true,
              "type" => "`$INTEGER`",
            },
            {
              "name" => "description",
              "type" => "`$STRING`",
            },
            {
              "name" => "gender",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "req" => true,
              "type" => "`$STRING`",
            },
            {
              "name" => "race_id",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "security_status",
              "type" => "`$NUMBER`",
            },
          ],
          "name" => "character",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "character_id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "example" => "tranquility",
                        "kind" => "query",
                        "name" => "datasource",
                        "orig" => "datasource",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/characters/{character_id}/",
                  "parts" => [
                    "characters",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "character_id" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "datasource",
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "structure" => {
          "fields" => [
            {
              "name" => "x",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "y",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "z",
              "type" => "`$NUMBER`",
            },
          ],
          "name" => "structure",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "structure_id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "example" => "tranquility",
                        "kind" => "query",
                        "name" => "datasource",
                        "orig" => "datasource",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/universe/structures/{structure_id}/",
                  "parts" => [
                    "universe",
                    "structures",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "structure_id" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "datasource",
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.position`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    EsiDocumentationFeatures.make_feature(name)
  end
end
