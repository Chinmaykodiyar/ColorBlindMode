export type PaletteKey = 'normal' | 'protanopia-friendly' | 'deuteranopia-friendly' | 'tritanopia-friendly';

export interface PaletteColor {
  hsl: string; // e.g., "210 90% 50%"
  name: string;
  texture?: string; // e.g., "url(#pattern-stripes-1)"
}

export interface Palette {
  name: string;
  chartColors: PaletteColor[];
  // We can add more semantic colors here if needed, e.g., for success/warning/info messages
  // For now, these are primarily managed via CSS variables in globals.css under .palette-KEY classes
}

const normalChartColors: PaletteColor[] = [
  { hsl: "var(--chart-1)", name: "Deep Blue", texture: "url(#pattern-stripes-1)" },
  { hsl: "var(--chart-2)", name: "Bright Red", texture: "url(#pattern-dots-1)" },
  { hsl: "var(--chart-3)", name: "Vibrant Green", texture: "url(#pattern-crosshatch-1)" },
  { hsl: "var(--chart-4)", name: "Sunny Yellow", texture: "url(#pattern-stripes-2)" },
  { hsl: "var(--chart-5)", name: "Royal Purple", texture: "url(#pattern-dots-2)" },
];

const protanopiaFriendlyChartColors: PaletteColor[] = [
  { hsl: "var(--chart-1)", name: "Sky Blue", texture: "url(#pattern-stripes-1)" }, // originally 220 60% 75%
  { hsl: "var(--chart-2)", name: "Yellow-Orange", texture: "url(#pattern-dots-1)" }, // originally 50 80% 65%
  { hsl: "var(--chart-3)", name: "Medium Grey", texture: "url(#pattern-crosshatch-1)" }, // originally 0 0% 60%
  { hsl: "var(--chart-4)", name: "Cyan/Teal", texture: "url(#pattern-stripes-2)" }, // originally 200 40% 50%
  { hsl: "var(--chart-5)", name: "Violet", texture: "url(#pattern-dots-2)" }, // originally 270 40% 60%
];

const deuteranopiaFriendlyChartColors: PaletteColor[] = [
  { hsl: "var(--chart-1)", name: "Strong Blue", texture: "url(#pattern-stripes-1)" }, // originally 240 70% 70%
  { hsl: "var(--chart-2)", name: "Orange", texture: "url(#pattern-dots-1)" },      // originally 30 90% 60%
  { hsl: "var(--chart-3)", name: "Darker Grey", texture: "url(#pattern-crosshatch-1)" },// originally 0 0% 55%
  { hsl: "var(--chart-4)", name: "Light Yellow/Gold", texture: "url(#pattern-stripes-2)" },// originally 60 60% 70%
  { hsl: "var(--chart-5)", name: "Magenta/Purple", texture: "url(#pattern-dots-2)" },// originally 300 50% 65%
];

const tritanopiaFriendlyChartColors: PaletteColor[] = [
  { hsl: "var(--chart-1)", name: "Bright Red", texture: "url(#pattern-stripes-1)" },    // originally 0 80% 70%
  { hsl: "var(--chart-2)", name: "Cyan/Teal", texture: "url(#pattern-dots-1)" },     // originally 180 70% 55%
  { hsl: "var(--chart-3)", name: "Mid Grey", texture: "url(#pattern-crosshatch-1)" },      // originally 0 0% 50%
  { hsl: "var(--chart-4)", name: "Pink", texture: "url(#pattern-stripes-2)" },          // originally 330 80% 75%
  { hsl: "var(--chart-5)", name: "Muted Green (Greyish)", texture: "url(#pattern-dots-2)" }, // originally 120 40% 60%
];


export const palettes: Record<PaletteKey, Palette> = {
  normal: {
    name: "Normal Vision",
    chartColors: normalChartColors,
  },
  'protanopia-friendly': {
    name: "Protanopia Friendly",
    chartColors: protanopiaFriendlyChartColors,
  },
  'deuteranopia-friendly': {
    name: "Deuteranopia Friendly",
    chartColors: deuteranopiaFriendlyChartColors,
  },
  'tritanopia-friendly': {
    name: "Tritanopia Friendly",
    chartColors: tritanopiaFriendlyChartColors,
  },
};
