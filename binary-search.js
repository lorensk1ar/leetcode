/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function search(numbers, target) {
    // set left and right pointers
    let left = 0;
    let right = numbers.length - 1;

    // loop until done
    while (left <= right) {
        // calculate midpoint
        let middle = Math.floor((left + right) / 2);

        // compare midpoint with target
        if (target < numbers[middle]) {
            // adjust pointers
            right = middle - 1;
        } else if (target > numbers[middle]) {
            left = middle + 1;
        } else {
            return middle;
        }
    }
    // if target not found
    return -1;
}
