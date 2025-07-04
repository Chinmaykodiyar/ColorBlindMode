"use client";

import { useColorMode, type SimulationFilterKey } from '@/contexts/color-mode-context';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { palettes, type PaletteKey } from '@/lib/palettes';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Palette, Eye, VenetianMask, Settings2, Wand2 } from 'lucide-react';

const ColorSettingsPanel = () => {
  const {
    activePaletteKey,
    setActivePaletteKey,
    simulationFilterKey,
    setSimulationFilterKey,
    useTextures,
    setUseTextures,
    adaptiveSystemDetection,
    setAdaptiveSystemDetection,
  } = useColorMode();

  const paletteOptions = Object.entries(palettes).map(([key, palette]) => ({
    value: key as PaletteKey,
    label: palette.name,
  }));

  const simulationOptions: { value: SimulationFilterKey; label: string }[] = [
    { value: 'none', label: 'None' },
    { value: 'protanopia', label: 'Protanopia Sim' },
    { value: 'deuteranopia', label: 'Deuteranopia Sim' },
    { value: 'tritanopia', label: 'Tritanopia Sim' },
    { value: 'achromatopsia', label: 'Achromatopsia Sim' },
  ];

  return (
    <ScrollArea className="h-full p-4">
      <div className="space-y-6">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Palette className="h-5 w-5 text-primary" />
            <Label className="text-base font-semibold">Color Palettes</Label>
          </div>
          <RadioGroup
            value={activePaletteKey}
            onValueChange={(value) => setActivePaletteKey(value as PaletteKey)}
            className="space-y-2 group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:flex-col"
          >
            {paletteOptions.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={`palette-${option.value}`} />
                <Label htmlFor={`palette-${option.value}`} className="font-normal group-data-[collapsible=icon]:hidden">{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <Separator />

        <div>
          <div className="mb-3 flex items-center gap-2">
            <Wand2 className="h-5 w-5 text-primary" />
            <Label className="text-base font-semibold">Texture & Patterns</Label>
          </div>
          <div className="flex items-center space-x-2 group-data-[collapsible=icon]:justify-center">
            <Switch
              id="use-textures"
              checked={useTextures}
              onCheckedChange={setUseTextures}
            />
            <Label htmlFor="use-textures" className="font-normal group-data-[collapsible=icon]:hidden">
              Enable Textures
            </Label>
          </div>
           <p className="text-xs text-muted-foreground mt-2 group-data-[collapsible=icon]:hidden">
            Apply patterns to charts and buttons for better differentiation.
          </p>
        </div>

        <Separator />

        <div>
          <div className="mb-3 flex items-center gap-2">
            <Eye className="h-5 w-5 text-primary" />
            <Label className="text-base font-semibold">Simulation Filters</Label>
          </div>
          <RadioGroup
            value={simulationFilterKey}
            onValueChange={(value) => setSimulationFilterKey(value as SimulationFilterKey)}
            className="space-y-2 group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:flex-col"
          >
            {simulationOptions.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={`sim-${option.value}`} />
                <Label htmlFor={`sim-${option.value}`} className="font-normal group-data-[collapsible=icon]:hidden">{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
          <p className="text-xs text-muted-foreground mt-2 group-data-[collapsible=icon]:hidden">
            See how the current view appears with different types of color vision deficiency.
          </p>
        </div>
        
        <Separator />

        <div>
          <div className="mb-3 flex items-center gap-2">
            <Settings2 className="h-5 w-5 text-primary" />
            <Label className="text-base font-semibold">Adaptive Mode</Label>
          </div>
          <div className="flex items-center space-x-2 group-data-[collapsible=icon]:justify-center">
            <Switch
              id="adaptive-mode"
              checked={adaptiveSystemDetection}
              onCheckedChange={setAdaptiveSystemDetection}
              disabled // This feature is conceptual for now
            />
            <Label htmlFor="adaptive-mode" className="font-normal group-data-[collapsible=icon]:hidden">
              Auto-detect System Settings
            </Label>
          </div>
          <p className="text-xs text-muted-foreground mt-2 group-data-[collapsible=icon]:hidden">
            (Conceptual) Automatically adapt based on OS accessibility preferences.
          </p>
        </div>

      </div>
    </ScrollArea>
  );
};

export default ColorSettingsPanel;
