import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";

export default function News() {
  return (
    <Layout>
      <PageHero
        title="News"
        description="Stay updated with the latest news from Smart Infraco"
      />
      <section className="py-20">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <article key={i} className="border border-border bg-card overflow-hidden group">
                <div className="aspect-video bg-muted" />
                <div className="p-6">
                  <span className="text-xs text-muted-foreground">March {i + 10}, 2026</span>
                  <h3 className="text-lg font-semibold mt-2 group-hover:text-primary transition-colors">
                    Infrastructure expansion update #{i}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Latest developments in Ghana's digital infrastructure landscape and Smart Infraco's role in connectivity.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
