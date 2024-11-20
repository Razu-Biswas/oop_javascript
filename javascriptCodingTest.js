// Remove duplicate elements from array and

const array = [1, 24, 5, 6, 767, 8, 8, 8, 8, 6, 6]

const uniqueElements = array.filter((element, index) => {
    console.log(element, index)
    return array.indexOf(element) === index;
})


console.log(uniqueElements)