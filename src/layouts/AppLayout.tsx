import { PropsWithChildren } from "react";
import { Sidebar } from "../components/Sidebar";
import { TopBar } from "../components/TopBar";

export const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Sidebar />
      <div className="ml-64 flex min-h-screen flex-col">
        <TopBar />
        <main className="flex-1 bg-black px-8 py-6">{children}</main>
      </div>
    </div>
  );
};
