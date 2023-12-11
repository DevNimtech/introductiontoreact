import { CoreConcept } from "./CoreConcept";
import { CORE_CONCEPTS } from "./data";
import componentsImg from "./assets/components.png";
import Header from "./Header";

function App() {
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
            <CoreConcept {...CORE_CONCEPTS[1] }></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[2] }></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[3] }></CoreConcept>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
