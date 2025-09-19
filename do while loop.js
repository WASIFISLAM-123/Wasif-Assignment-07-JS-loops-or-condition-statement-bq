
// DO WHILE LOOP Q/A //

// 11) Print numbers from 1 to 5 using a do...while loop ?

let onetofive = 1;
do {
    console.log("Ans:11")
    console.log(onetofive);
    onetofive = onetofive + 1;
} while (onetofive <= 5);

// 12)  Print the multiples of 3 up to 30 using a do...while loop ?

let threetothirty = 3;
do {
    console.log("Ans:12")
    console.log(threetothirty);
    threetothirty = threetothirty + 3;
} while (threetothirty <= 30);

// 13) Print numbers in reverse order from 15 down to 1 using a do...while loop ?

let downcountnum = 15;
do {
    console.log("Ans:13")
    console.log(downcountnum);
    downcountnum = downcountnum - 1;
} while (downcountnum >= 1);

// 14) Print numbers until the product exceeds 1000 using a do...while loop ?

let p = 1;
let product = 1;
do {
    console.log("Ans:14")
    console.log(p);
    product = product * p;
    p = p + 1;
} while (product <= 1000);
console.log("final product = " + product);

// 15) Use a do...while loop to print numbers from 1 to 10, but skip 5 ?

let skipfive = 1;
do {
    if (skipfive !== 5) {
        console.log("Ans:15")
        console.log(skipfive)
    }
    skipfive = skipfive + 1;
} while (skipfive <= 10);