-- EsiDocumentation SDK error

local EsiDocumentationError = {}
EsiDocumentationError.__index = EsiDocumentationError


function EsiDocumentationError.new(code, msg, ctx)
  local self = setmetatable({}, EsiDocumentationError)
  self.is_sdk_error = true
  self.sdk = "EsiDocumentation"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function EsiDocumentationError:error()
  return self.msg
end


function EsiDocumentationError:__tostring()
  return self.msg
end


return EsiDocumentationError
