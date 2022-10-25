function superbowlWin(arr){
  /*arr.find(record => { 
     if(record.result === "W") 
       return true; 
     else 
       return false  
 }) */
 let winner = arr.find(record => record.result === 'W');
 if (winner ) return winner.year
}