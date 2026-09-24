<?php
declare(strict_types=1);

// EsiDocumentation SDK configuration

class EsiDocumentationConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "EsiDocumentation",
                "slug" => "esi-documentation",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://esi.evetech.net/latest",
                "auth" => [
                    "prefix" => "Bearer",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "asset" => [],
                    "character" => [],
                    "structure" => [],
                ],
            ],
            "entity" => [
        'asset' => [
          'fields' => [
            [
              'name' => 'is_blueprint_copy',
              'title' => 'Is Blueprint Copy',
              'type' => '`$BOOLEAN`',
              'short' => 'is_blueprint_copy boolean',
            ],
            [
              'name' => 'is_singleton',
              'title' => 'Is Singleton',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'is_singleton boolean',
            ],
            [
              'name' => 'item_id',
              'title' => 'Item Id',
              'type' => '`$INTEGER`',
              'req' => true,
              'short' => 'item_id integer',
              'format' => 'int64',
            ],
            [
              'name' => 'location_flag',
              'title' => 'Location Flag',
              'type' => '`$STRING`',
              'short' => 'Describes the specific location within the location_type',
            ],
            [
              'name' => 'location_id',
              'title' => 'Location Id',
              'type' => '`$INTEGER`',
              'req' => true,
              'short' => 'location_id integer',
              'format' => 'int64',
            ],
            [
              'name' => 'location_type',
              'title' => 'Location Type',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Describes the location type',
            ],
            [
              'name' => 'quantity',
              'title' => 'Quantity',
              'type' => '`$INTEGER`',
              'req' => true,
              'short' => 'quantity integer',
              'format' => 'int32',
            ],
            [
              'name' => 'type_id',
              'title' => 'Type Id',
              'type' => '`$INTEGER`',
              'req' => true,
              'short' => 'type_id integer',
              'format' => 'int32',
            ],
          ],
          'name' => 'asset',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/characters/{character_id}/assets/',
                  'segments' => [
                    [
                      'lit' => 'characters',
                    ],
                    [
                      'var' => 'character_id',
                    ],
                    [
                      'lit' => 'assets',
                    ],
                  ],
                  'parts' => [
                    'characters',
                    '{character_id}',
                    'assets',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'character_id',
                        'orig' => 'character_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'datasource',
                        'orig' => 'datasource',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'tranquility',
                      ],
                      [
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 1,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'character_id',
                      'datasource',
                      'page',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.character',
              ],
            ],
          ],
        ],
        'character' => [
          'fields' => [
            [
              'name' => 'alliance_id',
              'title' => 'Alliance Id',
              'type' => '`$INTEGER`',
              'short' => 'The character\'s alliance ID',
              'format' => 'int32',
            ],
            [
              'name' => 'ancestry_id',
              'title' => 'Ancestry Id',
              'type' => '`$INTEGER`',
              'short' => 'The character\'s ancestry ID',
              'format' => 'int32',
            ],
            [
              'name' => 'birthday',
              'title' => 'Birthday',
              'type' => '`$STRING`',
              'short' => 'Creation date of the character',
              'format' => 'date-time',
            ],
            [
              'name' => 'bloodline_id',
              'title' => 'Bloodline Id',
              'type' => '`$INTEGER`',
              'short' => 'The character\'s bloodline ID',
              'format' => 'int32',
            ],
            [
              'name' => 'corporation_id',
              'title' => 'Corporation Id',
              'type' => '`$INTEGER`',
              'req' => true,
              'short' => 'The character\'s corporation ID',
              'format' => 'int32',
            ],
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
              'short' => 'The character\'s bio',
            ],
            [
              'name' => 'gender',
              'title' => 'Gender',
              'type' => '`$STRING`',
              'short' => 'The character\'s gender',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The character\'s name',
            ],
            [
              'name' => 'race_id',
              'title' => 'Race Id',
              'type' => '`$INTEGER`',
              'short' => 'The character\'s race ID',
              'format' => 'int32',
            ],
            [
              'name' => 'security_status',
              'title' => 'Security Status',
              'type' => '`$NUMBER`',
              'short' => 'The character\'s security status',
              'format' => 'float',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'character',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/characters/{character_id}/',
                  'segments' => [
                    [
                      'lit' => 'characters',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'characters',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'character_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'character_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'datasource',
                        'orig' => 'datasource',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'tranquility',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'datasource',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'structure' => [
          'fields' => [
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'x',
              'title' => 'X',
              'type' => '`$NUMBER`',
              'format' => 'double',
            ],
            [
              'name' => 'y',
              'title' => 'Y',
              'type' => '`$NUMBER`',
              'format' => 'double',
            ],
            [
              'name' => 'z',
              'title' => 'Z',
              'type' => '`$NUMBER`',
              'format' => 'double',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'structure',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/universe/structures/{structure_id}/',
                  'segments' => [
                    [
                      'lit' => 'universe',
                    ],
                    [
                      'lit' => 'structures',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'universe',
                    'structures',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'structure_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.position`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'structure_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'datasource',
                        'orig' => 'datasource',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'tranquility',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'datasource',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return EsiDocumentationFeatures::make_feature($name);
    }
}
