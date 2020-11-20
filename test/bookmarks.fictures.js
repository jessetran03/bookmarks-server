function makeBookmarksArray() {
  return [
    {
      id: 1,
      title: 'Google',
      url: 'https://www.google.com/',
      description: 'Search Engine',
      rating: 5
    },
    {
      id: 2,
      title: 'Thinkful',
      url: 'https://www.thinkful.com/',
      description: 'Learn outside the classroom',
      rating: 5
    },
    {
      id: 3,
      title: 'Facebook',
      url: 'https://www.facebook.com/',
      description: 'Connect',
      rating: 4
    },
  ]
}

module.exports = {
  makeBookmarksArray,
}