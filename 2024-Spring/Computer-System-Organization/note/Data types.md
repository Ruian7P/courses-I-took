- when define the data type (int, char, float/double), create byte space (each byte have 8 bits)
  - int: 4 byte
  - char: 1 byte
  - float/double: 4/8 byte

### int:
  - hex: 0x____
  - binary:  0b____

### float/double
  - Store sign (1 bit); Store exponent (8 bits); Store fraction;
    - Exponent: Base 127; Exponent - 127 = how many bits to move; eg. for float 7.5, 111.1,  need move 2 bits to be 1.111, Exponent = 129, which is 10000001 in binary;
    - Fraction: don't count the first 1; eg. for 7.5, 111.1, after moved 2 bit, it becomes 1.111 Fraction = 111
    - for float 7.5, it stores 0 | 10000001 | 111 0000 0000 0000 0000

      
