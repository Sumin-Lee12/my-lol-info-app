"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";
import errorPageImage from "./public/404-page-not-found-1-86.svg";
import Image from "next/image";

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
        <div className="min-h-screen flex flex-col justify-center items-center">
          <h2 className="text-sm">헉! 오류가 발생했습니다! 오류 메시지는 :</h2>
          <h2 className="text-lg font-black">{error.message}</h2>
          <Image
            src={errorPageImage}
            alt={"404 image"}
            width={300}
            height={300}
          />
          <button
            onClick={() =>
              startTransition(() => {
                refresh();
                reset();
              })
            }
            className="bg-yellow-300 py-1 px-2 rounded-md"
          >
            Try again / 새로고침!
          </button>
        </div>
      </body>
    </html>
  );
}
