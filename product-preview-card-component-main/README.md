# Product preview card component

![Design preview for the Product preview card component coding challenge](./assets/desktop-design.jpg)

## Welcome! 👋

**To do this challenge, you need a basic understanding of HTML and CSS.**

## The challenge

Your challenge is to build out this product preview card component and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

## Test Cases Overview

The following test cases are implemented to ensure the Product Preview Card Component works as expected. The corresponding CSS classes are used for selecting the elements:

1.  **Product Image Display**

    - **Test**: The product image should be visible.
    - **Selector**: `img[alt="A bottle of perfume surrounded by foliage"]`

2.  **Category Display**

    - **Test**: The category should be displayed as "Perfume".
    - **Selector**: `.category`
    - **Class**: `category`

3.  **Product Name Display**

    - **Test**: The product name should be "Gabrielle Essence Eau De Parfum".
    - **Selector**: `h1`
    - **Class**: None (assumes direct child of a known container)

4.  **Product Description Display**

    - **Test**: The product description should be displayed correctly.
    - **Selector**: `.product-desc p`
    - **Class**: `product-desc`

5.  **Sale Price Display**

    - **Test**: The sale price should be "$149.99".
    - **Selector**: `.sale-price`
    - **Class**: `sale-price`

6.  **List Price Display**

    - **Test**: The list price should be "$169.99".
    - **Selector**: `.list-price`
    - **Class**: `list-price`

7.  **Add to Cart Button Display**

    - **Test**: The "Add to Cart" button should be visible and contain the text "Add to Cart".
    - **Selector**: `button`
    - **Class**: None (assumes button is styled but not uniquely classed)

8.  **Button Hover Color Change**

    - **Test**: The button's background color should change on hover.
    - **Selector**: `button`
    - **Class**: None (assumes button is styled but not uniquely classed)
    - **Expected Hover Color**: `rgb(60, 128, 103)`

9.  **Navigation to Crio Website**

    - **Test**: Clicking "Challenge by Crio" should navigate to the Crio website.
    - **Selector**: `footer .attribution a`
    - **Class**: `attribution`
    - **Expected URL**: `https://www.crio.do`

**Have fun building!** 🚀
