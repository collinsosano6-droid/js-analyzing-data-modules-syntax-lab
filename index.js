//merging users

require (`datejs`);
function combineUsers(...args){     // function that takes (...args) as agrguments
  const combinedObject = {          // initialize the return object
    users : [],
  };
  for (const userArray of args){     // loop through the args
    combinedObject.users = [...combinedObject.users, ...userArray]; //merge arrays together into the users attribute of combinedObject
  };
    combinedObject.merge_date = Date.today().toString('M/d/yyyy'); //Add an attribute to combinedObject called merge_date & give it the current date

    return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};