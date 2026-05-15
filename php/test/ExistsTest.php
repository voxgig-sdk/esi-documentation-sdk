<?php
declare(strict_types=1);

// EsiDocumentation SDK exists test

require_once __DIR__ . '/../esidocumentation_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = EsiDocumentationSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
