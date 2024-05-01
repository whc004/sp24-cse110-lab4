function sumValues(num1, num2, add) {
    if (add) {
        const result = 0;
        result = num1 + num2; // This line would cause an error because you cannot reassign a constant.
        console.log('values added: ', result);
    } else return;
    console.log('final result: ', result);
}
sumValues(10, 10, true);