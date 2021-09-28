const core = require("@actions/core");
const cache = require("@actions/cache");
const cacheHttpClient = require("@actions/cache/lib/internal/cacheHttpClient");
const cacheUtils = require("@actions/cache/lib/internal/cacheUtils");

const key = core.getInput("key");
const restoreKeys = core.getInput("restore-keys");
const paths = core.getInput("paths");

let compressionMethod = await cacheUtils.getCompressionMethod();
let entry = cacheHttpClient.getCacheEntry([key, ...restoreKeys], paths, compressionMethod);

let isExists = entry != null ? "true" : "false";
core.setOutput("is-exists", isExists);