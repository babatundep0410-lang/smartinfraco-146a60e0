import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";

export default function Videos() {
  return (
    <Layout>
      <PageHero
        title="Videos"
        description="Watch our latest video content and presentations"
      />
      <section className="py-20">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="border border-border bg-card overflow-hidden group">
                <div className="aspect-video bg-muted relative flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/90 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <svg className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    Smart Infraco Showcase #{i}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">3:4{i} mins</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
