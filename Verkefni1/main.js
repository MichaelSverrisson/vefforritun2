import { writeFile } from "fs/promises";

async function main(){
    const title = 'halló heimur';
    const filename = 'index.html';
    const data = 
    `<!DOCTYPE html>
<html lang="is">
<head>
    <meta charset="UTF-8">
    <title>${title}</title>
</head>
<body>
    <div>Halló heimur</div>
</body>
</html>
`;
    try{
    const result = await writeFile(`./dist/${filename}`, data, {flag: 'w+'});
    } catch(e){
        console.error(`Failed to create ${filename }`, e);
    }
}

main().catch((e) => {
    console.error('Error occured', e)
})