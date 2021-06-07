const { addNoteHandler, getAllNotesHandler } = require('./handler');

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
    handler: () => {},
  },
];

module.exports = routes;
