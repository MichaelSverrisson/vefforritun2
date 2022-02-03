import { copyFile, mkdir, readdir, stat } from 'fs/promises';
import { makeHTML } from './make-html.js';
import { createNumberhlutir } from './calculate.js';

import { txttonumbers } from './txttonumbers.js';

const DATA_DIR = './data';
const OUT_DIR = './dist';

async function direxists(dir){
    try{
        const info = await stat(dir);
        return info.isDirectory();
    }
    catch(e){
        return false;
    }
}

async function main() {
    if (!(await direxists(OUT_DIR))){
        await mkdir(OUT_DIR);
    }
    const files = await readdir(DATA_DIR);
    console.log('files ', files);

    const sections = [];
    for(const file of files){
        const numbers = await txttonumbers(file);
        sections.push(numbers)
    }
    const sectionshlutir = [];
    sections.forEach(async (el) => {
        sectionshlutir.push(createNumberhlutir(el));
    });

    const parsedsections = await makesections(sectionshlutir);
    makeHTML(parsedsections);
    copyFile('src/main.css', './dist/main.css');
}

main().catch((err) => console.error(err));