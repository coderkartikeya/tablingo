
chrome.tabs.onCreated.addListener(function(tab) {
      var a=tab.index;
      console.log((a));
      if (tab.index===(a+1)) chrome.tabs.create({ url: "index.html" });
});
