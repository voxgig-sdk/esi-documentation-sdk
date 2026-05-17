package voxgigesidocumentationsdk

import (
	"github.com/voxgig-sdk/esi-documentation-sdk/go/core"
	"github.com/voxgig-sdk/esi-documentation-sdk/go/entity"
	"github.com/voxgig-sdk/esi-documentation-sdk/go/feature"
	_ "github.com/voxgig-sdk/esi-documentation-sdk/go/utility"
)

// Type aliases preserve external API.
type EsiDocumentationSDK = core.EsiDocumentationSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type EsiDocumentationEntity = core.EsiDocumentationEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type EsiDocumentationError = core.EsiDocumentationError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAssetEntityFunc = func(client *core.EsiDocumentationSDK, entopts map[string]any) core.EsiDocumentationEntity {
		return entity.NewAssetEntity(client, entopts)
	}
	core.NewCharacterEntityFunc = func(client *core.EsiDocumentationSDK, entopts map[string]any) core.EsiDocumentationEntity {
		return entity.NewCharacterEntity(client, entopts)
	}
	core.NewStructureEntityFunc = func(client *core.EsiDocumentationSDK, entopts map[string]any) core.EsiDocumentationEntity {
		return entity.NewStructureEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewEsiDocumentationSDK = core.NewEsiDocumentationSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
