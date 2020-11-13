/*
  Title:
    Pyramid Array

  Description:
    Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

    pyramid(0) => [ ]
    pyramid(1) => [ [1] ]
    pyramid(2) => [ [1], [1, 1] ]
    pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
    Note: the subarrays should be filled with 1s

  Kata Link:
    https://www.codewars.com/kata/515f51d438015969f7000013
  
*/

// Solution
function pyramid(n) {
    let sub = [];
    
    for(let i = 0; i < n; i++){
      sub.push([...Array(i+1)].fill(1))
    }
    return sub;
  }