import { Banner } from "@/component/Banner/Banner";

export default function Home() {
  return (
    <main className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 items-center min-h-screen deco-bg-lines">
      <Banner className="max-h-80 relative z-10" />
      <div className="flex justify-center items-center">Glory</div>
    </main>
  );
}
