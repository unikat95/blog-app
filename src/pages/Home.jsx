import React from "react";

import LatestArticles from "../components/LatestArticles/LatestArticles";
import Articles from "../components/Articles/Articles";

export default function Home() {
  return (
    <>
      <div className="w-full px-5 2xl:p-0 flex flex-col gap-10 overflow-hidden">
        <LatestArticles />
        <div>
          <h1 className="text-slate-800 dark:text-slate-300 text-3xl font-medium">
            All articles:
          </h1>
        </div>
        <Articles />
      </div>
    </>
  );
}
