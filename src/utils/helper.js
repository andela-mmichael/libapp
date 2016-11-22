function searchTitle(input, book) {
  return new RegExp(input, 'i').test(book.title)
}

function searchAuthor(input, book) {
  return new RegExp(input, 'i').test(book.author)
}

function searchYear(input, book) {
  return new RegExp(input, 'i').test(book.year)
}

module.exports = {
  searchTitle: searchTitle,
  searchAuthor: searchAuthor,
  searchYear: searchYear
}
