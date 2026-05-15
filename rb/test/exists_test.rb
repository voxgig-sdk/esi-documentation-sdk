# EsiDocumentation SDK exists test

require "minitest/autorun"
require_relative "../EsiDocumentation_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = EsiDocumentationSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
