let myImage = document.querySelector('img');
let lists = document.querySelectorAll('li');
let heading = document.querySelector('h1');
let link = document.querySelector('a');
let myName;
let isMorshu = false;

if (localStorage.getItem('name')) {
  myName = localStorage.getItem('name');
  heading.innerHTML = 'bliss, ' + myName;
}

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bliss.jpg') {
      isMorshu = true;
      if (myName != null) heading.innerHTML = 'morshu, ' + myName;
      else heading.innerHTML = 'morshu.';
      link.innerHTML = 'experience perfection';
      link.setAttribute('href', 'https://www.youtube.com/watch?v=Z7Rj9mHj79E')
      myImage.setAttribute('src','images/rtxon.jpg');
      console.log('change');
      lists[0].innerHTML = "lamp oil, rope, bombs";
      lists[1].innerHTML = "you want it? it's yours my friend";
      lists[2].innerHTML = "as long as you have enough rupees";
    }
    else {
      isMorshu = false;
      if (myName != null) heading.innerHTML = 'bliss, ' + myName;
      else heading.innerHTML = 'bliss.';
      link.innerHTML = 'experience true beauty';
      link.setAttribute('href', 'https://www.google.com/search?q=windows+xp+bliss&tbm=isch')
      myImage.setAttribute('src','images/bliss.jpg');
      console.log('same');
      lists[0].innerHTML = "gaze upon it.";
      lists[1].innerHTML = "the image is good.";
      lists[2].innerHTML = "bliss is love, bliss is life.";
    }
    console.log(mySrc);
}

let myButton = document.querySelector('button');

myButton.onclick = function() {
  setUserName();
}

function setUserName() {
  myName = prompt('Please enter your name.').toLowerCase();
  localStorage.setItem('name', myName);
  if (isMorshu) {
    heading.textContent = 'morshu, ' + myName;
  }
  else heading.textContent = 'bliss, ' + myName;
}
