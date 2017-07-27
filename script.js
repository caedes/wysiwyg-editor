'use strict';

// -------- SAVING FUNCTION -------- //
const editorTitle = document.querySelector('.title');
const editorContent = document.querySelector('.content');

const defaultTitle = 'What are you thinking about?';
const defaultContent = `💡 A new project, your next blog post, a
random thought: let's write down your next idea!<br/><br/>💅
Add some style (<b>bold</b>, <i>italic</i> or <u>underline</u>)
to your text by using the buttons below.<br/><br/>🛡 Accidentally
closed your tab? Don't worry: your content is automatically saved
in your browser!`;

// Set localStorage values
editorTitle.innerHTML = localStorage['title'] || defaultTitle;
editorContent.innerHTML = localStorage['content'] || defaultContent;

// Define function
let save = () => {
  localStorage['title'] = title.innerHTML;
  localStorage['content'] = content.innerHTML;
};

// Call function
 editorTitle.onkeyup = () => save();
 editorContent.onkeyup = () => save();


// -------- STYLING OPTIONS -------- //
const boldButton = document.querySelector('.bold');
const italicButton = document.querySelector('.italic');
const underlineButton = document.querySelector('.underline');

// Define function
let addStyle = (style) => {
  document.execCommand(style);
};

// Call function
boldButton.onclick = () => addStyle('bold');
italicButton.onclick = () => addStyle('italic');
underlineButton.onclick = () => addStyle('underline');


// -------- RESET CONTENT -------- //
// localStorage.clear();
