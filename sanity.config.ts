import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { visionTool } from "@sanity/vision";

const config = defineConfig({
  projectId: "17n9vsyq",
  dataset: "production",
  title: "Utopiaz",
  apiVersion: "2023-10-25",
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemas,
  },
  form: {
    components: {
      input: (props) => {
        if (Array.isArray(props.groups) && props.groups.length > 0) {
          if (props.groups[0].name === "all-fields") {
            props.groups.shift();
          }
        }
        return props.renderDefault(props);
      },
    },
  },
});

export default config;
