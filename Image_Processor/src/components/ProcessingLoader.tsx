import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, Brain, Image as ImageIcon } from 'lucide-react';

interface ProcessingLoaderProps {
  mode: 'poetry' | 'invoice';
}

const ProcessingLoader: React.FC<ProcessingLoaderProps> = ({ mode }) => {
  const modeText = mode === 'poetry' ? 'Analyzing poetry' : 'Processing invoice';
  const steps = mode === 'poetry' ?
  ['Reading text content', 'Identifying language', 'Transliterating', 'Translating', 'Analyzing meaning'] :
  ['Extracting text', 'Identifying tables', 'Processing data', 'Generating insights', 'Finalizing results'];

  const [currentStep, setCurrentStep] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 800);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <Card className="w-full" data-id="ctl6l1md3" data-path="src/components/ProcessingLoader.tsx">
      <CardContent className="flex flex-col items-center justify-center py-12 px-6" data-id="aletwmiwp" data-path="src/components/ProcessingLoader.tsx">
        <div className="flex items-center space-x-4 mb-6" data-id="m9osynkon" data-path="src/components/ProcessingLoader.tsx">
          <div className="relative" data-id="smko8rof2" data-path="src/components/ProcessingLoader.tsx">
            <Brain className="h-8 w-8 text-blue-600" data-id="uar1hfcj3" data-path="src/components/ProcessingLoader.tsx" />
            <Loader2 className="h-4 w-4 text-blue-600 absolute -top-1 -right-1 animate-spin" data-id="w6x17snb0" data-path="src/components/ProcessingLoader.tsx" />
          </div>
          <ImageIcon className="h-8 w-8 text-gray-400" data-id="ynm3tsgyi" data-path="src/components/ProcessingLoader.tsx" />
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2" data-id="2y1asu4i7" data-path="src/components/ProcessingLoader.tsx">
          Processing with AI
        </h3>
        
        <p className="text-gray-600 mb-6 text-center" data-id="c6xvyc3xa" data-path="src/components/ProcessingLoader.tsx">
          {modeText}... This may take a few moments.
        </p>
        
        <div className="w-full max-w-md space-y-3" data-id="21poeps78" data-path="src/components/ProcessingLoader.tsx">
          {steps.map((step, index) =>
          <div
            key={index}
            className={`flex items-center space-x-3 text-sm transition-all duration-300 ${
            index === currentStep ?
            'text-blue-600 font-medium' :
            index < currentStep ?
            'text-green-600' :
            'text-gray-400'}`
            } data-id="ibn7lbeku" data-path="src/components/ProcessingLoader.tsx">

              <div className={`h-2 w-2 rounded-full ${
            index === currentStep ?
            'bg-blue-600 animate-pulse' :
            index < currentStep ?
            'bg-green-600' :
            'bg-gray-300'}`
            } data-id="e9xfltxum" data-path="src/components/ProcessingLoader.tsx" />
              <span data-id="jn60yywsn" data-path="src/components/ProcessingLoader.tsx">{step}</span>
              {index < currentStep &&
            <span className="ml-auto text-green-600" data-id="5z906vf8c" data-path="src/components/ProcessingLoader.tsx">✓</span>
            }
            </div>
          )}
        </div>
        
        <div className="mt-6 w-full max-w-md bg-gray-200 rounded-full h-2" data-id="2lgjyb4kg" data-path="src/components/ProcessingLoader.tsx">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${(currentStep + 1) / steps.length * 100}%` }} data-id="oefc4xltd" data-path="src/components/ProcessingLoader.tsx" />

        </div>
      </CardContent>
    </Card>);

};

export default ProcessingLoader;