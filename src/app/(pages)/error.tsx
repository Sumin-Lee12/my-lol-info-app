"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { refresh } = useRouter();

  return (
    <html>
      <body>
        <div>
          <h2 className="text-sm">오류가 발생했습니다!</h2>
          <h1 className="text-2xl">{error.message}</h1>
          <button
            onClick={() =>
              startTransition(() => {
                refresh();
                reset();
              })
            }
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
