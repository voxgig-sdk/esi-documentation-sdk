<?php
declare(strict_types=1);

// EsiDocumentation SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class EsiDocumentationMakeContext
{
    public static function call(array $ctxmap, ?EsiDocumentationContext $basectx): EsiDocumentationContext
    {
        return new EsiDocumentationContext($ctxmap, $basectx);
    }
}
