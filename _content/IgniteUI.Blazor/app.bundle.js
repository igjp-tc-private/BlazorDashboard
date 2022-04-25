if (window.__igLoaded) {
        //already loaded
  } else {
        window.__igLoaded = true;
        var timestamp = new Date().getTime().toString();
        var currScript = document.currentScript;
        var entryScript = document.createElement("script");
        entryScript.async = false;
        if (window.__igSkipCacheBust) {
            entryScript.src = currScript.src.replace("app.bundle.js", "app.bootstrap.js");
        } else {
            entryScript.src = currScript.src.replace("app.bundle.js", "app.bootstrap.js?bust=" + timestamp);
        }
        document.write(entryScript.outerHTML);
  }
