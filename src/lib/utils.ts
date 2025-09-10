import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(path: string): string {
  const prefix = import.meta.env.VITE_ASSET_PREFIX || '/';
  // Remove leading slash from path if prefix already ends with slash
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Ensure prefix ends with slash if it's not just '/'
  const normalizedPrefix = prefix === '/' ? '/' : prefix.endsWith('/') ? prefix : prefix + '/';
  
  return normalizedPrefix + cleanPath;
}
