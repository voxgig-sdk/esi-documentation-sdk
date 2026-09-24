
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { EsiDocumentationSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = EsiDocumentationSDK.test()
    equal(testsdk instanceof EsiDocumentationSDK, true,
      'EsiDocumentationSDK.test() must return a client synchronously')
  })

})
