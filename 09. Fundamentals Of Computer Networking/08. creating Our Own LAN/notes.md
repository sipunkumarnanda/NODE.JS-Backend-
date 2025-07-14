
# 🌐 Access VS Code Project on Any Device via Wi-Fi IP

---

## ✅ 1. **Open Folder in VS Code**

1. Open **VS Code**.
2. Go to **File → Open Folder** → Select your project folder.
3. You can now edit files inside.

---

## ✅ 2. **Install Live Server Extension (if not already)**

1. In VS Code, go to the **Extensions panel** (Ctrl+Shift+X).
2. Search for: `Live Server` (by Ritwick Dey).
3. Click **Install**.

---

## ✅ 3. **Find Your Local IP Address**

This is the IP address of your computer on your Wi-Fi network.

### On Windows:

1. Open **Command Prompt**.
2. Run:

   ```
   ipconfig
   ```
3. Look for:

   ```
   IPv4 Address. . . . . . . . . . . : 192.168.1.100
   ```

### On Mac/Linux:

Run in terminal:

```
ifconfig
```

Look for something like `inet 192.168.1.x`.

🧠 **This is the IP you’ll use on other devices**.

---

## ✅ 4. **Start Live Server on Your Project**

1. In VS Code, open your main HTML file (like `index.html`).
2. Right-click → **Open with Live Server**.

By default, it will open in the browser on:

```
http://127.0.0.1:5500/
```

This only works on your computer. To access it from other devices, we need to change it.

---

## ✅ 5. **Change Live Server Settings to Use Local IP**

1. In VS Code:

   * Go to **Settings** (Ctrl + ,)
   * Click the `{}` icon (top right) to open **settings.json** (User or Workspace)
2. Add this configuration:

```json
"liveServer.settings.host": "0.0.0.0"
```

This allows connections from **other devices** on the network.

3. Optional: Also make sure the port is 5500 or any free port:

```json
"liveServer.settings.port": 5500
```

---

## ✅ 6. **Restart Live Server**

1. Close Live Server (if running).
2. Start it again → Right-click `index.html` → "Open with Live Server".

Now it will be accessible on:

```
http://192.168.1.100:5500/
```

*(Replace with your real local IP)*

---

## ✅ 7. **Access from Other Devices on Same Wi-Fi**

* On your phone, tablet, or another laptop connected to the **same Wi-Fi**,
* Open browser → Type:

```
http://192.168.1.100:5500/
```

🎉 You can now see your project from any device.

---

## ⚠️ Trouble? Checklist

| Problem                           | Fix                                             |
| --------------------------------- | ----------------------------------------------- |
| Page doesn’t load on other device | Make sure PC and phone are on **same Wi-Fi**    |
| Still using 127.0.0.1?            | Set `host: "0.0.0.0"` in Live Server settings   |
| Port blocked?                     | Allow port 5500 in firewall or use another port |
| Still can’t access?               | Try disabling your firewall temporarily to test |

---

## 🔐 Important Note: This only works within your local Wi-Fi

* It's **not public on the internet**.
* Only devices on **your Wi-Fi network** can access it.
* For internet sharing (remote/public access), you’d need something like:

  * `ngrok`
  * `localhost.run`
  * Deploy to Netlify, Vercel, etc.

---