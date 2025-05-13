## Why having these concepts
- Computer System doesn't have minus

## sign-and-magnitude (原码）
- **Concept**: number in Binary System. The leftmost bit indicate the sign of the number (0 for positive, 1 for negative)
  - eg. +5 = 0000 0101; -5 = 1000 0101

## One's Complement Representation （反码）
- **Concept**: positive number is the same, negative number is inverting all bits of its value part
    - eg. +5 is 0000 0101; -5 is 1111 1010

## Two's Complement Representation （补码）
- **Concept**: positive number is the same, negative number is inverting all bits of its value part and add one to the result
    - eg. +5 is 0000 0101; -5 is 1111 1011

## How to do 14-21
- Add the TCR of 14 and (-21) together:
  - 00001110 + 11101011 = 11111001 (the TCR of -7)
- Transfer the TCR of -7 to OCR to SM
  - From TCR to OCR: 11111001 -1 = 11111000
  - From OCR to SM: 10000111

## [Important]
- The range of a byte with 8 bits is from -128 to +127
- If its out the range, it will overflow, use 2 byte
- The TCR of 0 is 0000 0000, the TCR of -128 is 1000 0000
