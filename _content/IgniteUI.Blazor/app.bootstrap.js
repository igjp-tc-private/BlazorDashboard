var currScript = document.currentScript;
var entryScript = document.createElement("script");
entryScript.async = false;
if (currScript.src.indexOf("?bustv2=") >= 0 || window.__igLibraryLoad) {
  window.__igEntryBundle = entryScript;
  if (window.__igSkipCacheBust) {
    entryScript.src = currScript.src.replace(/app.bootstrap.js/, "app.ed3e2b5b3cacd56b8df0.bundle.js");
  } else {
    entryScript.src = currScript.src.replace(/app\.bootstrap\.js\?bustv2=.*/, "app.ed3e2b5b3cacd56b8df0.bundle.js");
  }
  currScript.after(entryScript);
  //document.write(entryScript.outerHTML);
} else {
  if (window.__igSkipCacheBust) {
    entryScript.src = currScript.src.replace(/app.bootstrap.js/, "app.ed3e2b5b3cacd56b8df0.bundle.js");
  } else {
    entryScript.src = currScript.src.replace(/app\.bootstrap\.js\?bust=.*/, "app.ed3e2b5b3cacd56b8df0.bundle.js");
  }
  document.write(entryScript.outerHTML);
}
