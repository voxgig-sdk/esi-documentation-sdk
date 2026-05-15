<?php
declare(strict_types=1);

// EsiDocumentation SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class EsiDocumentationFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new EsiDocumentationBaseFeature();
            case "test":
                return new EsiDocumentationTestFeature();
            default:
                return new EsiDocumentationBaseFeature();
        }
    }
}
