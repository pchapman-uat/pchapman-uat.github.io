import { ViteReactSSG } from "vite-react-ssg";
import { routesArr } from "./routes";

export const createRoot = ViteReactSSG({ routes: routesArr });
