import fs from "fs";

const writeStream = fs.createWriteStream("file.txt", { highWaterMark: 4 });

// console.log(writeStream.writableHighWaterMark); // 4

// console.log(writeStream.writableLength);  // 0

let i = 1;

writeStream.on("drain", () => {
  console.log("Drain: ", writeStream.writableLength);
  write100A();
});

write100A();

function write100A() {
  while (i <= 1000) {
    console.log(writeStream.writableLength);
    const isEmpty = writeStream.write("a");
    i++;
    if (!isEmpty) {
      break;
    }
    console.log("IS EMPTY : ", isEmpty);
  }
}
