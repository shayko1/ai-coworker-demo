const fs = require('fs');
const path = require('path');

const CAMPAIGNS_FILE = path.join(__dirname, '..', 'data', 'campaigns.json');

function loadCampaigns() {
  return JSON.parse(fs.readFileSync(CAMPAIGNS_FILE, 'utf8'));
}

function getCampaign(id) {
  const campaign = loadCampaigns().find((c) => c.id === id);
  if (!campaign) {
    throw new Error(`campaign not found: ${id}`);
  }
  return campaign;
}

function listByStatus(status) {
  return loadCampaigns().filter((c) => c.status === status);
}

module.exports = { getCampaign, listByStatus, loadCampaigns };
