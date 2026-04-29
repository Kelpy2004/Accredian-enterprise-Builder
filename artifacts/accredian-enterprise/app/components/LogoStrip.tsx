export function LogoStrip() {
  const companies = [
    "TATA", "Mahindra", "HCL", "Cognizant", 
    "Genpact", "Hero", "Wipro", "Aditya Birla"
  ];

  return (
    <section id="clients" className="border-b border-gray-100 bg-white py-10 scroll-mt-20">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-medium text-gray-500 mb-6 uppercase tracking-wider">
          Trusted by 250+ leading enterprises
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 opacity-60 grayscale transition-all hover:grayscale-0 duration-500">
          {companies.map((company) => (
            <div key={company} className="text-xl md:text-2xl font-bold font-serif text-gray-400">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}