var cubeChecker = function(volume, side){
   if (side<=0 || volume<=0){
    return false;
  }else if(Math.pow(side,3)!==volume){
    return false;
  }else{
    return true;
  }
};