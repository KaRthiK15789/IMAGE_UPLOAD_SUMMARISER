import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { type PoetryResponse } from '@/services/aiService';

interface PoetryResultsProps {
  result: PoetryResponse;
}

const PoetryResults: React.FC<PoetryResultsProps> = ({ result }) => {
  return (
    <div className="space-y-6" data-id="s6uo3ta6g" data-path="src/components/PoetryResults.tsx">
      {/* Header */}
      <Card data-id="h39eryqur" data-path="src/components/PoetryResults.tsx">
        <CardHeader data-id="90ojdvcry" data-path="src/components/PoetryResults.tsx">
          <div className="flex items-center justify-between" data-id="g7js1rw4a" data-path="src/components/PoetryResults.tsx">
            <CardTitle className="text-xl" data-id="imsf2012r" data-path="src/components/PoetryResults.tsx">Poetry Analysis</CardTitle>
            <Badge variant="secondary" data-id="hmjfmskyq" data-path="src/components/PoetryResults.tsx">{result.originalLanguage}</Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-id="mpledbilt" data-path="src/components/PoetryResults.tsx">
        {/* Original Text */}
        <Card data-id="vyrl5o49y" data-path="src/components/PoetryResults.tsx">
          <CardHeader data-id="5r9yny8r9" data-path="src/components/PoetryResults.tsx">
            <CardTitle className="text-base" data-id="3rvy6zp9y" data-path="src/components/PoetryResults.tsx">Original Text</CardTitle>
          </CardHeader>
          <CardContent data-id="38tes7q6b" data-path="src/components/PoetryResults.tsx">
            <div className="font-serif text-lg leading-relaxed whitespace-pre-line" data-id="2bgzu4fpg" data-path="src/components/PoetryResults.tsx">
              {result.originalText}
            </div>
          </CardContent>
        </Card>

        {/* Transliteration */}
        <Card data-id="17dptnmu2" data-path="src/components/PoetryResults.tsx">
          <CardHeader data-id="cues66gx1" data-path="src/components/PoetryResults.tsx">
            <CardTitle className="text-base" data-id="wmou0vdkz" data-path="src/components/PoetryResults.tsx">Romanized Version</CardTitle>
          </CardHeader>
          <CardContent data-id="rftomabyw" data-path="src/components/PoetryResults.tsx">
            <div className="font-mono text-sm leading-relaxed whitespace-pre-line text-gray-700" data-id="hol2drf89" data-path="src/components/PoetryResults.tsx">
              {result.transliteration}
            </div>
          </CardContent>
        </Card>

        {/* Translation */}
        <Card data-id="wy4huwvyj" data-path="src/components/PoetryResults.tsx">
          <CardHeader data-id="zok1ct8i2" data-path="src/components/PoetryResults.tsx">
            <CardTitle className="text-base" data-id="ypgu5p9vz" data-path="src/components/PoetryResults.tsx">English Translation</CardTitle>
          </CardHeader>
          <CardContent data-id="zdlj1j6tz" data-path="src/components/PoetryResults.tsx">
            <div className="leading-relaxed whitespace-pre-line" data-id="h4f74s8kw" data-path="src/components/PoetryResults.tsx">
              {result.translation}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analysis */}
      <Card data-id="2nwtwro95" data-path="src/components/PoetryResults.tsx">
        <CardHeader data-id="h3e7ydpsj" data-path="src/components/PoetryResults.tsx">
          <CardTitle data-id="u771j6pb5" data-path="src/components/PoetryResults.tsx">Line-by-Line Analysis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6" data-id="euk6fn75x" data-path="src/components/PoetryResults.tsx">
          {result.stanzas.map((stanza, index) =>
          <div key={index} className="space-y-4" data-id="sde39ey34" data-path="src/components/PoetryResults.tsx">
              {index > 0 && <Separator data-id="077hv1pl5" data-path="src/components/PoetryResults.tsx" />}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="pbe33qo6y" data-path="src/components/PoetryResults.tsx">
                <div className="space-y-3" data-id="1bk82hujp" data-path="src/components/PoetryResults.tsx">
                  <div data-id="hq7xggr4y" data-path="src/components/PoetryResults.tsx">
                    <h4 className="font-semibold text-sm text-gray-600 mb-1" data-id="mgfhoqv62" data-path="src/components/PoetryResults.tsx">Original</h4>
                    <p className="font-serif text-lg" data-id="cp3cw5drg" data-path="src/components/PoetryResults.tsx">{stanza.original}</p>
                  </div>
                  
                  <div data-id="25sauzaad" data-path="src/components/PoetryResults.tsx">
                    <h4 className="font-semibold text-sm text-gray-600 mb-1" data-id="i7r3aqi22" data-path="src/components/PoetryResults.tsx">Romanized</h4>
                    <p className="font-mono text-sm text-gray-700" data-id="kpsdyoivu" data-path="src/components/PoetryResults.tsx">{stanza.transliterated}</p>
                  </div>
                </div>
                
                <div className="space-y-3" data-id="17r2rvo8b" data-path="src/components/PoetryResults.tsx">
                  <div data-id="0pt7uqfuz" data-path="src/components/PoetryResults.tsx">
                    <h4 className="font-semibold text-sm text-gray-600 mb-1" data-id="zx2dp8qvz" data-path="src/components/PoetryResults.tsx">Translation</h4>
                    <p className="text-base" data-id="jqr9851yl" data-path="src/components/PoetryResults.tsx">{stanza.translation}</p>
                  </div>
                  
                  <div data-id="ypellgirg" data-path="src/components/PoetryResults.tsx">
                    <h4 className="font-semibold text-sm text-gray-600 mb-1" data-id="supx2ii2n" data-path="src/components/PoetryResults.tsx">Meaning</h4>
                    <p className="text-sm text-gray-600 italic" data-id="ejhsa0ryd" data-path="src/components/PoetryResults.tsx">{stanza.meaning}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>);

};

export default PoetryResults;