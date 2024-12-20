
```markdown
# Setting Environment Variables in Node.js Without Using the `export` Keyword

In Node.js, you can set environment variables without using the `export` keyword by using the following methods:

## 1. **Using `process.env` in Node.js**:
You can set environment variables directly in your Node.js script using `process.env`. This allows you to set variables that will only apply within your running application.

```javascript
// Set environment variable
process.env.MY_VARIABLE = 'value';

// Access the environment variable
console.log(process.env.MY_VARIABLE); // Output: 'value'
```

However, this method only affects the runtime of your application and does not modify the system's environment variables permanently.

## 2. **Using a `.env` file (dotenv library)**:
While you mentioned not using the `export` keyword, it's worth noting that using a `.env` file with a library like `dotenv` is a common approach in Node.js. You would typically set the environment variables in the `.env` file like this:

```
MY_VARIABLE=value
```

Then, you can load these variables into your application with the `dotenv` package:

```javascript
require('dotenv').config();

console.log(process.env.MY_VARIABLE); // Output: 'value'
```

## 3. **Setting Environment Variables via Command Line**:
You can also set environment variables temporarily in the command line when starting the application, without using `export`. On Linux/macOS, you can do this:

```bash
MY_VARIABLE=value node app.js
```

On Windows (CMD), use the following syntax:

```cmd
set MY_VARIABLE=value && node app.js
```

On Windows (PowerShell), you can use this:

```powershell
$env:MY_VARIABLE="value"; node app.js
```

This will set `MY_VARIABLE` only for the duration of the command execution.

## 4. **Using the `setx` Command in Windows**:
You can set a system-wide environment variable permanently on Windows using the `setx` command:

```cmd
setx MY_VARIABLE value
```

This command will create a permanent environment variable named `MY_VARIABLE` with the value `value`.

## 5. **Modifying the Windows Registry**:
For more advanced scenarios, you can directly modify system variables via the Windows registry using PowerShell, but this is not recommended unless you're familiar with it.

For example, using `reg add` to set a system-wide environment variable:

```powershell
reg add "HKCU\Environment" /v MY_VARIABLE /t REG_SZ /d "value" /f
```

This approach modifies the system registry, which sets environment variables permanently.

---

## Summary:

While the `export` keyword is a common way to set environment variables in Unix-based systems, these alternative methods can be used in Node.js and various operating systems.
```

