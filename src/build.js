
import { writeFile, mkdir, readFile, readdir, stat } from 'fs/promises';
import {greining} from './greining.js';
import {parse} from './parser.js'
import {join } from 'path';
import { makeHTML,statsTemplate,makeIndex } from './makeHTML.js';

const DATA_DIR = './data';
const OUTPUT_DIR = './dist';

async function direxists(dir){
    try{
        const info = await stat(dir);
        return info.isDirectory();
    }catch (e){
        return false;
    }
}

async function main() {
    const files = await readdir(DATA_DIR)

    if(!direxists(OUTPUT_DIR)){
        await mkdir(OUTPUT_DIR);
    }
    const datasets = [];

    for(const file of files){
        const path = join(DATA_DIR,file);
        const data = await readFile(path);
        const parsed = parse(data);
        const stats = greining(parsed);
        const html = makeHTML(parsed,stats);
        const fileName = file.split('.')[0]+'.html'; 
        const dataset = statsTemplate(fileName,html,true);
        
        await writeFile(slug, dataset, {flag: 'w+'});
        datasets.push({file:file,fileName:fileName});
    }
    const index = statsTemplate('Forsíða',makeIndex(datasets));
    await writeFile(join(OUTPUT_DIR, 'index.html'),index,{flag:'w+'});
  
}

main().catch((err) => console.error(err));