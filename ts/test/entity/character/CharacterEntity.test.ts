

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


describe('CharacterEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when ESI_DOCUMENTATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('ESI_DOCUMENTATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = EsiDocumentationSDK.test()
    const ent = testsdk.Character()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.ESI_DOCUMENTATION_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'character.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"alliance_id":{"a":true,"fo":"int32","h":"Alliance Id","n":"alliance_id","r":false,"sh":"The character's alliance ID","t":"`$INTEGER`","key$":"alliance_id","index$":0},"ancestry_id":{"a":true,"fo":"int32","h":"Ancestry Id","n":"ancestry_id","r":false,"sh":"The character's ancestry ID","t":"`$INTEGER`","key$":"ancestry_id","index$":1},"birthday":{"a":true,"fo":"date-time","h":"Birthday","n":"birthday","r":false,"sh":"Creation date of the character","t":"`$STRING`","key$":"birthday","index$":2},"bloodline_id":{"a":true,"fo":"int32","h":"Bloodline Id","n":"bloodline_id","r":false,"sh":"The character's bloodline ID","t":"`$INTEGER`","key$":"bloodline_id","index$":3},"corporation_id":{"a":true,"fo":"int32","h":"Corporation Id","n":"corporation_id","r":true,"sh":"The character's corporation ID","t":"`$INTEGER`","key$":"corporation_id","index$":4},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"The character's bio","t":"`$STRING`","key$":"description","index$":5},"gender":{"a":true,"h":"Gender","n":"gender","r":false,"sh":"The character's gender","t":"`$STRING`","key$":"gender","index$":6},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":7},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The character's name","t":"`$STRING`","key$":"name","index$":8},"race_id":{"a":true,"fo":"int32","h":"Race Id","n":"race_id","r":false,"sh":"The character's race ID","t":"`$INTEGER`","key$":"race_id","index$":9},"security_status":{"a":true,"fo":"float","h":"Security Status","n":"security_status","r":false,"sh":"The character's security status","t":"`$NUMBER`","key$":"security_status","index$":10}},"id":{"field":"id","name":"id"},"name":"character","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /characters/{character_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"character_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"ex":"tranquility","k":"query","n":"datasource","or":"datasource","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/characters/{character_id}/","q":{"exist":["datasource","id"]},"r":{"param":{"character_id":"id"}},"s":[{"lit":"characters"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"character","name__orig":"character","Name":"Character","name_":"character","name-":"character","NAME":"CHARACTER","index$":1}, {"active":true,"entity":"character","key$":"BasicCharacterFlow","kind":"basic","name":"BasicCharacterFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"character_ref01","srcdatavar":"character_ref01_data","suffix":"_dt0"},"m":{"id":"character01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-character_ref01"}}],"index$":0}]}, 'Character', {"GET /characters/{character_id}/":{"protocol":"http","operationId":"getCharacter","responses":{"200":{"description":"Public data about a character","content":{"application/json":{"schema":{"type":"object","required":["name","corporation_id"],"properties":{"name":{"type":"string","description":"The character's name","key$":"name"},"description":{"type":"string","description":"The character's bio","key$":"description"},"corporation_id":{"type":"integer","format":"int32","description":"The character's corporation ID","key$":"corporation_id"},"alliance_id":{"type":"integer","format":"int32","description":"The character's alliance ID","key$":"alliance_id"},"birthday":{"type":"string","format":"date-time","description":"Creation date of the character","key$":"birthday"},"gender":{"type":"string","enum":["male","female"],"description":"The character's gender","key$":"gender"},"race_id":{"type":"integer","format":"int32","description":"The character's race ID","key$":"race_id"},"bloodline_id":{"type":"integer","format":"int32","description":"The character's bloodline ID","key$":"bloodline_id"},"ancestry_id":{"type":"integer","format":"int32","description":"The character's ancestry ID","key$":"ancestry_id"},"security_status":{"type":"number","format":"float","description":"The character's security status","key$":"security_status"}},"x-ref":"#/components/schemas/Character","index$":0}}}},"404":{"description":"Character not found","content":{"application/json":{"schema":{"type":"object","required":["error"],"properties":{"error":{"type":"string","description":"Error message"}},"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","required":["error"],"properties":{"error":{"type":"string","description":"Error message"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"character_id","in":"path","required":true,"description":"An EVE character ID","schema":{"type":"integer","format":"int32"},"index$":0},{"name":"datasource","in":"query","description":"The server name you would like data from","schema":{"type":"string","enum":["tranquility","singularity"],"default":"tranquility"},"index$":1}],"securitySource":"unspecified","securitySchemes":{"evesso":{"type":"oauth2","description":"EVE Online SSO OAuth 2.0","flows":{"authorizationCode":{"authorizationUrl":"https://login.eveonline.com/v2/oauth/authorize","tokenUrl":"https://login.eveonline.com/v2/oauth/token","scopes":{"esi-assets.read_assets.v1":"Read character assets","esi-universe.read_structures.v1":"Read structure information","esi-markets.read_character_orders.v1":"Read character market orders","esi-markets.structure_markets.v1":"Read structure markets","esi-characters.read_notifications.v1":"Read character notifications","esi-corporations.read_structures.v1":"Read corporation structures"}}}}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let character_ref01_data = Object.values(setup.data.existing.character)[0] as any

    // LOAD
    const character_ref01_ent = client.Character()
    const character_ref01_match_dt0: any = {}
    character_ref01_match_dt0.id = character_ref01_data.id
    const character_ref01_data_dt0 = (await character_ref01_ent.load(character_ref01_match_dt0)).data()
    assert(character_ref01_data_dt0.id === character_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/character/CharacterTestData.json')

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
    ['character01','character02','character03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'ESI_DOCUMENTATION_TEST_CHARACTER_ENTID': idmap,
    'ESI_DOCUMENTATION_TEST_LIVE': 'FALSE',
    'ESI_DOCUMENTATION_TEST_EXPLAIN': 'FALSE',
    'ESI_DOCUMENTATION_APIKEY': '',
  })

  idmap = env['ESI_DOCUMENTATION_TEST_CHARACTER_ENTID']

  const live = 'TRUE' === env.ESI_DOCUMENTATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['ESI_DOCUMENTATION_TEST_CHARACTER_ENTID']
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
  
