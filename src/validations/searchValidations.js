export const searchValidations = value => {
  let error = ''

  if (!value) {
    error = 'Debes escribir algo'
  }

  return error
}
