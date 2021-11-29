const API_TOKEN = process.env.API_TOKEN;
const clashApi = require("clash-of-clans-api");

let client = clashApi({
  token: API_TOKEN,
});

const getClanInfo = async (clanId) => {
  try {
    const clanInfo = await client.clanByTag(clanId);
    return clanInfo;
  } catch (error) {
    console.log(error);
  }
};

const getClanWarLog = async (clanId) => {
  try {
    const warLog = await client.clanWarlogByTag(clanId);
    return warLog;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getClanInfo, getClanWarLog };
