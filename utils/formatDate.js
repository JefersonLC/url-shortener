export default (date, lang = 'en') => {
  const newDate = new Date(date).toLocaleDateString(lang, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return newDate
}
