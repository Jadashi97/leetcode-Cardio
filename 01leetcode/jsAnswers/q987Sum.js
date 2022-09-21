// understand the solution here

var sumEvenAfterQueries = function(A, queries) {
    return queries.map(query => {
       A[query[1]] += query[0]
      return A.reduce((acc, cur) => cur % 2 ? acc : acc+cur, 0)
    })
};





console.log(sumEvenAfterQueries([1,2,3,4], [[1,0],[-3,1],[-4,0],[2,3]]));