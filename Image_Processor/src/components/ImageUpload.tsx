import React, { useCallback, useState } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  selectedImage: File | null;
  onRemoveImage: () => void;
  disabled?: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onImageSelect,
  selectedImage,
  onRemoveImage,
  disabled = false
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Handle file selection
  const handleFileSelect = useCallback((file: File) => {
    if (file && file.type.startsWith('image/')) {
      console.log('Selected image:', file.name, file.size, file.type);
      onImageSelect(file);

      // Create preview URL
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  }, [onImageSelect]);

  // Handle drag events
  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  // Handle drop
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (disabled) return;

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFileSelect(files[0]);
    }
  }, [handleFileSelect, disabled]);

  // Handle file input change
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFileSelect(files[0]);
    }
  }, [handleFileSelect]);

  // Handle remove image
  const handleRemove = useCallback(() => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
    onRemoveImage();
  }, [previewUrl, onRemoveImage]);

  // Clean up preview URL on unmount
  React.useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <Card className="w-full" data-id="m42jukuka" data-path="src/components/ImageUpload.tsx">
      <CardContent className="p-6" data-id="35mqw12bo" data-path="src/components/ImageUpload.tsx">
        {selectedImage ?
        // Image preview
        <div className="space-y-4" data-id="x5lpbzjyy" data-path="src/components/ImageUpload.tsx">
            <div className="relative group" data-id="p7k9udgq8" data-path="src/components/ImageUpload.tsx">
              <img
              src={previewUrl || ''}
              alt="Selected image"
              className="w-full max-h-64 object-contain rounded-lg border" data-id="cl1itqydl" data-path="src/components/ImageUpload.tsx" />

              <Button
              variant="destructive"
              size="sm"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={handleRemove}
              disabled={disabled} data-id="3bk7yqi52" data-path="src/components/ImageUpload.tsx">

                <X className="h-4 w-4" data-id="bxfdiy17q" data-path="src/components/ImageUpload.tsx" />
              </Button>
            </div>
            <div className="text-sm text-gray-600" data-id="hhsf13cfb" data-path="src/components/ImageUpload.tsx">
              <p data-id="kcagycks9" data-path="src/components/ImageUpload.tsx"><strong data-id="7yi1ybg63" data-path="src/components/ImageUpload.tsx">File:</strong> {selectedImage.name}</p>
              <p data-id="owjab7k2w" data-path="src/components/ImageUpload.tsx"><strong data-id="1renzkv12" data-path="src/components/ImageUpload.tsx">Size:</strong> {(selectedImage.size / 1024 / 1024).toFixed(2)} MB</p>
              <p data-id="eafw54oh3" data-path="src/components/ImageUpload.tsx"><strong data-id="2lgvit0bi" data-path="src/components/ImageUpload.tsx">Type:</strong> {selectedImage.type}</p>
            </div>
          </div> :

        // Upload area
        <div
          className={cn(
            "border-2 border-dashed rounded-lg p-8 text-center transition-colors",
            dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300",
            disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:border-gray-400"
          )}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => !disabled && document.getElementById('file-input')?.click()} data-id="xc5c7mo3l" data-path="src/components/ImageUpload.tsx">

            <div className="flex flex-col items-center space-y-4" data-id="nugfp4xyu" data-path="src/components/ImageUpload.tsx">
              <div className="p-4 bg-gray-100 rounded-full" data-id="vwvl9yx37" data-path="src/components/ImageUpload.tsx">
                {dragActive ?
              <Upload className="h-8 w-8 text-blue-500" data-id="g95i6g5wz" data-path="src/components/ImageUpload.tsx" /> :

              <ImageIcon className="h-8 w-8 text-gray-500" data-id="6pc6x567z" data-path="src/components/ImageUpload.tsx" />
              }
              </div>
              <div data-id="fcakqpi7i" data-path="src/components/ImageUpload.tsx">
                <p className="text-lg font-medium text-gray-900" data-id="eyj60pykk" data-path="src/components/ImageUpload.tsx">
                  {dragActive ? 'Drop your image here' : 'Upload an image'}
                </p>
                <p className="text-sm text-gray-500 mt-1" data-id="mghjwpl14" data-path="src/components/ImageUpload.tsx">
                  Drag and drop or click to select
                </p>
                <p className="text-xs text-gray-400 mt-2" data-id="wh8nq68uy" data-path="src/components/ImageUpload.tsx">
                  Supports: JPG, PNG, GIF, WebP
                </p>
              </div>
            </div>
            
            <input
            id="file-input"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleInputChange}
            disabled={disabled} data-id="3yp52cuc6" data-path="src/components/ImageUpload.tsx" />

          </div>
        }
      </CardContent>
    </Card>);

};

export default ImageUpload;