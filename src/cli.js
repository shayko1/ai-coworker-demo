const { getMetadata } = require('./siteMetadataService');

const msid = process.argv[2];
if (!msid) {
  console.error('usage: node src/cli.js <msid>');
  process.exit(1);
}

console.log(JSON.stringify(getMetadata(msid), null, 2));
