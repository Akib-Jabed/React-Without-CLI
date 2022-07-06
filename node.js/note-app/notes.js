const fs = require('fs');
const chalk = require('chalk');

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('./notes.json');
        const notes = JSON.parse(dataBuffer);
        return notes;
    } catch {
        return [];
    }
};

const saveNotes = (notesJSON) => {
    const notes = JSON.stringify(notesJSON);
    fs.writeFileSync('./notes.json', notes);
};

const addNote = (title, body) => {
    const notes = loadNotes();
    const existingNote = notes.find((note) => note.title === title);
    if (existingNote) {
        console.log(chalk.red.bold.inverse('Duplicate note title'));
    } else {
        const note = {
            title,
            body,
        };
        notes.push(note);
        saveNotes(notes);
        console.log(chalk.green.bold.inverse('New note added'));
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    const filteredNotes = notes.filter((note) => note.title !== title);
    if (notes.length === filteredNotes.length) {
        console.log(chalk.red.bold.inverse('No note found.'));
    } else {
        saveNotes(filteredNotes);
        console.log(chalk.green.bold.inverse('Note removed'));
    }
};

const getNotes = () => {
    const notes = loadNotes();
    if (notes) {
        notes.forEach((note) => {
            console.log(`${chalk.bold.inverse(note.title)}: ${note.body}`);
        });
    } else {
        console.log(chalk.red.bold.inverse('No note found.'));
    }
};

const readNote = (title) => {
    const notes = loadNotes();
    const targetNote = notes.find((note) => note.title === title);
    if (targetNote) {
        console.log(`${chalk.bold.inverse(targetNote.title)}: ${targetNote.body}`);
    } else {
        console.log(chalk.red.bold.inverse('No note found.'));
    }
};

module.exports = {
    addNote,
    removeNote,
    readNote,
    getNotes,
};
