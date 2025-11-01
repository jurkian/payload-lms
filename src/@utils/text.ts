import _ from 'lodash'

// Trim and make lowercase
export const trimLower = (text: string) => text?.trim()?.toLowerCase()

// Deburr = replace diacritics etc. with normalized versions
export const trimLowerDeburr = (text: string) => _.deburr(text?.trim()?.toLowerCase())

export const createSlug = (text: string) =>
   _.deburr(text)
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // remove non-alphanumeric chars
      .replace(/\s+/g, '-') // replace spaces with hyphens
      .replace(/-+/g, '-') // collapse multiple hyphens
      .replace(/^-+|-+$/g, '') // trim hyphens
