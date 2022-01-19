/**
 * This script gets executed in the background for every chrome tab
 */

 let REDIRECTION_ENABLED = true;
 let HIDE_FEED_ENABLED = false;
 const REDIRECT_URL = "https://google.com/";
 const BLOCK_URL = "https://www.reddit.com/";

// Set the default values to storage
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ REDIRECTION_ENABLED });
    chrome.storage.sync.set({ HIDE_FEED_ENABLED });
});

// Listen for url navigation on any tab
chrome.webNavigation.onBeforeNavigate.addListener(function (details) {
    console.log(details.url)
    if (details.url == BLOCK_URL || (details.url.includes("/r/") && !details.url.includes("comments"))) {
        chrome.storage.sync.get("REDIRECTION_ENABLED", ({ REDIRECTION_ENABLED }) => {
            console.log(REDIRECTION_ENABLED)
            if (REDIRECTION_ENABLED) {
                chrome.tabs.update({ url: REDIRECT_URL }); // Redirect to google.com
            }
        });
    }
});