# frozen_string_literal: true

# Typed models for the EsiDocumentation SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Asset entity data model.
#
# @!attribute [rw] is_blueprint_copy
#   @return [Boolean, nil]
#
# @!attribute [rw] is_singleton
#   @return [Boolean]
#
# @!attribute [rw] item_id
#   @return [Integer]
#
# @!attribute [rw] location_flag
#   @return [String, nil]
#
# @!attribute [rw] location_id
#   @return [Integer]
#
# @!attribute [rw] location_type
#   @return [String]
#
# @!attribute [rw] quantity
#   @return [Integer]
#
# @!attribute [rw] type_id
#   @return [Integer]
Asset = Struct.new(
  :is_blueprint_copy,
  :is_singleton,
  :item_id,
  :location_flag,
  :location_id,
  :location_type,
  :quantity,
  :type_id,
  keyword_init: true
)

# Request payload for Asset#list.
#
# @!attribute [rw] character_id
#   @return [Integer]
AssetListMatch = Struct.new(
  :character_id,
  keyword_init: true
)

# Character entity data model.
#
# @!attribute [rw] alliance_id
#   @return [Integer, nil]
#
# @!attribute [rw] ancestry_id
#   @return [Integer, nil]
#
# @!attribute [rw] birthday
#   @return [String, nil]
#
# @!attribute [rw] bloodline_id
#   @return [Integer, nil]
#
# @!attribute [rw] corporation_id
#   @return [Integer]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] gender
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] race_id
#   @return [Integer, nil]
#
# @!attribute [rw] security_status
#   @return [Float, nil]
Character = Struct.new(
  :alliance_id,
  :ancestry_id,
  :birthday,
  :bloodline_id,
  :corporation_id,
  :description,
  :gender,
  :name,
  :race_id,
  :security_status,
  keyword_init: true
)

# Request payload for Character#load.
#
# @!attribute [rw] id
#   @return [Integer]
CharacterLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Structure entity data model.
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] owner_id
#   @return [Integer]
#
# @!attribute [rw] position
#   @return [Hash, nil]
#
# @!attribute [rw] solar_system_id
#   @return [Integer]
#
# @!attribute [rw] type_id
#   @return [Integer]
Structure = Struct.new(
  :name,
  :owner_id,
  :position,
  :solar_system_id,
  :type_id,
  keyword_init: true
)

# Request payload for Structure#load.
#
# @!attribute [rw] id
#   @return [Integer]
StructureLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

