// Helper para resolver rutas públicas
// En Vercel (sin base path): devuelve la ruta tal cual
// En GitHub Pages (con base path): agrega el prefijo
export const getPublicPath = (path: string): string => {
  const basePath = import.meta.env.BASE_URL || '/';
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Si el base path es solo '/', no agregar prefijo (Vercel)
  if (basePath === '/') {
    return normalizedPath;
  }
  
  // Si hay base path (GitHub Pages), agregar el prefijo
  return `${basePath.replace(/\/$/, '')}${normalizedPath}`;
};

// Helper para resolver rutas internas
export const getPagePath = (path: string): string => {
  const basePath = import.meta.env.BASE_URL || '/';
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  // Si es la página raíz
  if (normalizedPath === '/') {
    return basePath;
  }

  // Si el base path es solo '/', devolver la ruta tal cual (Vercel)
  if (basePath === '/') {
    return normalizedPath;
  }

  // Si hay base path (GitHub Pages), agregar el prefijo
  return `${basePath.replace(/\/$/, '')}${normalizedPath}`;
};
