# Typed models for the EsiDocumentation SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class AssetRequired(TypedDict):
    is_singleton: bool
    item_id: int
    location_id: int
    location_type: str
    quantity: int
    type_id: int


class Asset(AssetRequired, total=False):
    is_blueprint_copy: bool
    location_flag: str


class AssetListMatch(TypedDict):
    character_id: int


class CharacterRequired(TypedDict):
    corporation_id: int
    name: str


class Character(CharacterRequired, total=False):
    alliance_id: int
    ancestry_id: int
    birthday: str
    bloodline_id: int
    description: str
    gender: str
    race_id: int
    security_status: float


class CharacterLoadMatch(TypedDict):
    id: int


class StructureRequired(TypedDict):
    name: str
    owner_id: int
    solar_system_id: int
    type_id: int


class Structure(StructureRequired, total=False):
    position: dict


class StructureLoadMatch(TypedDict):
    id: int
