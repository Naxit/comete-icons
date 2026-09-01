import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  format: ["esm"],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  minify: false,
  keepNames: true,
  external: ["react", "react-dom"],
  loader: {
    ".css": "copy",
  },
  // REASON: esbuild nomme les assets copiés `[name]-[hash]` par défaut, ce qui
  // produit un `dist/xxx-HASH.css` et casse le subpath `./styles` déclaré dans
  // package.json (qui pointe sur un nom stable).
  esbuildOptions(options) {
    options.assetNames = "[name]";
  },
});
