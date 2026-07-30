import type { ReactNode } from "react";

type ContentPageProps = {
  children: ReactNode;
};

export default function ContentPage({ children }: ContentPageProps) {
  return (
    <div className="min-h-full max-w-[2400px] mx-auto flex flex-col justify-center gap-32 pt-24 pb-100">
      {children}
    </div>
  );
}
