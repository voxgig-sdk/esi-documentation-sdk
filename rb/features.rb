# EsiDocumentation SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module EsiDocumentationFeatures
  def self.make_feature(name)
    case name
    when "base"
      EsiDocumentationBaseFeature.new
    when "test"
      EsiDocumentationTestFeature.new
    else
      EsiDocumentationBaseFeature.new
    end
  end
end
