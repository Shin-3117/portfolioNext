"use client";

import repositoryStore from "@/store/repos";
import RunBarChart from "./RunBarChart";
import { useEffect } from "react";

export default function RunBarCard() {
  const setRepos = repositoryStore(
    (state) => state.setRepos
  );
  useEffect(() => {
    setRepos("Shin-3117");
  }, [setRepos]);

  return (
    <section className="h-[484px]">
      <p className="text-3xl">
        Lines Of Code
      </p>
      <RunBarChart />
    </section>
  );
}
