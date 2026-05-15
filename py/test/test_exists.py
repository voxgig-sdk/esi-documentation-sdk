# ProjectName SDK exists test

import pytest
from esidocumentation_sdk import EsiDocumentationSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = EsiDocumentationSDK.test(None, None)
        assert testsdk is not None
