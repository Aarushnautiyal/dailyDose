const list =(param)=>{
    let array =[];
    while (param > 0) {
      array.push(param% 10);
      param = Math.floor(param / 10);
    }
    return array;
}

console.log(list(23456));
