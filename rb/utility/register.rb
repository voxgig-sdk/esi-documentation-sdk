# EsiDocumentation SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

EsiDocumentationUtility.registrar = ->(u) {
  u.clean = EsiDocumentationUtilities::Clean
  u.done = EsiDocumentationUtilities::Done
  u.make_error = EsiDocumentationUtilities::MakeError
  u.feature_add = EsiDocumentationUtilities::FeatureAdd
  u.feature_hook = EsiDocumentationUtilities::FeatureHook
  u.feature_init = EsiDocumentationUtilities::FeatureInit
  u.fetcher = EsiDocumentationUtilities::Fetcher
  u.make_fetch_def = EsiDocumentationUtilities::MakeFetchDef
  u.make_context = EsiDocumentationUtilities::MakeContext
  u.make_options = EsiDocumentationUtilities::MakeOptions
  u.make_request = EsiDocumentationUtilities::MakeRequest
  u.make_response = EsiDocumentationUtilities::MakeResponse
  u.make_result = EsiDocumentationUtilities::MakeResult
  u.make_point = EsiDocumentationUtilities::MakePoint
  u.make_spec = EsiDocumentationUtilities::MakeSpec
  u.make_url = EsiDocumentationUtilities::MakeUrl
  u.param = EsiDocumentationUtilities::Param
  u.prepare_auth = EsiDocumentationUtilities::PrepareAuth
  u.prepare_body = EsiDocumentationUtilities::PrepareBody
  u.prepare_headers = EsiDocumentationUtilities::PrepareHeaders
  u.prepare_method = EsiDocumentationUtilities::PrepareMethod
  u.prepare_params = EsiDocumentationUtilities::PrepareParams
  u.prepare_path = EsiDocumentationUtilities::PreparePath
  u.prepare_query = EsiDocumentationUtilities::PrepareQuery
  u.result_basic = EsiDocumentationUtilities::ResultBasic
  u.result_body = EsiDocumentationUtilities::ResultBody
  u.result_headers = EsiDocumentationUtilities::ResultHeaders
  u.transform_request = EsiDocumentationUtilities::TransformRequest
  u.transform_response = EsiDocumentationUtilities::TransformResponse
}
