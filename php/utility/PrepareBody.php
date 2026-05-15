<?php
declare(strict_types=1);

// EsiDocumentation SDK utility: prepare_body

class EsiDocumentationPrepareBody
{
    public static function call(EsiDocumentationContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
