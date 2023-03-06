const b= function (xyz) {
    console.log("b called");
    return xyz
}
console.log(b(xyz));
console.log(b(xyz)());

function xyz() {
    console.log("xyz called");
}