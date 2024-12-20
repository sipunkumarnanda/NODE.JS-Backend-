### **Environment Variables: In-Depth Explanation and Notes**

An **environment variable** is a dynamic value that can affect the behavior of processes or programs on a computer. It is a key-value pair used by the operating system or software applications to store configuration settings, system information, or paths to resources that the program or system can access during execution.

Environment variables help programs know important details, such as where to find necessary files, what user is logged in, or what language should be used, without needing to hard-code these details into the program itself.

---

An **environment variable** is a key-value pair that stores information about the system or user settings that programs and processes can use. It helps configure how programs run by providing details like paths to important files, user preferences, and system settings.

### Uses of Environment Variables:
1. **Configuration**: They store system settings like file paths, language settings, or user information.
2. **Program Behavior**: Programs can read these variables to know how to behave (e.g., where to find files, which version to use).
3. **Security**: Sensitive information like API keys or passwords can be stored in environment variables instead of hardcoding them in the application code.

---

### **1. What are Environment Variables?**

- **Definition**: Environment variables are dynamic values that affect the way processes or applications run in an operating system.
- **Purpose**: They provide configuration details or settings that programs can use, such as file paths, system locales, or application-specific settings.

#### **Example of an Environment Variable**
On Linux/WSL:
```bash
echo $HOME
```
Output:
```
/home/username
```

On Windows:
```bash
echo %USERNAME%
```
Output:
```
YourWindowsUsername
```

---

### **2. Why Are Environment Variables Important?**

1. **System Configuration**:
   - Control system-wide settings like PATH, locale, and timezone.
2. **Application Behavior**:
   - Pass settings (e.g., database credentials) to applications without hardcoding.
3. **Portability**:
   - Make software configurable across environments (e.g., development, testing, production).
4. **Security**:
   - Store sensitive data like API keys securely.

---

### **3. Types of Environment Variables**

#### **a) System Environment Variables**
   - Defined by the operating system and available to all users and processes.
   - Examples:
     - **Linux/WSL**: `$PATH`, `$HOME`, `$SHELL`
     - **Windows**: `%WINDIR%`, `%SYSTEMROOT%`

#### **b) User Environment Variables**
   - Defined for a specific user and only available within their session.
   - Examples:
     - `USER`: The name of the currently logged-in user.
     - `HOME` or `USERPROFILE`: The user’s home directory.

#### **c) Session Environment Variables**
   - Temporary variables set during a session, lost after the session ends.
   - Example:
     ```bash
     export TEMP_VAR="Hello World"
     echo $TEMP_VAR
     ```
     Output:
     ```
     Hello World
     ```
     (This variable will disappear when you close the terminal.)

#### **d) Application-Specific Variables**
   - Used by specific programs or scripts.
   - Example: Setting the `NODE_ENV` variable for a Node.js app:
     ```bash
     export NODE_ENV=development
     ```

---

### **4. Common Environment Variables**

| Variable   | Purpose                                          | Example Value                          |
|------------|--------------------------------------------------|----------------------------------------|
| `PATH`     | Directories where the shell looks for executables | `/usr/bin:/bin:/usr/local/bin`         |
| `HOME`     | User’s home directory                            | `/home/username`                       |
| `SHELL`    | Default shell for the user                       | `/bin/bash`                            |
| `NODE_ENV` | Node.js environment mode                         | `development`, `production`            |
| `PWD`      | Current working directory                        | `/home/username/projects`              |

---

### **5. How to Work with Environment Variables**

#### **a) Viewing Environment Variables**

- **Linux/WSL**:
  ```bash
  printenv
  ```
- **Windows (via PowerShell)**:
  ```powershell
  Get-ChildItem Env:
  ```

#### **b) Setting Environment Variables**

- **Temporarily in Shell**:
  - Linux/WSL:
    ```bash
    export MY_VAR="This is a test"
    echo $MY_VAR
    ```
  - Windows (Command Prompt):
    ```cmd
    set MY_VAR=This is a test
    echo %MY_VAR%
    ```

- **Permanently in Linux/WSL**:
  1. Open the shell configuration file:
     ```bash
     nano ~/.bashrc
     ```
  2. Add the line:
     ```bash
     export MY_VAR="Permanent Value"
     ```
  3. Reload the shell:
     ```bash
     source ~/.bashrc
     ```

- **Permanently in Windows**:
  1. Open Environment Variables settings:
     - Press `Win + R`, type `sysdm.cpl`, and hit Enter.
     - Navigate to the **Advanced** tab → **Environment Variables**.
  2. Add a new variable under User or System variables.

#### **c) Unsetting Environment Variables**

- **Linux/WSL**:
  ```bash
  unset MY_VAR
  ```
- **Windows**:
  ```cmd
  set MY_VAR=
  ```

---

### **6. Environment Variables in Node.js**

#### **a) Accessing Environment Variables**
Node.js provides access to environment variables through the `process.env` object.

Example:
```javascript
console.log(process.env.PATH);
console.log(process.env.NODE_ENV);
```

#### **b) Setting Environment Variables for Node.js**

1. **In the Shell**:
   ```bash
   export NODE_ENV=production
   node app.js
   ```

2. **Using `.env` Files**:
   - Install the `dotenv` package:
     ```bash
     npm install dotenv
     ```
   - Create a `.env` file:
     ```
     PORT=3000
     DB_HOST=localhost
     ```
   - Load the file in your app:
     ```javascript
     require('dotenv').config();
     console.log(process.env.PORT);
     ```

---

### **7. Example: Adding an Executable to PATH**

#### **Objective**:
Run a custom executable (`myapp`) from anywhere in WSL.

1. **Create an Executable**:
   ```bash
   echo -e '#!/bin/bash\necho "Hello from MyApp!"' > myapp
   chmod +x myapp
   ```

2. **Add to PATH Temporarily**:
   ```bash
   export PATH=$PATH:/home/username/scripts
   ```

3. **Add to PATH Permanently**:
   - Edit `~/.bashrc`:
     ```bash
     export PATH=$PATH:/home/username/scripts
     ```
   - Reload the shell:
     ```bash
     source ~/.bashrc
     ```

4. **Test**:
   ```bash
   myapp
   ```
   Output:
   ```
   Hello from MyApp!
   ```

---

### **8. Summary**

1. **Definition**:
   - Environment variables are dynamic values affecting system and application behavior.

2. **Types**:
   - System, User, Session, and Application-specific variables.

3. **Common Variables**:
   - `PATH`, `HOME`, `NODE_ENV`, etc.

4. **Node.js**:
   - Access variables via `process.env`.
   - Use `.env` files for configuration.

5. **Practical Use**:
   - Add executables to `PATH` for easy access.
   - Use environment variables to secure and manage app configurations.

---