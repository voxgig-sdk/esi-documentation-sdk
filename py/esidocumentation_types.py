# Typed models for the EsiDocumentation SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Asset:
    is_singleton: bool
    item_id: int
    location_id: int
    location_type: str
    quantity: int
    type_id: int
    is_blueprint_copy: Optional[bool] = None
    location_flag: Optional[str] = None


@dataclass
class AssetListMatch:
    character_id: int


@dataclass
class Character:
    corporation_id: int
    name: str
    alliance_id: Optional[int] = None
    ancestry_id: Optional[int] = None
    birthday: Optional[str] = None
    bloodline_id: Optional[int] = None
    description: Optional[str] = None
    gender: Optional[str] = None
    race_id: Optional[int] = None
    security_status: Optional[float] = None


@dataclass
class CharacterLoadMatch:
    id: int


@dataclass
class Structure:
    name: str
    owner_id: int
    solar_system_id: int
    type_id: int
    position: Optional[dict] = None


@dataclass
class StructureLoadMatch:
    id: int

