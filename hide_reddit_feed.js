import {BLOCK_URL} from './consts.js';
let current_url = document.location.href

if (BLOCK_URL.includes(current_url)) {
    chrome.storage.sync.get("HIDE_FEED_ENABLED", ({ hide_feed_enabled }) => {
        if (hide_feed_enabled) {
            var existCondition = setInterval(function () {
                var feed = document.getElementsByClassName("hciOr5UGrnYrZxB11tX9s")[0]
                if (feed) {
                    clearInterval(existCondition);
                    // hideFeed(feed);
                }
            }, 50);
        }
    });
}

function hideFeed(feed) {
    /**
     * Hides the feed HTML element by setting its display property to none
     */
    feed.style.display = "none"
}
