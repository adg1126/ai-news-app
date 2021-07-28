import React from 'react';
import NewsGrid from '../component/NewsGrid';

export default function Categories({ articlesList }) {
  return <NewsGrid arr={articlesList} />;
}
