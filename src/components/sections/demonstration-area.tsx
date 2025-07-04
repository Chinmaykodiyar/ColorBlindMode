"use client";

import TextureButton from '@/components/elements/texture-button';
import TexturedBarChart from '@/components/charts/textured-bar-chart';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, AlertTriangle, Info, XCircle } from 'lucide-react';

const DemonstrationArea = () => {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline">Typography & Text Colors</CardTitle>
          <CardDescription>See how text appears with the current palette.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg" style={{ color: 'hsl(var(--app-color-neutral-text))' }}>This is a standard paragraph text.</p>
          <p className="text-lg font-medium" style={{ color: 'hsl(var(--primary))' }}>This text uses the primary color.</p>
          <p className="text-lg" style={{ color: 'hsl(var(--accent))' }}>This text uses the accent color.</p>
          <div className="p-4 rounded-md" style={{ backgroundColor: 'hsl(var(--primary))' }}>
            <p className="text-lg" style={{ color: 'hsl(var(--primary-foreground))' }}>Text on Primary Background</p>
          </div>
          <div className="p-4 rounded-md" style={{ backgroundColor: 'hsl(var(--accent))' }}>
            <p className="text-lg" style={{ color: 'hsl(var(--accent-foreground))' }}>Text on Accent Background</p>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline">Interactive Elements</CardTitle>
          <CardDescription>Buttons with optional textures.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <TextureButton textureType="stripes">Striped Button</TextureButton>
          <TextureButton textureType="dots" variant="secondary">Dotted Secondary</TextureButton>
          <TextureButton textureType="checkered" variant="outline">Checkered Outline</TextureButton>
          <TextureButton variant="destructive">Destructive Action</TextureButton>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline">Alerts & Badges</CardTitle>
          <CardDescription>Visual feedback elements.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert style={{borderColor: 'hsl(var(--app-color-success))'}}>
            <CheckCircle2 className="h-4 w-4" style={{color: 'hsl(var(--app-color-success))'}}/>
            <AlertTitle style={{color: 'hsl(var(--app-color-success))'}}>Success!</AlertTitle>
            <AlertDescription>Your action was completed successfully.</AlertDescription>
          </Alert>
           <Alert variant="destructive">
            <XCircle className="h-4 w-4" />
            <AlertTitle>Error!</AlertTitle>
            <AlertDescription>Something went wrong. This uses the destructive palette colors.</AlertDescription>
          </Alert>
          <Alert style={{borderColor: 'hsl(var(--app-color-warning))'}}>
            <AlertTriangle className="h-4 w-4" style={{color: 'hsl(var(--app-color-warning))'}}/>
            <AlertTitle style={{color: 'hsl(var(--app-color-warning))'}}>Warning</AlertTitle>
            <AlertDescription>Please check the input fields.</AlertDescription>
          </Alert>
          <div className="flex flex-wrap gap-2">
            <Badge>Default Badge</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge style={{ backgroundColor: 'hsl(var(--app-color-info))', color: 'hsl(var(--accent-foreground))' }}>Info Badge</Badge>
          </div>
        </CardContent>
      </Card>
      
      <TexturedBarChart />
    </div>
  );
};

export default DemonstrationArea;
