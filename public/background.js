
// 如果你想点击扩展程序图标直接在新标签页打开网页的话，就可以配置这个，不过要注意，在manifest.json中不要配置默认的弹框页面
chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.create({ 'url': chrome.extension.getURL('index.html'), 'selected': true });
});