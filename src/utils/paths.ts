// Helper para resolver rutas públicas con base path
export const getPublicPath = (path: string): string => {
  const basePath = import.meta.env.BASE_URL || '/';
  // Asegurar que la ruta comienza con /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  // Retornar la ruta completa
  return basePath === '/'
    ? normalizedPath
    : `${basePath.replace(/\/$/, '')}${normalizedPath}`;
};

// Helper para resolver rutas internas
export const getPagePath = (path: string): string => {
  const basePath = import.meta.env.BASE_URL || '/';
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  // Si es solo /, retornar base path
  if (normalizedPath === '/') {
    return basePath;
  }

  return basePath === '/'
    ? normalizedPath
    : `${basePath.replace(/\/$/, '')}${normalizedPath}`;
};
