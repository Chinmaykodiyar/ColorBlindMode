
"use client";

import { Bar, BarChart as RechartsBarChart, CartesianGrid, XAxis, YAxis, Tooltip as RechartsTooltip, Legend as RechartsLegend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltipContent, type ChartConfig } from '@/components/ui/chart';
import { useColorMode } from '@/contexts/color-mode-context';
import type { PaletteColor } from '@/lib/palettes';

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const TexturedBarChart = () => {
  const { currentPalette, useTextures } = useColorMode();

  const getFill = (paletteColor: PaletteColor, useTexturesFlag: boolean) => {
    return useTexturesFlag && paletteColor.texture ? paletteColor.texture : `hsl(${paletteColor.hsl})`;
  };
  
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: getFill(currentPalette.chartColors[0], useTextures),
    },
    mobile: {
      label: "Mobile",
      color: getFill(currentPalette.chartColors[1], useTextures),
    },
  } satisfies ChartConfig;


  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Monthly Usage Statistics</CardTitle>
        <CardDescription>Desktop vs. Mobile users from Jan to Jun</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <RechartsBarChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" tickLine={false} axisLine={false} stroke="hsl(var(--foreground))" fontSize={12} />
            <YAxis tickLine={false} axisLine={false} stroke="hsl(var(--foreground))" fontSize={12} />
            <RechartsTooltip
              cursor={{ fill: 'hsl(var(--muted))', opacity: 0.5 }}
              content={<ChartTooltipContent />} 
            />
            <RechartsLegend content={({ payload }) => {
              if (!payload) return null;
              return (
                <ul className="flex justify-center gap-4 pt-4">
                  {payload.map((entry, index) => (
                    <li key={`item-${index}`} className="flex items-center gap-2 text-sm">
                      <span 
                        className="h-3 w-3 rounded-full" 
                        style={{ 
                          backgroundColor: useTextures ? undefined : entry.color,
                          backgroundImage: useTextures && entry.color?.startsWith('url') ? entry.color : undefined,
                          border: useTextures && entry.color?.startsWith('url') ? '1px solid hsl(var(--foreground))' : undefined,
                         }}
                      />
                      {entry.value}
                    </li>
                  ))}
                </ul>
              );
            }} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={[4, 4, 0, 0]} />
          </RechartsBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default TexturedBarChart;
