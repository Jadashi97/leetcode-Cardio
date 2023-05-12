// Qtn.1 Given the head of a singly linked list, reverse the list, and return the reversed list.
var reverseList = function(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

  return prev;
};

// Q2. 1480. Running Sum of 1d Array
var runningTotal = (nums)=>{
  let total = 0;
  let result = [ ];

  for(let i = 0; i < nums.length; i++){
    total = total + nums[i];
    result.push(total);
  }
  return result;
}

// console.log(runningTotal([1,2,3,4]));

// Q3. 724. Find Pivot Index
let totalSum = 0;

let pivotIndex = (nums) => {
  for(let i = 0; i < nums.length; i++){
    totalSum += nums[i];
  }

  let leftSum = 0;

  for(let i = 0; i < nums.length; i++){
    let rightSum  = totalSum - leftSum - nums[i];

    if(rightSum === leftSum){
      return i
    }
    leftSum += nums[i]
  }
return -1

}

// console.log(pivotIndex([2,1,-1]));

/*

205. Isomorphic Strings (in javascript)
- understand what Isomorphic is how to work it out
*/

var isIsomorphic = function(s, t) {
  if(s.length != t.length){
      return false;
  }
  let sMap = {}
  let tMap = {}

  for(let i = 0; i < s.length; i++){
      let sChar = s[i];
      let tChar = t[i];

      if(sMap[sChar] === undefined){
          sMap[sChar] = tChar;
      }
      if(tMap[tChar] === undefined){
          tMap[tChar] = sChar;
      }
      if(sMap[sChar] != tChar || tMap[tChar] != sChar){
          return false;
      }
  }
  return true;
};

console.log(isIsomorphic("foo", "bar"));

/*
392. Is Subsequence
- understand what the  subsequence is and what exactly is needed 
*/
function isSubsequence(s, t) {
  let sPointer = 0;
  let tPointer = 0;

  while (sPointer < s.length && tPointer < t.length) {
    if (s[sPointer] === t[tPointer]) {
      sPointer++;
    }
    tPointer++;
  }

  return sPointer === s.length;
}


