module.exports = function getZerosCount(number, base) {
  let z=0;
  for(let i=1;i<number;i++){
  z=Math.floor(number/((base*0.5)**i))+z;}
  return z;
}