"use client";

import {
  ElementRef,
  useEffect,
  useRef,
  useState,
} from "react";
import * as d3 from "d3";

export interface Repository {
  name: string;
  start: string;
  end: string;
}

export default function HistoryChart() {
  const [repos, setRepos] = useState<
    Repository[]
  >([
    {
      name: "삼성 청년 SW아카데미",
      start: "2023.07.05",
      end: "2024.06.28",
    },
    {
      name: "ABC-Lab 웹프론트엔드",
      start: "2023.01.11",
      end: "2023.04.28",
    },
    {
      name: "군대",
      start: "2017.03.28",
      end: "2018.12.20",
    },
    {
      name: "부산대학교",
      start: "2016.03.02",
      end: "2022.02.25",
    },
    {
      name: "밀성고등학교",
      start: "2013.03.04",
      end: "2016.02.04",
    },
  ]);
  const svgRef =
    useRef<SVGSVGElement>(null);
  const tooltipRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !svgRef.current ||
      repos.length === 0
    )
      return;

    const svg = d3.select(
      svgRef.current
    );
    const tooltip = d3.select(
      tooltipRef.current
    );
    const margin = {
      top: 20,
      right: 4,
      bottom: 4,
      left: 0,
    };
    const barHeight = 24;
    const svgWidth =
      svgRef.current.getBoundingClientRect()
        .width;
    const width =
      svgWidth -
      margin.left -
      margin.right;
    const height =
      repos.length * barHeight +
      margin.top +
      margin.bottom;
    svg
      .attr("width", svgWidth)
      .attr("height", height);
    //중복생성방지
    svg.selectAll("g").remove();
    //x축 만들기
    //x축 범위 지정
    const dates = repos.flatMap((d) => [
      new Date(
        new Date(d.start).getFullYear(),
        new Date(d.start).getMonth()
      ),
      new Date(
        new Date(d.end).getFullYear(),
        new Date(d.end).getMonth() + 1
      ),
    ]);

    const x = d3
      .scaleTime()
      .domain(
        d3.extent(dates) as [Date, Date]
      )
      .range([0, width]);
    //x축 틱 양식 지정
    const xAxis = d3
      .axisTop(x)
      // .ticks(d3.timeYear.every(1));
      .tickFormat((date) =>
        d3.timeFormat("%Y")(
          date as Date
        )
      );
    // 위치 조정 밑 svg에 추가
    const g = svg
      .append("g")
      .attr(
        "transform",
        "translate(" +
          margin.left +
          "," +
          margin.top +
          ")"
      );

    // 색상 척도 설정
    const colorScale = d3.scaleOrdinal(
      d3.schemeCategory10
    );
    // 툴팁 요소 생성
    tooltip
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("visibility", "hidden");

    g.selectAll("g.rect-text-group")
      .data(repos)
      .enter()
      .append("g")
      .attr("class", "rect-text-group")
      .on(
        "mouseover",
        function (event, d) {
          // 호버 시 테두리 추가
          d3.select(this)
            .select("rect")
            .attr("stroke", "white")
            .attr("stroke-width", 1);

          // 툴팁 내용 설정
          const tooltipContent = `<strong>${
            d.name
          }</strong><br/>${d.start.substring(
            0,
            10
          )}~${d.end.substring(0, 10)}`;

          // tooltip을 보이도록 설정하고 내용을 채움
          tooltip
            .style(
              "visibility",
              "visible"
            )
            .style(
              "background-color",
              "rgba(255, 255, 255, 0.8)"
            )
            // .style("padding", "4px")
            .html(tooltipContent)
            .style(
              "left",
              margin.left + "px"
            )
            .style(
              "top",
              margin.top + "px"
            );
        }
      )
      .on("mouseout", function () {
        // 호버 벗어날 때 테두리 제거
        d3.select(this)
          .select("rect")
          .attr("stroke", "none");
        // tooltip을 숨김
        tooltip.style(
          "visibility",
          "hidden"
        );
      })
      .each(function (
        d: Repository,
        i
      ) {
        const group = d3.select(this);
        group
          .append("rect")
          .attr("x", () => {
            if (
              x(new Date(d.start)) >
              x(new Date(d.end))
            ) {
              return x(new Date(d.end));
            }
            return x(new Date(d.start));
          })
          .attr("y", i * barHeight)
          .attr(
            "width",
            () =>
              Math.abs(
                x(new Date(d.end)) -
                  x(new Date(d.start))
              ) + 1
          )
          .attr("height", barHeight)
          .attr(
            "fill",
            colorScale(i.toString())
          );

        group
          .append("text")
          .attr("x", () =>
            x(new Date(d.start))
          )
          .attr(
            "y",
            i * barHeight + margin.top
          )
          .attr("font-size", "16px")
          // .attr("fill", "white")
          .text(() => `${d.name}`)
          .attr("text-anchor", () => {
            // 텍스트의 x 좌표가 SVG 요소의 가운데보다 큰지 여부 확인
            return x(
              new Date(d.start)
            ) >
              svgWidth / 4
              ? "end"
              : "start";
          });
      });

    g.append("g").call(xAxis); // 먼저 call 하면 data 짤리는 경우 있음 주의
  }, [repos]);

  return (
    <div className="relative">
      <svg
        className="w-full "
        ref={svgRef}
      />
      <div ref={tooltipRef}></div>
      <ul className="flex flex-col gap-1">
        {repos.map((repo, index) => (
          <li
            key={index}
            className="text flex gap-3"
          >
            {repo.start} ~ {repo.end}
            <p className="font-semibold">
              {repo.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
