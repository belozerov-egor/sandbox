function height (n){
 var f=2000000, c=0;
  for(var i=1;i<=n; i++){
    f=f/2.5;
   	c=c+f;
  }
  c=c+2000000
  return c.toFixed(3);
}