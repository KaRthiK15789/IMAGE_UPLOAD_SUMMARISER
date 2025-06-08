import React, { useCallback, useState } from 'react';
import { Upload, X, Image as ImageIcon, FileText, File } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  selectedFile: File | null;
  onRemoveFile: () => void;
  disabled?: boolean;
  isProcessing?: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({
  onFileSelect,
  selectedFile,
  onRemoveFile,
  disabled = false,
  isProcessing = false
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Supported file types
  const supportedTypes = {
    'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp'],
    'application/pdf': ['.pdf'],
    'application/msword': ['.doc'],
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
  };

  // Get file icon based on type
  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) return <ImageIcon className="h-4 w-4" />;
    if (file.type === 'application/pdf') return <FileText className="h-4 w-4" />;
    return <File className="h-4 w-4" />;
  };

  // Handle file selection
  const handleFileSelect = useCallback((file: File) => {
    if (!file) return;

    // Validate file type
    const isValidType = Object.entries(supportedTypes).some(([mime, exts]) => {
      const ext = `.${file.name.split('.').pop()?.toLowerCase()}`;
      return (
        file.type.match(new RegExp(mime.replace('*', '.*'))) || 
        (ext && exts.includes(ext))
      );
    });

    if (!isValidType) {
      toast.error('Unsupported file type');
      return;
    }

    // Validate file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      toast.error('File size exceeds 10MB limit');
      return;
    }

    onFileSelect(file);

    // Create preview URL for images only
    if (file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
  }, [onFileSelect, supportedTypes]);

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

    if (disabled || isProcessing) return;

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFileSelect(files[0]);
    }
  }, [handleFileSelect, disabled, isProcessing]);

  // Handle file input change
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFileSelect(files[0]);
    }
    // Reset input to allow selecting the same file again
    e.target.value = '';
  }, [handleFileSelect]);

  // Handle remove file
  const handleRemove = useCallback(() => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
    onRemoveFile();
  }, [previewUrl, onRemoveFile]);

  // Clean up preview URL on unmount
  React.useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        {selectedFile ? (
          // File preview
          <div className="space-y-4">
            <div className="relative group">
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Selected file preview"
                  className="w-full max-h-64 object-contain rounded-lg border"
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-8 border rounded-lg bg-gray-50">
                  <div className="p-3 bg-gray-100 rounded-full mb-4">
                    {getFileIcon(selectedFile)}
                  </div>
                  <p className="text-sm font-medium">{selectedFile.name}</p>
                </div>
              )}
              
              <Button
                variant="destructive"
                size="sm"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={handleRemove}
                disabled={disabled || isProcessing}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="text-sm text-gray-600">
              <p><strong>File:</strong> {selectedFile.name}</p>
              <p><strong>Size:</strong> {(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
              <p><strong>Type:</strong> {selectedFile.type || 'Unknown'}</p>
            </div>
          </div>
        ) : (
          // Upload area
          <div
            className={cn(
              "border-2 border-dashed rounded-lg p-8 text-center transition-colors",
              dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300",
              disabled || isProcessing ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:border-gray-400"
            )}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => !disabled && !isProcessing && document.getElementById('file-input')?.click()}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 bg-gray-100 rounded-full">
                {dragActive ? (
                  <Upload className="h-8 w-8 text-blue-500" />
                ) : (
                  <ImageIcon className="h-8 w-8 text-gray-500" />
                )}
              </div>
              
              <div>
                <p className="text-lg font-medium text-gray-900">
                  {isProcessing ? 'Processing file...' : dragActive ? 'Drop your file here' : 'Upload a file'}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {isProcessing ? 'Please wait while we process your file' : 'Drag and drop or click to select'}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Supports: JPG, PNG, PDF, DOC, DOCX
                </p>
              </div>
            </div>
            
            <input
              id="file-input"
              type="file"
              className="hidden"
              accept={Object.keys(supportedTypes).join(',')}
              onChange={handleInputChange}
              disabled={disabled || isProcessing}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FileUpload;
