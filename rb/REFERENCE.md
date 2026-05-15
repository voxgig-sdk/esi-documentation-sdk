# EsiDocumentation Ruby SDK Reference

Complete API reference for the EsiDocumentation Ruby SDK.


## EsiDocumentationSDK

### Constructor

```ruby
require_relative 'esi-documentation_sdk'

client = EsiDocumentationSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `EsiDocumentationSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = EsiDocumentationSDK.test
```


### Instance Methods

#### `Asset(data = nil)`

Create a new `Asset` entity instance. Pass `nil` for no initial data.

#### `Character(data = nil)`

Create a new `Character` entity instance. Pass `nil` for no initial data.

#### `Structure(data = nil)`

Create a new `Structure` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash, err`

#### `prepare(fetchargs = {}) -> Hash, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Hash, err`


---

## AssetEntity

```ruby
asset = client.Asset
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

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Asset.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AssetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CharacterEntity

```ruby
character = client.Character
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

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.Character.load({ "id" => "character_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CharacterEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StructureEntity

```ruby
structure = client.Structure
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

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.Structure.load({ "id" => "structure_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StructureEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = EsiDocumentationSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

