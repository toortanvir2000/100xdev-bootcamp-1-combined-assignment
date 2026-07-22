// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("node:fs");

const fileContent = fs.readFileSync("Week-02/01-async-js/medium/clean-file.txt", "utf-8");
const updatedString = fileContent.replaceAll(/\s+/g, " "); // the regex checks for concurrent whitespaces
fs.writeFileSync("Week-02/01-async-js/medium/clean-file.txt", `The previous string was --> ${fileContent} \nThe new clean string is --> ${updatedString}`);

