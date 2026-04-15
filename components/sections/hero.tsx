import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.72_0.19_160/8%)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_right,oklch(0.68_0.16_240/6%)_0%,transparent_50%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 100%) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 100%) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <Badge
          variant="secondary"
          className="mb-8 px-4 py-1.5 text-xs font-mono tracking-wider uppercase bg-cosy-accent-soft text-cosy-accent border-cosy-accent/20"
        >
          EP &times; GlowUpRise &mdash; Joint Venture
        </Badge>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]">
          <span className="block text-foreground">크리에이터의</span>
          <span className="block gradient-text">운영체제</span>
        </h1>

        <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          COSY Portal은 기능을 넘어 크리에이터의 정체성, 소속감, 그리고
          독자적인 생태계를 구축합니다.
          <br />
          <span className="text-foreground/80">
            플랫폼이 아닌, 세계관을 만듭니다.
          </span>
        </p>

        <div className="mt-12 flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-cosy-accent animate-pulse" />
            <span>Service Vision</span>
          </div>
          <span className="text-border">&bull;</span>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-cosy-blue animate-pulse [animation-delay:200ms]" />
            <span>Architecture</span>
          </div>
          <span className="text-border">&bull;</span>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-cosy-purple animate-pulse [animation-delay:400ms]" />
            <span>Roadmap</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="h-8 w-px bg-gradient-to-b from-muted-foreground/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
