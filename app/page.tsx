import { NewsList } from "@/components";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home page",
  description: "Hacker News",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="font-bold text-3xl mb-10">Hacker News</h1>
      <NewsList />
    </main>
  );
}
