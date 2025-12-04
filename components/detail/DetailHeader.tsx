import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import React from 'react';

interface DetailHeaderProps {
  title: string;
  subtitle?: React.ReactNode;
  badgeText?: string;
  backHref?: string;
  badgeClassName?: string;
}

export function DetailHeader({
  title,
  subtitle,
  badgeText,
  backHref = '/',
  badgeClassName,
}: DetailHeaderProps) {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-12 sm:py-16 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <Link href={backHref}>
          <Button
            variant="ghost"
            className="mb-4 sm:mb-6 text-white hover:text-gray-300 hover:bg-white/10 flex items-center gap-2 pl-1">
            <img src="/arrow-left.svg" alt="Back" className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>

        <div className="flex flex-col gap-2 sm:gap-3 mb-4">
          {badgeText && (
            <Badge
              variant="outline"
              className={`w-fit border-white/50 text-white bg-white/5 ${badgeClassName ?? ''}`}
            >
              {badgeText}
            </Badge>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            {title}
          </h1>
        </div>

        {subtitle && <p className="text-lg sm:text-xl text-gray-400">{subtitle}</p>}
      </div>
    </section>
  );
}
