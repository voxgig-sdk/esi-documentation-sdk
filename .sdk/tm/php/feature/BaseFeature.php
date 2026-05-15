<?php
declare(strict_types=1);

// EsiDocumentation SDK base feature

class EsiDocumentationBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(EsiDocumentationContext $ctx, array $options): void {}
    public function PostConstruct(EsiDocumentationContext $ctx): void {}
    public function PostConstructEntity(EsiDocumentationContext $ctx): void {}
    public function SetData(EsiDocumentationContext $ctx): void {}
    public function GetData(EsiDocumentationContext $ctx): void {}
    public function GetMatch(EsiDocumentationContext $ctx): void {}
    public function SetMatch(EsiDocumentationContext $ctx): void {}
    public function PrePoint(EsiDocumentationContext $ctx): void {}
    public function PreSpec(EsiDocumentationContext $ctx): void {}
    public function PreRequest(EsiDocumentationContext $ctx): void {}
    public function PreResponse(EsiDocumentationContext $ctx): void {}
    public function PreResult(EsiDocumentationContext $ctx): void {}
    public function PreDone(EsiDocumentationContext $ctx): void {}
    public function PreUnexpected(EsiDocumentationContext $ctx): void {}
}
