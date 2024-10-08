
```bash
echo "Hello from command.sh"
```

### Multi-line Comment:
```bash
: << 'END_COMMENT'
```

---

### **NOTE:**

- `./filename` : To run the file in bash.
- `ls -l` : To see all file permissions.

---

### **Removing Permissions of a File:**
```bash
chmod u-rwx, g-rwx , o-rwx filename
```
- **u** : User
- **g** : Group
- **o** : Others

### **Adding Permissions to a File:**
```bash
chmod u+rwx, g+rwx , o+rwx filename
```
- **u** : User
- **g** : Group
- **o** : Others

---

### **File Permissions and Their Numeric Representation:**

- **Read** (r) = 4
- **Write** (w) = 2
- **Execute** (x) = 1

---

```bash
END_COMMENT
```