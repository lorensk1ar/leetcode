/*
 * @param {number} x
 * @return {number}
 */

var mySqrt = function(x) {
    if (x < 2) {
        return x;
    }
    
    // set left & right pointers
    let low = 0;
    let high = x;

    // loop until done
    while (high - low > 1) {
        // find midpoint
        average = Math.floor((low + high) / 2);
        square = average * average;

        // compare midpoint
        // adjust left & right
        if (square > x) {
            high = average;
        } else if (square < x) {
            low = average;
        } else {
            return average;
        }
    }
    return low;
};
