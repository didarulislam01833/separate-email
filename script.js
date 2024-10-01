document.getElementById('extractBtn').addEventListener('click', function () {
    let inputText = document.getElementById('inputText').value;

    // Regular Expression to match email addresses
    let emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

    // Extract emails using match method
    let emails = inputText.match(emailPattern);

    // Check if any emails are found
    if (emails) {
        // Join the emails with a comma and space for display
        document.getElementById('output').textContent = emails.join(', ');
    } else {
        document.getElementById('output').textContent = 'No valid emails found.';
    }
});