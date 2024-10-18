chrome.contextMenus.create({
    id: "openCaseLink",
    title: "Open Case in Wolken",
    contexts: ["selection"]  // Show this menu item only when text is selected
});

chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === "openCaseLink") {
        const caseNumber = info.selectionText;
        const customLink = `https://broadcomcms-software-agent.wolkenservicedesk.com/wolken/esd/case-view?caseId=${caseNumber}`; // Custom Link Creation
        chrome.tabs.create({ url: customLink });
    }
});