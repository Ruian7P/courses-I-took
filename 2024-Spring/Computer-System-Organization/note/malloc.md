- how to use malloc
  - 
    ````c
    int* p = (int*) malloc(sizeof(int)*10)   //this means int p[10]
    ````
    1. get the size of 10 times int: 10*4byyes = 40bytes
    2. Create this byte space which is used fro store int value
    3. p points to the address of head of this byte space (p point to the first 4 bytes, which store the first int value)
    ![int malloc](https://github.com/Ruian7P/CSO/blob/main/note/int%20malloc.png)
-
  ````c
  struct student{
    int id;
    char courses[20];
  }

  struct student* s1 = (struct student*) malloc(sizeof(struct student));
  ````
  1. get the size of struct student: (int id) 4bytes + (char courses[20]) 20bytes = 24 bytes
  2. Create this byte space which is used fro store int value
  3. p points to the address of head of this byte space

- free
 - int a, function,don't need memory release, but malloc need
 - free(p); free(s1);
