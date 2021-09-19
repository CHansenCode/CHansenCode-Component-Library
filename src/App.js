import Section from "./components/Section/Section";

function App() {
  return (
    <>
      <Section center column title="cow">
        <h1>Lorem, ipsum.</h1>
        <h2>Lorem, ipsum dolor.</h2>
        <h3>Lorem ipsum dolor sit.</h3>
        <h4>Lorem ipsum dolor sit amet.</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <h5>Lorem ipsum dolor sit amet consectetur.</h5>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing.</h6>
      </Section>
      <Section>
        <h1>Lorem, ipsum.</h1>
        <h2>Lorem, ipsum dolor.</h2>
        <h3>Lorem ipsum dolor sit.</h3>
        <h4>Lorem ipsum dolor sit amet.</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <h5>Lorem ipsum dolor sit amet consectetur.</h5>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing.</h6>
      </Section>
    </>
  );
}

export default App;
