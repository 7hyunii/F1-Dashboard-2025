import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';

type Props = {
  title?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
};

export function StandingsCard({ title = 'Standings', description, className = '', children }: Props) {
  return (
    <Card className={className || 'bg-white/5 border-white/10 hover:border-white/20 backdrop-blur-sm transition-all'}>
      <CardHeader>
        <CardTitle className="text-white text-xl sm:text-2xl font-bold tracking-tight">{title}</CardTitle>
        {description ? (
          <CardDescription className="text-gray-400 font-medium mt-1">{description}</CardDescription>
        ) : null}
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}
