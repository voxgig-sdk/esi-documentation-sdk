<?php
declare(strict_types=1);

// Typed models for the EsiDocumentation SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Asset entity data model. */
class Asset
{
    public ?bool $is_blueprint_copy = null;
    public bool $is_singleton;
    public int $item_id;
    public ?string $location_flag = null;
    public int $location_id;
    public string $location_type;
    public int $quantity;
    public int $type_id;
}

/** Request payload for Asset#list. */
class AssetListMatch
{
    public int $character_id;
}

/** Character entity data model. */
class Character
{
    public ?int $alliance_id = null;
    public ?int $ancestry_id = null;
    public ?string $birthday = null;
    public ?int $bloodline_id = null;
    public int $corporation_id;
    public ?string $description = null;
    public ?string $gender = null;
    public string $name;
    public ?int $race_id = null;
    public ?float $security_status = null;
}

/** Request payload for Character#load. */
class CharacterLoadMatch
{
    public int $id;
}

/** Structure entity data model. */
class Structure
{
    public string $name;
    public int $owner_id;
    public ?array $position = null;
    public int $solar_system_id;
    public int $type_id;
}

/** Request payload for Structure#load. */
class StructureLoadMatch
{
    public int $id;
}

