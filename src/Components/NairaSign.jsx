import React from 'react';

// This component uses the same interface as Lucide icons (size, color, etc.)
const NairaSign = ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24" // Standard 24x24 viewBox
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* SVG Path for the Naira symbol (₦) */}
    <path d="M12 2v20M8 7h8M8 11h8M6 16h12M6 2h12" /> 
  </svg>
);

export default NairaSign;