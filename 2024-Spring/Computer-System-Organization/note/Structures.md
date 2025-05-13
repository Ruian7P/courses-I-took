## struct
- **Concept**
  ``` c
  struct student
  {
    char* id;
    char* 3course[3];
  }
  
  typedef struct student
  {
    char* id;
    char* 3course[3];
  }stu;                  //same as first one
  
  struct student s1[10];
  
  stu s1[10]; //same as first one
  ```
- **->** (arrow operator)
  ```c
  struct point p2 = {1.5, -3.1};
  struct point *ppoint;
  ppoint = & p2;
  ppoint-> x;  // is the same as (*ppoint).x;
  ```


## node
- **Concept**
  - 1.
  ``` c
  struct node
  {
    int data;
    struct node* next;
  }
  ```
    - 2.
  ``` c
  typedef struct node
  {
    int data;
    struct node* next;
  }node, *LinkedList;
  ```
This means we can node or LinkedList as the structure header.

- **Methods**
  - addFront()
    ```c
    void addFront(node* n, node** head)
    {
      n -> next = (*head);
      (*head) = n;
    }
    
  - swapFirstandSecond()
    ``` c
    struct node* temp = *head ->next;
    *head ->next ->next =*head;
    *head ->next = *temp ->next;
    *head = temp;
    ```
    
    
  
