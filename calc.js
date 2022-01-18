const readline = require('readline')
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

console.log('Format for this calculator only allows 2 operands: [operation]_x_y\nFor Square Root use `sqrt` as the operator.')
reader.question(`Enter Your Expression: `, function(input){
    const splInput = input.split(' ')
    let num1 = Number(splInput[1])
    let num2 = Number(splInput[2])
    
    switch(splInput != null){
        case(splInput.includes('+')):{
            console.log(num1 + num2)
            break;
        }
        case(splInput.includes('-')):{
            console.log(num1-num2)
            break;
        }
        case(splInput.includes('/') && num1 !== 0 && num2 != 0):{
            console.log(num1/num2)
            break;
        }
        case(splInput.includes('*')):{
            console.log(num1*num2)
            break;
        }
        case(splInput.includes('sqrt')):{
            console.log(Math.sqrt(num1))
            break;
        }
    }
    reader.close()
})