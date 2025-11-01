import { BeforeDeleteHook } from 'node_modules/payload/dist/collections/config/types'

export const deleteDependencies: BeforeDeleteHook = async ({ id, req }) => {
  const { payload } = req

  await payload.delete({
    collection: 'comments',
    where: {
      relatedLesson: {
        equals: id,
      },
    },
  })

  return
}
