function init() {
  var name = 'Mozilla'; 
  function displayName() { 
    console.log(name);
  }
  displayName();    
}
init();

function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    console.log(name);
  }
  return displayName;
}

 makeFunc();
