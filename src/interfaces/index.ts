// Define types for the response from ReqRes API
export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type ReqResResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
};
