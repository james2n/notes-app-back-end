const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
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
  // menampilkan catatan berdasarkan ID
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  // mengubah catatan berdasarkan ID
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
];

module.exports = routes;
