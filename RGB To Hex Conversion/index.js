function rgb(r, g, b){
  // complete this function  
 return toHex(r)+toHex(g)+toHex(b);
}
function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}
function rgb(r, g, b){
  return [r,g,b].map(function(x) {
    return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
  }).join('').toUpperCase();
  }