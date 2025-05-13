## String and Character
### Character: '', not terminate with '\0'. 'n'
### String: "", terminate with '\0'. **a array of character**. "name"
- char name[10] ={'n','a','m','e'}
- char str[] = "name"     ==     char str[5] = "name"

#### [important!]
- char s[10] = "hello"    // s is the address of the first character of "hello"
  - create String "hello", **copy** the characters in "hello" into the array, fill the left char with '\0'
- char *c = "hello"      // c is the address of the first character of "hello"
  - create String "hello" (in **read-only** data memory), give the address of first character of "hello" to pointer c
- character in s is changeable, but character in c is not (since read-only)

#### Length of a String
```
int length(char *str)
{
  int length = 0;
  while ((*(str+length)) != '\0')
  {
      length ++;
  }
  return length;
}
```
    
