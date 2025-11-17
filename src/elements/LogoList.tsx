import { ProjectLink } from "@/classes/Projects";
import BoardsCSS from "@/style/boards.module.css";
import { ClickableLogo } from "./Logo";
type LogoProps = {
  link: ProjectLink;
};
function Logo({ link }: LogoProps) {
  return (
    <ClickableLogo
      type={link.type}
      href={link.url}
      name={link.name}
      className={BoardsCSS.icon}
    />
  );
}
export default function LogoList({ links }: { links: ProjectLink[] }) {
  return (
    <div className={BoardsCSS.iconsDiv}>
      {links.map((link, i) => (
        <Logo key={"logo-" + i} link={link} />
      ))}
    </div>
  );
}
