// Typed models for the EsiDocumentation SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Asset {
  is_blueprint_copy?: boolean
  is_singleton: boolean
  item_id: number
  location_flag?: string
  location_id: number
  location_type: string
  quantity: number
  type_id: number
}

export interface AssetListMatch {
  character_id: number
}

export interface Character {
  alliance_id?: number
  ancestry_id?: number
  birthday?: string
  bloodline_id?: number
  corporation_id: number
  description?: string
  gender?: string
  name: string
  race_id?: number
  security_status?: number
}

export interface CharacterLoadMatch {
  id: number
}

export interface Structure {
  name: string
  owner_id: number
  position?: Record<string, any>
  solar_system_id: number
  type_id: number
}

export interface StructureLoadMatch {
  id: number
}

