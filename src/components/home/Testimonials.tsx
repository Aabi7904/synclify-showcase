import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content: "SynclifySolutions transformed our outdated system into a modern, efficient platform. Their expertise and dedication are unmatched.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder, RetailPro",
      content: "The billing software they developed for us has streamlined our entire operation. Highly recommended for any business!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Director, HealthCare Plus",
      content: "Professional, responsive, and delivered beyond our expectations. Our new mobile app has increased user engagement by 200%.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-hover rounded-xl p-8 space-y-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              <div className="pt-4 border-t border-border">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
