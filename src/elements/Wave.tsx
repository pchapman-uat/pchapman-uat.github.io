import { animated, SpringValue } from "@react-spring/web";
import React from "react";

interface WavePathProps<T = SpringValue<number> | number> {
  time: T;
  width?: number;
  height?: number;
  amplitude?: number;
  cycles?: number;
}

interface FullWavePathProps extends WavePathProps<SpringValue<number>> {
  color?: string;
  speed?: number;
  className?: string;
  offset?: number;
}

export default function WavePath({
  time,
  width = 1600,
  height = 198,
  amplitude = 20,
  cycles = 2,
  color = "#888888",
  speed = 1,
  className,
  offset = 0,
}: FullWavePathProps) {
  const AnimatedPath = animated.path;

  const d =
    typeof time === "number"
      ? Path({ time: time + offset, width, height, amplitude, cycles })
      : time.to((t) =>
          Path({ time: t * speed + offset, width, height, amplitude, cycles })
        );

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      style={{ width: "100%", height: "auto", display: "block" }}
      className={className}
    >
      <defs>
        <linearGradient id="a" x1="50%" x2="50%" y1="-10.959%" y2="100%">
          <stop stopColor={color} stopOpacity={0.25} offset="0%" />
          <stop stopColor={color} offset="100%" />
        </linearGradient>
      </defs>
      <AnimatedPath fill="url(#a)" fillRule="evenodd" d={d} />
    </svg>
  );
}
function Path({
  time,
  width,
  height,
  amplitude,
  cycles,
}: Required<WavePathProps<number>>) {
  let path = `M0 ${height / 2} `;
  const steps = Math.ceil(width / 2);
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * width;
    const y =
      height / 2 +
      Math.sin((x / width) * cycles * 2 * Math.PI + time) * amplitude;
    path += `L${x} ${y} `;
  }
  // const lastY =
  //   height / 2 +
  //   Math.sin((width / width) * cycles * 2 * Math.PI + time) * amplitude;
  // path += `L${width} ${height} L0 ${height} Z`;
  return path;
}
