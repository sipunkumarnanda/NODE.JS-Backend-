
# 📡 Dynamic vs Static IP Address

When a device connects to a router (Wi-Fi or Ethernet), it needs an **IP address** to communicate over the network. This IP address can either be **dynamically assigned** by the router or **manually configured (static)** on the device.

---

## 🧠 Key Concepts

### ✅ What is an IP Address?

* An **IP (Internet Protocol) address** is a unique identifier assigned to each device connected to a network.
* It allows devices to send and receive data over a network or the internet.

---

## 🔄 Dynamic IP Address

### 🌐 DHCP (Dynamic Host Configuration Protocol)

* **DHCP** is a protocol used by routers to **automatically assign IP addresses** to connected devices.
* It ensures that every device gets a unique IP without manual setup.
* The router runs a **DHCP server**, which manages a **pool of IP addresses** (e.g., 192.168.1.2 – 192.168.1.100).

### 🔧 How it works:

1. A device connects to the router.
2. The device sends a request for an IP address.
3. The DHCP server assigns an **available IP address** from its configured range.
4. This IP is **leased temporarily**; it may change after the lease expires or when the device reconnects.

### 📝 Notes:

* **Dynamic IPs can change** every time a device connects to the network.
* DHCP is **enabled by default** in most home routers.
* If DHCP is **turned off**, devices won’t receive IP addresses automatically and must be configured manually.

---

## 📌 Static IP Address

### ✍️ What is a Static IP?

* A **Static IP address** is an IP that you manually assign to a device.
* It **does not change**, unlike a dynamic IP.

### 🔧 How to Assign:

* Manually configure IP in the device’s network settings (phone, PC, etc.).
* Ensure the IP is within the router’s subnet (e.g., if router IP is `192.168.1.1`, use something like `192.168.1.150`).
* The IP must not **conflict with any other device** or be part of the DHCP range (to avoid IP conflicts).

### 📱 On Devices:

* On **Android/iOS**, it is often labeled as **Static** in Wi-Fi settings.
* On **Windows/macOS**, it’s typically under **Manual** or **Static IP Configuration**.

---

## 🖥️ Reserved IP (Static via Router)

* Some routers allow you to **reserve IP addresses** for specific devices.
* You can bind a device's **MAC address** to a specific IP.
* Even though DHCP is on, the device will **always receive the same IP** when it connects.
* This is often called a **DHCP Reservation**.

---

## 🔍 MAC Address

* **MAC (Media Access Control) address** is a unique identifier assigned to a device’s network interface.
* Unlike IP addresses, MAC addresses **never change**.
* Routers use MAC addresses to identify devices for IP assignments, filtering, and reservations.

---

## ⚙️ DHCP Settings in Router Admin Panel

Most home routers offer a **web-based admin panel** (usually at `192.168.1.1` or `192.168.0.1`), where you can:

* Enable/Disable **DHCP server**
* Set **IP range** for dynamic allocation (e.g., 192.168.0.100 – 192.168.0.200)
* View all **connected devices**, their **IP addresses**, and **MAC addresses**
* **Reserve static IPs** for devices using MAC addresses

---

## 🧪 Key Differences: Dynamic vs Static IP

| Feature              | Dynamic IP                      | Static IP                            |
| -------------------- | ------------------------------- | ------------------------------------ |
| Assigned By          | DHCP Server (Router)            | Manually configured by user          |
| Changes Over Time    | Yes, may change                 | No, remains fixed                    |
| Configuration Effort | Automatic (plug & play)         | Manual setup required                |
| Best For             | Most home users, casual devices | Servers, printers, CCTV, special use |
| IP Conflict Risk     | Low (managed by DHCP)           | Medium (if not carefully assigned)   |

---

## 🧠 What Happens If DHCP is Disabled?

* Devices will **not receive an IP address automatically**.
* You must **manually assign a static IP** to each device.
* The manually assigned IP must:

  * Be within the router's subnet (e.g., `192.168.1.x`)
  * Not conflict with another device’s IP
* Without a valid IP, the device **cannot access the internet or network**.

---

## 📚 Summary

* **DHCP** is a protocol that dynamically assigns IP addresses.
* **Dynamic IP**: Changes, easy to use, managed by router.
* **Static IP**: Fixed, manual setup, useful for devices needing constant address.
* Routers can reserve static IPs for devices using **MAC addresses**.
* **MAC addresses are permanent** and uniquely identify a device on the network.

---