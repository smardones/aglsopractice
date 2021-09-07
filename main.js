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

// Min Max Sum - Hackerrank

function miniMaxSum(arr) {
    let min, max;
    let sortedArr = arr.sort((a, b) => {return a-b});
    let minArr = sortedArr.slice(0, 4);
    let maxArr = sortedArr.slice(1);
    
    min = minArr.reduce((accValue, currValue) => accValue + currValue);
    max = maxArr.reduce((accValue, currValue) => accValue + currValue);
    
    console.log(min + " " + max);
}

// Divisble Sum - Hackerrank

function divisibleSumPairs(n, k, ar) {
    let pairs = 0;
    
    
    for (let i = 0; i < ar.length; i++) {
        for (let j = 0; j < ar.length; j++) {
            if ((ar[i] + ar[j]) % k === 0 && i < j) {
                pairs++;
            } 
        }
    }
    return pairs;
}

// Facotrials - Hackerrank

// Clicked out of the page and lost my code

// Electroni Shop - Hackerrank

function getMoneySpent(keyboards, drives, b) {
    let highestTotal = 0;
    
    for (let i = 0; i < keyboards.length; i++) {
        drives.forEach((drive) => {
            let testTotal = drive + keyboards[i];
            
            if (testTotal > highestTotal && testTotal <= b) {
                highestTotal = testTotal
                console.log(highestTotal);
            }
        })
    }
    
    if (highestTotal) {
        return highestTotal;
    } 
    
    return -1;
    
    

}

// Cats and a Mouse - Hackerrank

function catAndMouse(x, y, z) {
    let catADist = Math.abs(x - z);
    let catBDist = Math.abs(y - z);
    
    if (catADist < catBDist) {
        return "Cat A";
    } else if (catADist > catBDist) {
        return "Cat B"
    }
    
    return "Mouse C";

}

// Breaking the Records

//Forgot to save 

// Counting Valleys

function countingValleys(steps, path) {
    let valleyCount = 0;
    let location = 0;
    
    for(let i = 0; i < steps; i++) {
        if(location === -1 && path[i] === 'U') {
            valleyCount++;
            location++;
        } else if (path[i] === "U") {
            location++;
        } else if (path[i] === "D") {
            location--;
        }
    }
    
    return valleyCount;
}

// Sales by Match

function sockMerchant(n, ar) {
    let pairCount = 0;
    let sortedArr = ar.sort((a, b) => a-b);
    sortedArr.forEach((sock, index) => {
        if (sock === sortedArr[index + 1]) {
            pairCount++;
            sortedArr.splice(index + 1, 1);
        }
        
    })
    
    return pairCount;
    
}

// Find Closest Value in Binary Search Tree - AlgoExpert

function findClosestValueInBst(tree, target) {
	return findClosestHelper(tree, target, tree.value);
}



function findClosestHelper(tree, target, closest) {
	if (tree == null) {
		return closest;
	} 
	if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
		closest = tree.value;
	}
	if (target > tree.value) {
		return findClosestHelper(tree.right, target, closest);
	} else if (target < tree.value) {
		return findClosestHelper(tree.left, target, closest);
	} else {
		return closest;
	}
	
}

// Fabonaci Sequence - AlgoExpert

function getNthFib(n) {
    let first = 0;
      let second = 1;
      let iterator = 3;
      
      if (n === 1) {
          return 0;
      } else if (n === 2) {
          return 1;
      }
      
      return fibHelper(n, first, second, iterator);
  }
  
  function fibHelper(n, first, second, iterator) {
      let seqNum = first + second;
      
      if (iterator < n) {
          first = second;
          second = seqNum;
          iterator++;
          return fibHelper(n, first, second, iterator);
      } else {
          return seqNum;
      }
  }