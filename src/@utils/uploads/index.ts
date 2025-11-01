import fs from 'fs'
import dayjs from '@utils/dayjs'

const fsp = fs.promises

// Generate a path by course id
export const generateCourseUploadsPath = (courseId: number) => {
   return `${process.cwd()}/uploads/${courseId}`
}

export const checkIfPathExists = async (path: string): Promise<boolean> => {
   try {
      await fsp.access(path)
      return true
   } catch (err) {
      return false
   }
}

// Create dir if not exists
// Alternative: fs-extra ensureDir()
const createDir = (path: string) => fsp.mkdir(path, { recursive: true })

export const createDirIfNotExists = async (path: string): Promise<void> => {
   try {
      const exists = await checkIfPathExists(path)

      // Doesn't exist -> create it
      if (!exists) {
         await createDir(path)
      }
   } catch (err) {
      console.log(err)
   }
}

export const deleteDir = async (path: string): Promise<void> => {
   try {
      await fsp.rm(path, { recursive: true })
   } catch (error) {}
}

// Make a file copy
export const makeFileCopy = async (courseId: number, innerFolder = '/assets', filename: string) => {
   try {
      // Here we are assuming a source path like: /uploads/:courseId/assets/...
      // with "assets" suffix being optional
      const uploadsPath = generateCourseUploadsPath(courseId) + innerFolder
      const pathToGet = uploadsPath + `/${filename}`

      const fileExists = await checkIfPathExists(pathToGet)

      if (!fileExists) {
         return {
            ok: false,
            uploadsPath,
         }
      }

      // Target copied filename: orgfilename-COPY-31.10.2025-17.00.00.jpg

      // Filename: name.extension, like: photo.jpg
      const filenameSplit = filename.split('.')
      const newFilename = `${filenameSplit[0]}-COPY-${dayjs().format('DD.MM.YYYY-HH.mm.ss')}.${
         filenameSplit[1]
      }`

      const newPath = generateCourseUploadsPath(courseId) + `${innerFolder}/${newFilename}`

      const readData = await fsp.readFile(pathToGet)
      await fsp.writeFile(newPath, readData, { encoding: 'binary' })

      return { ok: true, uploadsPath }
   } catch (error) {
      return { ok: false }
   }
}
