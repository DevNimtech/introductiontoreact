import { CoreConcept } from "./components/CoreConcept";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import { useState } from "react";
import componentsImg from "./assets/components.png";
import Header from "./components/Header";
import TabButton from "./components/TabButton";


function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    console.log(selectedButton);
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Pleade Select a Topic</p>;
  if (selectedTopic) {
    tabContent =
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>;
  }

  console.log('App Component Executing.');

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            ></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'}  onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'}  onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'}  onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {!selectedTopic && <p>Pleade Select a Topic</p>}
          {!selectedTopic ? <p>Please Select a Topic</p> :
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
          }
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
