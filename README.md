# 2110426 (2/2023) Software Testing Lab

# Jest

## Background
Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly.

## Installation
1. Install `node` and `npm` into your computer. There are many sources, but you can start [here]
2. In terminal, type `node --version` and `npm --version` to check if they're correctly installed
3. Move to the `/jest` folder in this repository with the `cd /your-path` command
4. Type `npm install` to install all dependencies
5. Type `npm test` to run the test

If you see something like this, you're good to go!
```shell
 PASS  ./triangle.test.js
  triangleType function
    ✓ example case (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.194 s, estimated 1 s
```

## Jest Exercise
Please refer to the `.docx` file in this repository for the exercise.

# Cypress
This part is copy-pasted from the `.docx` file in this repository.

## Installation
Reference starting from this.
- Open Terminal and go into the folder you want to put Cypress test file in with this command. Tip: type `ls` to list all files in the folder.
```
cd /your-path
```
- Download https://nodejs.org/en/download and use `node --version` in the terminal to check if it's correctly installed
- npm install cypress --save-dev (Nothing will appear in folder, don’t worry)
- npx cypress open 
- Choose E2E Testing
- Create new empty spec

## Basic Commands (Commands)
```
.get()
.click()
.type()
.should()
```
Please refer to the official documentation for more details.

## Three Specs for exercise
Link for the form: https://panaryco.wixsite.com/myhotel

### Case 1: Submit should success.
Input all input with corrected data,  click “Submit”.

Then “Thanks for submitting!” should be visible.

### Case 2: Submit should not success.
Input all input with same data except wrong email format (ex. 123),  click “Submit”.

Then “Thanks for submitting!” should not be visible.

### Case 3: First name should be equal to what we input.
There is an error in this form. You can detect it by writing a simple spec.

Input first name input with very long first name (10 characters+), then check if value in the input match the value that we typed in.

**This spec should not pass because the first name input is limited length.**

This website example is a bit too specific (because it’s Wix) but the main thing is how access and verify components to test the system. 