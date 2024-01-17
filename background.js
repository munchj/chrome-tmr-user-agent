const rules = {
  removeRuleIds: [1],
  addRules: [
    {
      id: 1,
      priority: 1,
      action: {
        type: "modifyHeaders",
        requestHeaders: [
          {
            header: "user-agent",
            operation: "set",
            value: `Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36`,
          },
        ],
      },
      condition: {
        resourceTypes: ["main_frame"],
        urlFilter: "force",
      },
    },
  ],
};

chrome.runtime.onInstalled.addListener(function(details) {
    chrome.declarativeNetRequest.updateDynamicRules(rules);
});