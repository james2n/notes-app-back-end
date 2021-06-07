const { nanoid } = require('nanoid');
const notes = require('./notes');

// fungsi handler menambah catatan
const addNoteHandler = (request, h) => {
  // properti yang di dpaat dari client
  const { title, tags, body } = request.payload;

  // Properti yang ditangani oleh sistem/server
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    title,
    tags,
    body,
    id,
    createdAt,
    updatedAt,
  };
  notes.push(newNote);

  // Cek apakah newNote sudah masuk ke dalam array notes
  const isSuccess = notes.filter((note) => note.id === id).length > 0;

  // Gunakan isSuccess untuk menentukan response yang diberikan server, true dan false
  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil ditambahkan',
      data: {
        noteId: id,
      },
    });
    response.code(201);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Catatan gagal ditambahkan',
  });
  response.code(500);
  return response;
};

// Fungsi handler menampilkan catatan
const getAllNotesHandler = () => ({
  status: 'success',
  data: {
    notes,
  },
});

module.exports = { addNoteHandler, getAllNotesHandler };
// eksport fungsi handler menggunakan object literals, agar mudah mengeksport lebih dari 1 nilai.
