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