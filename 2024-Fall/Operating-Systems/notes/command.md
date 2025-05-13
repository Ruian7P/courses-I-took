### Commands
1. **pip (|)**: send the output of one command as the input to another command
   - eg. ps xc | grep "bash"
     - ps: display information about running processes, by default only processes associated with your terminal session
     - x: lists processes that are not attached to your terminal, including system and packground processes.
     - c: display only the command name for each process
     - ps xc: lists all running processes whether or not they are attached to your terminal and just show the command name for each process
     - grep: search for a pattern within the input
   - lists the command name for each running processes including those not attached to your terminal, and use this result as an input to filters out the lines only containing "bash"
2. **redirection (>)**: redirect the output of a command to a file
   - eg. echo "Hello World" > hello.txt
     - create or overwrite the file hello.txt with the text Hello World

3. **echo**: display text or the value of variables to the terminal
   - NAME = "A"
    echo "Hello, $A"
4. **cat**: concatenate and display the contents of files
   
    **Argument Parsing**
5. **apropos** keyword: find the manual page (man) related to a keyword
  - ```
    apropos getopt_long
6. **man** x keyword: provides access to Linux manual page specific to a page in section x and looking up for keyword
   - ```
      man 3 getopt_long
    
    **pseudodirectories**: exist in every directory 
7. **```.```(dot)**: This represents the current directory
8. **```..```(double dot)**: This represents the parent directory


- parent process
  - stdin 0 : keyboard input
  - stdout 1 : go to terminal
  - stderror 2 : go to terminal


### LAB 2
1. snprintf(char* buffer, sizeof(buffer), "%s/%s", firstString, secondString)
   - concatenate the two string and save into the buffer