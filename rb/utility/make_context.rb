# EsiDocumentation SDK utility: make_context
require_relative '../core/context'
module EsiDocumentationUtilities
  MakeContext = ->(ctxmap, basectx) {
    EsiDocumentationContext.new(ctxmap, basectx)
  }
end
