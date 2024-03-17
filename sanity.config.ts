import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'portfolio',
  title: 'portfolio',
  projectId: 'uzguulz6',
  dataset: "production",
  basePath: "/studio",
  plugins: [deskTool()],
  schema: { types: schemaTypes },
})
