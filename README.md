# Data structure and algorithms

Big O
-----
- Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity.

What is good code ?
1. Readable
2. Scalable 

- When we talk about Big O and scalability of code, we simply mean, when we go bigger and bigger with our input, how much does the algorithm slows down. The less its slow down or lower it slows down.

O(n) --> Linear Time (Big O notation for Linear)
- This means, lets say we have an array to search, 100 items there, we might search 100 times or the loop will run for 100 times. So the chances of looping is equal to the length of the array.

- If the input increase, number operations increases linearly.

O(1) --> Contant time
- Let say for example if we are going to console the first element of an  array always, not matter where the array size is big or small, number of operation will be 1. So that number operation going to be same always.

- How to calculate Big O
Four simple steps
1. Worst case
2. Remove constants
3. Different terms of inputs
4. Drop Non Dominants

1. Worst case
- We always care about what is the worst case scenario. Whe we talk about scalability, we cant assume that thinks will go fine.
- If we are going through an array to search, the item can be placed at the end of the array. So the worst case is the length of the array.

2. Remove constants
- If we have any constant values like 2n+1, we can avoid the 2 and 1. If we have like n/2, we can also avoid /2. 

3. Different terms of inputs
- Based on different input lengths and process, Big O could be changed.
For example, if we have two loops inside a function handling two different arrays,
Big O would be the some of those arrays length.

