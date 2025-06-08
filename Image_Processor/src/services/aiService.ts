import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api';

export const processFile = async (file: File) => {
  try {
    // Convert file to base64
    const fileData = await readFileAsBase64(file);
    
    const response = await axios.post(`${API_BASE_URL}/process`, {
      fileData,
      fileName: file.name,
      fileType: file.type
    });

    return response.data;
  } catch (error) {
    console.error('Error processing file:', error);
    throw error;
  }
};

function readFileAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = (reader.result as string).split(',')[1];
      resolve(result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
