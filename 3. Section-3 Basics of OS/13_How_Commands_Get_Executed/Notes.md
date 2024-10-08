In Bash, when you run a command (like `ls`, `echo`, etc.), Bash follows a specific order to determine **what** that command refers to. The command resolution process follows a strict priority based on **aliases**, **functions**, **built-in commands**, **hash table entries**, and **executable files**. Let’s go through this process in detail.

### 1. **Alias** (Highest Priority)
   An **alias** is a shorthand for a command or a series of commands. Aliases have the highest priority in command lookup.

   - Aliases are often defined in configuration files like `.bashrc` or `.bash_profile`.
   - You can define an alias with the command `alias`.
   - Example:
     ```bash
     alias ll='ls -la'
     ```
     Now, typing `ll` will invoke `ls -la`, not just `ls`.

   **Alias Resolution:**
   - When you type a command, Bash first checks if there’s an **alias** with that name.
   - If an alias exists, it’s substituted in place of the typed command.

   ```bash
   alias ls='ls --color=auto'
   ls
   ```
   Here, typing `ls` would expand to `ls --color=auto`.

   You can list all aliases using:
   ```bash
   alias
   ```

   

### 2. **Functions**
   If no alias is found, Bash then checks for **functions**. A function in Bash is a reusable block of code that can be called just like any other command.

   - You define functions like this:
     ```bash
     my_function() {
         echo "This is a function"
     }
     ```

   **Function Resolution:**
   - If a function with the same name as the command exists, it will be executed before other forms of the command.
   - Example:
     ```bash
     ls() {
       echo "Custom ls function"
     }
     ls
     ```
     Here, the function `ls` will override the standard `ls` command, so it will print "Custom ls function" instead of listing files.

   You can list all functions using:
   ```bash
   declare -f
   ```

### 3. **Built-in Commands**
   If no alias or function is found, Bash checks for **built-in commands**. Built-ins are commands that are part of Bash itself, implemented directly in the shell.

   - Examples of built-in commands include `cd`, `echo`, `exit`, `read`, `kill`, and `test`.
   - Built-ins execute faster than external programs because they are part of Bash and don’t require starting a new process.

   **Built-in Resolution:**
   - If a built-in command exists with the same name as the typed command, Bash will use the built-in command.

   To list all built-in commands, you can use:
   ```bash
   help
   ```

   If you want to bypass an alias, function, or external command and force the use of a built-in, you can use the `builtin` command:
   ```bash
   builtin echo "This will use the built-in echo"
   ```

### 4. **Hash Table (Cached Executables)**
   After built-ins, Bash checks its **hash table**. The hash table is an internal cache of the full paths to previously executed external commands (like `/usr/bin/ls`).

   - When you run a command, Bash looks for it in the directories listed in the `$PATH` environment variable.
   - Once a command is found, Bash stores its full path in the **hash table** for faster lookup the next time you run the command.
   - This speeds up execution because Bash doesn’t need to search through directories every time.

   **Hash Table Resolution:**
   - Bash checks the hash table to see if the command has been run before and whether the path to the executable is cached.
   - If it’s found in the hash table, the command is executed from the cached path.

   To see the contents of the hash table, use:
   ```bash
   hash
   ```

   To clear the hash table (in case the location of an executable has changed), use:
   ```bash
   hash -r
   ```

### 5. **Executable Files (Lowest Priority)**
   If no alias, function, built-in, or hash table entry is found, Bash finally searches for **executable files** in the directories listed in the `$PATH` environment variable.

   - Bash looks for the command in the directories defined in `$PATH` (like `/usr/bin`, `/bin`, etc.).
   - It searches from left to right, meaning directories listed earlier in `$PATH` are searched first.

   **Executable Resolution:**
   - If an executable file with the same name as the command is found, Bash runs that file.
   - If no executable is found, you’ll get an error like:
     ```bash
     bash: command: command not found
     ```

   You can see which executable file Bash is using for a command by running:
   ```bash
   which command
   ```
   or
   ```bash
   type command
   ```

   Example:
   ```bash
   which ls
   /usr/bin/ls
   ```

### Full Priority Order Recap:
1. **Alias:** Bash checks if there is an alias defined for the command.
2. **Function:** Bash checks if there’s a function with the same name.
3. **Built-in:** Bash checks if the command is a built-in Bash command.
4. **Hash Table:** Bash checks if the command’s path is already cached.
5. **Executable Files:** Bash searches for the command in the directories listed in `$PATH`.

### Example to Demonstrate the Priority:
```bash
alias mycommand='echo "This is an alias"'

mycommand() {
  echo "This is a function"
}

builtin mycommand() {
  echo "This is a built-in"
}

# Executing the command
mycommand
```

- Bash will execute the alias (`This is an alias`), because aliases take priority.
- If you remove the alias with `unalias mycommand`, then the function will be executed (`This is a function`).
- If no alias or function is defined, and if `mycommand` were a built-in or an executable, Bash would execute the built-in or search for the executable.

### Overriding Specific Command Types:
- You can force Bash to run specific types of commands:
  - Use `builtin` to run the built-in version of a command.
  - Use `command` to bypass functions and aliases, forcing execution of built-ins or executables:
    ```bash
    command ls
    ```

By understanding this priority order, you can control the behavior of your scripts and avoid conflicts between different types of commands!