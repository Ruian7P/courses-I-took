# include <stdio.h>

void swap (void *item1, void *item2, int size)
{
  char *x = (char *) item1;    //char *x follows the first byte of item1, and follows every one byte
  char *y = (char *) item2;
  char tmp; // 1 byte of storage

  int i;
  for (i =0; i < size; i++){
    tmp = x[i];
    x[i] = y[i];
    y[i] = tmp;
  }

  return 0;
}
