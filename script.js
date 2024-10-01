// document.getElementById('extractBtn').addEventListener('click', function () {
//     let inputText = document.getElementById('inputText').value;

//     // Regular Expression to match email addresses
//     let emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

//     // Extract emails using match method
//     let emails = inputText.match(emailPattern);

//     // Check if any emails are found
//     if (emails) {
//         // Join the emails with a comma and space for display
//         document.getElementById('output').textContent = emails.join(', ');
//     } else {
//         document.getElementById('output').textContent = 'No valid emails found.';
//     }
// });


// document.getElementById('extractBtn').addEventListener('click', function () {
//     let inputText = document.getElementById('inputText').value;

//     // Regular Expression to match email addresses
//     let emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

//     // Extract emails using match method
//     let emails = inputText.match(emailPattern);

//     // Check if any emails are found
//     if (emails) {
//         // Join the emails with a comma and space for display
//         document.getElementById('output').textContent = emails.join(', ');
//     } else {
//         document.getElementById('output').textContent = 'No valid emails found.';
//     }
// });

// document.getElementById('extractBtn').addEventListener('click', function () {
//     const inputText = document.getElementById('inputText').value;

//     // Regular expression to extract emails
//     const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
//     const emails = inputText.match(emailPattern);

//     const outputTextarea = document.getElementById('output');

//     if (emails) {
//         // Join emails with tab (\t) separator for column-wise pasting in Excel
//         const formattedEmails = emails.join('\t');
//         outputTextarea.value = formattedEmails; // Set value of the textarea for copying
//     } else {
//         outputTextarea.value = 'No valid emails found';
//     }
// });


document.getElementById('extractBtn').addEventListener('click', function () {
    const inputText = document.getElementById('inputText').value;

    // Regular expression to extract emails
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    const emails = inputText.match(emailPattern);

    const outputTextarea = document.getElementById('output');

    if (emails) {
        // Join emails with newline (\n) separator for row-wise pasting in Excel
        const formattedEmails = emails.join('\n');
        outputTextarea.value = formattedEmails; // Set value of the textarea for copying
    } else {
        outputTextarea.value = 'No valid emails found';
    }
});


