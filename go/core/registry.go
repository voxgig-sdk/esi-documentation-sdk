package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewAssetEntityFunc func(client *EsiDocumentationSDK, entopts map[string]any) EsiDocumentationEntity

var NewCharacterEntityFunc func(client *EsiDocumentationSDK, entopts map[string]any) EsiDocumentationEntity

var NewStructureEntityFunc func(client *EsiDocumentationSDK, entopts map[string]any) EsiDocumentationEntity

