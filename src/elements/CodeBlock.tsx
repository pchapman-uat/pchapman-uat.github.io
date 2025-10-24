import MainCSS from "@/style/main.module.css";
import { CodeBlock, shadesOfPurple } from "react-code-blocks";
import { CodeBlockProps } from "react-code-blocks/dist/components/CodeBlock";

export default function MyCodeBlock(props: CodeBlockProps) {
  return (
    <div className={MainCSS.codeBlockContainer}>
      <CodeBlock theme={props.theme ?? shadesOfPurple} {...props} />
    </div>
  );
}
