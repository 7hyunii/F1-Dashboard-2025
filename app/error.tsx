'use client';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-[calc(100vh-4rem)] items-center justify-center p-4">
      <Card className="w-full max-w-md border-destructive/50">
        <CardHeader>
          <CardTitle className="text-destructive">오류가 발생했습니다</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            죄송합니다. 요청을 처리하는 도중 문제가 발생했습니다.
          </p>
          <div className="rounded-md bg-muted p-2 text-xs font-mono text-muted-foreground break-all">
            {error.message || "알 수 없는 오류"}
          </div>
          <div className="flex justify-end">
            <Button onClick={() => reset()} variant="default">
              다시 시도
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
