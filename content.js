let selectedCaseNumber = '';

// Function to highlight the selected text
document.addEventListener('dblclick', () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0 && selection.toString()) {
        selectedCaseNumber = selection.toString().trim();
        try {
            highlightSelection(selection);
        } catch (error) {
            console.error('Error highlighting selection:', error);
        }
    }
});

function highlightSelection(selection) {
    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.style.backgroundColor = 'inherit';  // Highlight color can be specified here
    try {
        range.surroundContents(span);  // Surrounding the range with a span element
    } catch (error) {
        console.error('Error surrounding contents with span:', error);
    }
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getCaseNumber") {
        if (selectedCaseNumber) {
            sendResponse({ caseNumber: selectedCaseNumber });
        } else {
            sendResponse({ error: 'No case number selected' });
        }
    }
});
