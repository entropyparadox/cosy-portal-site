import { Nav } from "@/components/nav";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { PillarsSection } from "@/components/sections/pillars";
import { InfrastructureSection } from "@/components/sections/infrastructure";
import { RoadmapSection } from "@/components/sections/roadmap";
import { JVStructureSection } from "@/components/sections/jv-structure";
import { MoatSection } from "@/components/sections/moat";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        <HeroSection />

        <Separator className="bg-border/30" />

        <ProblemSection />

        <Separator className="bg-border/30" />

        <PillarsSection />

        <Separator className="bg-border/30" />

        <InfrastructureSection />

        <Separator className="bg-border/30" />

        <RoadmapSection />

        <Separator className="bg-border/30" />

        <JVStructureSection />

        <Separator className="bg-border/30" />

        <MoatSection />
      </main>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-border/30">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-2xl font-bold mb-4">
            COSY<span className="text-cosy-accent">.</span>Portal
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            크리에이터의 운영체제 &mdash; 플랫폼을 넘어 생태계로
          </p>
          <div className="flex items-center justify-center gap-8 text-xs text-muted-foreground">
            <span>Entropy Paradox</span>
            <span className="text-border">&bull;</span>
            <span>GlowUpRise</span>
            <span className="text-border">&bull;</span>
            <span>Joint Venture Proposal 2026</span>
          </div>
          <p className="mt-8 text-xs text-muted-foreground/50">
            Confidential &mdash; For internal discussion only
          </p>
        </div>
      </footer>
    </>
  );
}
