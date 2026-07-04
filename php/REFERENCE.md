# EsiDocumentation PHP SDK Reference

Complete API reference for the EsiDocumentation PHP SDK.


## EsiDocumentationSDK

### Constructor

```php
require_once __DIR__ . '/esi-documentation_sdk.php';

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

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

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
| `is_blueprint_copy` | ``$BOOLEAN`` | No |  |
| `is_singleton` | ``$BOOLEAN`` | Yes |  |
| `item_id` | ``$INTEGER`` | Yes |  |
| `location_flag` | ``$STRING`` | No |  |
| `location_id` | ``$INTEGER`` | Yes |  |
| `location_type` | ``$STRING`` | Yes |  |
| `quantity` | ``$INTEGER`` | Yes |  |
| `type_id` | ``$INTEGER`` | Yes |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->Asset()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): AssetEntity`

Create a new `AssetEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## CharacterEntity

```php
$character = $client->Character();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alliance_id` | ``$INTEGER`` | No |  |
| `ancestry_id` | ``$INTEGER`` | No |  |
| `birthday` | ``$STRING`` | No |  |
| `bloodline_id` | ``$INTEGER`` | No |  |
| `corporation_id` | ``$INTEGER`` | Yes |  |
| `description` | ``$STRING`` | No |  |
| `gender` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | Yes |  |
| `race_id` | ``$INTEGER`` | No |  |
| `security_status` | ``$NUMBER`` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Character()->load(["id" => "character_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): CharacterEntity`

Create a new `CharacterEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## StructureEntity

```php
$structure = $client->Structure();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | ``$STRING`` | Yes |  |
| `owner_id` | ``$INTEGER`` | Yes |  |
| `position` | ``$OBJECT`` | No |  |
| `solar_system_id` | ``$INTEGER`` | Yes |  |
| `type_id` | ``$INTEGER`` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Structure()->load(["id" => "structure_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): StructureEntity`

Create a new `StructureEntity` instance with the same client and
options.

#### `getName(): string`

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

