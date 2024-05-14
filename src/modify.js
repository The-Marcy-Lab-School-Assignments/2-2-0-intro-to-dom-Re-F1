// Question 1
const getMainHeadingText = () => {
  const mainHeading = document.querySelector('h1#main-heading');
  // console.log(mainHeading.textContent);
  console.log(document.querySelector('h1#main-heading').textContent); // or you can do this
};


// Question 2
const getAllMainText = () => {
  let mainText = document.querySelectorAll('.main-text');
  let newText = "";
  
  mainText.forEach((mainText) =>
      newText += mainText.textContent + ",");
  console.log(newText.slice(0, -1)); // Removing the last comma
};


// Question 3
const setSubtitleText = () => {
  document.querySelector('h2#subtitle').textContent = 'This is a subtitle!';
};


// Question 4
const modifyDivClassList = () => {
  const newList = document.querySelector("#modify-classes").classList
  newList.remove("bad-class")
  newList.add("new-class");
};


// Question 5
const addH2 = () => {
  const newH2 = document.createElement("h2")
  newH2.id = 'h2-test';
  newH2.textContent = 'Another one!';
  document.body.appendChild(newH2)

};


// Question 6
const removeOldInfo = () => {
  const removeP = document.getElementById("old-info");
  removeP.remove();
};

// Question 7
const makeAlphabet = () => {                           //attribute
  const grabId = document.querySelector("#alphabet").dataset.numLetters // read the ordered list
  const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  for (let i = 0; i < grabId; i++) {
    const list = document.createElement("li") // unordered list --> listed items
  list.textContent = `${alph[i]} is letter #${i + 1} in the alphabet`
  document.querySelector("#alphabet").append(list)
}
};

// Question 8 
const makeBio = () => {
  document.querySelector("#my-bio").innerHTML = `
  <h2 id="bio-heading">About Me</h2>
  <p>My name is Zo and I like learn cool new things</p>
  <h3 id="hobby-heading">My Hobbies</h3>
  <ul>
    <li>Running</li>
    <li>Reading</li>
    <li>Writing</li>
  </ul>`
};

// "runner" function
const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

// invoke the runner!
main(); 
