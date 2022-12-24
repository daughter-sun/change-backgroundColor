// یک صفحه با یک متن دلخواه داشته باشید (متن در وسط صفحه)
// و سپس بک گراند بادی را هر 5 ثانیه یک بار به صورت رندوم تغییر بدید

console.log(document.body)
let colorsArray = ['red', 'yellow', 'blue', 'green', 'pink', 'gray']
let randomColorIndex
setInterval(function () {
    randomColorIndex = Math.floor(Math.random() * colorsArray.length)
    document.body.style.backgroundColor = colorsArray[randomColorIndex]
}, 2000)

/////////// Second Way //////////////////

// let redValue, greenValue, blueValue
// setInterval(function () {
//     redValue = Math.floor(Math.random() * 255)
//     greenValue = Math.floor(Math.random() * 255)
//     blueValue = Math.floor(Math.random() * 255)

//     console.log('rgb(' + redValue + ',' + greenValue + ',' + blueValue + ');')

//     document.body.style.backgroundColor = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')'
// }, 2000)