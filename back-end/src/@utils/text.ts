import _ from 'lodash'

// Trim and make lowercase
export const trimLower = (text: string) => text?.trim()?.toLowerCase()

// Deburr = replace diacritics etc. with normalized versions
export const trimLowerDeburr = (text: string) => _.deburr(text?.trim()?.toLowerCase())
