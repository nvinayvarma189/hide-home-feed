document.getElementById("optionsButton").addEventListener("click", takeToOptionsPage);
document.getElementById("redirectTOCustomURL").addEventListener("change", setRedirectValue);
// $("#redirectTOCustomURL").change('setRedirectValue');

function takeToOptionsPage() {
    console.log("options clicked")
    chrome.tabs.create({ 'url': "/options.html" })
}

function setRedirectValue() {
    console.log("redirect clicked")

    chrome.storage.sync.get("redirectionEnabled", ({ redirectionEnabled }) => {
        console.log("toggled value set")
        chrome.storage.sync.set({ redirectionEnabled: !redirectionEnabled });
    });

}