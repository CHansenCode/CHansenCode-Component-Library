import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Syntax = ({ code }) => {
  return (
    <SyntaxHighlighter customStyle={preWrapperStyle} language="javascript" style={tomorrowNightBlue}>
      {code}
    </SyntaxHighlighter>
  );
};

export default Syntax;

const preWrapperStyle = {
  background: "rgba(150,150,150,1)",
  color: "white",
};
