### mov
  - copy the data from one place, then paste it to another
  - ````
    long t0 = *x;  // movq (%rdi), %rax
    //*rdi is the address x, (%rdi) access the value at x
    ````

### lea (load effective address)
  - put the effective address of the operand into the destination register
  - Calculate the address without accessing the memory location
  - ````
    long t0 = 3x;  // leaq (%rdi, %rdi, 2) %rax
    //%rdi is x, just do arithmetic on x
    ````
    
