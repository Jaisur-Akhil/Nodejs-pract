/** @format */

const fs = require('fs');

const saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJson);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => {
    note.title === title;
  });

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log('New Note added');
  } else {
    console.log('Note title already exist');
  }
};

const remNote = (title, body) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log('fount to remove item');
    notes.pop({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log('Note removed');
  } else {
    console.log('Note not found!');
  }
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(note.title);
    console.log(note.body);
  } else {
    console.log('Note not found!');
  }
};

const listNotes = () => {
  const notes = loadNotes();
  notes.forEach((element) => {
    console.log(element.title);
  });

  console.log(notes);
};

module.exports = {
  addNote: addNote,
  readNote: readNote,
  listNotes: listNotes,
  remNote: remNote,
};
