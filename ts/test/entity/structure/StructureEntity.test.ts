

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('StructureEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when ESI_DOCUMENTATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('ESI_DOCUMENTATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = EsiDocumentationSDK.test()
    const ent = testsdk.Structure()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.ESI_DOCUMENTATION_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'structure.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0},{"active":true,"format":"double","name":"x","req":false,"type":"`$NUMBER`","index$":1},{"active":true,"format":"double","name":"y","req":false,"type":"`$NUMBER`","index$":2},{"active":true,"format":"double","name":"z","req":false,"type":"`$NUMBER`","index$":3}],"id":{"field":"id","name":"id"},"name":"structure","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"structure_id","reqd":true,"type":"`$INTEGER`","index$":0}],"query":[{"active":true,"example":"tranquility","kind":"query","name":"datasource","orig":"datasource","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /universe/structures/{structure_id}/","json":"{\"operationId\":\"getStructure\",\"parameters\":[{\"description\":\"An EVE structure ID\",\"in\":\"path\",\"name\":\"structure_id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}},{\"description\":\"The server name you would like data from\",\"in\":\"query\",\"name\":\"datasource\",\"schema\":{\"default\":\"tranquility\",\"enum\":[\"tranquility\",\"singularity\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"name\":{\"description\":\"The structure name\",\"type\":\"string\"},\"owner_id\":{\"description\":\"The ID of the corporation that owns the structure\",\"format\":\"int32\",\"type\":\"integer\"},\"position\":{\"description\":\"Coordinates of the structure in the solar system\",\"properties\":{\"x\":{\"format\":\"double\",\"type\":\"number\"},\"y\":{\"format\":\"double\",\"type\":\"number\"},\"z\":{\"format\":\"double\",\"type\":\"number\"}},\"type\":\"object\"},\"solar_system_id\":{\"description\":\"The solar system the structure is in\",\"format\":\"int32\",\"type\":\"integer\"},\"type_id\":{\"description\":\"The type of structure\",\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"name\",\"owner_id\",\"solar_system_id\",\"type_id\"],\"type\":\"object\"}}},\"description\":\"Data about a structure\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Forbidden - Not authorized to access this structure\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Structure not found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"security\":[{\"evesso\":[\"esi-universe.read_structures.v1\"]}],\"securitySchemes\":{\"evesso\":{\"description\":\"EVE Online SSO OAuth 2.0\",\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://login.eveonline.com/v2/oauth/authorize\",\"scopes\":{\"esi-assets.read_assets.v1\":\"Read character assets\",\"esi-characters.read_notifications.v1\":\"Read character notifications\",\"esi-corporations.read_structures.v1\":\"Read corporation structures\",\"esi-markets.read_character_orders.v1\":\"Read character market orders\",\"esi-markets.structure_markets.v1\":\"Read structure markets\",\"esi-universe.read_structures.v1\":\"Read structure information\"},\"tokenUrl\":\"https://login.eveonline.com/v2/oauth/token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/universe/structures/{structure_id}/","rename":{"param":{"structure_id":"id"}},"segments":[{"lit":"universe"},{"lit":"structures"},{"var":"id"}],"select":{"exist":["datasource","id"]},"transform":{"req":"`reqdata`","res":"`body.position`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"structure","name__orig":"structure","Name":"Structure","name_":"structure","name-":"structure","NAME":"STRUCTURE","index$":2}, {"active":true,"entity":"structure","key$":"BasicStructureFlow","kind":"basic","name":"BasicStructureFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"structure_ref01","srcdatavar":"structure_ref01_data","suffix":"_dt0"},"match":{"id":"structure01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-structure_ref01"}}],"index$":0}]}, 'Structure')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let structure_ref01_data = Object.values(setup.data.existing.structure)[0] as any

    // LOAD
    const structure_ref01_ent = client.Structure()
    const structure_ref01_match_dt0: any = {}
    structure_ref01_match_dt0.id = structure_ref01_data.id
    const structure_ref01_data_dt0 = (await structure_ref01_ent.load(structure_ref01_match_dt0)).data()
    assert(structure_ref01_data_dt0.id === structure_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/structure/StructureTestData.json')

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
    ['structure01','structure02','structure03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'ESI_DOCUMENTATION_TEST_STRUCTURE_ENTID': idmap,
    'ESI_DOCUMENTATION_TEST_LIVE': 'FALSE',
    'ESI_DOCUMENTATION_TEST_EXPLAIN': 'FALSE',
    'ESI_DOCUMENTATION_APIKEY': '',
  })

  idmap = env['ESI_DOCUMENTATION_TEST_STRUCTURE_ENTID']

  const live = 'TRUE' === env.ESI_DOCUMENTATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['ESI_DOCUMENTATION_TEST_STRUCTURE_ENTID']
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
  
