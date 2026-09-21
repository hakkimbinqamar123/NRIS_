import ContactForm from "../components/Contact/ContactForm";
import ContactLocations from "../components/Contact/ContactLocations";

export default function Contact() {
  return (
    <>
      <section className="section pt-32 pb-24">
        <div className="container-xl">
          <div className="mb-12 text-center lg:text-left">
            <span className="badge-pill mb-4 inline-block">Contact</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-4">
              Speak With An <span className="text-[#0B4EA2]">NRiS</span> Specialist
            </h1>
            <p className="text-muted text-lg max-w-2xl mx-auto lg:mx-0">
              Tell us about your coverage needs and a licensed advisor will respond within one business day.
            </p>
          </div>

          <ContactForm />
          <ContactLocations />
        </div>
      </section>
    </>
  );
}
