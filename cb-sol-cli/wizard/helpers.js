const homedir = require('os').homedir();
const fs = require("fs");
const configDir = homedir + "/.cb-sol-cli/";
const configFilename = "config.json";
const configFullPath = configDir + configFilename;

function fetchConfig() {
    try {
        const data = fs.readFileSync(configFullPath, 'utf-8');
        return JSON.parse(data.toString());
    } catch (e) {
        console.log(e);
        console.log("Couldn't find config file!")
    }
}

function updateConfig(config) {
    const jsonConfig = JSON.stringify(config, null, 4);
    try {
        if (!fs.existsSync(configDir)){
            fs.mkdirSync(configDir);
        }
        fs.writeFileSync(configFullPath, jsonConfig);
        console.log(`Saved configuration file to ${configFullPath}!`);
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    fetchConfig,
    updateConfig,
}