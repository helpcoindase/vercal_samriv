/**
 * API Client Configuration for Samwarthika Rivera
 * Connects frontend to standalone backend (default: http://localhost:5000 or production live URL)
 */

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export async function fetchApi(endpoint: string, options: RequestInit = {}) {
  const url = endpoint.startsWith('http')
    ? endpoint
    : `${API_BASE_URL}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;

  const headers = new Headers(options.headers || {});

  // Add stored token if present in localStorage
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('admin_token');
    if (token && !headers.has('Authorization')) {
      headers.set('Authorization', `Bearer ${token}`);
    }
  }

  try {
    return await fetch(url, {
      ...options,
      headers,
    });
  } catch (err: any) {
    console.warn(`[fetchApi] Could not reach backend server at ${url}:`, err.message);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Backend API server is unreachable on ' + API_BASE_URL,
      }),
      {
        status: 503,
        statusText: 'Service Unavailable',
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

export function getImageUrl(imagePath?: string | null): string {
  if (!imagePath) return '/assets/images/placeholder.webp';
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  // If it points to images/blogs, serve from backend
  if (cleanPath.startsWith('images/blogs')) {
    return `${API_BASE_URL}/${cleanPath}`;
  }
  return `/${cleanPath}`;
}
