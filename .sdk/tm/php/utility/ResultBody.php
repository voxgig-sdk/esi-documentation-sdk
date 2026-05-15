<?php
declare(strict_types=1);

// EsiDocumentation SDK utility: result_body

class EsiDocumentationResultBody
{
    public static function call(EsiDocumentationContext $ctx): ?EsiDocumentationResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
