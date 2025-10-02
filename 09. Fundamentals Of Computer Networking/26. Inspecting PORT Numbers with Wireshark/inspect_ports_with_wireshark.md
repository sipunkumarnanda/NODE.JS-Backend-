

# 🕵️‍♂️ Inspecting Port Numbers with Wireshark

Wireshark is a **network protocol analyzer** that lets you **capture and inspect network traffic** in real-time. You can use it to analyze **port numbers, IP addresses, protocols, and payload data**.

---

# 💻 What is Wireshark?

* **Wireshark** is a free and open-source application for **network troubleshooting and analysis**.
* Allows you to **capture packets** from your network interface and inspect them in detail.
* Supports almost all network protocols.
* Works on **Windows, macOS, and Linux**.

**Use Cases:**

* Debug network issues 🛠️
* Inspect **IP and port communication** 🌐
* Monitor **traffic for security analysis** 🔒

---

# ⚙️ How to Use Wireshark

1. **Install Wireshark**

   * Download from [wireshark.org](https://www.wireshark.org/)
   * Install following OS instructions.

2. **Open Wireshark**

   * Launch the app.
   * Select the **network interface** you want to capture from (Wi-Fi, Ethernet).

3. **Start Capturing Packets**

   * Click **“Start Capturing”** or the shark fin icon 🦈.
   * Wireshark begins to collect all packets passing through that interface.

4. **Stop Capturing**

   * Click **“Stop”** when you have enough data.

---

# 🔍 Inspecting Port Numbers

Each captured packet contains **source/destination IP addresses** and **source/destination port numbers**.

1. **Look at the Packet List**

   * Columns: No., Time, Source, Destination, Protocol, Length, Info
   * Protocol column often shows TCP, UDP, HTTP, etc.

2. **Expand TCP/UDP Details**

   * Click a packet → expand **Transmission Control Protocol** or **User Datagram Protocol**
   * You’ll see:

     * **Source Port** 🚪
     * **Destination Port** 🚪

3. **Filter by Port Numbers**

   * In the filter bar, type:

     ```
     tcp.port == 80
     udp.port == 53
     ```
   * Shows only packets with that specific port.

---

# 🌐 Filtering by IP Address

Wireshark allows filtering **source or destination IP** to inspect traffic for a specific host.

* **Filter by Source IP:**

  ```
  ip.src == 192.168.1.5
  ```
* **Filter by Destination IP:**

  ```
  ip.dst == 192.168.1.10
  ```
* **Filter by Both:**

  ```
  ip.src == 192.168.1.5 && ip.dst == 192.168.1.10
  ```

This helps you **narrow down the data** to only packets relevant to the communication you’re inspecting.

---

# 📝 Viewing Data

1. **Packet Bytes Pane**

   * Shows raw data in **hexadecimal and ASCII**.
   * Useful for inspecting **payload or headers**.

2. **Packet Details Pane**

   * Shows **protocol layers**: Ethernet → IP → TCP/UDP → Application Layer.
   * Expand **TCP/UDP layer** to see **source/destination ports**.

3. **Packet List Pane**

   * Quick overview of all captured packets.
   * Shows **source/destination IP, protocol, and info**.

---

# 🔑 Key Tips

* Use **display filters** (`tcp.port`, `udp.port`, `ip.src`, `ip.dst`) to focus on relevant traffic.
* Right-click a packet → **Follow → TCP Stream** to see the **entire conversation** between client and server.
* Combine filters for more precise inspection:

  ```
  tcp.port == 80 && ip.src == 192.168.1.5
  ```

---

# ⚡ Summary

* Wireshark is a **powerful tool** for capturing and analyzing network packets.
* **Port numbers** help you identify which application/service is sending or receiving data.
* Filtering by **IP addresses and ports** makes inspection easy and targeted.
* You can view both **high-level info** (source, destination, protocol) and **raw data** (payload).

---