// add solution here
function theBeatlesPlay(musicians, instruments){
  var emptyArray = []
  for (let  i = 0; i < musicians.length ; i++){
    
 emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
    
  }
  return emptyArray; 
}
function johnLennonFacts(facts){
  let i = 0;
  while (i<facts.length ) {
      facts[i] += "!!!" 
    	i++; 
  }
    return facts;

}function iLoveTheBeatles(number){
  var emptyArray = [];
  let i = 0;
  do {
    emptyArray.push("I love the Beatles!");
    }while (i < 15)
    i++;
    return emptyArray;
  }