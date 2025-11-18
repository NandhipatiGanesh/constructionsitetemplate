export default function GoogleMapSection() {
  return (
    <section className="w-full h-96 shadow-xl overflow-hidden">
      <iframe
  className="w-full h-full border-0"
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps?q=17.581749,78.419922&hl=en&z=15&output=embed"
  ></iframe>
    </section>
  );
}
