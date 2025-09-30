

// This function moves previous logic from button click event listener
function createHTML(inputElement, outputContainer, testOutput) {
    
    //  Add initial basic checks for input value from HTML selector
    const inputValue = inputElement.value.trim();

    if (inputValue) {
        // Clear the initial JS test message
        if (testOutput) {
            testOutput.textContent = '';
        }

        // Programmatically create structured HTML output
        const newEntry = document.createElement('div');
        newEntry.className = 'logged-item'; 

        const timestamp = new Date().toLocaleTimeString();
        newEntry.innerHTML = `
            <p style="margin: 5px 0; padding: 8px; border-left: 3px solid #5cb85c; background-color: #eaf8e9; font-size: 0.9em;">
                <strong>[${timestamp}]</strong> Logged Value: <em>${inputValue}</em>
            </p>
        `;

        // Append created content and HTML node to current DOM
        outputContainer.appendChild(newEntry);
        
        // Clear the input field for the next entry
        inputElement.value = '';

    } else {
        if (testOutput) {
            testOutput.textContent = 'Input is empty. Please enter a value.';
        }
        console.warn("Attempted submission with empty input.");
    }
}


// The main application function (app)
function app() {
    // Initial Test (from previous exercise)
    const testOutput = document.getElementById('feedbackMessage');
    
    if (testOutput) {
        testOutput.innerHTML = '<strong>[JS Test]</strong> The JavaScript file loaded and the <code>app()</code> function ran successfully.';
        console.log("App initialized and JS file check passed.");
    } else {
        console.error("Feedback message element not found.");
    }

    // Selectors for required nodes
    const inputElement = document.getElementById('dataInput');
    const submitButton = document.getElementById('submitButton');
    const outputContainer = document.getElementById('outputContainer');

    if (submitButton && inputElement && outputContainer && testOutput) {
        
        // Update event listener for the button's object (Previous exercise, updated in Exercise 3)
        submitButton.addEventListener('click', function() {
            console.log("Button clicked!");
            // Exercise 3: Replace hard coded logic with call to abstracted function
            createHTML(inputElement, outputContainer, testOutput); 
        });

        //Add event listener for keypress on object for input from DOM
        inputElement.addEventListener('keypress', function(event) {
            
            // Add initial code to check functionality of keypress, e.g. log to console
            console.log(`Key pressed: ${event.key} (Code: ${event.keyCode})`);

            //Use abstracted function when 'Enter' key is pressed
            if (event.key === 'Enter' || event.keyCode === 13) {
                // Prevent form submission/default behavior to keep the page clean
                event.preventDefault(); 
                
                // Replace hard coded logic with call to abstracted function
                createHTML(inputElement, outputContainer, testOutput); 
            }
        });

    } else {
        console.error("One or more required DOM elements (button, input, or output container) were not found.");
    }
}

// Ensure the application starts once the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', app);
