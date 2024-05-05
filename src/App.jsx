import { useState } from "react";
import reactImg from "./assets/react-core-concepts.png";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Section from "./components/Section.jsx";

function Header() {
  return (
    <>
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    </>
  );
}
function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  const [tabContent, setTabContent] = useState("components");
  const handleClick = (selectedButton) => {
    setTabContent(selectedButton);
  };
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={Math.random()} {...conceptItem} />
            ))}
          </ul>
        </section>
        <Section title="Examples" id="examples">
          <menu>
            <TabButton
              isSelected={tabContent === "components"}
              onClick={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={tabContent === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX{" "}
            </TabButton>
            <TabButton
              isSelected={tabContent === "props"}
              onClick={() => handleClick("props")}
            >
              Props{" "}
            </TabButton>
            <TabButton
              isSelected={tabContent === "state"}
              onClick={() => handleClick("state")}
            >
              State{" "}
            </TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <pre>
              <code>{EXAMPLES[tabContent].code}</code>
            </pre>
          </div>
        </Section>
      </main>
    </div>
  );
}

export default App;
