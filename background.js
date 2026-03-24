chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "askClaude",
    title: "Ask Claude: \"%s\"",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "askClaude") {
    const query = encodeURIComponent(info.selectionText);
    chrome.tabs.create({ url: `https://claude.ai/new?q=${query}` });
  }
});