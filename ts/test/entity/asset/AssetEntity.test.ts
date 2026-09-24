

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { EsiDocumentationSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('AssetEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when ESI_DOCUMENTATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('ESI_DOCUMENTATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = EsiDocumentationSDK.test()
    const ent = testsdk.Asset()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.ESI_DOCUMENTATION_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'asset.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"is_blueprint_copy":{"a":true,"h":"Is Blueprint Copy","n":"is_blueprint_copy","r":false,"sh":"is_blueprint_copy boolean","t":"`$BOOLEAN`","key$":"is_blueprint_copy","index$":0},"is_singleton":{"a":true,"h":"Is Singleton","n":"is_singleton","r":true,"sh":"is_singleton boolean","t":"`$BOOLEAN`","key$":"is_singleton","index$":1},"item_id":{"a":true,"fo":"int64","h":"Item Id","n":"item_id","r":true,"sh":"item_id integer","t":"`$INTEGER`","key$":"item_id","index$":2},"location_flag":{"a":true,"h":"Location Flag","n":"location_flag","r":false,"sh":"Describes the specific location within the location_type","t":"`$STRING`","key$":"location_flag","index$":3},"location_id":{"a":true,"fo":"int64","h":"Location Id","n":"location_id","r":true,"sh":"location_id integer","t":"`$INTEGER`","key$":"location_id","index$":4},"location_type":{"a":true,"h":"Location Type","n":"location_type","r":true,"sh":"Describes the location type","t":"`$STRING`","key$":"location_type","index$":5},"quantity":{"a":true,"fo":"int32","h":"Quantity","n":"quantity","r":true,"sh":"quantity integer","t":"`$INTEGER`","key$":"quantity","index$":6},"type_id":{"a":true,"fo":"int32","h":"Type Id","n":"type_id","r":true,"sh":"type_id integer","t":"`$INTEGER`","key$":"type_id","index$":7}},"name":"asset","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /characters/{character_id}/assets/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"character_id","or":"character_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"ex":"tranquility","k":"query","n":"datasource","or":"datasource","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/characters/{character_id}/assets/","q":{"exist":["character_id","datasource","page"]},"r":{},"s":[{"lit":"characters"},{"var":"character_id"},{"lit":"assets"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.character"]]},"key$":"asset","name__orig":"asset","Name":"Asset","name_":"asset","name-":"asset","NAME":"ASSET","index$":0}, {"active":true,"entity":"asset","key$":"BasicAssetFlow","kind":"basic","name":"BasicAssetFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"character_id":"character01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"asset_ref01"}}],"index$":0}]}, 'Asset', {"GET /characters/{character_id}/assets/":{"protocol":"http","operationId":"getCharacterAssets","responses":{"200":{"description":"A list of assets","headers":{"X-Pages":{"description":"Maximum page number","schema":{"type":"integer"}}},"content":{"application/json":{"schema":{"type":"array","items":{"type":"object","required":["item_id","type_id","location_id","location_type","quantity","is_singleton"],"properties":{"item_id":{"type":"integer","format":"int64","description":"item_id integer","key$":"item_id"},"type_id":{"type":"integer","format":"int32","description":"type_id integer","key$":"type_id"},"location_id":{"type":"integer","format":"int64","description":"location_id integer","key$":"location_id"},"location_type":{"type":"string","enum":["station","solar_system","item","other"],"description":"Describes the location type","key$":"location_type"},"location_flag":{"type":"string","description":"Describes the specific location within the location_type","key$":"location_flag"},"quantity":{"type":"integer","format":"int32","description":"quantity integer","key$":"quantity"},"is_singleton":{"type":"boolean","description":"is_singleton boolean","key$":"is_singleton"},"is_blueprint_copy":{"type":"boolean","description":"is_blueprint_copy boolean","key$":"is_blueprint_copy"}},"x-ref":"#/components/schemas/Asset","index$":0}}}}},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"type":"object","required":["error"],"properties":{"error":{"type":"string","description":"Error message"}},"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","required":["error"],"properties":{"error":{"type":"string","description":"Error message"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"character_id","in":"path","required":true,"description":"An EVE character ID","schema":{"type":"integer","format":"int32"},"index$":0},{"name":"datasource","in":"query","description":"The server name you would like data from","schema":{"type":"string","enum":["tranquility","singularity"],"default":"tranquility"},"index$":1},{"name":"page","in":"query","description":"Which page of results to return","schema":{"type":"integer","format":"int32","minimum":1,"default":1},"index$":2}],"security":[{"evesso":["esi-assets.read_assets.v1"]}],"securitySource":"operation","securitySchemes":{"evesso":{"type":"oauth2","description":"EVE Online SSO OAuth 2.0","flows":{"authorizationCode":{"authorizationUrl":"https://login.eveonline.com/v2/oauth/authorize","tokenUrl":"https://login.eveonline.com/v2/oauth/token","scopes":{"esi-assets.read_assets.v1":"Read character assets","esi-universe.read_structures.v1":"Read structure information","esi-markets.read_character_orders.v1":"Read character market orders","esi-markets.structure_markets.v1":"Read structure markets","esi-characters.read_notifications.v1":"Read character notifications","esi-corporations.read_structures.v1":"Read corporation structures"}}}}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let asset_ref01_data = Object.values(setup.data.existing.asset)[0] as any

    // LIST
    const asset_ref01_ent = client.Asset()
    const asset_ref01_match: any = {}
    asset_ref01_match['character_id'] = setup.idmap['character01']

    const asset_ref01_list = (await asset_ref01_ent.list(asset_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/asset/AssetTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = EsiDocumentationSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['asset01','asset02','asset03','character01','character02','character03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'ESI_DOCUMENTATION_TEST_ASSET_ENTID': idmap,
    'ESI_DOCUMENTATION_TEST_LIVE': 'FALSE',
    'ESI_DOCUMENTATION_TEST_EXPLAIN': 'FALSE',
    'ESI_DOCUMENTATION_APIKEY': '',
  })

  idmap = env['ESI_DOCUMENTATION_TEST_ASSET_ENTID']

  const live = 'TRUE' === env.ESI_DOCUMENTATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['ESI_DOCUMENTATION_TEST_ASSET_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new EsiDocumentationSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.ESI_DOCUMENTATION_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.ESI_DOCUMENTATION_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
