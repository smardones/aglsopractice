function timeConversion(s) {
    // Write your code here

}

// Grading Students Hackerrank

function gradingStudents(grades) {
    let answerArr = [];
    let nextLevelArr = grades.map(grade => Math.ceil(grade / 5) * 5)
    
   for (let i = 0; i < grades.length; i++) {
       if (grades[i] < 38) {
           answerArr.push(grades[i]);
       } else if ((nextLevelArr[i] - grades[i]) < 3) {
           answerArr.push(nextLevelArr[i]);
       } else if (!(nextLevelArr[i] - grades[i] < 3)) {
           answerArr.push(grades[i]);
       }
   }
   
   return answerArr;
}

// Minimum Waiting Time AlgoExpert

function minimumWaitingTime(queries) {
    let orderedQueryArr = queries.sort(function(a, b) {
                          return a - b;
              });
      console.log(orderedQueryArr);
      let minWaitTime = 0;
      for (let i = 0; i < queries.length - 1; i++) {
          for (let j = 0; j <= i; j++) {
              minWaitTime += orderedQueryArr[j];
              console.log(orderedQueryArr[j])
          }
          
              
          }
      
      return minWaitTime;
      }

      

      function getTotalX(a, b) {
        let finalCount = 0;
        
        for (let x = 0; x <= 100; x++) {
            if (a.every(element => x % element === 0)) {
                if (b.every(element => element % x === 0)) {
                    finalCount++;
                }
            }
        }
        
        return finalCount;
    
    }

// Subarray Division - Hackerrank

function birthday(s, d, m) {
    let solutionCount = 0;
    
    for (let i=0; i<s.length; i++) {
        let subArr = s.slice(i, i + m);
        
        let testSum = subArr.reduce((accSum, currentValue) => accSum + currentValue) === d          
        if (testSum) {
            solutionCount++;
        }
        }
    
    
    return solutionCount;
    
}

// Migratory Birds - Hackerrank

function migratoryBirds(arr) {
    let currentCount = 1;
    let highestCount = 1;
    let mostCommonBird;
    let sortedArr = arr.sort(function(a,b) {return a-b})
    
    for (let i=0; i<sortedArr.length; i++) {
        if (i===0) {
            mostCommonBird = sortedArr[i];
        } else if (sortedArr[i] === sortedArr[i-1] && currentCount === highestCount) {
            currentCount++;
            highestCount++;
            mostCommonBird = sortedArr[i];
        } else if (sortedArr[i] === sortedArr[i-1] && currentCount < highestCount) {
            currentCount++;
        } else if (sortedArr[i] !== sortedArr[i-1]) {
            currentCount = 1;
        }
    }
    
    return mostCommonBird;
    
}