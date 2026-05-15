# EsiDocumentation SDK utility: feature_add
module EsiDocumentationUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
