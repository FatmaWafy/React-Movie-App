import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175, // Keep your desired port
    host: "0.0.0.0", // Allows access from network & ngrok
    strictPort: true, // Ensures Vite doesn't change the port
    allowedHosts: ["acf7-41-232-92-37.ngrok-free.app"], // Add your ngrok domain here
    cors: true, // Enable CORS
  },
});
