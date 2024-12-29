function convertWindowsToBashPath(windowsPath) {
    // Replace backslashes with forward slashes
    let bashPath = windowsPath.replace(/\\/g, '/');

    // Replace the drive letter (e.g., C:) with /c
    bashPath = bashPath.replace(/^([A-Za-z]):/, (_, drive) => `/${drive.toLowerCase()}`);

    // Escape spaces, parentheses, and other special characters
    bashPath = bashPath.replace(/([ ()])/g, '\\$1');

    console.log(bashPath);
}

// Combine all input arguments to form the full Windows path
const windowsPath = process.argv.slice(2).join(' '); // Handles spaces automatically
// convertWindowsToBashPath(windowsPath);

const str = "Hii am a good boy"
console.log(str.join());
