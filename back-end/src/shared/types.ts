export type UnwrapArray<T> = T extends Array<infer U> ? U : T

export type WithoutMeta<T> = Omit<T, 'id' | 'updatedAt' | 'createdAt'>
