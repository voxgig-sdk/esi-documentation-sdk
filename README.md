# EsiDocumentation SDK

Query EVE Online's universe, market, character, and structure data via CCP's official ESI REST API

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About ESI Documentation

The **EVE Swagger Interface (ESI)** is the official public REST API for [EVE Online](https://www.eveonline.com/), the long-running space MMO operated by [CCP Games](https://www.ccpgames.com/). It exposes data about the in-game universe, markets, corporations, characters and player-owned structures through a versioned JSON API hosted at `https://esi.evetech.net/latest`.

What you can pull from the API:

- Universe reference data such as regions (`/universe/regions/`) and structures (`/universe/structures/`).
- Market data including current prices (`/markets/prices/`) and per-structure markets.
- Character, corporation and asset information for authenticated users.

Authentication uses **OAuth 2.0 via EVE SSO**, with separate flows documented for web and desktop/mobile applications, JWT validation and refresh-token rotation. Public reference endpoints can be called without a token; private and character-scoped endpoints require the appropriate OAuth scopes. CORS is enabled, and the docs site at [docs.esi.evetech.net](https://docs.esi.evetech.net/) tracks changelog updates and migration notes from older SSO/API versions.

## Try it

**TypeScript**
```bash
npm install esi-documentation
```

**Python**
```bash
pip install esi-documentation-sdk
```

**PHP**
```bash
composer require voxgig/esi-documentation-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/esi-documentation-sdk/go
```

**Ruby**
```bash
gem install esi-documentation-sdk
```

**Lua**
```bash
luarocks install esi-documentation-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { EsiDocumentationSDK } from 'esi-documentation'

const client = new EsiDocumentationSDK({})

// List all assets
const assets = await client.Asset().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o esi-documentation-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "esi-documentation": {
      "command": "/abs/path/to/esi-documentation-mcp"
    }
  }
}
```

## Entities

The API exposes 3 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Asset** | Items owned by a character or corporation, including their `location_id` references resolved against the universe and structures endpoints. | `/characters/{character_id}/assets/` |
| **Character** | Player characters in EVE Online, queried for public profile data and (with OAuth scopes) private details such as assets, skills and wallet. | `/characters/{character_id}/` |
| **Structure** | Player-owned in-game structures (e.g. citadels), exposed via `/universe/structures/` for resolution and lookup of their markets. | `/universe/structures/{structure_id}/` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from esidocumentation_sdk import EsiDocumentationSDK

client = EsiDocumentationSDK({})

# List all assets
assets, err = client.Asset(None).list(None, None)
```

### PHP

```php
<?php
require_once 'esidocumentation_sdk.php';

$client = new EsiDocumentationSDK([]);

// List all assets
[$assets, $err] = $client->Asset(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/esi-documentation-sdk/go"

client := sdk.NewEsiDocumentationSDK(map[string]any{})

// List all assets
assets, err := client.Asset(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "EsiDocumentation_sdk"

client = EsiDocumentationSDK.new({})

# List all assets
assets, err = client.Asset(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("esi-documentation_sdk")

local client = sdk.new({})

-- List all assets
local assets, err = client:Asset(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = EsiDocumentationSDK.test()
const result = await client.Asset().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = EsiDocumentationSDK.test(None, None)
result, err = client.Asset(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = EsiDocumentationSDK::test(null, null);
[$result, $err] = $client->Asset(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Asset(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = EsiDocumentationSDK.test(nil, nil)
result, err = client.Asset(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Asset(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the ESI Documentation

- Upstream: [https://esi.evetech.net/](https://esi.evetech.net/)
- API docs: [https://docs.esi.evetech.net/](https://docs.esi.evetech.net/)

- Governed by the **EVE Online Developer License Agreement** issued by CCP Games.
- Most write/private endpoints require OAuth 2.0 via EVE SSO; public endpoints are open.
- Game assets, names and data remain the intellectual property of CCP hf.
- Consult the CCP developer portal for current terms before redistributing data.

---

Generated from the ESI Documentation OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
