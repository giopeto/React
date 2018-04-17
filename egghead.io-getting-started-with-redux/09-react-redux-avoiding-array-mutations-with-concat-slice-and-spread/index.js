const testEqual = (expected, actual) => {
    return JSON.stringify(expected)==JSON.stringify(actual);
};

const addCounter = (list) => {
    return [...list, 0];
};

const removeCounter = (list, index) => {
    return [
        ...list.slice(0, index),
        ...list.slice(index + 1)
    ];
};

const incrementCounter = (list, index) => {
    return [
        ...list.slice(0, index),
        list[index] + 1,
        ...list.slice(index + 1)
    ];
};

// @Test
const testAddCounter = () => {
    const listBefore = [1];
    const listAfter = [1, 0];

    let result = testEqual(listAfter, addCounter(listBefore));
    console.log(result);
};

// @Test
const testRemoveCounter = () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 20];
    const indexForRemove = 1;

    let result = testEqual(listAfter, removeCounter(listBefore, indexForRemove));
    console.log(result);
};

// @Test
const testIncrementCounter = () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 11, 20];
    const indexForIncrement = 1;
    console.log(incrementCounter(listBefore, indexForIncrement));
    let result = testEqual(listAfter, incrementCounter(listBefore, indexForIncrement));
    console.log(result);
};

testAddCounter();
testRemoveCounter();
testIncrementCounter();




// @UtilTest
const testSpreadOperator = () => {
    let listOne = [1, 2, 3, 4, 5];
    let listTwo = ['a', 'b', 'c', 'd'];

    let mergedList = [
        ... listOne,
        'a1', 'b2', 11, 22,
        listOne[0]+100,
        ...listTwo
    ];

    console.log(mergedList);

};

// @UtilTest
const testSliceArray = () => {
    let listOne = [1, 2, 3, 4, 5];
    let listTwo = ['a', 'b', 'c', 'd'];

    console.log(listOne.slice(0, 1));
    console.log(listOne.slice(0, 2));
    console.log(listOne.slice(2)); //Only start number

};

//testSpreadOperator();
//testSliceArray();
