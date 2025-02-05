// Content script that runs on web pages
console.log("Content script loaded");

// Example function to handle scroll events
function handleScroll() {
  const scrollPosition = window.scrollY;
  // Send message to background script
  chrome.runtime.sendMessage({
    type: "SCROLL_POSITION",
    payload: scrollPosition,
  });
}

// Add scroll event listener
window.addEventListener("scroll", handleScroll);

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "GET_SCROLL_POSITION") {
    sendResponse({ scrollPosition: window.scrollY });
  }
});
