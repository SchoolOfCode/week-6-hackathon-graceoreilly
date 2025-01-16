//Plan
//write a function called removeMurdered that takes in an array of faithfuls which includes one murdered faithful
export function removeMurdered(faithfuls, murdered) {
  //create a variable to hold the updated array without the murdered faithful
  const updatedFaithfuls = [];
  //loop through the current array of faithfuls
  for (let i = 0; i < faithfuls.length; i++) {
    //check the current faithful is not equal to the murdered faithful
    if (faithfuls[i] !== murdered) {
      //update the new array to only include non-murdered faithfuls
      updatedFaithfuls.push(faithfuls[i]);
    }
  }
  //returns the updated array without the murdered faithful
  return updatedFaithfuls;
}
