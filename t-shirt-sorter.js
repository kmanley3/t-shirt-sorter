const shirts = [];


const smallSorter = (str) => {
    for(let i = 0; i < str.length; i++){
        if(str[i] === 's'){
            shirts.push(str[i])
            console.log(shirts)
        }
    }
    return mediumSorter(str)
}

const mediumSorter = str => {
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'm'){
            shirts.push(str[i])
            console.log(shirts)
        }
    }
    return largeSorter(str)
}

const largeSorter = str => {
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'l'){
            shirts.push(str[i])
            console.log(shirts)
        }
    }
    return shirts.join('')
}

console.log(smallSorter('llssmlsslml'))