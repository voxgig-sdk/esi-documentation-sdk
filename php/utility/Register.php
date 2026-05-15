<?php
declare(strict_types=1);

// EsiDocumentation SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

EsiDocumentationUtility::setRegistrar(function (EsiDocumentationUtility $u): void {
    $u->clean = [EsiDocumentationClean::class, 'call'];
    $u->done = [EsiDocumentationDone::class, 'call'];
    $u->make_error = [EsiDocumentationMakeError::class, 'call'];
    $u->feature_add = [EsiDocumentationFeatureAdd::class, 'call'];
    $u->feature_hook = [EsiDocumentationFeatureHook::class, 'call'];
    $u->feature_init = [EsiDocumentationFeatureInit::class, 'call'];
    $u->fetcher = [EsiDocumentationFetcher::class, 'call'];
    $u->make_fetch_def = [EsiDocumentationMakeFetchDef::class, 'call'];
    $u->make_context = [EsiDocumentationMakeContext::class, 'call'];
    $u->make_options = [EsiDocumentationMakeOptions::class, 'call'];
    $u->make_request = [EsiDocumentationMakeRequest::class, 'call'];
    $u->make_response = [EsiDocumentationMakeResponse::class, 'call'];
    $u->make_result = [EsiDocumentationMakeResult::class, 'call'];
    $u->make_point = [EsiDocumentationMakePoint::class, 'call'];
    $u->make_spec = [EsiDocumentationMakeSpec::class, 'call'];
    $u->make_url = [EsiDocumentationMakeUrl::class, 'call'];
    $u->param = [EsiDocumentationParam::class, 'call'];
    $u->prepare_auth = [EsiDocumentationPrepareAuth::class, 'call'];
    $u->prepare_body = [EsiDocumentationPrepareBody::class, 'call'];
    $u->prepare_headers = [EsiDocumentationPrepareHeaders::class, 'call'];
    $u->prepare_method = [EsiDocumentationPrepareMethod::class, 'call'];
    $u->prepare_params = [EsiDocumentationPrepareParams::class, 'call'];
    $u->prepare_path = [EsiDocumentationPreparePath::class, 'call'];
    $u->prepare_query = [EsiDocumentationPrepareQuery::class, 'call'];
    $u->result_basic = [EsiDocumentationResultBasic::class, 'call'];
    $u->result_body = [EsiDocumentationResultBody::class, 'call'];
    $u->result_headers = [EsiDocumentationResultHeaders::class, 'call'];
    $u->transform_request = [EsiDocumentationTransformRequest::class, 'call'];
    $u->transform_response = [EsiDocumentationTransformResponse::class, 'call'];
});
