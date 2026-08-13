# EsiDocumentation SDK feature factory

from esidocumentation_sdk.feature.base_feature import EsiDocumentationBaseFeature
from esidocumentation_sdk.feature.test_feature import EsiDocumentationTestFeature


def _make_feature(name):
    features = {
        "base": lambda: EsiDocumentationBaseFeature(),
        "test": lambda: EsiDocumentationTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
