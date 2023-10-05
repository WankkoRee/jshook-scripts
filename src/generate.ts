import fs from 'fs/promises';
import {globSync} from "glob";
import axios from "axios";

const repo = 'WankkoRee/jshook-scripts';

const root = `https://cdn.jsdelivr.net/gh/${repo}@`;
const srcRoot = `${root}master`;
const releaseRoot = `${root}release`;

const entryFile = "/main.json";
const indexFile = "/index.json";
const docFile = "/readme.md";
const srcEntry = "/main.ts";
const releaseEntry = "/main.js";

const jdDelivrEndpoint = `https://data.jsdelivr.com/v1/stats/packages/gh/${repo}@release`;

async function getJsDelivrFileStats() {
    const result = [];
    let pages = 1;
    for (let page = 0; page < pages; page++) {
        const resp = await axios.get<[{
            name: string,
            hits: {
                total: number,
                dates: { [key: string]: number; },
            },
            bandwidth: {
                total: number,
                dates: { [key: string]: number; },
            },
        }]>(`${jdDelivrEndpoint}/files?period=year`);
        if (resp.status !== 200) {
            console.error(`请求失败, HTTP ${resp.status} ${resp.statusText}`);
            console.error(resp.data);
            break;
        }
        pages = Number(resp.headers['x-total-pages']);
        result.push(...resp.data);
    }
    return result;
}

async function generate() {
    const jsDelivrFileStats = await getJsDelivrFileStats();

    const main: Main = {
        name: "Wankko Ree 的自用 JsHook 脚本仓库",
        icon: "https://github.com/WankkoRee.png",
        list: `${releaseRoot}${indexFile}`,
        push: null,
        markdown: `${srcRoot}${docFile}`,
        group_qq: null,
        group_tg: null,
        user_count: jsDelivrFileStats.find(({name}) => name === entryFile)?.hits.total ?? 0,
    };

    await fs.writeFile(`dist${entryFile}`, JSON.stringify(main));

    await fs.writeFile(`dist${indexFile}`, JSON.stringify(await Promise.all(globSync('*/', {
        cwd: 'src/scripts/',
    }).map(async (dirname) => {
        const {manifest}: { manifest: Manifest } = await import(`@/scripts/${dirname}/manifest.ts`);
        const manifestDist: DistManifest = {
            ...manifest,
            author: "Wankko Ree",
            markdown: `${srcRoot}/src/scripts/${dirname}${docFile}`,
            source: `https://github.com/${repo}/blob/master/src/scripts/${dirname}${srcEntry}`,
            url: `${releaseRoot}/scripts/${dirname}${releaseEntry}`,
            down_count: jsDelivrFileStats.find(({name}) => name === `/scripts/${dirname}${releaseEntry}`)?.hits.total ?? 0,
        }
        return manifestDist;
    }))));
}

await generate();
