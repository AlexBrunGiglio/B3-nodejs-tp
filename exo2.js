let string1 = "1";
let string2 = "2";

function add(input1, input2) {
    if (input1 == "")
        input1 = "0";
    else if (input2 == "")
        input2 = "0";

    const number1 = Number(input1);
    const number2 = Number(input2);
    return `${number1 + number2}`;
}

const result = add(string1, string2);
console.log(result);