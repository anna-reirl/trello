let noteIdCounter = 8
let columnIdCounter = 4

document
    .querySelectorAll('.column')
    .forEach(columnProcess)

document
    .querySelectorAll('[data-action-addColumn]')
    .addEventListener('click', function(event){
      const columnElement = document.createElement('div')
      columnElement.classList.add('column')
      columnElement.setAttribute('draggable', 'true')
      columnElement.setAttribute('data-column-id', columnIdCounter)

      columnElement.innerHTML=`
      <p class="column-header" contenteditable="true">В плане</p>
					<div data-notes></div>
					<p class="column-footer">
						<span data-action-addNote class="action">+ Добавить карточку</span>
          </p>`
          
          columnIdCounter++

          document.querySelector('.columns').append(columnElement)

          columnProcess(columnElement)
    })

document
      .querySelectorAll('.note')
      .forEach(function(noteElement){
        noteElement.addEventListener('dblclick', function (event){
          noteElement.setAttribute('contenteditable', 'true')
          noteElement.focus()
        })
        noteElement.addEventListener('blur', function (event){
          noteElement.removeAttribute('contenteditable')
        })
      })

function columnProcess (columnElement) {
      const spanAction_addNote = columnElement.querySelector('[data-action-addNote]')

  spanAction_addNote.addEventListener('click', function () {
    const noteElement = document.createElement('div')
    noteElement.classList.add('note')
    noteElement.setAttribute('draggable', 'true')
    noteElement.setAttribute('data-note-id', noteIdCounter)

    noteIdCounter++

    columnElement.querySelector('[data-notes]').append(noteElement)

    })
  }

