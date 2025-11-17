import MainCSS from "@/style/main.module.css";
import {
  animated,
  Interpolation,
  SpringValue,
  useScroll,
} from "@react-spring/web";
interface UpStyle {
  opacity: Interpolation<number, number>;
  pointerEvents: Interpolation<number, "auto" | "none">;
}
export default function UpButton() {
  const { scrollY } = useScroll();

  const upStyle = (scroll: SpringValue<number>): UpStyle => {
    return {
      opacity: scroll.to((t) => (t >= 100 ? 1 : 0)),
      pointerEvents: scroll.to((t) => (t >= 50 ? "auto" : "none")),
    };
  };
  return (
    <animated.a
      className={MainCSS.returnButton}
      style={upStyle(scrollY)}
      href="#top"
    >
      &uarr;
    </animated.a>
  );
}
