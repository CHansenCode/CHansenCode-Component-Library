import { useState } from "react";

import Section from "../components/Section/Section";

import Button from "../components/Button/Button";
import DropDown from "../components/Dropdown/Dropdown";

const Etc = () => {
  const [on, setOn] = useState(true);
  return (
    <>
      <Section title="Form components">
        <Button text="Example" onClick={() => setOn(!on)} />
      </Section>
      <Section title="Button">
        <Button text="Example" onClick={() => setOn(!on)} />
      </Section>
      <Section title="DropDown">
        <DropDown>
          <h5>hello</h5>
          <h5>hello</h5>
          <h5>hello</h5>
        </DropDown>
      </Section>
    </>
  );
};

export default Etc;
