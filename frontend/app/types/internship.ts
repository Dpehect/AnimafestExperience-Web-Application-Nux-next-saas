export interface Company {
  name: string;
  logo: string;
}

export interface Internship {
  id: string;
  title: string;
  company: Company;
  location: string;
  category: string;
  duration: number;
  isPaid: boolean;
  createdAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  meta?: {
    total?: number;
    serverTime?: string;
    [key: string]: any;
  };
  error?: {
    code: number;
    message: string;
  };
}
