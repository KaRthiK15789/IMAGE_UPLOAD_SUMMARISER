import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import * as pdf from 'pdf-parse';
import * as mammoth from 'mammoth';
import * as imageToText from 'image-to-text';
import { Configuration, OpenAIApi } from 'openai';

class AIService {
  private openai: OpenAIApi;

  constructor() {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.openai = new OpenAIApi(configuration);
  }

  // Process any supported file type
  async processFile(filePath: string, fileType: string): Promise<string> {
    try {
      // Extract text based on file type
      let extractedText = '';
      
      switch (fileType.toLowerCase()) {
        case 'pdf':
          extractedText = await this.extractTextFromPdf(filePath);
          break;
        case 'doc':
        case 'docx':
          extractedText = await this.extractTextFromDoc(filePath);
          break;
        case 'jpg':
        case 'jpeg':
        case 'png':
          extractedText = await this.extractTextFromImage(filePath);
          break;
        default:
          throw new Error('Unsupported file type');
      }

      // Process the extracted text with AI
      const summary = await this.generateSummary(extractedText);
      const keywords = await this.extractKeywords(extractedText);
      const insights = await this.generateInsights(extractedText);

      return JSON.stringify({
        summary,
        keywords,
        insights,
        status: 'completed'
      });
    } catch (error) {
      console.error('Error processing file:', error);
      throw new Error(`File processing failed: ${error.message}`);
    }
  }

  private async extractTextFromPdf(filePath: string): Promise<string> {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);
    return data.text;
  }

  private async extractTextFromDoc(filePath: string): Promise<string> {
    const result = await mammoth.extractRawText({ path: filePath });
    return result.value;
  }

  private async extractTextFromImage(filePath: string): Promise<string> {
    const result = await imageToText.process(filePath);
    return result.text;
  }

  private async generateSummary(text: string): Promise<string> {
    try {
      const response = await this.openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant that summarizes content."
          },
          {
            role: "user",
            content: `Please summarize the following text:\n\n${text}`
          }
        ],
        temperature: 0.7,
        max_tokens: 200
      });

      return response.data.choices[0]?.message?.content || 'No summary generated';
    } catch (error) {
      console.error('Error generating summary:', error);
      return 'Summary generation failed';
    }
  }

  private async extractKeywords(text: string): Promise<string[]> {
    try {
      const response = await this.openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant that extracts keywords from content."
          },
          {
            role: "user",
            content: `Extract the top 5 keywords from the following text:\n\n${text}`
          }
        ],
        temperature: 0.5,
        max_tokens: 100
      });

      const keywordsText = response.data.choices[0]?.message?.content || '';
      return keywordsText.split(',').map(k => k.trim()).filter(k => k.length > 0);
    } catch (error) {
      console.error('Error extracting keywords:', error);
      return [];
    }
  }

  private async generateInsights(text: string): Promise<string> {
    try {
      const response = await this.openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant that provides insights from content."
          },
          {
            role: "user",
            content: `Provide 3 key insights from the following text:\n\n${text}`
          }
        ],
        temperature: 0.7,
        max_tokens: 300
      });

      return response.data.choices[0]?.message?.content || 'No insights generated';
    } catch (error) {
      console.error('Error generating insights:', error);
      return 'Insights generation failed';
    }
  }
}

export default new AIService();
