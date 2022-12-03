const notesEl = document.querySelector('.notes');
const addBtn = document.querySelector('.note__add');

function createNote(title, text) {
   const noteEl = document.createElement('div');
   noteEl.classList.add('note');
   noteEl.innerHTML = `
      <div class="note__header">
         <p id="note__title">${title}</p>
         <input id="note__title-input" class="hidden" type="text" value="${title}">
         <div class="note__actions">
            <button class="note__edit"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="note__delete"><i class="fa-solid fa-trash-can"></i></button>
         </div>
      </div>
      <p id="note__text">${text}</p>
      <textarea id="note__title-textarea" class="hidden">${text}</textarea>
   `
   const editBtn = noteEl.querySelector('.note__edit');
   const deleteBtn = noteEl.querySelector('.note__delete');
   const titleEl = noteEl.querySelector('#note__title');
   const textEl = noteEl.querySelector('#note__text');
   const titleInputEl = noteEl.querySelector('#note__title-input');
   const textAreaEl = noteEl.querySelector('#note__title-textarea');
   
   

   editBtn.addEventListener('click', (e) => {
      titleEl.classList.toggle('hidden');
      textEl.classList.toggle('hidden');

      titleInputEl.classList.toggle('hidden')
      textAreaEl.classList.toggle('hidden')
   })

   deleteBtn.addEventListener('click', (e) => {
      noteEl.remove();
   })
   
   titleInputEl.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
         titleEl.innerText = e.target.value;
         titleEl.classList.toggle('hidden');
         textEl.classList.toggle('hidden');

         titleInputEl.classList.toggle('hidden')
         textAreaEl.classList.toggle('hidden')
      }
   })
   
   textAreaEl.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
         textEl.innerText = e.target.value;
         titleEl.classList.toggle('hidden');
         textEl.classList.toggle('hidden');

         titleInputEl.classList.toggle('hidden')
         textAreaEl.classList.toggle('hidden')
      }
   })

   return noteEl;
}

addBtn.addEventListener('click', (e) => {
   const el = createNote('Заголовок', 'Ваш текст');
   notesEl.appendChild(el);
})