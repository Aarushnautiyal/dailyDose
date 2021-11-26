// const list =(param)=>{
//     let array =[];
//     while (param > 0) {
//       array.push(param% 10);
//       param = Math.floor(param / 10);
//     }
//     array.reverse()
//     return array;
// }

// console.log(list(23456));

const formatter = (theDate) =>{
  return theDate.split("/").reverse().join("");
}

console.log(formatter("12/03/144"))
