chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "askClaude",
    title: "ELI5: \"%s\"",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId !== "askClaude") return;
  const query = encodeURIComponent("Explain this like I'm 5:\n\n" + info.selectionText);
  chrome.tabs.create({ url: `https://claude.ai/new?q=${query}` });
});