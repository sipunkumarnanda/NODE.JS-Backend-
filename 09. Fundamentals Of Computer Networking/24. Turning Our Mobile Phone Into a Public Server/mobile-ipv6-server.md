

# 📱 Turning Your Mobile Phone into a Public Server

---

## 1️⃣ Install Termux on Your Mobile 📥

* Termux is a **Linux environment for Android**.
* Install from **F-Droid** (recommended) or Google Play Store.
* Open Termux and **update packages**:

```bash
pkg update && pkg upgrade
```

---

## 2️⃣ Install Node.js ⚡

* Node.js allows you to run **JavaScript server-side**.
* Install Node.js in Termux:

```bash
pkg install nodejs
```

* Verify installation:

```bash
node -v
npm -v
```

---

## 3️⃣ Create Your Server File 📝

### Step 1: Create `app.js`

```bash
touch app.js
```

### Step 2: Open `app.js` in nano editor

```bash
nano app.js
```

### Step 3: Write a basic HTTP server code

```javascript
// Load HTTP module
const http = require('http');

// Define port
const port = 5500;

// Create server
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello from my mobile server! 🌐');
});

// Start server
server.listen(port, '::', () => {
    console.log(`Server running on [::]:${port}`);
});
```

### Step 4: Save and exit nano

* Press `Ctrl + X`, then `Y`, then `Enter`.

---

## 4️⃣ Run the Server ▶️

* Start the Node.js server:

```bash
node app.js
```

* Output should show:

```
Server running on [::]:5500
```

---

## 5️⃣ Access the Server via IPv6 🌐

* Find your mobile’s **global IPv6 address**:

```bash
ifconfig
```

* Look for `inet6` under your active interface.

* Access the server from a browser or another device using:

```
http://[YOUR_IPV6_ADDRESS]:5500/
```

* Example:

```
http://[2401:4900:3937:6650:xxxx:xxxx:xxxx:xxxx]:5500/
```

> ⚠️ Remember to use **square brackets `[ ]`** around IPv6 addresses when specifying ports.

---

## 6️⃣ Important Notes 📌

| Step          | Key Point                            | Emoji |
| ------------- | ------------------------------------ | ----- |
| Termux        | Linux environment on Android         | 📱    |
| Node.js       | Run JS server-side                   | ⚡     |
| app.js        | Server script file                   | 📝    |
| nano          | Edit file                            | ✏️    |
| `node app.js` | Start server                         | ▶️    |
| IPv6          | Use global address for public access | 🌐    |
| Save nano     | Ctrl + X → Y → Enter                 | 💾    |

---

## 7️⃣ Bonus Tips 💡

* To **keep server running in background**, use:

```bash
nohup node app.js &
```

* Ensure **firewall or mobile network allows incoming IPv6 connections**.
* Use **IPv6 testing websites** to verify public access.

---

This setup effectively turns your **mobile phone into a public server** accessible globally via IPv6.

---