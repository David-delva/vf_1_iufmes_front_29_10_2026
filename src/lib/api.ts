import axios from 'axios';

const apiBaseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: apiBaseURL,
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function ensureCsrfCookie(): Promise<void> {
  const origin = apiBaseURL.replace(/\/api\/?$/, '');
  await axios.get(`${origin}/sanctum/csrf-cookie`, { withCredentials: true });
}

export default api;
