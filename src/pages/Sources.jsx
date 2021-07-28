import React from 'react';
import NewsGrid from '../component/NewsGrid';

export default function Sources({ articlesList }) {
  return <NewsGrid arr={articlesList} />;
}
