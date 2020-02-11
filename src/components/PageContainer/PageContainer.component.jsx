import React from 'react';
import './PageContainer.style.scss';
export default function PageContainer({ className, routes }) {
  return <div className={'page-container ' + className}>{routes}</div>;
}
