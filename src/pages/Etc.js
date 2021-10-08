import { useState } from "react";

import Section from "../components/Section/Section";
import Row from "../components/Row/Row";

import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import DangerousHtml from "../components/DangerousHtml/DangerousHtml";
import CodeBlocker from "../components/CodeBlock/CodeBlock";

const Etc = ({ primaryColor, secondaryColor }) => {
  const [on, setOn] = useState(true);
  return (
    <>
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

export default Etc;
