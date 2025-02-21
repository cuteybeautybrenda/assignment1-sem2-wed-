let x = 5;
if (x === "5") {
    console.log("equal");
} else {
    console.log("Not equal");
}


The output will be "Not equal", because the comparison x === "5" checks both value and type, 
and x is a number (5), while "5" is a string