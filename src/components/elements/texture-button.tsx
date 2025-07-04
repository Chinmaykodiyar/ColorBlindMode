"use client";

import { Button, type ButtonProps } from '@/components/ui/button';
import { useColorMode } from '@/contexts/color-mode-context';
import { cn } from '@/lib/utils';

interface TextureButtonProps extends ButtonProps {
  textureType?: 'stripes' | 'dots' | 'checkered';
  children: React.ReactNode;
}

const TextureButton = ({ children, className, textureType = 'stripes', ...props }: TextureButtonProps) => {
  const { useTextures, activePaletteKey } = useColorMode();

  const textureClass = useTextures ? `button-texture-${textureType}` : '';
  
  return (
    <Button
      className={cn(
        'min-w-[120px] transition-all duration-200',
        textureClass,
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default TextureButton;
