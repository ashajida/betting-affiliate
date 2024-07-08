import AdminNav from '@/app/componentss/AdminNav'
import { schemaTypes } from '@/sanity/schemaTypes'
import {defineConfig, isDev} from 'sanity'
//import {visionTool} from 'sanity/vision'
import {structureTool} from 'sanity/structure'
//import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'

export default defineConfig({
  name: 'default',
  title: 'Gambler',
  projectId: '53ahdp7z',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
        navbar: AdminNav
    }
  }
})

