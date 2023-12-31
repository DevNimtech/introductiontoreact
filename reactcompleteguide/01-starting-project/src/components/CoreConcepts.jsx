import { CoreConcept } from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts(){
    return (
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          {/* {CORE_CONCEPTS.map((item) =>
            <CoreConcept
              title={item.title}
              description={item.description}
              image={item.image}
            ></CoreConcept>
          )} */}
          {CORE_CONCEPTS.map((item) =>
            <CoreConcept key={item.title} {...item}></CoreConcept>
          )}
        </ul>
      </section>
    );
}