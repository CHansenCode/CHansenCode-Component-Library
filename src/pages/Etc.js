import { useState } from "react";

import Section from "../components/Section/Section";
import Row from "../components/Row/Row";

import CodeBlock from "../components/CodeBlock/CodeBlock";

import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import DangerousHtml from "../components/DangerousHtml/DangerousHtml";
import CodeBlocker from "../components/CodeBlock/CodeBlock";
import ReactMarkdown from "react-markdown";
import Markdown from "../components/Markdown/Markdown";

import { etc } from "./etcMarkdown.js";

import { exampleCode } from "../components/CodeBlock/example";

const code = `import cow from 'hello'

export const test = () => {
  return (
      <div>
          <h4>
              Hello
          </h4>
      </div>
    )
}`;

const Etc = ({ primaryColor, secondaryColor }) => {
  const [on, setOn] = useState(true);
  return (
    <>
      <Section title="Codeblock / Syntax highlight w. copy button">
        <CodeBlock code={exampleCode} />
      </Section>
      <Section title="Cards">
        <Row center width="800px" gap="100px">
          <Card width="100%" primaryColor={primaryColor} secondaryColor={secondaryColor} />
          <Card width="100%" primaryColor={primaryColor} secondaryColor={secondaryColor} />
        </Row>
      </Section>
      <Section title="Form components">
        <DangerousHtml data="<h1>hello</h1>" />
      </Section>
      <Section title="Button">
        <CodeBlocker code="<div> hello </div>" />
      </Section>
    </>
  );
};

const style = {
  wrapper: {
    display: "flex",
  },
  dark: {
    background: "linear-gradient(135deg, rgba(60,60,60,1) 0%, rgba(50,50,50,1) 49%, rgba(40,40,40,1) 100%)",
    padding: "2rem",
    outline: "thin solid rgba(80,80,80,1)",
    fontSize: "14px",
    outlineOffset: "-5px",
    fontWeight: "500",
    lineHeight: "1.25rem",
  },
  bright: {
    background: "linear-gradient(135deg, rgba(210,210,210,1) 0%, rgba(190,190,190,1) 49%, rgba(180,180,180,1) 100%)",
    padding: "2rem",
    outline: "thin dashed rgba(150,160,200,1)",
    fontSize: "14px",
    outlineOffset: "-5px",
  },
  code: {
    marginRight: "1rem",
  },
};

export default Etc;
