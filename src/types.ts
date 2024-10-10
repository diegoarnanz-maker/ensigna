

export interface Product {
    name: string;
    price: number;
    image: string;
    rating: number;
}

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }
  
  export interface Products {
    items: Product[];
    total: number;
    page: number;
    limit: number; // si lo necesitas
  }
  

export interface PaginationParams {
    page: number;
    perPage: number; // Agregar perPage aquí
  }
  
export interface BlogPost {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
  }
  
