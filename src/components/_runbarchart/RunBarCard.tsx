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
    <section className="card">
      <RunBarChart />
    </section>
  );
}
