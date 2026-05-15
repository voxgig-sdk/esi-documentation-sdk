
import { Context } from './Context'


class EsiDocumentationError extends Error {

  isEsiDocumentationError = true

  sdk = 'EsiDocumentation'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  EsiDocumentationError
}

