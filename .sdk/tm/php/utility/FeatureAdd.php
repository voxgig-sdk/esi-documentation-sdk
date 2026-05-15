<?php
declare(strict_types=1);

// EsiDocumentation SDK utility: feature_add

class EsiDocumentationFeatureAdd
{
    public static function call(EsiDocumentationContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
