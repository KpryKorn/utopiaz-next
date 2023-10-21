import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "17n9vsyq",
  dataset: "production",
  title: "Utopiaz",
  apiVersion: "2023-10-25",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;
