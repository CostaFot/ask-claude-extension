const actions = [
  { id: "explain", label: "Explain", prompt: "Explain this briefly:\n\n" },
  { id: "summarise", label: "Summarise", prompt: "Summarise this:\n\n" },
  { id: "eli5", label: "ELI5", prompt: "Explain this like I'm 5:\n\n" },
  { id: "fix", label: "Fix / improve", prompt: "Fix or improve this text:\n\n" },
];

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "askClaudeParent",
    title: "Ask Claude",
    contexts: ["selection"],
  });

  actions.forEach(({ id, label }) => {
    chrome.contextMenus.create({
      id,
      parentId: "askClaudeParent",
      title: label,
      contexts: ["selection"],
    });
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  const action = actions.find((a) => a.id === info.menuItemId);
  if (!action) return;

  const query = encodeURIComponent(action.prompt + info.selectionText);
  chrome.tabs.create({ url: `https://claude.ai/new?q=${query}` });
});