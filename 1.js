const text = "alagcgcdodol";
const res = text.split('').filter ((item, index, arr) => {
    return arr.indexOf(item) === index;
})
console.log(res)