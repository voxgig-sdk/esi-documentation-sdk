# EsiDocumentation SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module EsiDocumentationFeatures
  def self.make_feature(name)
    case name
    when "base"
      EsiDocumentationBaseFeature.new
    when "ratelimit"
      EsiDocumentationRatelimitFeature.new
    when "retry"
      EsiDocumentationRetryFeature.new
    when "test"
      EsiDocumentationTestFeature.new
    when "timeout"
      EsiDocumentationTimeoutFeature.new
    else
      EsiDocumentationBaseFeature.new
    end
  end
end
