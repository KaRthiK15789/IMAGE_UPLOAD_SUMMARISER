// Mock AI service for demonstration purposes
// In a real implementation, this would connect to actual AI APIs like Gemini

export interface PoetryResponse {
  type: 'poetry';
  originalLanguage: string;
  originalText: string;
  transliteration: string;
  translation: string;
  stanzas: {
    original: string;
    transliterated: string;
    translation: string;
    meaning: string;
  }[];
}

export interface InvoiceResponse {
  type: 'invoice';
  summary: {
    totalAmount: string;
    currency: string;
    invoiceNumber: string;
    date: string;
    vendor: string;
    customer: string;
  };
  items: {
    description: string;
    quantity: number;
    unitPrice: string;
    total: string;
  }[];
  insights: string[];
}

export type AIResponse = PoetryResponse | InvoiceResponse;

// Mock poetry response
const mockPoetryResponse: PoetryResponse = {
  type: 'poetry',
  originalLanguage: 'Hindi',
  originalText: 'मैं तुम-सबकी ओर निहार रहा हूँ,\nस्थान मुझे भी दो तुम अपने बीच;',
  transliteration: 'Main tum-sabakī ora nihāra rahā hūṅ,\nSthāna mujhe bhī dō tum apanē bīch;',
  translation: 'I am gazing towards all of you,\nGive me a place too, amongst yourselves;',
  stanzas: [
  {
    original: 'मैं तुम-सबकी ओर निहार रहा हूँ,',
    transliterated: 'Main tum-sabakī ora nihāra rahā hūṅ,',
    translation: 'I am gazing towards all of you,',
    meaning: 'The speaker is looking at everyone with longing and hope.'
  },
  {
    original: 'स्थान मुझे भी दो तुम अपने बीच;',
    transliterated: 'Sthāna mujhe bhī dō tum apanē bīch;',
    translation: 'Give me a place too, amongst yourselves;',
    meaning: 'A humble request for inclusion and acceptance in the community.'
  },
  {
    original: 'सबसे नीचे धूल-भरी धरणी पर।',
    transliterated: 'Sabsē nīcē dhūla-bharī dharaṇī para.',
    translation: 'Upon the lowliest, dust-laden earth.',
    meaning: 'Even the humblest place would be acceptable to the speaker.'
  }]

};

// Mock invoice response
const mockInvoiceResponse: InvoiceResponse = {
  type: 'invoice',
  summary: {
    totalAmount: '$1,247.50',
    currency: 'USD',
    invoiceNumber: 'INV-2024-001',
    date: '2024-01-15',
    vendor: 'TechCorp Solutions',
    customer: 'ABC Company Ltd.'
  },
  items: [
  {
    description: 'Web Development Services',
    quantity: 40,
    unitPrice: '$25.00',
    total: '$1,000.00'
  },
  {
    description: 'Domain Registration',
    quantity: 1,
    unitPrice: '$15.00',
    total: '$15.00'
  },
  {
    description: 'SSL Certificate',
    quantity: 1,
    unitPrice: '$89.00',
    total: '$89.00'
  },
  {
    description: 'Monthly Hosting',
    quantity: 3,
    unitPrice: '$47.50',
    total: '$142.50'
  }],

  insights: [
  'This is a technology services invoice',
  'Total includes web development and hosting services',
  'Payment terms appear to be standard 30-day net',
  'Services span multiple months indicating ongoing relationship']

};

export const processImage = async (
imageFile: File,
mode: 'poetry' | 'invoice')
: Promise<AIResponse> => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 2000 + Math.random() * 2000));

  // Log the image processing for debugging
  console.log('Processing image:', {
    name: imageFile.name,
    size: imageFile.size,
    type: imageFile.type,
    mode
  });

  // Return mock response based on mode
  if (mode === 'poetry') {
    return mockPoetryResponse;
  } else {
    return mockInvoiceResponse;
  }
};