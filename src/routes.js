const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
} = require('./handler');

// menyimpan catatan
const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  // menampilkan catatan
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
];

module.exports = routes;
