import { createSelector } from 'reselect';

const selectArticles = state => state.articles;

export const selectArticlesList = createSelector(
  [selectArticles],
  articles => articles.articlesList
);

export const selectIsArticlesFetching = createSelector(
  [selectArticles],
  articles => articles.isFetching
);

export const selectActiveArticle = createSelector(
  [selectArticles],
  articles => articles.activeArticle
);
