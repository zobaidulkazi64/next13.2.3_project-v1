export interface Blog {
  bId: number;
  author: object;
  title: string;
  subtitle: string;
  description: string;
  code?: string;
  image?: string;
  url?: string;
  metadata: {
    tags: string[];
    category: string[];
  };
  permissions: {
    read: boolean;
    write: boolean;
    edit: boolean;
    delete: boolean;
  };
  links: {
    view: string;
    edit: string;
    delete: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface BlogProps {
  blogs: Blog[];
  totalPages: number;
  currentPage: number;
  nextLink: string | null;
  prevLink: string | null;
  searchQuery: string;
  onSearch: (search: string) => void;
  onPageChange: (page: number) => void;
}
