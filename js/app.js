document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleForm);
})

const handleForm = function(event){
  event.preventDefault();
  const resultAuthor = event.target.author.value;
  const resultCategory = event.target.category.value;
  const resultTitle = event.target.title.value;
  createListItems(resultAuthor,resultCategory,resultTitle);
  document.getElementById('new-item-form').reset();
}

const createListItems = function(resultAuthor,resultCategory,resultTitle){
  const newAuthor = document.createElement('li');
  newAuthor.textContent = resultAuthor;
  const newTitle = document.createElement('li');
  newTitle.textContent = resultTitle;
  const newCategory = document.createElement('li');
  newCategory.textContent = resultCategory;
  appendListItems(newAuthor, newTitle, newCategory);
  
}

const appendListItems = function (newAuthor, newTitle, newCategory){
  const list = document.querySelector('#reading-list');
  list.appendChild(newTitle);
  list.appendChild(newAuthor);
  list.appendChild(newCategory)
}
