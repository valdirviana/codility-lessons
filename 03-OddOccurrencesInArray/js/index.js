const solution = A => {
  let groupedObj = groupBy(A);

  let groupedArray = objToArray(groupedObj);

  let odd = groupedArray.filter(isOdd);

  return parseInt(odd[0]);
};

const groupBy = arr =>
  arr.reduce((obj, num) => {
    let int = Math.floor(num);

    if (!obj.hasOwnProperty(int)) {
      obj[int] = [];
    }
    
    obj[int].push(num);

    return obj;
  }, {});

const isOdd = (value) => value[1].length % 2;

// to use in codility panel, old version of nodejs
const objToArray = (obj) => Object.entries(obj);

let test = solution([9, 3, 9, 3, 9, 7, 9])

exports.solution = solution;
