document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript loaded');
  // const title = document.querySelector('#title');
  // title.addEventListener('submit', handleTitle);

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleForm);

  // const author = document.querySelector('#author');
  // author.addEventListener('submit', handleAuthor);
});

  // const handleTitle = function (event) {
  //   const newParagraph = document.createElement('p');
  //   newParagraph.textContent = `Title is: ${ event.target.value } `;
  //   const readingList = document.querySelector('#submit_form');
  //   readingList.appendChild(newParagraph);
  // };
  const handleForm = function (event) {
    event.preventDefault();
    const newParagraph = document.createElement('p');
    // console.log(event);
    // console.log(this.title.value);
    newParagraph.textContent = `Title is: ${ this.title.value },
     by ${ this.author.value }
     in category ${ this.category.value }`;
    const readingList = document.querySelector('#reading-list');
    readingList.appendChild(newParagraph);
  };

  // const handleAuthor = function (event) {
  //   const resultAuthor = document.querySelector('#submit_form');
  //   // resultAuthor.textContent = `By: ${event.target.value}`;
  // };
