# AI Image Processor

A modern React application that processes images using AI to extract meaningful insights. Currently supports poetry translation and invoice processing.

## Features

### 🎭 Poetry Translation
- Upload images of poems in any language
- Get romanized English transliteration
- Receive line-by-line English translations
- Understand cultural context and meaning

### 📋 Invoice Processing
- Extract structured data from invoice images
- Generate summaries with key information
- Analyze invoice items in table format
- Get AI-powered insights about the invoice

## Tech Stack

- **React 18.3.1** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **ShadCN UI** - Beautiful component library
- **Vite** - Fast build tool and dev server
- **Lucide React** - Modern icon library

## Project Structure

```
src/
├── components/
│   ├── ui/                 # ShadCN UI components
│   ├── ImageUpload.tsx     # Drag & drop image upload
│   ├── ProcessingModeSelector.tsx  # Mode selection UI
│   ├── ProcessingLoader.tsx        # Loading animation
│   ├── PoetryResults.tsx          # Poetry results display
│   └── InvoiceResults.tsx         # Invoice results display
├── services/
│   └── aiService.ts        # AI processing service (mock)
├── pages/
│   ├── HomePage.tsx        # Main application page
│   └── NotFound.tsx        # 404 page
├── hooks/
│   ├── use-mobile.tsx      # Mobile detection hook
│   └── use-toast.ts        # Toast notifications
├── lib/
│   └── utils.ts           # Utility functions
└── main.tsx               # Application entry point
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-image-processor
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Usage

1. **Select Processing Mode**: Choose between Poetry Translation or Invoice Processing
2. **Upload Image**: Drag and drop or click to select an image file
3. **Process**: Click "Process with AI" to analyze the image
4. **View Results**: See the formatted results with detailed analysis

### Supported Image Formats

- JPG/JPEG
- PNG
- GIF
- WebP

## AI Integration

Currently, the application uses mock AI responses for demonstration purposes. To integrate with real AI services:

1. Replace the mock service in `src/services/aiService.ts`
2. Add your AI API credentials to environment variables
3. Implement error handling for API calls
4. Add rate limiting and usage monitoring

### Example Integration Points

- **Google Gemini Vision API**
- **OpenAI GPT-4 Vision**
- **Azure Computer Vision**
- **AWS Rekognition + Textract**

## Features in Detail

### Image Upload Component
- Drag and drop functionality
- File validation and preview
- Size and type restrictions
- Responsive design

### Processing Modes
- **Poetry Mode**: Optimized for text recognition and translation
- **Invoice Mode**: Specialized for table extraction and data analysis

### Results Display
- **Poetry**: Original text, transliteration, translation, and meaning
- **Invoice**: Summary cards, data tables, and AI insights

### User Experience
- Loading animations with step-by-step progress
- Toast notifications for user feedback
- Responsive design for mobile and desktop
- Smooth transitions and modern UI

## Customization

### Adding New Processing Modes

1. Add the new mode to `ProcessingMode` type in `ProcessingModeSelector.tsx`
2. Create a new results component (e.g., `NewModeResults.tsx`)
3. Update the AI service to handle the new mode
4. Add the mode to the selector UI

### Styling

The project uses Tailwind CSS with custom gradients and animations. Key design elements:

- Gradient backgrounds and text
- Subtle shadows and hover effects
- Consistent spacing and typography
- Accessible color contrasts

## Performance

- Lazy loading for large components
- Image preview optimization
- Efficient re-renders with proper React patterns
- Bundle size optimization with Vite

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact: info@indhic.com

---

Built with ❤️ using React and modern web technologies.