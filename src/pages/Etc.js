import { useState } from "react";

import Section from "../components/Section/Section";

import Button from "../components/Button/Button";
import DropDown from "../components/Dropdown/Dropdown";
import Card from "../components/Card/Card";

const Etc = () => {
  const [on, setOn] = useState(true);
  return (
    <>
      <Section title="Card">
        <Card></Card>
      </Section>
      <Section title="Form components">
        <Button text="Example" onClick={() => setOn(!on)} />
      </Section>
      <Section title="Button">
        <Button text="Example" onClick={() => setOn(!on)} />
      </Section>
    </>
  );
};

export default Etc;
