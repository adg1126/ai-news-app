import React from 'react';
import NewsGrid from '../component/NewsGrid';

export default function Latest({ articlesList }) {
  return <NewsGrid arr={articlesList} />;
}
