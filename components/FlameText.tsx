
import React from 'react';

interface FlameTextProps {
  children?: string;
  className?: string;
}

const FlameText: React.FC<FlameTextProps> = ({ children = "P.A.L.A.V.R.A", className = "" }) => {
  return (
    <span className={`text-fire animate-flame font-extrabold tracking-tighter inline-block ${className}`}>
      {children}
    </span>
  );
};

export default FlameText;
