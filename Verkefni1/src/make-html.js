import { makeHTML } from '../src/make-html';
import { describe, expect, it } from '@jest/globals';
describe('make-html HTML', () => {
    it('takes string and adds top and bottom', () => {
    const input = '<section></section>'
    const html = makeHTML(input);

    expect(html).toBe(`<!DOCTYPE html>
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
<body>
    <section></section>
</body>`);
        });
});