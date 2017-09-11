console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('Adding note', title, body);
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Read note ', title);
};

var removeNote = (title) => {
    console.log('Remove note ', title);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};