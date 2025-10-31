// storage-adapter-import-placeholder
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Admins } from './collections/Admins'
import { Bans } from './collections/Bans'
import { Logs } from './collections/Logs'
import { Courses } from './collections/Courses'
import { Lessons } from './collections/Lessons'
import { Comments } from './collections/Comments'
import { Pages } from './collections/Pages'
import { Users } from './collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
   admin: {
      user: Admins.slug,
      importMap: {
         baseDir: path.resolve(dirname),
      },
   },
   collections: [Admins, Bans, Logs, Courses, Lessons, Comments, Pages, Users],
   editor: lexicalEditor(),
   secret: process.env.PAYLOAD_SECRET || '',
   typescript: {
      outputFile: path.resolve(dirname, 'payload-types.ts'),
   },
   db: sqliteAdapter({
      client: {
         url: process.env.DATABASE_URI || '',
      },
   }),
   sharp,
   plugins: [
      // storage-adapter-placeholder
   ],
})
