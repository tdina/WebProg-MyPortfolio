// Please see documentation at https://docs.microsoft.com/aspnet/
// for details on configuring this project to bundle and minify s

// Write your Javascript code.
function getCount() {
    var elems = {};
    Array.from(document.querySelectorAll('*')).forEach(el => {
        if (elems[el.nodeName] == null) {
            elems[el.nodeName] = 1;
        } else {
            ++elems[el.nodeName];
        }
    });
    Object.keys(elems).forEach(el => console.log(`${el}: ${elems[
}

function playWithArray() {
    let arr = [];
    console.log('Row Array: ');
    for (let i = 0; i < 1000; ++i) {
        arr.push(getRandomInt(2000) - 1000);
        if (i <= 2 || i >= 997) {
            console.log(i + 1 + ': ' + arr[i] + ' ');
        }
        if (i == 5) console.log('...   ...   ...');
    }
    console.log(`min: ${min(arr)}`);
    console.log(`max: ${max(arr)}`);
    console.log(`avg: ${avg(arr)}`);

    arr = quickSort(arr, 0, arr.length - 1);
    for (let i = 0; i < 1000; ++i) {
        if (i <= 2 || i >= 997) {
            console.log(i + 1 + ': ' + arr[i] + ' ');
        }
        if (i == 5) console.log('...   ...   ...');
    }
}

function quickSort(arr, left, right) {
    let i = left;
    let j = right;
    let pivotIdx = Math.floor((right + left) / 2);
    let pivotElem = parseInt(arr[pivotIdx]);

    while (i <= j) {
        while (parseInt(arr[i]) < pivotElem)
            i++;
        while (parseInt(arr[j]) > pivotElem)
            j--;
        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }

    if (left < j)
        quickSort(arr, left, j);
    if (i < right)
        quickSort(arr, i, right);

    return arr;
}

function min(arr) {

    let res = arr[0];

    for (let i = 0; i < arr.length; ++i) {
        let item = arr[i];
        res = item < res ? item : res;
    }

    return res;
}

function max(arr) {

    let res = arr[0];

    for (let i = 0; i < arr.length; ++i) {
        let item = arr[i];
        res = item > res ? item : res;
    }

    return res;
}

function avg(arr) {

    let res = 0;

    for (let i = 0; i < arr.length; ++i) {
        let item = arr[i];
        res += item / arr.length;
    }

    return res;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function main() {
    console.clear();
    switch (prompt('What do u want?\n  (1)get count for tags\n  (
        case '1':
            getCount.call();
            alert('take a look at the console');
            break;
        case '2':
            playWithArray.call();
            alert('take a look at the console');
            break;
        case 'nothing':
            alert('fair enough');
            break;
        default:
            alert('fair enough');
            break;
    }
}
document.querySelector('button').addEventListener('click', main);
