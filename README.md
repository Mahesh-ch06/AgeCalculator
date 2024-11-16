# AgeDOBCalculator

The **AgeDOBCalculator** is a simple Java program that allows you to calculate either the **age** based on a given **Date of Birth (DOB)** and a **reference date**, or calculate a person's **DOB** based on their **age** and a reference date. This is a useful utility for anyone who needs to easily work with birth dates and ages in a simple text-based interface.

## Features

- **Calculate Age from DOB**: Given a **DOB** and a **reference date**, the program will calculate the exact age (in years, months, and days).
- **Calculate DOB from Age**: Given an **age** and a **reference date**, the program will calculate the corresponding **DOB**.
- The program uses the format `DD-MM-YYYY` for dates.

## Usage

1. Clone this repository or download the `AgeDOBCalculator.java` file.
2. Compile the program using the following command:
    ```bash
    javac AgeDOBCalculator.java
    ```
3. Run the program with:
    ```bash
    java AgeDOBCalculator
    ```

### Example 1: Calculate Age from DOB

```plaintext
Enter DOB or AGE (e.g., DOB=06-03-2005 or AGE=19):
DOB=06-03-2005
Enter the reference date (e.g., 22-10-2024):
22-10-2024

## How It Works

- The user can input either a **Date of Birth (DOB)** or an **Age**.
- If the input starts with `DOB=`, the program calculates the **age** using the provided **DOB** and **reference date**.
- If the input starts with `AGE=`, the program calculates the **DOB** based on the given **age** and **reference date**.
- The program works by splitting the provided dates using the `-` delimiter and converting them into integers for comparison. It then calculates the difference between the given dates (for **age** calculation) or adjusts the given **age** to compute the **DOB**.

## Requirements

- **Java 8** or higher (for compiling and running the program).
- A **terminal** or **command line interface** to run the program.
