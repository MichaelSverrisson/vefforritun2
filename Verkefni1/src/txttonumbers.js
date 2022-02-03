import { readFile } from "fs/promises";
import { join } from 'path';
import { Value } from "sass";

const DATA_DIR = './data';
export async function txttonumbers(file){
    const path = join(DATA_DIR, file);
    const data = await readFile(path);
    const datastring = data.toString('utf-8');
    const array = datastring.split('\n').map((item) => {
        if(item.includes('.')) item = item.replaceAll('.', '');
        if(item.includes(',')) item = item.replaceAll(',', '');
        if(item === '') return NaN;
        return Number;
    });

    const newarr = array.filter((Value) => !Number.isNaN(Value));
    const numberobject = { name: file, data: newarr};
    return numberobject;
}