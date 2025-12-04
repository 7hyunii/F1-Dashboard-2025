export function getImagePath(path: string) {
  const basePath = process.env.NODE_ENV === 'production' ? '/F1-Dashboard-2025' : '';
  
  if (path.startsWith('http') || path.startsWith(basePath)) {
    return path;
  }

  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
}
