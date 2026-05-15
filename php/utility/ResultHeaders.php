<?php
declare(strict_types=1);

// EsiDocumentation SDK utility: result_headers

class EsiDocumentationResultHeaders
{
    public static function call(EsiDocumentationContext $ctx): ?EsiDocumentationResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
