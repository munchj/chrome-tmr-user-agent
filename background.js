const condition = {
  'isUrlFilterCaseSensitive': false,
  'resourceTypes': Object.values(chrome.declarativeNetRequest.ResourceType),
  'urlFilter': "*",
};

const one = {
  'id': 1,
  'priority': 1,
  'action': {
    'type': 'modifyHeaders',
    'requestHeaders': [{
      'operation': 'set',
      'header': 'user-agent',
      'value': `Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36`
    }]
  },
  'condition': {
    ...condition
  }
};

chrome.runtime.onInstalled.addListener(async function(details) {
    const o = {
      addRules: [one],
      removeRuleIds: (await chrome.declarativeNetRequest.getDynamicRules()).map(o => o.id)
    };


    chrome.declarativeNetRequest.updateDynamicRules(o);
});