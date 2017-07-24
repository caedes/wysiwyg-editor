// -------- SAVING FUNCTION -------- //
const title = document.querySelector('.title');
const content = document.querySelector('.content');

const defaultTitle = 'What are you thinking about?';
const defaultContent = "💡 A new project, your next blog post, a random thought: let\'s write down your next idea!<br/><br/>💅 Add some style (<b>bold</b>, <i>italic</i> or <u>underline</u>) to your text by using the buttons below.<br/><br/>🛡 Accidentally closed your tab? Don't worry: your content is automatically saved in your browser!";

// Set localStorage values
title.innerHTML = localStorage['title'] || defaultTitle;
content.innerHTML = localStorage['content'] || defaultContent;

// Define function
save = () => {
  localStorage['title'] = title.innerHTML;
  localStorage['content'] = content.innerHTML;
};

// Call function
title.onkeyup = () => save();
content.onkeyup = () => save();



// -------- STYLING OPTIONS -------- //
const boldButton = document.querySelector('.bold');
const italicButton = document.querySelector('.italic');
const underlineButton = document.querySelector('.underline');

// Define function
addStyle = (style) => {
  document.execCommand(style);
};

// Call function
boldButton.onclick = () => addStyle('bold');
italicButton.onclick = () => addStyle('italic');
underlineButton.onclick = () => addStyle('underline');



// -------- KEYBOARD SHORTCUTS -------- //
// let isCtrl = false;
//
// document.onkeydown = (e) => {
//   if (e.which == 17) {isCtrl = true}
//
//   if (e.which == 66 && isCtrl) {
//
//       console.log('you should bold now');
//       addStyle('bold');
//
//     } else if (e.which == 73 && isCtrl) {
//
//       console.log('you should italic now');
//       addStyle('italic');
//
//     } else if (e.which == 85 && isCtrl) {
//
//       console.log('you should underline now');
//       addStyle('underline');
//     }
// };


// -------- RESET CONTENT -------- //
// localStorage.clear();
