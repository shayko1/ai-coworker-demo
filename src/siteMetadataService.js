const fs = require('fs');
const path = require('path');

const SITES_FILE = path.join(__dirname, '..', 'data', 'sites.json');

function loadSites() {
  return JSON.parse(fs.readFileSync(SITES_FILE, 'utf8'));
}

function findSite(msid) {
  const site = loadSites().find((s) => s.msid === msid);
  if (!site) {
    throw new Error(`site not found: ${msid}`);
  }
  return site;
}

function getMetadata(msid) {
  const site = findSite(msid);
  return {
    msid: site.msid,
    name: site.name,
    siteType: site.siteType,
    plan: site.plan,
    locale: site.settings.locale,
    timezone: site.settings.timezone,
  };
}

module.exports = { getMetadata, loadSites };
