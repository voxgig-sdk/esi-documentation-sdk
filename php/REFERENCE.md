# EsiDocumentation PHP SDK Reference

Complete API reference for the EsiDocumentation PHP SDK.


## EsiDocumentationSDK

### Constructor

```php
require_once __DIR__ . '/esidocumentation_sdk.php';

$client = new EsiDocumentationSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `EsiDocumentationSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = EsiDocumentationSDK::test();
```


### Instance Methods

#### `Asset($data = null)`

Create a new `AssetEntity` instance. Pass `null` for no initial data.

#### `Character($data = null)`

Create a new `CharacterEntity` instance. Pass `null` for no initial data.

#### `Structure($data = null)`

Create a new `StructureEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): EsiDocumentationUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## AssetEntity

```php
$asset = $client->Asset();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `is_blueprint_copy` | `bool` | No | is_blueprint_copy boolean |
| `is_singleton` | `bool` | Yes | is_singleton boolean |
| `item_id` | `int` | Yes | item_id integer |
| `location_flag` | `string` | No | Describes the specific location within the location_type |
| `location_id` | `int` | Yes | location_id integer |
| `location_type` | `string` | Yes | Describes the location type |
| `quantity` | `int` | Yes | quantity integer |
| `type_id` | `int` | Yes | type_id integer |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Asset()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AssetEntity`

Create a new `AssetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CharacterEntity

```php
$character = $client->Character();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alliance_id` | `int` | No | The character's alliance ID |
| `ancestry_id` | `int` | No | The character's ancestry ID |
| `birthday` | `string` | No | Creation date of the character |
| `bloodline_id` | `int` | No | The character's bloodline ID |
| `corporation_id` | `int` | Yes | The character's corporation ID |
| `description` | `string` | No | The character's bio |
| `gender` | `string` | No | The character's gender |
| `name` | `string` | Yes | The character's name |
| `race_id` | `int` | No | The character's race ID |
| `security_status` | `float` | No | The character's security status |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Character()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CharacterEntity`

Create a new `CharacterEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StructureEntity

```php
$structure = $client->Structure();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `x` | `float` | No |  |
| `y` | `float` | No |  |
| `z` | `float` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Structure()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StructureEntity`

Create a new `StructureEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new EsiDocumentationSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

