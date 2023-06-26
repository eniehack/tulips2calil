import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import ts from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";

export default {
    input: "src/insert_link.js",
    output: {
        file: "dist/insert_link.js",
        format: "iife",
    },
    plugins: [
        copy({
            targets: [
                { src: "src/manifest.json", dest: "dist"},
            ]
        }),
        ts(),
        nodeResolve({ jsnext: true}),
        commonjs()
    ]
}
