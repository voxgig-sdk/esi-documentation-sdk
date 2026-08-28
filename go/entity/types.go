// Typed models for the EsiDocumentation SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/esi-documentation-sdk/go/core"
)

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
	Datasource *string `json:"datasource,omitempty"`
	Page *int `json:"page,omitempty"`
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
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	RaceId *int `json:"race_id,omitempty"`
	SecurityStatus *float64 `json:"security_status,omitempty"`
}

// CharacterLoadMatch is the typed request payload for Character.LoadTyped.
type CharacterLoadMatch struct {
	Id int `json:"id"`
	Datasource *string `json:"datasource,omitempty"`
}

// Structure is the typed data model for the structure entity.
type Structure struct {
	Id *string `json:"id,omitempty"`
	X *float64 `json:"x,omitempty"`
	Y *float64 `json:"y,omitempty"`
	Z *float64 `json:"z,omitempty"`
}

// StructureLoadMatch is the typed request payload for Structure.LoadTyped.
type StructureLoadMatch struct {
	Id int `json:"id"`
	Datasource *string `json:"datasource,omitempty"`
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
