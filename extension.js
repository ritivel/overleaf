'use strict';

/**
 * This repository folder is vendored under VS Code's in-tree `extensions/`.
 * VS Code expects each folder there to be a valid extension manifest.
 *
 * We intentionally ship a no-op extension here so the extension host doesn't
 * error when scanning manifests.
 */

function activate() {
  // no-op
}

function deactivate() {
  // no-op
}

module.exports = { activate, deactivate };
