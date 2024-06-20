# Newsletter sign-up form with success message

![Design preview for the Newsletter sign-up form with success message coding challenge](./assets/desktop-preview.jpg)

![Design preview for the Newsletter sign-up form with success message coding challenge](./assets/mobile-design.jpg)

![testCases preview for the Newsletter sign-up form with success message coding challenge](./assets/passed-test.jpeg)

## Welcome! 👋

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Test Cases

1.  **Display Main Elements:**
    
    -   Ensure that the main elements of the sign-up form page are visible, including the main container, sign-up form, left and right sides of the form, and footer.
2.  **Fill Out Form and Navigate to Success Page (Valid Email):**
    
    -   Fill out the sign-up form with a valid email address.
    -   Click the submit button.
    -   Verify that the URL includes "success.html", indicating successful navigation to the success page.
    -   Check that the "Thanks for subscribing!" message is visible on the success page.
    -   Confirm that the success message contains the valid email address.
3.  **Display Error Message with Invalid Email:**
    
    -   Attempt to fill out the sign-up form with an invalid email address.
    -   Click the submit button.
    -   Ensure that an error message is displayed indicating "Valid email required."
    -   Verify that the email input field is styled with a red border color (`rgb(255, 99, 71)`), text color (`rgb(255, 99, 71)`), and background color (`rgba(255, 99, 71, 0.6)`) to indicate the error state.
4.  **Dismiss Success Message and Return to Sign-up Form Page:**
    
    -   Fill out the sign-up form with a valid email address.
    -   Click the submit button.
    -   Click the dismiss button on the success message.
    -   Confirm that the URL returns to "index.html", indicating successful navigation back to the sign-up form page.
    -   Ensure that the sign-up form is visible again.
5.  **Verify Correct Font Family:**
    
    -   Check that the correct font family, "Roboto, sans-serif," is applied to the entire page body.