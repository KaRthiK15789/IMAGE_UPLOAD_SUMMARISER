import React from 'react';
import { FileText, Receipt } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export type ProcessingMode = 'poetry' | 'invoice';

interface ProcessingModeSelectorProps {
  selectedMode: ProcessingMode;
  onModeChange: (mode: ProcessingMode) => void;
  disabled?: boolean;
}

const ProcessingModeSelector: React.FC<ProcessingModeSelectorProps> = ({
  selectedMode,
  onModeChange,
  disabled = false
}) => {
  const modes = [
  {
    id: 'poetry' as ProcessingMode,
    title: 'Poetry Translation',
    description: 'Translate and transliterate poems from any language',
    icon: FileText,
    features: ['Line-by-line translation', 'Romanized transliteration', 'Meaning explanation']
  },
  {
    id: 'invoice' as ProcessingMode,
    title: 'Invoice Processing',
    description: 'Extract and analyze invoice data',
    icon: Receipt,
    features: ['Table data extraction', 'Summary generation', 'Insights analysis']
  }];


  return (
    <div className="space-y-4" data-id="yxuyuobsg" data-path="src/components/ProcessingModeSelector.tsx">
      <div data-id="ytc4nj3tz" data-path="src/components/ProcessingModeSelector.tsx">
        <h3 className="text-lg font-semibold mb-2" data-id="4bs24c9hu" data-path="src/components/ProcessingModeSelector.tsx">Choose Processing Mode</h3>
        <p className="text-sm text-gray-600" data-id="2b4nwo6ov" data-path="src/components/ProcessingModeSelector.tsx">Select how you want to process your image</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-id="kt0hks7qn" data-path="src/components/ProcessingModeSelector.tsx">
        {modes.map((mode) => {
          const Icon = mode.icon;
          const isSelected = selectedMode === mode.id;

          return (
            <Card
              key={mode.id}
              className={cn(
                "cursor-pointer transition-all duration-200 hover:shadow-md",
                isSelected ? "ring-2 ring-blue-500 bg-blue-50" : "hover:border-gray-400",
                disabled && "opacity-50 cursor-not-allowed"
              )}
              onClick={() => !disabled && onModeChange(mode.id)} data-id="np9c9mcl7" data-path="src/components/ProcessingModeSelector.tsx">

              <CardHeader className="pb-3" data-id="nzi1bg30z" data-path="src/components/ProcessingModeSelector.tsx">
                <div className="flex items-start space-x-3" data-id="sjm9gex74" data-path="src/components/ProcessingModeSelector.tsx">
                  <div className={cn(
                    "p-2 rounded-lg",
                    isSelected ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"
                  )} data-id="wgp786iqa" data-path="src/components/ProcessingModeSelector.tsx">
                    <Icon className="h-5 w-5" data-id="utmgd0j2q" data-path="src/components/ProcessingModeSelector.tsx" />
                  </div>
                  <div className="flex-1 min-w-0" data-id="sp4w5ieu4" data-path="src/components/ProcessingModeSelector.tsx">
                    <CardTitle className="text-base" data-id="naxkfidiw" data-path="src/components/ProcessingModeSelector.tsx">{mode.title}</CardTitle>
                    <CardDescription className="text-sm" data-id="q02kg1ere" data-path="src/components/ProcessingModeSelector.tsx">
                      {mode.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0" data-id="44bm7h0nv" data-path="src/components/ProcessingModeSelector.tsx">
                <ul className="space-y-1" data-id="8lr4hszt3" data-path="src/components/ProcessingModeSelector.tsx">
                  {mode.features.map((feature, index) =>
                  <li key={index} className="text-xs text-gray-600 flex items-center" data-id="0vkcdaz9z" data-path="src/components/ProcessingModeSelector.tsx">
                      <div className="h-1.5 w-1.5 bg-gray-400 rounded-full mr-2" data-id="lkf2fu19k" data-path="src/components/ProcessingModeSelector.tsx" />
                      {feature}
                    </li>
                  )}
                </ul>
              </CardContent>
            </Card>);

        })}
      </div>
    </div>);

};

export default ProcessingModeSelector;