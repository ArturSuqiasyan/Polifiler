
String.prototype.myCharAt = function(index) {
    
    if (index < 0 || index >= this.length) {
      return "";  
    }
  
   
    return this[index];
  };
  
  
  let str = "Hello, World!";



 
String.prototype.myConcat = function(...args) {
   
    let result = this;
  
   
    for (let i = 0; i < args.length; i++) {
    
      result += String(args[i]);
    }
  
    return result;
  };
  
  
  let str1 = "Hello, ";
  let str2 = "World!";
  let str3 = " How are you?";
  
 

  String.prototype.myEndsWith = function(searchString, length = this.length) {
    const str = this.slice(0, length);
    return str.slice(-searchString.length) === searchString;
  };

  
  String.prototype.myIncludes = function(searchString, position = 0) {
    return this.indexOf(searchString, position) !== -1;
  };

  
  String.prototype.myIndexOf = function(searchString, position = 0) {
    for (let i = position; i <= this.length - searchString.length; i++) {
      if (this.slice(i, i + searchString.length) === searchString) {
        return i;
      }
    }
    return -1;
  };

  

  String.prototype.myLastIndexOf = function(searchString, position = this.length - 1) {
    for (let i = position; i >= 0; i--) {
      if (this.slice(i, i + searchString.length) === searchString) {
        return i;
      }
    }
    return -1;
  };

  
  String.prototype.myLocaleCompare = function(compareString) {
    if (this < compareString) return -1;
    if (this > compareString) return 1;
    return 0;
  };

  


  String.prototype.myMatch = function(regexp) {
    const matches = [];
    const result = regexp.exec(this);
    if (result) {
      matches.push(...result);
    }
    return matches.length ? matches : null;
  };

  

  String.prototype.myMatchAll = function(regexp) {
    const matches = [];
    let match;
    while ((match = regexp.exec(this)) !== null) {
      matches.push(match);
    }
    return matches.length ? matches : null;
  };

  


  String.prototype.myPadEnd = function(targetLength, padString = ' ') {
    const diff = targetLength - this.length;
    if (diff <= 0) return this;
    const pad = padString.repeat(Math.ceil(diff / padString.length)).slice(0, diff);
    return this + pad;
  };

  


  String.prototype.myPadStart = function(targetLength, padString = ' ') {
    const diff = targetLength - this.length;
    if (diff <= 0) return this;
    const pad = padString.repeat(Math.ceil(diff / padString.length)).slice(0, diff);
    return pad + this;
  };

  


  String.prototype.myRepeat = function(count) {
    if (count < 0) throw new RangeError("Repeat count must be a non-negative integer");
    return Array(count + 1).join(this);
  };

  


  String.prototype.myReplace = function(searchValue, replaceValue) {
    return this.split(searchValue).join(replaceValue);
  };

  


  String.prototype.myReplace = function(searchValue, replaceValue) {
    return this.split(searchValue).join(replaceValue);
  };

  

  String.prototype.myReplaceAll = function(searchValue, replaceValue) {
    return this.split(searchValue).join(replaceValue);
  };

  



  String.prototype.mySlice = function(beginIndex, endIndex = this.length) {
    const start = beginIndex < 0 ? Math.max(this.length + beginIndex, 0) : beginIndex;
    const end = endIndex < 0 ? Math.max(this.length + endIndex, 0) : endIndex;
    return this.substring(start, end);
  };

  


  String.prototype.mySplit = function(separator, limit) {
    const result = [];
    let start = 0;
    let end;
  
    while ((end = this.indexOf(separator, start)) !== -1) {
      result.push(this.slice(start, end));
      start = end + separator.length;
      if (limit && result.length >= limit) break;
    }
  
    result.push(this.slice(start)); // Push the remaining part
    return result.slice(0, limit || result.length);
  };

  



  String.prototype.myStartsWith = function(searchString, position = 0) {
    return this.slice(position, position + searchString.length) === searchString;
  };

  



  String.prototype.myToLowerCase = function() {
    return this.replace(/[A-Z]/g, (match) => String.fromCharCode(match.charCodeAt(0) + 32));
  };

  




  String.prototype.myToString = function() {
    return this.valueOf(); // `valueOf` already returns the string itself
  };

  



  String.prototype.myToUpperCase = function() {
    return this.replace(/[a-z]/g, (match) => String.fromCharCode(match.charCodeAt(0) - 32));
  };

  




  String.prototype.myTrim = function() {
    return this.replace(/^\s+|\s+$/g, '');
  };

  




  String.prototype.myTrimEnd = function() {
    return this.replace(/\s+$/, '');
  };

  




  String.prototype.myTrimStart = function() {
    return this.replace(/^\s+/, '');
  };
  
  




  