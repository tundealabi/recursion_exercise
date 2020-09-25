function productOfArray(arr) {
    if (arr.length < 1) {
      return 1;
    }
    return arr[arr.length - 1] * productOfArray(arr.slice(0, arr.length - 1));
  }
  
  function collectStrings(obj, result = []) {
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      if (typeof value === "string") {
        result.push(value);
      } else if (typeof value === "object") {
        collectStrings(value, result);
      }
    });
    return result;
  }
  
  function contains(obj, search) {
    let value;
    for (let key of Object.keys(obj)) {
      value = obj[key];
    }
    if (value === search && typeof value !== "object") {
      return true;
    } else if (typeof value === "object") {
      return contains(value, search);
    }
    return false;
  }
  
  function search(arr, compare, count = 0) {
      if(count > arr.length-1){
          return -1;
      }else if(arr[count]=== compare) {
          return count;
      }
      return search(arr,compare,count+1);
  }
  
  function binarySearch(arr,search) {
      let sortArr = arr.sort((a,b)=>a-b);
      let start = 0, end = sortArr.length - 1;
      while(start <= end) {
        let midPoint = Math.floor((start+end)/2);
        if(sortArr[midPoint] === search) {
          return midPoint;
        }else if(sortArr[midPoint] < search) {
          start = midPoint + 1;
        }else{
          end = midPoint - 1;
        }
      }
      return -1;
  }
  
  function stringifyNumbers(obj, newObj={...obj}) {
      for(let key of Object.keys(newObj)){
          let value = newObj[key];
          if(typeof value === "number"){
              newObj[key] = String(value);
          }else if(typeof(value) === "object"){
              stringifyNumbers(newObj,value);
          }
      }
    return newObj;
  }
  