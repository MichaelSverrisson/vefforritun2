import { writeFile } from 'fs/promises';
import { join } from 'path';
const index = './dist/index.html';
const mappa = './dist';
const haus = `<!DOCTYPE html>
<html lang="en>
<head>
    <meta charset="UTF-8>
    meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel= "stylesheet" href="main.css">
    <title>Numbers</title>
</head>
<header>
    <p>upplýsingar frá data.txt</p> 
</header>
`;
const botn = `
</body>
</html>`;

export function gerasidu(object){
    let link = object.name;
    link = link.split('.')[0];
    link = join(mappa, `${link}.html`);
    const sida = `<!DOCTYPE html>
<html lang="en>
<head>
    <meta charset=UTF-8>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="main.css">
    <title>${object.name}</title>
</head>
<body>
<main>
<h1>${object.name}</h1>
</main>
<span><a href="./index.html">til baka</a><span>
</body>
</html>`;

    writeFile(link, sida);
}
export function makeHTML(body){
    let HTML = haus;
    HTML += body;
    HTML += botn;
    writeFile(index, HTML);
    return HTML;
}
