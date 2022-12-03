const notesEl = document.querySelector('.notes');
const addBtn = document.querySelector('.note-add');

// 1) Написать функцию createNote
// 2) Добавить кнопку и обработчик на добавление карточки

function createNote(title, text) {
   const noteEl = document.createElement('div');
   noteEl.classList.add('note');
   noteEl.innerHTML = `
      <div class="note-header">
         <p>${title}</p>
         <div class="note-actions">
            <button class="note-edit"><i class="fa-sharp fa-solid fa-file-pen"></i></button>
            <button class="note-delete"><i class="fa-solid fa-trash-can"></i></button>
         </div>
      </div>
      <p id="note-description">${text}</p>
   `
   const editBtn = noteEl.querySelector('.note-edit');
   const deleteBtn = noteEl.querySelector('.note-delete');

   editBtn.addEventListener('click', (e) => {
      
   })

   deleteBtn.addEventListener('click', (e) => {
      noteEl.remove();
   })
   
   

   return noteEl;
}

addBtn.addEventListener('click', (e) => {
   const el = createNote('Заголовок', 'Ваш текст');
   notesEl.appendChild(el);
})