import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Calendar, MapPin } from "lucide-react";

export default function Events() {
  return (
    <Layout>
      <PageHero
        title="Events"
        description="Join us at upcoming industry events and conferences"
      />
      <section className="py-20">
        <div className="container-wide">
          <div className="space-y-6">
            {[
              { title: "AfricaCom 2026", date: "May 14–16, 2026", location: "Cape Town, South Africa" },
              { title: "Ghana Digital Summit", date: "June 8–9, 2026", location: "Accra, Ghana" },
              { title: "West Africa Tech Week", date: "July 20–22, 2026", location: "Lagos, Nigeria" },
              { title: "Cloud Africa Conference", date: "September 5, 2026", location: "Nairobi, Kenya" },
            ].map((event, i) => (
              <div key={i} className="border border-border bg-card p-8 flex flex-col md:flex-row md:items-center gap-6 group hover:border-primary/30 transition-colors">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{event.title}</h3>
                  <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {event.date}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {event.location}</span>
                  </div>
                </div>
                <button className="px-6 py-2.5 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors whitespace-nowrap">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
