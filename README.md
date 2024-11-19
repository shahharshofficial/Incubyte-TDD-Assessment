# Incubyte TDD Kata - Frontend

This repository contains a frontend implementation of the **String Calculator TDD Kata**, as part of the Incubyte TDD Assessment. The project uses **React** (powered by Vite) and **Tailwind CSS** for a modern, fast, and responsive UI.

## Features

- Implements **TDD** for the String Calculator as per the assessment requirements.
- Dynamic user interface with:
  - An input box for entering numbers and delimiters.
  - A button to trigger the calculation.
  - Real-time display of the result.
- Handles all specified features:
  - Sum of comma-separated numbers.
  - Support for new line delimiters (e.g., `1\n2,3`).
  - Custom delimiter support (e.g., `//;\n1;2`).
  - Error handling for negative numbers (throws error with the list of negative numbers).
- Modular, clean, and readable code.
- Deployed to a public URL for easy access.

## Tech Stack

- **React**: Component-based library for building the UI.
- **Vite**: Lightning-fast build tool for development and production.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **TypeScript**: For type-safe and robust code.
- **Testing Library**: Ensures TDD principles are followed.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shahharshofficial/Incubyte-TDD-Assessment.git
   cd Incubyte-TDD-Assessment
   ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

## How to Use

1. **Open the application in your browser**.  
   (If running locally, navigate to `http://localhost:5173`.)

2. **Enter the numbers**:  
   - Input a string of numbers separated by commas or new lines in the provided text box.  
   - Example: `1,2,3` or `1\n2,3`.

3. **Optional - Specify a custom delimiter**:  
   - Enter the delimiter in the format `//[delimiter]\n`.  
   - Example: `//;\n1;2;3` (using `;` as a delimiter).

4. **Click the "Add" button**:  
   - This triggers the calculation of the sum.

5. **View the result**:  
   - The calculated sum will be displayed dynamically on the screen.  
   - If there are any errors (e.g., negative numbers), an error message will be shown.

### Example Usage

- **Input**: `//;\n1;2;3`  
  **Output**: `6`

- **Input**: `1\n2,3`  
  **Output**: `6`

- **Input**: `-1,2,-3`  
  **Output**: `Error: Negative numbers not allowed - -1, -3`

## Running Tests

To run the tests for this project, follow these steps:

1. Ensure dependencies are installed:
    ```bash
    npm install
    ```

2. Run the test cases:
    ```bash
    npm test
    ```

   This command will run all the tests using Jest and show the results in your terminal.

### Test Coverage

The tests ensure that the calculator behaves as expected for various cases including:

- Handling of empty strings.
- Summing numbers separated by commas or newlines.
- Support for custom delimiters.
- Error handling for negative numbers.

## Deployed Application

You can view the live application here: [Incubyte TDD Assessment](https://shahharshofficial.github.io/Incubyte-TDD-Assessment/)
