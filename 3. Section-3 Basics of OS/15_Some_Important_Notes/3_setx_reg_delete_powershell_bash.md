
# Notes on Passing Environment Variables, `setx`, `reg delete`, and Using PowerShell in Bash

## 1. Passing Environment Variables to Child Processes

In **Bash**, environment variables can be passed to child processes in a few ways:

### A. Temporarily Set Environment Variable for a Command
You can pass environment variables to child processes by setting them inline with the command:
```bash
VAR_NAME=value command_to_run
```
For example, passing the `PATH` variable to a script:
```bash
PATH=/custom/path ./script.sh
```

### B. Using `export`
If you want to make an environment variable available to all child processes, use the `export` command:
```bash
export VAR_NAME=value
command_to_run
```
For example:
```bash
export MY_VAR="Hello"
./child_process.sh
```
In this case, `MY_VAR` will be available to `child_process.sh`.

## 2. Permanently Set Environment Variables using `setx` Command

In **Windows**, the `setx` command is used to set environment variables permanently. The variables set by `setx` are available across all future command-line sessions.

### A. Using `setx` to Set Environment Variables
To set a permanent environment variable, you can use:
```cmd
setx VAR_NAME value
```
For example:
```cmd
setx MY_VAR "SomeValue"
```
This sets `MY_VAR` permanently. However, **note that** the change won't affect the current session but will be available in future sessions.

### B. For User or System-wide Variables
To set a user-specific variable (default):
```cmd
setx MY_VAR "SomeValue"
```
To set a system-wide variable, you can use the `/M` flag (requires admin rights):
```cmd
setx MY_VAR "SomeValue" /M
```

## 3. Deleting Registry Entries with `Reg delete` in PowerShell

In **PowerShell**, you can use the `reg delete` command to delete registry keys or values, which effectively removes environment variables.

### A. Delete a Single Registry Value
To delete a registry value:
```powershell
reg delete "HKCU\Environment" /F /V VAR_NAME
```
- **`HKCU\Environment`**: Specifies the user-specific environment variables.
- **`/F`**: Forces deletion without asking for confirmation.
- **`/V VAR_NAME`**: Specifies the environment variable you want to delete.

### B. Example:
To delete the `MY_VAR` environment variable:
```powershell
reg delete "HKCU\Environment" /F /V MY_VAR
```

### C. Deleting a Key:
If you want to delete an entire registry key (e.g., `Environment`):
```powershell
reg delete "HKCU\Environment" /F
```

## 4. Using PowerShell Inside Bash

You can run PowerShell commands from within a Bash shell using the `powershell` command.

### A. Using `powershell -Command`
You can call PowerShell commands directly from a Bash shell by using `powershell -Command` followed by the PowerShell command you want to execute:
```bash
powershell -Command "Get-Process"
```

### B. Example:
To set an environment variable in PowerShell from Bash:
```bash
powershell -Command "$env:MY_VAR='Hello from PowerShell'"
```

This will set the `MY_VAR` environment variable in the PowerShell process. However, this will not affect the Bash shell environment.

### C. Running PowerShell Script from Bash:
You can also run a PowerShell script inside Bash:
```bash
powershell -File "C:/path/to/script.ps1"
```

## Summary of Commands:
- **Bash**: Set environment variables temporarily:
  ```bash
  VAR_NAME=value command_to_run
  ```
- **Windows (setx)**: Set permanent environment variables:
  ```cmd
  setx MY_VAR "value"
  ```
- **PowerShell (reg delete)**: Delete registry environment variables:
  ```powershell
  reg delete "HKCU\Environment" /F /V MY_VAR
  ```
- **PowerShell in Bash**: Execute PowerShell commands:
  ```bash
  powershell -Command "Get-Process"
  ```

These techniques allow you to manage environment variables across different shells and platforms.
