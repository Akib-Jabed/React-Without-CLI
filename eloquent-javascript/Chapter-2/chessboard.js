const n = 8;

for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n; j++) {
        if ((i % 2 == 0 && j % 2 == 1) || (i % 2 == 1 && j % 2 == 0)) {
            row += '#';
        } else {
            row += ' ';
        }
    }
    console.log(row);
}