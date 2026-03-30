# Ask Claude

> Companion blog post: [Mogged into building a Chrome extension](https://www.costafotiadis.com/mogged-into-building-a-chrome-extension/)

A Chrome extension that lets you right-click any selected text and ask Claude about it — without typing a thing.

## How it works

1. Select any text on a webpage
2. Right-click and choose **Ask Claude: "..."**
3. A new tab opens on claude.ai with your question pre-filled and auto-submitted

The prompt sent to Claude is:

> I selected "..." on my browser
>
> I would normally Google this. Tell me what I need to know.

## Installation

This extension is not on the Chrome Web Store. Install it manually:

1. Download the latest `ask-claude-*.zip` from the [Releases](../../releases) page and unzip it
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer mode** (toggle in the top right)
4. Click **Load unpacked** and select the unzipped folder