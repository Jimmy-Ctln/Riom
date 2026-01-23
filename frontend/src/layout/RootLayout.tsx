import { Header } from "@/components/header";
import { Outlet } from "@tanstack/react-router";

export function RootLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1 flex flex-col justify-center w-full px-4 sm:px-12 md:px-20 mx-auto py-10">
        <Outlet />
      </main>
    </div>
  );
}
