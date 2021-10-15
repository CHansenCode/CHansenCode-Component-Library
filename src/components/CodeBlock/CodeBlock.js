import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { tomorrowNightBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeBlock = ({ code }) => {
  return (
    <div style={wrapper}>
      <SyntaxHighlighter customStyle={topLevelStyle} style={tomorrowNightBlue}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;

const topLevelStyle = {
  width: "min-content",
  padding: "1.25rem",
  background: "rgba(0,0,0,0.2)",
  outline: "thin solid rgba(100,100,100,1)",
  margin: "0",
};
const wrapper = {
  position: "relative",
  width: "min-content",
  padding: "0.75rem",
  background: "linear-gradient(135deg, rgba(60,60,60,1) 0%, rgba(50,50,50,1) 50%, rgba(40,40,40,1) 100%)",
};
