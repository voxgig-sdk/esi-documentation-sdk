# EsiDocumentation SDK utility: make_context

from projectname_sdk.core.context import EsiDocumentationContext


def make_context_util(ctxmap, basectx):
    return EsiDocumentationContext(ctxmap, basectx)
