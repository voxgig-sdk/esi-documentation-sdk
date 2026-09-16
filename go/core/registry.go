package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewAssetEntityFunc func(client *EsiDocumentationSDK, entopts map[string]any) EsiDocumentationEntity

var NewCharacterEntityFunc func(client *EsiDocumentationSDK, entopts map[string]any) EsiDocumentationEntity

var NewStructureEntityFunc func(client *EsiDocumentationSDK, entopts map[string]any) EsiDocumentationEntity

