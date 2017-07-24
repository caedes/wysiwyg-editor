// -------- SAVING FUNCTION -------- //
const editorTitle = document.querySelector('.title');
const editorContent = document.querySelector('.content');

const defaultTitle = editorTitle.innerHTML;
const defaultContent = editorContent.innerHTML;;

// Set localStorage values
editorTitle.innerHTML = localStorage['title'] || defaultTitle;
editorContent.innerHTML = localStorage['content'] || defaultContent;

// Define function
save = () => {
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
addStyle = (style) => {
  document.execCommand(style);
};

// Call function
boldButton.onclick = () => addStyle('bold');
italicButton.onclick = () => addStyle('italic');
underlineButton.onclick = () => addStyle('underline');


// -------- RESET CONTENT -------- //
// localStorage.clear();
