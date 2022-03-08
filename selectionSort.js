const insertionSort = (a) => {
    var low = 0;
    var temp;

    // iterate through array
    for (var i = 0; i < a.length; i++) {
        low = i;
        // find lowest in subarray
        for (var j = i; j < a.length; j++) {
            if (a[j] < a[low]) {
                console.log(`@ i:${i} j:${j} found : ${a[j]} <  ${a[low]}`)
                low = j;
            }
        }

        // switch lowest with leftmost in subarray
        console.log(`@@ i:${i} low:${low} switched ${a[i]} with ${a[low]}`)
        console.log()
        temp = a[i];
        a[i] = a[low];
        a[low] = temp;

    }

    return a;
};

arr1 = [6, 4, 5, 2, 8, 14, 1, 3];
console.log(arr1);
console.log(insertionSort(arr1));
