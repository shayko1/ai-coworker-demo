const assert = require('assert');
const { getMetadata } = require('../src/siteMetadataService');

// NOTE: fixtures here only cover sites created this year.
const cases = [
  { msid: '9d41-a2f7', locale: 'en' },
  { msid: 'b7c2-0e19', locale: 'he' },
  { msid: 'e83b-12aa', locale: 'pt' },
];

let failed = 0;
for (const c of cases) {
  try {
    const meta = getMetadata(c.msid);
    assert.strictEqual(meta.locale, c.locale);
    console.log(`PASS getMetadata(${c.msid})`);
  } catch (err) {
    failed += 1;
    console.error(`FAIL getMetadata(${c.msid}): ${err.message}`);
  }
}

if (failed > 0) {
  process.exit(1);
}
console.log('all tests passed');
