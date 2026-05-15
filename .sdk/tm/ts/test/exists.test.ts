
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { EsiDocumentationSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await EsiDocumentationSDK.test()
    equal(null !== testsdk, true)
  })

})
