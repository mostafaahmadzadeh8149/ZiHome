// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";
// import svgr from "vite-plugin-svgr";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss(), svgr()],
// });
//=================================================>
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import svgr from "vite-plugin-svgr";
// import path from "path";

// export default defineConfig({
//   plugins: [react(), svgr()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// });
//=================================================>
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
  ],

  resolve: {
    alias: {
      "@": "/src",
    },
  },

  server: {
    port: 5173,
    open: true,
  },
});
