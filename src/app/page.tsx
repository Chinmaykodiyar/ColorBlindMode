import DemonstrationArea from '@/components/sections/demonstration-area';

export default function HomePage() {
  return (
    <div className="container mx-auto py-8">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl" style={{color: 'hsl(var(--primary))'}}>
          Chromatic Harmony
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Experience web accessibility with adaptive color palettes, textures, and simulation tools for various color vision deficiencies.
        </p>
      </header>
      <DemonstrationArea />
    </div>
  );
}
