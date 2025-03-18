"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>오류가 발생했습니다!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
