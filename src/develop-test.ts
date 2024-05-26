// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/react-tours-project": "https://course-api.com",
    },
  },
});

const a = 5641213;
const b = "b";
