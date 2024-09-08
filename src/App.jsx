import { Link } from "react-router-dom";
import testimonials from "./data/testimonials.json";
import Card from "./ui/Card";

function App() {
  return (
    <section className="page">
      <div className="grid-layout">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            name={testimonial.name}
            img={testimonial.img}
            testimonial={testimonial.testimonial}
            quote={testimonial.quote}
            selector={testimonial.selector}
            status={testimonial.status}
            hasBgQuote={testimonial.hasBgQuote}
          />
        ))}
      </div>
      <h1 className="attribution">
        Responsive Testimonial Grid- Made By{" "}
        <Link
          to="https://abdelrahmanhassanalii.github.io/card/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abderahman Hassan
        </Link>
      </h1>
    </section>
  );
}

export default App;
