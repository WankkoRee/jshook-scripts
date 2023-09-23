import fs from 'fs/promises';

const root = 'https://github.com/WankkoRee/jshook-scripts/raw/master/';

const main: Main = {
    "name": "Wankko Ree 的自用 JsHook 脚本仓库",
    "icon": null,
    "list": root+"dist/index.json",
    "push": null,
    "markdown": root+"readme.md",
    "group_qq": null,
    "group_tg": null,
    "user_count": null
};

await fs.writeFile('dist/main.json', JSON.stringify(main));

await fs.writeFile('dist/index.json', JSON.stringify(await Promise.all((await fs.readdir('src/scripts/')).map(async (dirname) => {
    const { manifest }: {manifest: Manifest} = await import('./scripts/'+dirname+'/manifest.ts');
    if (manifest.markdown)
        manifest.markdown = root + 'src/scripts/' + manifest.markdown;
    const manifestDist : DistManifest = {
        ...manifest,
        author: "Wankko Ree",
        source: root + "src/scripts/" + dirname+'/main.ts',
        url: root + "dist/scripts/" + dirname + '/main.js',
        down_count: null,
    }
    return manifestDist;
}))));
