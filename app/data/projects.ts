export type GalleryItem = {
  type: "image" | "video" | "pdf" | "youtube";
  src: string;
  alt?: string;
};

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage?: string;
  heroVideo?: string;
  youtubeUrl?: string; // For embedded YouTube videos
  techStack: string[];
  galleryItems: GalleryItem[];
  role: string;
  github?: string;
  category: "Visual & Narrative" | "Systems & Engineering" | "Research";
  status?: string;
  pdf?: string;
}

export const projects: Project[] = [
  {
    slug: "world-in-a-jar",
    name: "World in a Jar",
    tagline: "Finding solace in small spaces",
    description:
      "A 3D scene created in Blender exploring themes of solitude and personal retreat. A cozy reading nook contained within a glass jar, complete with warm lighting, books, and a peaceful atmosphere. Focused on realistic glass materials, volumetric lighting, and creating an intimate narrative through environmental storytelling.",
    heroImage: "/projects/world in a jar/CS148 Final/hadilo12.png",
    techStack: ["Blender", "Cycles Renderer"],
    galleryItems: [
      {
        type: "video",
        src: "/projects/world in a jar/CS148 Final/jar_output.mp4",
        alt: "World in a Jar - 360° turntable video",
      },
      {
        type: "image",
        src: "/projects/world in a jar/CS148 Final/hadilo12.png",
        alt: "Final render of World in a Jar",
      },
      {
        type: "image",
        src: "/projects/world in a jar/CS148 Final/hadilo12_b.png",
        alt: "World in a Jar - alternate angle",
      },
      {
        type: "image",
        src: "/projects/world in a jar/CS148 Final/progress1.png",
        alt: "World in a Jar - WIP progress 1",
      },
      {
        type: "image",
        src: "/projects/world in a jar/CS148 Final/progress2.png",
        alt: "World in a Jar - WIP progress 2",
      },
    ],
    role: "Solo project - 3D modeling, lighting, materials, composition",
    pdf: "/projects/world in a jar/CS148 Final/hadilo12.pdf",
    category: "Visual & Narrative",
  },
  {
    slug: "between-two-worlds",
    name: "Between Two Worlds",
    tagline: "A short film exploring war, PTSD, and trauma's impact on youth",
    description:
      "A 4-minute short film examining the psychological effects of conflict on young people. Handled all aspects of production including writing, directing, cinematography, editing, acting, and voice-over work.",
    heroImage: "/projects/between two worlds/cover.png",
    youtubeUrl: "https://youtu.be/Ui9UirvLmwA",
    techStack: ["Adobe Premiere Pro", "CapCut", "Canon DSLR"],
    galleryItems: [],
    role: "Writer, Director, Cinematographer, Editor, Actor, Voice Artist",
    category: "Visual & Narrative",
  },
  {
    slug: "bare-metal-graphics-pipeline",
    name: "The Big Game",
    tagline: "Real-time rendering on bare-metal RISC-V",
    description:
      "Stanford vs. Cal themed Space Invaders game built on bare-metal RISC-V system. As the Cardinal Tree, defend against Cal Bears shooting 'C's while firing back with '+' bullets. Race against a 30-second clock to outscore Berkeley and break Stanford's losing streak. Implemented custom graphics pipeline with framebuffer double-buffering, sprite rendering via memory-mapped I/O, and optimized pixel routines achieving 60fps on resource-constrained hardware.",
    heroImage: "/projects/big game/cover.png",
    techStack: ["C", "Assembly", "RISC-V", "Mango Pi"],
    galleryItems: [],
    role: "Two-person team - Led graphics implementation (rendering pipeline, framebuffers, sprite system); collaborated on OS development",
    github: "https://github.com/ahmadzafar-code/Stanfordspaceinvadersgame",
    category: "Systems & Engineering",
  },
  {
    slug: "ray-tracer",
    name: "Ray Tracer",
    tagline: "Physically-based rendering from scratch",
    description:
      "Physically-based ray tracer implemented in C++ following \"Ray Tracing in One Weekend\". Features recursive ray tracing, multiple material types (diffuse, metallic, dielectric), anti-aliasing, and proper light transport for realistic rendering.",
    heroImage: "/projects/ray_tracer/final_render.png",
    techStack: ["C++", "Vector Math", "PPM Image Format"],
    galleryItems: [
      {
        type: "image",
        src: "/projects/ray_tracer/progress0.JPG",
        alt: "Ray tracer - progress 0",
      },
      {
        type: "image",
        src: "/projects/ray_tracer/progress1.JPG",
        alt: "Ray tracer - progress 1",
      },
      {
        type: "image",
        src: "/projects/ray_tracer/progress2.png",
        alt: "Ray tracer - progress 2",
      },
      {
        type: "image",
        src: "/projects/ray_tracer/progress3.png",
        alt: "Ray tracer - progress 3",
      },
      {
        type: "image",
        src: "/projects/ray_tracer/final_render.png",
        alt: "Ray tracer - final render",
      },
    ],
    role: "Solo project",
    github: "https://github.com/HadilOwda/ray-tracer",
    category: "Systems & Engineering",
  },
  {
    slug: "fpga-music-synthesizer",
    name: "FPGA Music Synthesizer",
    tagline: "Real-time polyphonic synthesis on FPGA",
    description:
      "Digital synthesizer implemented in Verilog on FPGA hardware generating multiple waveforms with dynamic control. Integrated MIDI input and DAC audio output with sub-millisecond latency. Optimized parallel processing architecture within FPGA resource constraints for hardware-accelerated signal processing.",
    heroImage: "/projects/music synthesizer /cover.png",
    techStack: ["Verilog", "FPGA", "Real-time Audio", "MIDI"],
    galleryItems: [],
    role: "Team project - Contributed to audio playback and harmonic generation",
    github: "https://github.com/cheynemiller/EE108_lab4",
    category: "Systems & Engineering",
  },
  {
    slug: "fiona-and-the-left-paw-power",
    name: "Fiona and the Left-Paw Power",
    tagline: "A children's book celebrating being different",
    description:
      "Children's book about Fiona, a puppy who struggles in animal magic school because she uses her left paw. Follow her journey as she learns to turn her difference into a strength that benefits her entire community.",
    heroImage: "/projects/fiona and the left paw power/cover picture.png",
    techStack: ["Procreate"],
    galleryItems: [],
    role: "Character Illustrator, Visual Development - Created all character illustrations and collaborated on storyboarding",
    category: "Visual & Narrative",
    pdf: "/projects/fiona and the left paw power/Fiona and the Left- Paw Power Picture Book.pdf",
  },
  {
    slug: "speculative-decoding-vla-models",
    name: "Speculative Decoding for Vision-Language-Action Models",
    tagline: "Accelerating robot control with efficient draft models",
    description:
      "Investigated whether Mamba state-space models could improve inference speed for Vision-Language-Action (VLA) systems in robotic manipulation. Implemented and evaluated Mamba-based draft models against Llama baselines on the LIBERO-Goal benchmark, exploring architectural approaches for real-time robot action generation. Team project for CS229 Machine Learning.",
    heroImage: "/projects/spec_decode/cover.png",
    techStack: ["Python", "PyTorch", "Mamba SSM", "OpenVLA", "LIBERO"],
    galleryItems: [
      {
        type: "pdf",
        src: "/projects/spec_decode/poster.pdf",
        alt: "Speculative Decoding Poster",
      },
      {
        type: "pdf",
        src: "/projects/spec_decode/final_report.pdf",
        alt: "Speculative Decoding Final Report",
      },
    ],
    role: "Draft model architecture design, training pipeline implementation, evaluation",
    github: "https://github.com/joshua-bowden/cs229",
    category: "Research",
  },
  {
    slug: "dynadojo-ml-benchmarking",
    name: "DynaDojo ML Benchmarking Platform",
    tagline: "Expanding benchmarking capabilities for dynamical systems",
    description:
      "Expanded DynaDojo benchmarking library from 20 to 130+ systems by integrating Gilpin's database of chaotic dynamical systems with precomputed time series data. Developed 3D visualization capabilities to enable algorithm evaluation on real-world systems with unknown equations. Built Out-of-Distribution detection framework using PCA and Haar wavelet transforms, improving detection performance by 60%.",
    heroImage: "/projects/dynadojo/cover.png",
    techStack: ["Python", "NumPy", "PCA", "Haar Wavelets", "3D Visualization"],
    galleryItems: [
      {
        type: "pdf",
        src: "/projects/dynadojo/poster.pdf",
        alt: "DynaDojo ML Benchmarking Poster",
      },
    ],
    role: "Research Intern - Data integration, visualization development, OOD detection",
    category: "Research",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
