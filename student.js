let classData = [];

classData.push({ name: "Isaac", performance: { Phy: 90, Chem: 96, Math: 70 } });
classData.push({
  name: "Louis",
  performance: { Phy: 95, Chem: 86, Math: 80 },
});
classData.push({
  name: "Bash",
  performance: { Phy: 97, Chem: 56, Math: 90 },
});
classData.push({
  name: "Aj",
  performance: { Phy: 100, Chem: 99, Math: 60 },
});

// console.log(classData);
let classScore = [];
classData.map((el) => {
  classScore.push(Object.values(el.performance).reduce((a, b) => a + b));
});

// console.log(
//   "The average class Performance is: ",
//   classScore.reduce((a, b) => a + b) / classScore.length
// );

classData.forEach((el) => {
  //   classScore.push(Object.values(el.performance).reduce((a, b) => a + b));
  el.total = Object.values(el.performance).reduce((a, b) => a + b);
});
console.log(classData);

const sortedData = (x) => {
  return (a, b) => {
    if (a[x] < b[x]) {
      return 1;
    } else if (a[x] > b[x]) {
      return -1;
    }
    return 0;
  };
};

// console.log(classData.sort(sortedData("total")));

//asg1 best student
// let bestStudent = [];
// bestStudent.push(Object.values(classData[total]))
// console.log(bestStudent)
