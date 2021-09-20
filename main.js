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

  // Palindrome Check - AlgoExpert

  function isPalindrome(string) {
  
	let rstring = "";
	
	for(let i = string.length -1; i > -1; i--) {
		rstring += string[i];
	}
	
	console.log(string);
	console.log(rstring);
	return (string === rstring);

}

// Tandem Bike - AlgoExpert

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
	let speed = 0;
  let sortedRed = redShirtSpeeds.sort((a, b) => {return a - b});
	let sortedBlue;
	if (fastest) {
		sortedBlue = blueShirtSpeeds.sort((a, b) => {return b - a});
	} else {
		sortedBlue = blueShirtSpeeds.sort((a, b) => {return a - b});
	}
	
	for (let i = 0; i < sortedRed.length; i++) {
		speed += Math.max(sortedRed[i], sortedBlue[i]);
	}
	
	return speed;
  
}

// Constructing Binary Search Tree

insert(value) {
    let node = this;
		
		
		if (node === undefined) {
			node = new BST(value);
			return;
		} 
		const traverseTree = function(node) {
	  	if (value < node.value) {
				if (node.left == null) {
					node.left = new BST(value);
					return;
				} else {
					return traverseTree(node.left);
				}
			} 
			if (value >= node.value) {
				if (node.right == null) {
					node.right = new BST(value);
					return;
				} else {
					return traverseTree(node.right);
				}
			}
		}
		traverseTree(node);
	}

  contains(value) {
		if (value === this.value) {
			return true;
		} 
		if (value < this.value) {
			if (value === this.left) {
				return true;
			} else if (this.left == null) {
				return false;
			} else {
				return this.left.contains(value);
			}
		}
		if (value > this.value) {
			if (value === this.right) {
				return true;
			} else if (this.right == null) {
				return false;
			} else {
				return this.right.contains(value)
			}
		}
  }

  remove(value, parentNode = null) {
    let currentNode = this;
    
while (currentNode !== null) {
        if (value < currentNode.value) {
            parentNode = currentNode;
            currentNode = currentNode.left;
        } else if (value > currentNode.value) {
            parentNode = currentNode;
            currentNode = currentNode.right;
        } else {
            if (currentNode.left !== null && currentNode.right !== null) {
                currentNode.value = currentNode.right.getMinValue();
                currentNode.right.remove(currentNode.value, currentNode);
            } else if (parentNode === null) {
                if (currentNode.left !== null) {
                    currentNode.value = currentNode.left.value;
                    currentNode.right = currentNode.left.right;
                    currentNode.left = currentNode.left.left;
                } else if (currentNode.right !== null) {
                    currentNode.value = currentNode.right.value;
                    currentNode.left = currentNode.right.left;
                    currentNode.right = currentNode.right.right;
                } else {
                    
                }
            } else if (parentNode.left === currentNode) {
                parentNode.left = currentNode.left !== null ? currentNode.left : currentNode.right;
            } else if (parentNode.right === currentNode) {
                parentNode.right = currentNode.left !== null ? currentNode.left : currentNode.right;
            }
            break;
        }
    }
return this;

}
    
    getMinValue() {
        let currentNode = this;
        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode.value;
    }


    function threeNumberSum(array, targetSum) {
        let answerArr = [];
          let sortedArr = array.sort((a,b) => {return a-b});
          
          console.log(sortedArr);
          
          for (let i = 0; i < sortedArr.length; i++) {
              for (let j = i + 1; j < sortedArr.length; j++) {
                  for (let k = j + 1; k < sortedArr.length; k++) {
                      if (sortedArr[i] + sortedArr[j] + sortedArr[k] === targetSum) {
                          answerArr.push([sortedArr[i], sortedArr[j], sortedArr[k]])
                      }
                  }
              }
          }
          
          return answerArr;
      }

      function threeNumberSum(array, targetSum) {
        let answerArr = [];
          let sArr = array.sort((a,b) => {return a-b});
          console.log(sArr)
          for (let i = 0; i < sArr.length; i++) {
              let j = i + 1;
              let k = sArr.length - 1;
               while (j < k) {
                   if ((sArr[i] + sArr[j] + sArr[k]) === targetSum) {
                       answerArr.push([sArr[i], sArr[j], sArr[k]]);
                       j++;
                       k--;
                   } else if ((sArr[i] + sArr[j] + sArr[k]) < targetSum) {
                       j++;
                       
                   } else if ((sArr[i] + sArr[j] + sArr[k]) > targetSum) {
                       k--;
                      
                   }
               }
          }
          return answerArr;
      }

      function caesarCipherEncryptor(string, key) {
        let answerString = '';
          
          for (let i = 0; i < string.length ; i++) {
              let newCharCode = string.charCodeAt(i) + key;
              while (newCharCode > 122) {
                  newCharCode = 96 + (newCharCode - 122)
              }
              
              let newChar = String.fromCharCode(newCharCode);
              
              answerString += newChar;
          }
          return answerString;
      }

      function removeDuplicatesFromLinkedList(linkedList) {
        let currentNode = linkedList;
          while(currentNode.next !== null) {
              let nextUniqueNode = currentNode.next;
              if (currentNode.value === nextUniqueNode.value) {
                  currentNode.next = nextUniqueNode.next;
                  nextUniqueNode = nextUniqueNode.next;
              } else {
                  currentNode = nextUniqueNode;
                  nextUniqueNode = nextUniqueNode.next;
              }
          }
          
          
          return linkedList;
        
      }

      function moveElementToEnd(array, toMove) {
        array.forEach((element, index) => {
            if (element !== toMove) {
                array.splice(index, 1);
                array.unshift(element);
            }
        })
        
        return array;
    }

    function validateBst(tree, min = -Infinity, max = Infinity) {
	
        if (tree === null) return true;
        if (tree.value < min || tree.value >= max) return false;
        const isLeftValid = validateBst(tree.left, min, tree.value);
        const isRightValid = validateBst(tree.right, tree.value, max);
        
        return isLeftValid && isRightValid;
        
    }

    depthFirstSearch(array) {
        array.push(this.name);
            let children = this.children;
            
            if (this.children.length > 0) {
                for (let i = 0; i <= children.length - 1; i++) {
                    children[i].depthFirstSearch(array);
                }
                return array;
            }
            return array;
      }

      function classPhotos(redShirtHeights, blueShirtHeights) {
        let sortedRed = redShirtHeights.sort((a,b) => {return a-b});
        let sortedBlue = blueShirtHeights.sort((a,b) => {return a-b});
           return classPhotoHelper(sortedRed, sortedBlue);
      }
      
      function classPhotoHelper(red, blue) {
          
          let backrowRed = red.every((student, index) => student > blue[index]);
          let backrowBlue = blue.every((student, index) => student > red[index]);
          
          
          console.log(backrowBlue);
          if (backrowRed == true || backrowBlue == true) {
              return true;
          }
          
          return false;
          
      }

      function isMonotonic(array) {
	
        if (array.length > 1) {
            if (array[0] >= array[array.length - 1]) {
            for (let i = 0; i <= array.length - 2; i++) {
                let next = i + 1;
                if (!(array[i] >= array[next])) {
                    return false;
                }
            }
            } else if (array[0] < array[array.length - 1]) {
                for (let i = 0; i <= array.length - 2; i++) {
                    let next = i + 1;
                    if (!(array[i] <= array[next])) {
                        return false;
                    }
                }
        }
        }
    
        return true;
    }

    function smallestDifference(arrayOne, arrayTwo) {
        let smallestDiff;
      let answerPair = [];
      for (let i = 0; i <= arrayOne.length - 1; i++) {
      for (let j = 0; j <= arrayTwo.length - 1; j++) {
      let currentDiff = Math.abs(arrayOne[i] - arrayTwo[j]);
      if (i == 0 && j == 0) {
      smallestDiff = currentDiff;
      answerPair = [arrayOne[i], arrayTwo[j]];
      } else if (currentDiff < smallestDiff) {
      smallestDiff = currentDiff;
      answerPair = [arrayOne[i], arrayTwo[j]];
      console.log(answerPair);
      }
      }
      }
      return answerPair;
      
      }
      