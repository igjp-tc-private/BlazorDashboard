export async function beforeStart(options) {
      //console.log("starting ig");
      if (window.__igLoaded) {
        return new Promise((resolve, reject) => {
            resolve();
        });
      }

      window.__igLoaded = true;
      window.__igLibraryLoad = true;
      var timestamp = new Date().getTime().toString();
      var currScriptSrc = import.meta.url;
      var entryScript = document.createElement("script");
      entryScript.async = false;
      
      if (window.__igSkipCacheBust) {
        entryScript.src = currScriptSrc.replace("IgniteUI.Blazor.lib.module.js", "app.bootstrap.js");
      } else {
        entryScript.src = currScriptSrc.replace("IgniteUI.Blazor.lib.module.js", "app.bootstrap.js?bustv2=" + timestamp);
      }

      document.body.append(entryScript);
  
      return new Promise((resolve, reject) => {
          function checkEntryLoaded() {
              if (window.__igEntryBundle) {
                  window.__igEntryBundle.onload = () => {
                      //console.log("entry loaded");
                      delete window.__igEntryBundle;
                      resolve();
                  }
                  if (window.__igEntryBundle.readyState == 'complete' || window.__igEntryBundle.readyState == 'loaded') {
                      //console.log("entry already loaded");
                      delete window.__igEntryBundle;
                      resolve();
                  }
              }
          }
  
          entryScript.onload = () => {
              console.log("script loaded");
              checkEntryLoaded();
          }
          if (entryScript.readyState == 'complete' || entryScript.readyState == 'loaded') {
              console.log("script already loaded");
              checkEntryLoaded();
          }
      });
  }
  export async function afterStarted(blazor) {
      
  }
