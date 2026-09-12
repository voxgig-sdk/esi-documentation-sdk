export interface Asset {
    is_blueprint_copy?: boolean;
    is_singleton: boolean;
    item_id: number;
    location_flag?: string;
    location_id: number;
    location_type: string;
    quantity: number;
    type_id: number;
}
export interface AssetListMatch {
    character_id: number;
    datasource?: string;
    page?: number;
}
export interface Character {
    alliance_id?: number;
    ancestry_id?: number;
    birthday?: string;
    bloodline_id?: number;
    corporation_id: number;
    description?: string;
    gender?: string;
    id?: string;
    name: string;
    race_id?: number;
    security_status?: number;
}
export interface CharacterLoadMatch {
    id: number;
    datasource?: string;
}
export interface Structure {
    id?: string;
    x?: number;
    y?: number;
    z?: number;
}
export interface StructureLoadMatch {
    id: number;
    datasource?: string;
}
