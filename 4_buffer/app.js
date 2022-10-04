const buf1 = Buffer.allocUnsafe(100);

// const buf1 = new Buffer('Hallo nama saya Bagaskoro'); // deprecated
const len = buf1.write("Hallo nama saya Bagaskoro");

console.log("Ocktets written :"+len);
console.log(buf1.toString());


/**
 * Write Multiple
 */
const buf2 = Buffer.allocUnsafe(26);

for (let index = 0; index < 26; index++) {
    buf2[index] = index + 97;
}

console.log(buf2.toString());
console.log(buf2.toString('ascii',2,8)); // default encoding is utf8

/**
 * Buff To Json
 */
console.log(buf2.toJSON());