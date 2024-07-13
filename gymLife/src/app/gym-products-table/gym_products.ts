export interface GymProduct {
  id: number;
  nombre_producto: string;
  descripcion: string;
  precio: number;  
  stock: number;
  img: string;
  clearance: boolean;
  cantidad: number;
  tipo_producto: 'membresia' | 'clase' | 'producto' | 'servicio' | 'accesorio';
}
