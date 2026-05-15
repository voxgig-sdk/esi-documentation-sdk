# EsiDocumentation Python SDK Reference

Complete API reference for the EsiDocumentation Python SDK.


## EsiDocumentationSDK

### Constructor

```python
from esi-documentation_sdk import EsiDocumentationSDK

client = EsiDocumentationSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `EsiDocumentationSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = EsiDocumentationSDK.test()
```


### Instance Methods

#### `Asset(data=None)`

Create a new `AssetEntity` instance. Pass `None` for no initial data.

#### `Character(data=None)`

Create a new `CharacterEntity` instance. Pass `None` for no initial data.

#### `Structure(data=None)`

Create a new `StructureEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> tuple`

Make a direct HTTP request to any API endpoint. Returns `(result, err)`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `(result_dict, err)`

#### `prepare(fetchargs=None) -> tuple`

Prepare a fetch definition without sending. Returns `(fetchdef, err)`.


---

## AssetEntity

```python
asset = client.Asset()
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

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.Asset().list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AssetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CharacterEntity

```python
character = client.Character()
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

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.Character().load({"id": "character_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CharacterEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StructureEntity

```python
structure = client.Structure()
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

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.Structure().load({"id": "structure_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StructureEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = EsiDocumentationSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

