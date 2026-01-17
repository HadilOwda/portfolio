import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-[#1a1625] text-[#e5e5e5] pt-16">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-[#e5e5e5] mb-12" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
            About
          </h1>
          
          <div className="relative">
            {/* Photo - Top right, floating */}
            <div className="float-right ml-8 mb-8 w-48 h-48 md:w-56 md:h-56 shrink-0">
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_8px_32px_rgba(20,184,166,0.2)] ring-2 ring-[#14b8a6]/20">
                <Image
                  src="/projects/me/me.png"
                  alt="Hadil"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 192px, 224px"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="space-y-6 text-[#e5e5e5]/90 text-lg md:text-xl leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              <p>
                Hi! I'm Hadil, an Electrical Engineering undergraduate at Stanford on the hardware and software track. I'm also completing a coterminal Master's in Computer Science with a focus on graphics and visual computing.
              </p>
              
              <p>
                I like working on compelling systems engineering projects that either tell a story themselves or help others convey their stories better. I generally love creative tech and anything at the intersection of technology and art—whether that's building graphics pipelines, creating 3D environments, or directing short films.
              </p>
              
              <p>
                Currently, I work with Stanford's Human-Centered AI Institute as an open-source engineering intern—you can read some of our work{" "}
                <Link
                  href="https://opensource.stanford.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#14b8a6] hover:text-[#5eead4] underline underline-offset-4 transition-colors duration-200 hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)]"
                >
                  here
                </Link>
                .
              </p>
              
              <p>
                In the past, I've worked on DynaDojo, an ML benchmarking platform, as part of my research with the Brains in Silicon lab. I also interned at Tinuiti, the largest independent full-funnel marketing agency in the US, building cross-client analytics dashboards on the product engineering team. Last spring, I helped assistant direct Stanford's spring musical (Legally Blonde)—very fun!
              </p>
              
              <p>
                I'm passionate about computer graphics, rendering, and animation pipelines, plus the sweet spot where low-level systems meet creative applications. When I'm not coding, you might find me working on film projects, storytelling, or exploring technical art—all ways I like to blend engineering with creative expression.
              </p>

              <p className="pt-4">
                Thanks for stopping by! Feel free to reach out if you want to chat about any of this.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
