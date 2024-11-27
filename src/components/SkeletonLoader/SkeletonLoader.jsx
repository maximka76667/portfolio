import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import './SkeletonLoader.css';

function SkeletonLoader() {
  return (
    <div
      style={{
        marginTop: '150px',
        width: '100%',
        height: '400px'
      }}
    >
      {/* Title Skeleton */}
      <h3 className="skeleton-loader__title"> </h3>
      {/* Paragraph p */}
      <p className="skeleton-loader__paragraph"> </p>
      <p className="skeleton-loader__paragraph"> </p>
      <p className="skeleton-loader__paragraph"> </p>

      <h3 className="skeleton-loader__title"> </h3>
      <p className="skeleton-loader__paragraph"> </p>
      <p className="skeleton-loader__paragraph"> </p>
    </div>
  );
}

export default SkeletonLoader;
