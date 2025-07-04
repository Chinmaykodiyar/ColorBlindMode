"use client";

import React from 'react';

const SvgDefinitions = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'block', width: 0, height: 0, position: 'absolute' }}>
      <defs>
        {/* Colorblindness Simulation Filters */}
        <filter id="protanopia-filter">
          <feColorMatrix type="matrix"
            values="0.567,0.433,0,0,0
                    0.558,0.442,0,0,0
                    0,0.242,0.758,0,0
                    0,0,0,1,0" />
        </filter>
        <filter id="deuteranopia-filter">
          <feColorMatrix type="matrix"
            values="0.625,0.375,0,0,0
                    0.700,0.300,0,0,0
                    0,0.300,0.700,0,0
                    0,0,0,1,0" />
        </filter>
        <filter id="tritanopia-filter">
          <feColorMatrix type="matrix"
            values="0.95,0.05,0,0,0
                    0,0.433,0.567,0,0
                    0,0.475,0.525,0,0
                    0,0,0,1,0" />
        </filter>
        <filter id="achromatopsia-filter">
            <feColorMatrix type="matrix"
            values="0.299,0.587,0.114,0,0
                    0.299,0.587,0.114,0,0
                    0.299,0.587,0.114,0,0
                    0,0,0,1,0" />
        </filter>

        {/* Texture Patterns for Charts/UI Elements - referencing CSS variables for colors */}
        {/* Pattern 1: Stripes */}
        <pattern id="pattern-stripes-1" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="4" height="8" style={{ fill: 'hsl(var(--chart-1))' }} />
          <rect x="4" width="4" height="8" style={{ fill: 'hsl(var(--background))' }} />
        </pattern>
        <pattern id="pattern-stripes-2" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="4" height="8" style={{ fill: 'hsl(var(--chart-2))' }} />
          <rect x="4" width="4" height="8" style={{ fill: 'hsl(var(--background))' }} />
        </pattern>
        <pattern id="pattern-stripes-3" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="4" height="8" style={{ fill: 'hsl(var(--chart-3))' }} />
          <rect x="4" width="4" height="8" style={{ fill: 'hsl(var(--background))' }} />
        </pattern>

        {/* Pattern 2: Dots */}
        <pattern id="pattern-dots-1" width="10" height="10" patternUnits="userSpaceOnUse">
          <rect width="10" height="10" style={{ fill: 'hsl(var(--background))' }} />
          <circle cx="5" cy="5" r="2.5" style={{ fill: 'hsl(var(--chart-1))' }} />
        </pattern>
         <pattern id="pattern-dots-2" width="10" height="10" patternUnits="userSpaceOnUse">
          <rect width="10" height="10" style={{ fill: 'hsl(var(--background))' }} />
          <circle cx="5" cy="5" r="2.5" style={{ fill: 'hsl(var(--chart-2))' }} />
        </pattern>
         <pattern id="pattern-dots-3" width="10" height="10" patternUnits="userSpaceOnUse">
          <rect width="10" height="10" style={{ fill: 'hsl(var(--background))' }} />
          <circle cx="5" cy="5" r="2.5" style={{ fill: 'hsl(var(--chart-3))' }} />
        </pattern>

        {/* Pattern 3: Crosshatch */}
        <pattern id="pattern-crosshatch-1" width="8" height="8" patternUnits="userSpaceOnUse">
          <rect width="8" height="8" style={{ fill: 'hsl(var(--background))' }} />
          <path d="M0 0L8 8ZM8 0L0 8Z" strokeWidth="1" style={{ stroke: 'hsl(var(--chart-1))' }} />
        </pattern>
        <pattern id="pattern-crosshatch-2" width="8" height="8" patternUnits="userSpaceOnUse">
          <rect width="8" height="8" style={{ fill: 'hsl(var(--background))' }} />
          <path d="M0 0L8 8ZM8 0L0 8Z" strokeWidth="1" style={{ stroke: 'hsl(var(--chart-2))' }} />
        </pattern>
        <pattern id="pattern-crosshatch-3" width="8" height="8" patternUnits="userSpaceOnUse">
          <rect width="8" height="8" style={{ fill: 'hsl(var(--background))' }} />
          <path d="M0 0L8 8ZM8 0L0 8Z" strokeWidth="1" style={{ stroke: 'hsl(var(--chart-3))' }} />
        </pattern>
      </defs>
    </svg>
  );
};

export default SvgDefinitions;

