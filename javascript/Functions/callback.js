setTimeout(() => {
    console.log("timeout");
}, 2000);

function x(y) {
    console.log("x called",y);

    y()
}

x(function y() {
    console.log(x);
    console.log("y called");
})