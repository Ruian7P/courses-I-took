### Exam: 12pm - 1:45; 12.17

### Topics
- high level overview of OS, what is OS, why it exists
- processes: process'es view of memory and registers
  - stack frames
  - OS views of processes
- system calls (exec/fork)
- process/OS passing congtrols
- Shell (lab2), file descriptor, redirections, pipes
  - `cat output.txt | grep ...`

- Concurrency, threading, ...
  - critical sections, how to make sure things are atomic
  - no race conditions
  - mutexes, spinlocks, condition variables, monitors
  - what things can go wrong
    - deadlock (liveness), safety (correctness)
  - performance, made tradeoff w.r.t complexity, correctness
  - linearizability

- software safety (no therac-25)
- scheduling (when scheduling happens, what metric, what costs), specifics algorithms

 - context switching
 - memory management: virtual memory 
   - paging, page tables, multi-level page tables, protections, TLB
   - page fault (mechanics, costs, and uses)
   - page replacement policies (FIFO, LRU, CLOCK, Optimal)
   - Trashing
   - This is high relevant to the concept caching


(After Midterm)
- I/O (architecture, how CPUs and devices interact: mechanics, polling vs interrupts)
  - device drivers (enable os to communicate with hardware)
- disks (geomtry, performance, interface)
- File system (lab5)
  - basic object: files, directories, meta-data, links, inodes
  - how naming works
  - file layout (contiguous (array), linked list, indexed structure)
    - Unix and FFS are variant of indexed structure
    - tradeoff / performance
  - Consistency (data consistency, metadata consistency)
  - Crash recovery: ad-hoc, copy-on-write, journalling (redo, undo, combine)
- Protection and security
  - stack smashing / overflow
  - Trusting trust
  - Unix security (access control, privileges, setuid, attacks)
- The process from booting the computer to getting the terminal