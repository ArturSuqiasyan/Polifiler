1. Array.prototype.concat()


Array.prototype.myConcat = function(...args) {
  const result = [...this]; 
  args.forEach(arg => {
    if (Array.isArray(arg)) {
      result.push(...arg);
    } else {
      result.push(arg);
    }
  });
  return result;
};

2. Array.prototype.copyWithin()


Array.prototype.myCopyWithin = function(target, start, end = this.length) {
  const len = this.length;
  target = (target < 0) ? Math.max(len + target, 0) : Math.min(target, len);
  start = (start < 0) ? Math.max(len + start, 0) : Math.min(start, len);
  end = (end < 0) ? Math.max(len + end, 0) : Math.min(end, len);

  for (let i = start; i < end; i++) {
    this[(target + (i - start)) % len] = this[i];
  }

  return this;
};


3. Array.prototype.entries()

Array.prototype.myEntries = function() {
  let index = 0;
  const array = this;
  return {
    next() {
      if (index < array.length) {
        return { value: [index, array[index++]], done: false };
      } else {
        return { done: true };
      }
    }
  };
};

4. Array.prototype.every()


Array.prototype.myEvery = function(callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (!callback.call(thisArg, this[i], i, this)) {
      return false;
    }
  }
  return true;
};


5. Array.prototype.fill()


Array.prototype.myFill = function(value, start = 0, end = this.length) {
  for (let i = start; i < end; i++) {
    this[i] = value;
  }
  return this;
};

6. Array.prototype.filter()


Array.prototype.myFilter = function(callback, thisArg) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

7. Array.prototype.find()


Array.prototype.myFind = function(callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};

8. Array.prototype.findIndex()


Array.prototype.myFindIndex = function(callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      return i;
    }
  }
  return -1;
};


9. Array.prototype.findLast()


Array.prototype.myFindLast = function(callback, thisArg) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (callback.call(thisArg, this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};


10. Array.prototype.findLastIndex()



Array.prototype.myFindLastIndex = function(callback, thisArg) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (callback.call(thisArg, this[i], i, this)) {
      return i;
    }
  }
  return -1;
};


11. Array.prototype.flat()



Array.prototype.myFlat = function(depth = 1) {
  let result = [...this];
  while (depth > 0) {
    result = result.reduce((acc, val) => acc.concat(Array.isArray(val) ? val : [val]), []);
    depth--;
  }
  return result;
};


12. Array.prototype.flatMap()



Array.prototype.myFlatMap = function(callback, thisArg) {
  return this.map(callback, thisArg).myFlat();
};


13. Array.prototype.forEach()



Array.prototype.myForEach = function(callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    callback.call(thisArg, this[i], i, this);
  }
};


14. Array.prototype.includes()



Array.prototype.myIncludes = function(value, fromIndex = 0) {
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === value) {
      return true;
    }
  }
  return false;
};


15. Array.prototype.indexOf()



Array.prototype.myIndexOf = function(value, fromIndex = 0) {
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === value) {
      return i;
    }
  }
  return -1;
};


16. Array.prototype.join()



Array.prototype.myJoin = function(separator = ',') {
  let result = '';
  for (let i = 0; i < this.length; i++) {
    result += (i === 0) ? this[i] : separator + this[i];
  }
  return result;
};


17. Array.prototype.keys()



Array.prototype.myKeys = function() {
  let index = 0;
  const array = this;
  return {
    next() {
      if (index < array.length) {
        return { value: index++, done: false };
      } else {
        return { done: true };
      }
    }
  };
};


18. Array.prototype.lastIndexOf()



Array.prototype.myLastIndexOf = function(value, fromIndex = this.length - 1) {
  for (let i = fromIndex; i >= 0; i--) {
    if (this[i] === value) {
      return i;
    }
  }
  return -1;
};


19. Array.prototype.map()



Array.prototype.myMap = function(callback, thisArg) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback.call(thisArg, this[i], i, this));
  }
  return result;
};


20. Array.prototype.pop()



Array.prototype.myPop = function() {
  if (this.length === 0) return undefined;
  const last = this[this.length - 1];
  this.length--;
  return last;
};


21. Array.prototype.push()



Array.prototype.myPush = function(...args) {
  const length = this.length;
  for (let i = 0; i < args.length; i++) {
    this[length + i] = args[i];
  }
  return this.length;
};


22. Array.prototype.reduce()



Array.prototype.myReduce = function(callback, initialValue) {
  let accumulator = initialValue === undefined ? this[0] : initialValue;
  let startIndex = initialValue === undefined ? 1 : 0;
  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};


23. Array.prototype.reverse()



Array.prototype.myReverse = function() {
  let start = 0;
  let end = this.length - 1;
  while (start < end) {
    [this[start], this[end]] = [this[end], this[start]];
    start++;
    end--;
  }
  return this;
};


24. Array.prototype.shift()



Array.prototype.myShift = function() {
  if (this.length === 0) return undefined;
  const first = this[0];
  for (let i = 0; i < this.length - 1; i++) {
    this[i] = this[i + 1];
  }
  this.length--;
  return first;
};


25. Array.prototype.slice()



Array.prototype.mySlice = function(start = 0, end = this.length) {
  const result = [];
  for (let i = start; i < end && i < this.length; i++) {
    result.push(this[i]);
  }
  return result;
};


26. Array.prototype.some()



Array.prototype.mySome = function(callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      return true;
    }
  }
  return false;
};


27. Array.prototype.sort()



Array.prototype.mySort = function(compareFn) {
  const arr = this.slice(); 
  return arr.sort(compareFn);
};


28. Array.prototype.splice()



Array.prototype.mySplice = function(start, deleteCount, ...items) {
  const removedItems = [];
  const newArray = [];

  
  for (let i = start; i < start + deleteCount && i < this.length; i++) {
    removedItems.push(this[i]);
  }

  
  for (let i = 0; i < start; i++) {
    newArray.push(this[i]);
  }

  
  newArray.push(...items);

 
  for (let i = start + deleteCount; i < this.length; i++) {
    newArray.push(this[i]);
  }

  
  this.length = 0;
  this.push(...newArray);

  return removedItems;
};


29. Array.prototype.toReversed()



Array.prototype.myToReversed = function() {
  return this.slice().reverse();
};


30. Array.prototype.toSorted()



Array.prototype.myToSorted = function(compareFn) {
  return this.slice().sort(compareFn);
};


31. Array.prototype.toSpliced()



Array.prototype.myToSpliced = function(start, deleteCount, ...items) {
  const result = this.slice();
  result.splice(start, deleteCount, ...items);
  return result;
};


32. Array.prototype.toString()



Array.prototype.myToString = function() {
  return this.join(',');
};


33. Array.prototype.unshift()



Array.prototype.myUnshift = function(...args) {
  for (let i = this.length - 1; i >= 0; i--) {
    this[i + args.length] = this[i];
  }
  for (let i = 0; i < args.length; i++) {
    this[i] = args[i];
  }
  return this.length;
};


34. Array.prototype.values()



Array.prototype.myValues = function() {
  let index = 0;
  const array = this;
  return {
    next() {
      if (index < array.length) {
        return { value: array[index++], done: false };
      } else {
        return { done: true };
      }
    }
  };
};


35. Array.prototype.with()



Array.prototype.myWith = function(index, value) {
  const result = this.slice();
  result[index] = value;
  return result;
};