let nextArticleId = 0

export const searchArticle = text => ({
    type: 'SEARCH_ARTICLE',
    id: nextArticleId++,
    text
  })