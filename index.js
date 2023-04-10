function hasTargetSum(arr, target) {
  // create a set to store the complements of visited numbers
  let complements = new Set();
  
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    
    // check if the current number is a complement of a previous number
    if (complements.has(num)) {
      return true;
    }
    
    // add the complement of the current number to the set
    complements.add(target - num);
  }
  
  // if no pair adds up to the target, return false
  return false;
}
