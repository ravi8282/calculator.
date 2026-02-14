# calculator.
my project
# Calculator Documentation

## Overview
This project is a basic web calculator built with HTML, CSS, JavaScript, and Bootstrap 5.
It supports mouse and keyboard input for standard arithmetic operations.

## Technologies
- HTML5
- CSS3
- JavaScript (Vanilla)
- Bootstrap 5 (CDN)

## Project Files
- `calculator.html`: UI structure and button layout
- `style.css`: custom styling for calculator theme
- `script.js`: calculator logic and keyboard handling

## Features
- Number input (`0-9`)
- Decimal input (`.`)
- Operators: `+`, `-`, `*`, `/`, `%`
- `AC` to clear all
- `DEL` to remove last character
- `=` to evaluate expression
- Error handling for invalid expressions

## Keyboard Shortcuts
- Numbers: `0-9`
- Operators: `+`, `-`, `*`, `/`, `%`
- Decimal: `.`
- Calculate: `Enter` or `=`
- Delete last: `Backspace`
- Clear all: `C`

## Logic Summary
1. User clicks a button or presses a key.
2. Input is appended to the current expression.
3. Input is sanitized to allow only valid characters.
4. Expression is evaluated when `=` or `Enter` is triggered.
5. Result is shown in the display.

## How To Run
1. Open `calculator.html` in a browser.
2. Use on-screen buttons or keyboard to calculate.

## Notes
- Current evaluation uses JavaScript expression execution after sanitization.
- This is suitable for learning/demo purposes.
- For production use, replace evaluation with a dedicated expression parser.
