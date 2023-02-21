function toWeirdCase(string){
  let newString = string.split(' ');
  for(let i = 0; i < newString.length; i++){
    newString[i] = newString[i].weird();
  }
  return newString.join(' ');
}

String.prototype.weird = function( ){
  var newString = '';
  for(let i = 0; i< this.length ; i++){
    newString += (i % 2 === 0)? this[i].toUpperCase():this[i].toLowerCase();
  }
  return newString;
}