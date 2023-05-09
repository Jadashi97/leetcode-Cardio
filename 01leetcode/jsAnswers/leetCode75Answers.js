// Qtn.1 Given the head of a singly linked list, reverse the list, and return the reversed list.
// var reverseList = function(head) {
//     let prev = null;
//     let current = head;
//     let next = null;

//     while (current !== null) {
//         next = current.next;
//         current.next = prev;
//         prev = current;
//         current = next;
//     }

//   return prev;
// };

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

console.log(pivotIndex([2,1,-1]));