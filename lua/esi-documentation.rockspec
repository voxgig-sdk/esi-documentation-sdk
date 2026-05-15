package = "voxgig-sdk-esi-documentation"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/esi-documentation-sdk.git"
}
description = {
  summary = "EsiDocumentation SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["esi-documentation_sdk"] = "esi-documentation_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
