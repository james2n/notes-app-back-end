const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
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
  // menghapus catatan berdasarkan ID
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
