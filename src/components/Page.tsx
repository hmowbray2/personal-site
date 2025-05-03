import { ReactNode } from "react";

export const Page = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <div>
        <div className="mx-auto text-center flex max-w-xl min-h-fit rounded-xl bg-white p-6 shadow-lg outline outline-black/5">
          {children}
        </div>
      </div>
    </>
  );
};
