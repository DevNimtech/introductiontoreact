import { CoreConcept } from "./CoreConcept";
import componentsImg from './assets/components.png';
import Header from "./Header";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept title="Components" description="The core UI building block." image={componentsImg}></CoreConcept>
            <CoreConcept title="Components"></CoreConcept>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
