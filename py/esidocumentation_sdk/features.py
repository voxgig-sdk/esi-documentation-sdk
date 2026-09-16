# EsiDocumentation SDK feature factory

from esidocumentation_sdk.feature.base_feature import EsiDocumentationBaseFeature
from esidocumentation_sdk.feature.ratelimit_feature import EsiDocumentationRatelimitFeature
from esidocumentation_sdk.feature.retry_feature import EsiDocumentationRetryFeature
from esidocumentation_sdk.feature.test_feature import EsiDocumentationTestFeature
from esidocumentation_sdk.feature.timeout_feature import EsiDocumentationTimeoutFeature


_FEATURES = {
    "base": lambda: EsiDocumentationBaseFeature(),
    "ratelimit": lambda: EsiDocumentationRatelimitFeature(),
    "retry": lambda: EsiDocumentationRetryFeature(),
    "test": lambda: EsiDocumentationTestFeature(),
    "timeout": lambda: EsiDocumentationTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
