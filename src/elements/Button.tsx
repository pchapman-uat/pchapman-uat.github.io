import MainCSS from "@/style/main.module.css";
export type ButtonProps = {
  children: string;
  onClick: () => void;
};
export default function Button({ onClick, children }: ButtonProps) {
  return (
    <span className={MainCSS.button} onClick={onClick}>
      {children}
    </span>
  );
}
