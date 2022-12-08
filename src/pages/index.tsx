import { type NextPage } from "next";
import { open } from "@tauri-apps/api/shell";
import Link from "next/link";

const Index: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-purple-800 via-purple-700 to-blue-700">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Tauri <span className="text-purple-400">T3</span> App
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <button
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/20 p-10 text-white hover:bg-white/30"
            onClick={() => {
              open("https://tauri.app");
            }}
          >
            <h3 className="text-2xl font-bold">Tauri Docs →</h3>
            <div className="text-justify text-lg">
              Learn more about Tauri — Build smaller, faster, and more secure
              desktop applications with a web frontend.
            </div>
          </button>
          <button
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/20 p-10 text-white hover:bg-white/30"
            onClick={() => {
              open("https://create.t3.gg/en/introduction");
            }}
          >
            <h3 className="text-2xl font-bold">T3 Docs →</h3>
            <div className="text-justify text-lg">
              Learn more about Create T3 App — The best way to start a
              full-stack, typesafe Next.js app.
            </div>
          </button>
        </div>
        <Link
          className="rounded-full bg-white/80 px-10 py-3 text-xl font-bold text-black
      no-underline transition hover:bg-white/90"
          // Update this link to your app's URL before building
          href="https://tauri-t3-app.vercel.app/home"
        >
          Start App
        </Link>
      </div>
    </main>
  );
};

export default Index;
