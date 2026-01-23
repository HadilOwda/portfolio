import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-[#1a1625] text-[#e5e5e5] pt-16">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#e5e5e5] mb-8 md:mb-12" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
            About
          </h1>
          
          <div className="flex flex-col md:block">
            {/* Photo - Top on mobile, right on desktop */}
            <div className="mx-auto md:float-right md:ml-8 mb-6 md:mb-8 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 shrink-0">
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_8px_32px_rgba(20,184,166,0.2)] ring-2 ring-[#14b8a6]/20">
                <Image
                  src="/projects/me/me.png"
                  alt="Hadil"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 288px"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="space-y-5 md:space-y-6 text-[#e5e5e5]/90 text-base sm:text-lg md:text-xl leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              <p>
                Hi! I'm Hadil, a junior at Stanford studying Electrical Engineering on the hardware and software track. I'm also doing a coterm in CS with focus on graphics and visual computing.
              </p>
              
              <p>
                I love building things that sit at the intersection of technology and creativity—whether that's rendering engines, short films, or games built from scratch. Right now, I'm working as an open-source engineering intern at{" "}
                <Link
                  href="https://opensource.stanford.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#14b8a6] hover:text-[#5eead4] underline underline-offset-4 transition-colors duration-200 hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)] min-h-[44px] inline-flex items-center"
                >
                  Stanford's Human-Centered AI Institute
                </Link>
                {" "}as well as taking computer graphics (CS248A), systems design (EE180), and 3D art (ARTSTUDI162A) classes! Last spring, I also assistant directed Stanford's production of Legally Blonde—bringing together storytelling, production design, and collaboration in a totally different medium. I've previously worked on ML benchmarking platforms research at the Brains in Silicon Lab (check projects!) and marketing analytics infrastructure at{" "}
                <Link
                  href="https://tinuiti.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#14b8a6] hover:text-[#5eead4] underline underline-offset-4 transition-colors duration-200 hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)] min-h-[44px] inline-flex items-center"
                >
                  Tinuiti
                </Link>
                .
              </p>
              
              <p>
                When I'm not coding or creating, you'll find me working on personal film projects, watching movies, reading, or exploring the Bay Area with friends (just like in the photo!).
              </p>

              <p>
                Feel free to{" "}
                <Link
                  href="/contact"
                  className="text-[#14b8a6] hover:text-[#5eead4] underline underline-offset-4 transition-colors duration-200 hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)]"
                >
                  reach out
                </Link>
                —I'm always up for chatting about graphics, animation, or any creative tech projects!
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
