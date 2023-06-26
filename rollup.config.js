import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import ts from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";

export default {
    input: "src/insert_link.ts",
    output: {
        file: "output/insert_link.js",
        format: "iife",
    },
    plugins: [
        copy({
            targets: [
                { src: "src/manifest.json", dest: "output"},
            ]
        }),
        ts(),
        nodeResolve({ jsnext: true}),
        commonjs()
    ]
}
