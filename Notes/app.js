/** @format */

const yargs = require('yargs');
const notes = require('./notes');

yargs.version('1.1.0');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      desc: 'Note Title',
      demandOption: true,
      type: 'string',
    },
    body: {
      desc: 'Note Body',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: 'rem',
  describe: 'Remove note',
  builder: {
    title: {
      desc: 'Note Title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.remNote(argv.title);
  },
});

yargs.command({
  command: 'read',
  describe: 'Read note',
  builder: {
    title: {
      desc: 'Note Title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.command({
  command: 'list',
  describe: 'List notes',
  handler() {
    notes.listNotes();
  },
});
yargs.parse();
