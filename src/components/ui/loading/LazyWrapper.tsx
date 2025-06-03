import React from 'react';
import LoadingSpinner from './LoadingSpinner';

interface LazyWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
  minHeight?: string;
}

const LazyWrapper: React.FC<LazyWrapperProps> = ({ 
  children, 
  fallback,
  className = '',
  minHeight = '200px'
}) => {
  const defaultFallback = (
    <div className={`flex items-center justify-center ${className}`} style={{ minHeight }}>
      <LoadingSpinner size="lg" text="Chargement du contenu..." />
    </div>
  );

  return (
    <React.Suspense fallback={fallback || defaultFallback}>
      {children}
    </React.Suspense>
  );
};

export default LazyWrapper;
