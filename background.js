/**
 * This script gets executed in the background for every chrome tab
 */

const {BLOCK_URL, REDIRECT_URL} = require('./consts.js');
let {REDIRECTION_ENABLED, HIDE_FEED_ENABLED} = require('./consts.js');

// Set the default values to storage
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ REDIRECTION_ENABLED });
    chrome.storage.sync.set({ HIDE_FEED_ENABLED });
});

// Listen for url navigation on any tab
chrome.webNavigation.onBeforeNavigate.addListener(function (details) {
    if (details.url == BLOCK_URL || (details.url.includes("/r/") && !details.url.includes("comments"))) {
        chrome.storage.sync.get("REDIRECTION_ENABLED", ({ redirection_enabled }) => {
            if (redirection_enabled) {
                chrome.tabs.update({ url: REDIRECT_URL }); // Redirect to google.com
            }
        });
    }
});