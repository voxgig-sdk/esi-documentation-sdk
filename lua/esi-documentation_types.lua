-- Typed models for the EsiDocumentation SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Asset
---@field is_blueprint_copy? boolean
---@field is_singleton boolean
---@field item_id number
---@field location_flag? string
---@field location_id number
---@field location_type string
---@field quantity number
---@field type_id number

---@class AssetListMatch
---@field character_id number

---@class Character
---@field alliance_id? number
---@field ancestry_id? number
---@field birthday? string
---@field bloodline_id? number
---@field corporation_id number
---@field description? string
---@field gender? string
---@field name string
---@field race_id? number
---@field security_status? number

---@class CharacterLoadMatch
---@field id number

---@class Structure
---@field name string
---@field owner_id number
---@field position? table
---@field solar_system_id number
---@field type_id number

---@class StructureLoadMatch
---@field id number

local M = {}

return M
