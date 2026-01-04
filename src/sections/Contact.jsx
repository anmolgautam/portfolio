import { Mail, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "anmolgautam2428@gmail.com",
    href: "mailto:anmolgautam2428@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, India",
    href: "#",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-primary-foreground">
            Let’s connect
            <span className="font-serif italic font-normal text-white">
              {" "}
              and talk systems.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            I’m always open to discussing AI systems, research, collaboration,
            and interesting opportunities.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="max-w-xl mx-auto space-y-6 animate-fade-in animation-delay-300">
          {contactInfo.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="glass rounded-2xl p-6 flex items-center gap-4 
                hover:bg-surface transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">
                  {item.label}
                </div>
                <div className="font-medium text-lg">
                  {item.value}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Availability */}
        <div className="text-center mt-12 animate-fade-in animation-delay-400">
          <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full border border-primary/30">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium">
              Open to collaboration & opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
