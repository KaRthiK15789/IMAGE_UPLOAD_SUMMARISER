import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { Sparkles, RefreshCw } from 'lucide-react';

import ImageUpload from '@/components/ImageUpload';
import ProcessingModeSelector, { ProcessingMode } from '@/components/ProcessingModeSelector';
import ProcessingLoader from '@/components/ProcessingLoader';
import PoetryResults from '@/components/PoetryResults';
import InvoiceResults from '@/components/InvoiceResults';
import { processImage, AIResponse } from '@/services/aiService';

const HomePage = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [processingMode, setProcessingMode] = useState<ProcessingMode>('poetry');
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<AIResponse | null>(null);

  const handleImageSelect = (file: File) => {
    console.log('Image selected:', file.name);
    setSelectedImage(file);
    setResult(null); // Clear previous results
  };

  const handleRemoveImage = () => {
    console.log('Image removed');
    setSelectedImage(null);
    setResult(null);
  };

  const handleProcess = async () => {
    if (!selectedImage) {
      toast({
        title: 'No image selected',
        description: 'Please select an image to process.',
        variant: 'destructive'
      });
      return;
    }

    setIsProcessing(true);
    setResult(null);

    try {
      console.log('Starting AI processing...', { mode: processingMode, image: selectedImage.name });
      const response = await processImage(selectedImage, processingMode);

      console.log('AI processing completed:', response);
      setResult(response);

      toast({
        title: 'Processing complete!',
        description: `Successfully processed your ${processingMode === 'poetry' ? 'poem' : 'invoice'}.`
      });
    } catch (error) {
      console.error('Processing error:', error);
      toast({
        title: 'Processing failed',
        description: 'There was an error processing your image. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReset = () => {
    console.log('Resetting application state');
    setSelectedImage(null);
    setResult(null);
    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50" data-id="69ai2zctl" data-path="src/pages/HomePage.tsx">
      {/* Header */}
      <header className="py-6 px-8 border-b bg-white/80 backdrop-blur-sm" data-id="mu5bfthwh" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto flex justify-between items-center" data-id="o77tws97e" data-path="src/pages/HomePage.tsx">
          <div className="flex items-center space-x-2" data-id="4qp4r22ly" data-path="src/pages/HomePage.tsx">
            <Sparkles className="h-6 w-6 text-blue-600" data-id="yrktd2p4f" data-path="src/pages/HomePage.tsx" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-id="5q12cvvs2" data-path="src/pages/HomePage.tsx">
              AI Image Processor
            </h1>
          </div>
          <nav className="space-x-4" data-id="umi8yxw35" data-path="src/pages/HomePage.tsx">
            <Button variant="ghost" onClick={handleReset} data-id="unko5nzsm" data-path="src/pages/HomePage.tsx">
              <RefreshCw className="h-4 w-4 mr-2" data-id="y3q46v9fd" data-path="src/pages/HomePage.tsx" />
              Reset
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4 space-y-8" data-id="uzr874lci" data-path="src/pages/HomePage.tsx">
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto" data-id="ma0fehzew" data-path="src/pages/HomePage.tsx">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent" data-id="t8w85od1x" data-path="src/pages/HomePage.tsx">
            Transform Images with AI
          </h2>
          <p className="text-lg text-gray-600 mb-8" data-id="gg0ostbo9" data-path="src/pages/HomePage.tsx">
            Upload an image and let AI extract meaningful insights - translate poetry or process invoices with advanced machine learning.
          </p>
        </section>

        {!result && !isProcessing &&
        <div className="max-w-4xl mx-auto space-y-8" data-id="vbjxgfox0" data-path="src/pages/HomePage.tsx">
            {/* Processing Mode Selection */}
            <ProcessingModeSelector
            selectedMode={processingMode}
            onModeChange={setProcessingMode}
            disabled={isProcessing} data-id="wnkpmgf3c" data-path="src/pages/HomePage.tsx" />


            {/* Image Upload */}
            <ImageUpload
            onImageSelect={handleImageSelect}
            selectedImage={selectedImage}
            onRemoveImage={handleRemoveImage}
            disabled={isProcessing} data-id="cg7a1af3k" data-path="src/pages/HomePage.tsx" />


            {/* Process Button */}
            {selectedImage &&
          <div className="text-center" data-id="q6oz650an" data-path="src/pages/HomePage.tsx">
                <Button
              onClick={handleProcess}
              disabled={isProcessing}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" data-id="2zibcb6l9" data-path="src/pages/HomePage.tsx">

                  <Sparkles className="h-5 w-5 mr-2" data-id="68xbhdjup" data-path="src/pages/HomePage.tsx" />
                  Process with AI
                </Button>
              </div>
          }
          </div>
        }

        {/* Processing State */}
        {isProcessing &&
        <div className="max-w-2xl mx-auto" data-id="rrzupx2sq" data-path="src/pages/HomePage.tsx">
            <ProcessingLoader mode={processingMode} data-id="tae19yl10" data-path="src/pages/HomePage.tsx" />
          </div>
        }

        {/* Results */}
        {result && !isProcessing &&
        <div className="max-w-6xl mx-auto" data-id="0i3w3462t" data-path="src/pages/HomePage.tsx">
            {result.type === 'poetry' ?
          <PoetryResults result={result} data-id="69bxdeyhq" data-path="src/pages/HomePage.tsx" /> :

          <InvoiceResults result={result} data-id="tqrm61qi7" data-path="src/pages/HomePage.tsx" />
          }

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4 mt-8" data-id="oe0koo3qi" data-path="src/pages/HomePage.tsx">
              <Button onClick={handleReset} variant="outline" data-id="xe777dx03" data-path="src/pages/HomePage.tsx">
                <RefreshCw className="h-4 w-4 mr-2" data-id="cllu9pl4t" data-path="src/pages/HomePage.tsx" />
                Process Another
              </Button>
              <Button
              onClick={handleProcess}
              disabled={!selectedImage}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" data-id="0v7cjux7m" data-path="src/pages/HomePage.tsx">

                <Sparkles className="h-5 w-5 mr-2" data-id="wdlciwuj2" data-path="src/pages/HomePage.tsx" />
                Re-process
              </Button>
            </div>
          </div>
        }

        {/* Feature Cards */}
        {!selectedImage && !isProcessing && !result &&
        <section className="max-w-4xl mx-auto mt-16" data-id="t9jou4sel" data-path="src/pages/HomePage.tsx">
            <h3 className="text-2xl font-semibold text-center mb-8" data-id="yezt0x8u1" data-path="src/pages/HomePage.tsx">What can you do?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-id="swt2rddyp" data-path="src/pages/HomePage.tsx">
              <Card className="hover:shadow-lg transition-shadow" data-id="sxa1np0v1" data-path="src/pages/HomePage.tsx">
                <CardHeader data-id="lbjp2asre" data-path="src/pages/HomePage.tsx">
                  <CardTitle className="flex items-center" data-id="2zx90m3d0" data-path="src/pages/HomePage.tsx">
                    <Sparkles className="h-5 w-5 mr-2 text-blue-600" data-id="36tjjw2a7" data-path="src/pages/HomePage.tsx" />
                    Poetry Translation
                  </CardTitle>
                </CardHeader>
                <CardContent data-id="81fs4jltd" data-path="src/pages/HomePage.tsx">
                  <p className="text-gray-600 mb-4" data-id="dy21xihk2" data-path="src/pages/HomePage.tsx">
                    Upload images of poems in any language and get:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700" data-id="t4hw4u4e6" data-path="src/pages/HomePage.tsx">
                    <li data-id="tkqw9pq49" data-path="src/pages/HomePage.tsx">• Romanized transliteration</li>
                    <li data-id="n2wrwrnrv" data-path="src/pages/HomePage.tsx">• English translation</li>
                    <li data-id="2a0dcu943" data-path="src/pages/HomePage.tsx">• Line-by-line meaning explanation</li>
                    <li data-id="cuz74ukxl" data-path="src/pages/HomePage.tsx">• Cultural context and interpretation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow" data-id="eijmnjkbs" data-path="src/pages/HomePage.tsx">
                <CardHeader data-id="ol636w05p" data-path="src/pages/HomePage.tsx">
                  <CardTitle className="flex items-center" data-id="mopp3fufr" data-path="src/pages/HomePage.tsx">
                    <Sparkles className="h-5 w-5 mr-2 text-purple-600" data-id="tn1dhqtk9" data-path="src/pages/HomePage.tsx" />
                    Invoice Processing
                  </CardTitle>
                </CardHeader>
                <CardContent data-id="rp2wlrdn1" data-path="src/pages/HomePage.tsx">
                  <p className="text-gray-600 mb-4" data-id="0n5o2bjzj" data-path="src/pages/HomePage.tsx">
                    Upload invoice images and extract:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700" data-id="5s7bx3kmk" data-path="src/pages/HomePage.tsx">
                    <li data-id="8kdo6ilmx" data-path="src/pages/HomePage.tsx">• Structured table data</li>
                    <li data-id="x37g7wz01" data-path="src/pages/HomePage.tsx">• Summary information</li>
                    <li data-id="n2xjhis3k" data-path="src/pages/HomePage.tsx">• Total amounts and dates</li>
                    <li data-id="2emyiiyzx" data-path="src/pages/HomePage.tsx">• AI-powered insights</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        }
      </main>


    </div>);

};

export default HomePage;