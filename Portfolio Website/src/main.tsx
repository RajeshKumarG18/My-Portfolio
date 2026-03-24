import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";

function disableScrollRestoration() {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);
}

// Run on initial load and pageshow (covers reloads and bfcache restores)
function initPageReset() {
  disableScrollRestoration();
  
  // Handle pageshow event (bfcache restore)
  window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
      // BFCache restore - force fresh reload
      window.location.reload();
    } else {
      disableScrollRestoration();
    }
  });

  // Also on load for completeness
  window.addEventListener('load', disableScrollRestoration);
}

// Initialize immediately and after DOM ready
initPageReset();
document.addEventListener('DOMContentLoaded', initPageReset);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
