// Typed models for the EsiDocumentation SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Asset is the typed data model for the asset entity.
type Asset struct {
	IsBlueprintCopy *bool `json:"is_blueprint_copy,omitempty"`
	IsSingleton bool `json:"is_singleton"`
	ItemId int `json:"item_id"`
	LocationFlag *string `json:"location_flag,omitempty"`
	LocationId int `json:"location_id"`
	LocationType string `json:"location_type"`
	Quantity int `json:"quantity"`
	TypeId int `json:"type_id"`
}

// AssetListMatch is the typed request payload for Asset.ListTyped.
type AssetListMatch struct {
	CharacterId int `json:"character_id"`
}

// Character is the typed data model for the character entity.
type Character struct {
	AllianceId *int `json:"alliance_id,omitempty"`
	AncestryId *int `json:"ancestry_id,omitempty"`
	Birthday *string `json:"birthday,omitempty"`
	BloodlineId *int `json:"bloodline_id,omitempty"`
	CorporationId int `json:"corporation_id"`
	Description *string `json:"description,omitempty"`
	Gender *string `json:"gender,omitempty"`
	Name string `json:"name"`
	RaceId *int `json:"race_id,omitempty"`
	SecurityStatus *float64 `json:"security_status,omitempty"`
}

// CharacterLoadMatch is the typed request payload for Character.LoadTyped.
type CharacterLoadMatch struct {
	Id int `json:"id"`
}

// Structure is the typed data model for the structure entity.
type Structure struct {
	Name string `json:"name"`
	OwnerId int `json:"owner_id"`
	Position *map[string]any `json:"position,omitempty"`
	SolarSystemId int `json:"solar_system_id"`
	TypeId int `json:"type_id"`
}

// StructureLoadMatch is the typed request payload for Structure.LoadTyped.
type StructureLoadMatch struct {
	Id int `json:"id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
