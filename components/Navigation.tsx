"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-black text-white border-b border-gray-800 sticky top-0 z-50 backdrop-blur-sm bg-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg sm:text-xl md:text-2xl font-black tracking-tighter hover:text-red-500 transition-colors">
            F1 2025
          </Link>
          
          <div className="flex items-center gap-3 sm:gap-4 md:gap-8">
            <Link 
              href="/" 
              className={`text-xs sm:text-sm uppercase tracking-wider font-bold hover:text-red-500 transition-colors ${isActive('/') ? 'text-red-500' : 'text-gray-400'}`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`text-xs sm:text-sm uppercase tracking-wider font-bold hover:text-red-500 transition-colors ${isActive('/about') ? 'text-red-500' : 'text-gray-400'}`}
            >
              About
            </Link>
            <Link 
              href="/dashboard" 
              className={`text-xs sm:text-sm uppercase tracking-wider font-bold hover:text-red-500 transition-colors ${isActive('/dashboard') ? 'text-red-500' : 'text-gray-400'}`}
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}