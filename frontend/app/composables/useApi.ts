import type { ApiResponse } from '~/types/internship';

export const useApi = () => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.apiBase || 'http://localhost:3000/api';

  const fetchApi = async <T>(endpoint: string, options = {}) => {
    try {
      const response = await $fetch<ApiResponse<T>>(`${baseUrl}/${endpoint}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      if (!response.success) {
        throw new Error(response.error?.message || 'Unknown API Error');
      }

      return response;
    } catch (error: any) {
      console.error(`[API Error] ${endpoint}:`, error);
      throw error;
    }
  };

  return {
    fetchApi,
    internships: {
      getAll: (params?: any) => fetchApi<any[]>('internships', { params }),
      create: (data: any) => fetchApi('internships', { method: 'POST', body: data }),
    }
  };
};
