# 1. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^
It output "3" since i is equal to the length of the prices and output i.
# 2. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^
It output "150" since discountedPrice  is equal to 300*(1-0,5) which is 150 at the last iteration of for loop and output discountedPrice.
# 3. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^
It output "150" since finalPrice is equal to math,round(150*100)/100 which is 150 at the last iteration of for loop and output finalPrice.
# 4. ^^^ What will this function return? Give a brief explanation why. If the code causes an error, explain why. ^^^
It return "[ 50, 100, 150 ]" since the code pushes the finalprice to the discounted array each iteration and return discounted.
# 5. ^^^ What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).
The code causes ReferenceError since i is defined by let which only can use inside the for loop and is not accessible outside of the for loop.
# 6. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^
The code causes ReferenceError since discountedPrice is defined by let which only can use inside the for loop and is not accessible outside of the for loop.
# 7. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^
It output "150" since finalPrice is equal to math,round(150*100)/100 which is 150 at the last iteration of for loop and output finalPrice.
# 8. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^
It oureturntput "[ 50, 100, 150 ]" since the code pushes the finalprice to the discounted array each iteration and return discounted.
# 9. ^^^ What will happen at line 11 and why? If the code causes an error, explain why. ^^^
The code causes ReferenceError since i is defined by let which only can use inside the for loop and is not accessible outside of the for loop.
# 10. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^
It output "3" since length is equal to the length of the prices and output it. By the way, it declare as const but it doesn't matter since it do not change after declare it
# 11. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^
It return "[ 50, 100, 150 ]" since the code pushes the finalprice to the discounted array each iteration and return discounted.
# 12. Given the above Object, write the notation for:  (These should be in your part2.md)
## A. Accessing the value of the name property in the student object
student.name
## B. Accessing the value of the Grad Year property in the student object
student['Grad Year']
## C. Calling the function for the greeting property in the student object
student.greeting()
## D. Accessing the name property of the object in the Favorite Teacher property in student
student['Favorite Teacher'].name
## E. Access index zero in the array of the courseLoad property of the student object
student.courseLoad[0]

# 13. Arithmetic
## A. '3' + 2 
It output the string "32" since it converts to a string and concatenate them together.
## B. '3' - 2 
It output "1" (number) since it converts to a number and do the subtraction.
## C. 3 + null 
It output "3" (number) since null is treated as 0 for number.
## D. '3' + null 
It output the string "3null" since null is converted to the string "null" and concatenate them together.
## E. true + 3 
It output "4" (number) since true is treated as 1 for number.
## F. false + null 
It output "0" (number) since false and null are both treated as 0 for number.
## G. '3' + undefined 
It output "3undefined" since undefined is converted to the string "undefined" and concatenate them together.
## H. '3' - undefined 
It output "NaN" since undefined cannot treat as the number.

# 14. Comparison
## A. '2' > 1 
It outputs "true" since '2' is converted to number 2 and it is greater than 1.
## B. '2' < '12' 
It outputs "false" since JavaScript uses lexicographic order when comparing strings so that '2' is not less than '1' at the start.
## C. 2 == '2' 
It outputs "true" since the '==' operator converts '2' from string to number 2 for the comparison.
## D. 2 === '2' 
It outputs "false" since the '===' operator checks both value and type without converting and number 2 is equal to string '2'.
## E. true == 2 
It outputs "false" since true is converted to 1 and 1 is not equal to 2.
## F. true === Boolean(2) 
It outputs "true" since true equal to Boolean(2) which is true.


# 15. Explain the difference between the == and === operators.
We can use == operator to compare two different data types, since javascript is able to convert the variable from one data type to another data type so that we can use it to compare two different data types. On the other hand, we can use === operator to compare value and the data type at the same time which cause comparing two different type will always return false.

# 16. Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.  (This should be in a JS file part2-question16.js)

# 17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development. 
The result will be [ 2, 4, 6 ]. There are two funciton which are dosomething and modifyArray, dosomething function need only the parameter num and return 2 times num and modifyArray function need two parameters array and callback and return the new array that do the callback function for each elements in the array. Since it take [1,2,3] as the array parameter and return function as the callback parameter for modifyArray function, which do dosomething function (num*2) for each elements in the array.
# 18. The above program only prints out the time once when executed. Modify this code such that the program prints out the current time every second.  (This should be a JS file - part2-question18.js)

# 19. What is the output of the above code? (This should be in your part2.md)
The output is :
"1
4
3
2"