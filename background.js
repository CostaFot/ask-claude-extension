chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "askClaude",
    title: "Ask Claude: \"%s\"",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId !== "askClaude") return;
  const text = `I selected "${info.selectionText}" on my browser\n\nI would normally Google this. Tell me what I need to know.`;
  chrome.tabs.create({ url: `https://claude.ai/new?q=${encodeURIComponent(text)}` });
});