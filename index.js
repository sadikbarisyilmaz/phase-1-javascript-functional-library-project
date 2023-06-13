const myEach = function (collection, callback) {
  for (let key in collection) {
    if (collection.key !== null) {
      callback(collection[key]);
    }
  }

  return collection;
};

const myMap = (collection, callback) => {
  const arr = [];
  for (let key in collection) {
    if (collection.key !== null) {
      arr.push(callback(collection[key]));
    }
  }

  return arr;
};

const myReduce = (collection, callback, acc) => {
  let accumulator = acc;

  for (let key in collection) {
    if (collection.key !== null) {
      if (accumulator === undefined) {
        accumulator = collection[key];
      } else {
        accumulator = callback(accumulator, collection[key]);
      }
    }
  }

  return accumulator;
};

const myFind = (collection, predicate) => {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
  } else if (typeof collection === "object" && collection !== null) {
    for (let key in collection) {
      if (collection.hasOwnProperty(key) && predicate(collection[key])) {
        return collection[key];
      }
    }
  }

  return undefined;
};

const myFilter = (collection, predicate) => {
  const result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        result.push(collection[i]);
      }
    }
  } else if (typeof collection === "object" && collection !== null) {
    for (let key in collection) {
      if (collection.hasOwnProperty(key) && predicate(collection[key])) {
        result.push(collection[i]);
      }
    }
  }

  return result;
};
const mySize = (collection) => {
  let count = 0;
  for (let key in collection) {
    count++;
  }
  return count;
};

const myFirst = (array, n) => {
  const result = [];
  if (n) {
    for (let i = 0; i < n; i++) {
      result.push(array[i]);
    }
  } else {
    result.push(array[0]);
  }
  return result.length === 1 ? result[0] : result;
};

const myLast = (array, n) => {
  const result = [];
  if (n) {
    for (let i = array.length - 1; i >= array.length - n; i--) {
      result.unshift(array[i]);
    }
  } else {
    result.push(array[array.length - 1]);
  }
  return result.length === 1 ? result[0] : result;
};

// const mySortBy = (array, callback) => {};
// const myFlatten = (array, [shallow], newArr = []) => {};
const myKeys = (object) => {
  const result = [];
  for (let key in object) {
    result.push(key);
  }
  return result;
};

const myValues = (object) => {
  const result = [];
  for (let key in object) {
    result.push(object[key]);
  }
  return result;
};
