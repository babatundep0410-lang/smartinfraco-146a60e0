import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";

export default function Articles() {
  return (
    <Layout>
      <PageHero
        title="Articles"
        description="Insights and thought leadership from our team"
      />
      <section className="py-20">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <article key={i} className="border border-border bg-card p-8 group">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Industry Insight</span>
                <h3 className="text-xl font-semibold mt-3 group-hover:text-primary transition-colors">
                  The future of digital infrastructure in West Africa #{i}
                </h3>
                <p className="text-sm text-muted-foreground mt-3">
                  An in-depth look at how fibre connectivity and cloud services are transforming businesses across the region.
                </p>
                <span className="text-xs text-muted-foreground mt-4 block">5 min read</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
