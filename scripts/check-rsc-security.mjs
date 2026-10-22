import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';

const require = createRequire(import.meta.url);
const readJson = (path) => JSON.parse(readFileSync(path, 'utf8'));
const versions = ['react', 'react-dom', 'react-server-dom-webpack'].map((name) => {
  const { version } = readJson(require.resolve(`${name}/package.json`));
  // October 14, 2026 RSC fixes: GHSA-xqc2-xf4c-x3h3 and GHSA-h3gv-c5rc-p453.
  assert.match(version, /^19\.3\.\d+$/, `Review security compatibility for ${name}@${version}`);
  assert.ok(Number(version.split('.')[2]) >= 1, `${name} needs React 19.3.1 or later`);
  console.log(`PASS ${name}@${version}`);
  return version;
});
assert.equal(new Set(versions).size, 1, 'React packages must use the same version');

// npm audit does not inspect the React source vendored inside this plugin.
const pluginRoot = dirname(require.resolve('@vitejs/plugin-rsc/package.json'));
const bundled = readJson(join(pluginRoot, 'dist/vendor/react-server-dom/package.json'));
assert.equal(bundled.version, versions[0], 'Bundled RSC must match the patched React stack');
console.log(`PASS RSC plugin bundled React@${bundled.version}`);
