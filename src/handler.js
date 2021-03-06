const { nanoid } = require('nanoid');
const notes = require('./notes');

//* fungsi handler menambah catatan
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

//* Fungsi handler menampilkan catatan
const getAllNotesHandler = () => ({
  status: 'success',
  data: {
    notes,
  },
});

//* FUngsi handler menampilkan catatan berdasarkan id
const getNoteByIdHandler = (request, h) => {
  const { id } = request.params;

  const note = notes.filter((n) => n.id === id)[0];

  if (note !== undefined) {
    return {
      status: 'success',
      data: {
        note,
      },
    };
  }
  const response = h.response({
    status: 'fail',
    message: 'Catatan tidak ditemukan',
  });
  response.code(404);
  return response;
};

//* Fungsi handler untuk edit catatan berdasarkan ID
const editNoteByIdHandler = (request, h) => {
  // untuk mendapatkan nilai id
  const { id } = request.params;
  // mendapatkan data notes melalui body request
  const { title, tags, body } = request.payload;
  // perbaharui nilai dari updatedAt, karna data sudah di update
  const updatedAt = new Date().toISOString();

  // dapatkan dulu index array sesuai ID
  const index = notes.findIndex((note) => note.id === id);

  // cek index yg dicari ditemukan atau tidak
  if (index !== -1) {
    notes[index] = {
      ...notes[index],
      title,
      tags,
      body,
      updatedAt,
    };

    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil diperbaharui',
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Gagal meperbarui catatan. ID tidak ditemukan',
  });

  response.code(404);
  return response;
};

//* FUngsi handler untuk menghapus catatan
const deleteNoteByIdHandler = (request, h) => {
  const { id } = request.params;

  const index = notes.findIndex((note) => note.id === id);

  // lakukan pengecekan nilai index
  if (index !== -1) {
    notes.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil dihapus',
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Catatan gagal dihapus, ID tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
};
// eksport fungsi handler menggunakan object literals, agar mudah mengeksport lebih dari 1 nilai.
