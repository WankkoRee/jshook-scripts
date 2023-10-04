import type {RollupOptions} from "rollup";
import tsConfigPaths from "rollup-plugin-tsconfig-paths";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import { DEFAULT_EXTENSIONS } from "@babel/core";
import {globSync} from 'glob';
import path from 'node:path';

const cwd = process.cwd();

const config: RollupOptions = {
    output: {
        dir: 'dist',
        format: 'cjs',
        entryFileNames: (chunkInfo) => {
            let id = chunkInfo.facadeModuleId;
            if (id === null) {
                console.warn("id 为 null");
                return `${chunkInfo.name}.js`;
            }
            id = path.relative(path.resolve(cwd, 'src'), id.slice(0, id.length - path.extname(id).length));
            return `${id}.js`;
        },
    },
    plugins: [
        tsConfigPaths(),
        nodeResolve(),
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            extensions: [...DEFAULT_EXTENSIONS, ".ts", ".tsx"],
            exclude: "node_modules/**",
        }),
    ]
};

export default globSync('src/scripts/**/main.ts').map((input) => {
    return {
        ...config,
        input,
    };
});
