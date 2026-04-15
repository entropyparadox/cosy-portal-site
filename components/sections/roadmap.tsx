import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Phase {
  phase: string;
  title: string;
  timeline: string;
  status: string;
  statusColor: string;
  items: string[];
  colorClass: string;
  bgClass: string;
}

const phases: Phase[] = [
  {
    phase: "Phase 0",
    title: "비전 정립 & 브랜딩",
    timeline: "현재 ~ 1개월",
    status: "NOW",
    statusColor: "bg-cosy-accent text-background",
    items: [
      "포털 비전 & 서비스 구조 확정",
      "JV 구조 및 역할 분담 합의",
      "브랜드 아이덴티티 설계 (CI/BI)",
      "기술 아키텍처 설계",
    ],
    colorClass: "border-cosy-accent/30",
    bgClass: "bg-cosy-accent-soft",
  },
  {
    phase: "Phase 1",
    title: "일상화 + 소속감",
    timeline: "2 ~ 4개월",
    status: "NEXT",
    statusColor: "bg-cosy-warm/80 text-background",
    items: [
      "COSY 홈 대시보드 구축",
      "@cosy.creator 이메일 시스템",
      "크리에이터 프로필 & 인증 배지",
      "기존 플랫폼 API 연동",
    ],
    colorClass: "border-cosy-warm/30",
    bgClass: "bg-cosy-warm-soft",
  },
  {
    phase: "Phase 2",
    title: "솔루션 레이어",
    timeline: "5 ~ 7개월",
    status: "PLANNED",
    statusColor: "bg-cosy-blue/60 text-background",
    items: [
      "COSY 메신저 (이메일 + 채팅)",
      "브랜드-크리에이터 다이렉트 채널",
      "통합 알림 허브",
      "크루 내부 커뮤니케이션",
    ],
    colorClass: "border-cosy-blue/30",
    bgClass: "bg-cosy-blue-soft",
  },
  {
    phase: "Phase 3",
    title: "인프라 & 마켓플레이스",
    timeline: "8 ~ 12개월",
    status: "VISION",
    statusColor: "bg-cosy-purple/50 text-foreground",
    items: [
      "Agent Builder (노코드 에이전트 빌더)",
      "COSY API Hub 오픈",
      "마켓플레이스 런칭",
      "생태계 네트워크 효과 가속",
    ],
    colorClass: "border-cosy-purple/30",
    bgClass: "bg-cosy-purple-soft",
  },
];

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm font-mono tracking-widest uppercase text-cosy-accent mb-4">
            Roadmap
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            단계별 <span className="gradient-text">로드맵</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            비전 정립부터 생태계 완성까지. 각 단계가 다음 단계의 기반이 됩니다.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cosy-accent via-cosy-blue to-cosy-purple" />

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div
                key={phase.phase}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "" : "md:direction-rtl"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <div
                    className={`h-3 w-3 rounded-full ${phase.bgClass} ring-4 ring-background`}
                  />
                </div>

                {/* Content card */}
                <div
                  className={`ml-16 md:ml-0 ${
                    index % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <Card className={`bg-card/50 ${phase.colorClass}`}>
                    <CardContent className="p-6">
                      <div
                        className={`flex items-center gap-3 mb-4 ${
                          index % 2 === 0
                            ? "md:flex-row-reverse"
                            : ""
                        }`}
                      >
                        <Badge className={phase.statusColor}>
                          {phase.status}
                        </Badge>
                        <span className="font-mono text-xs text-muted-foreground">
                          {phase.timeline}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-1">{phase.title}</h3>
                      <p className="text-sm font-mono text-muted-foreground mb-4">
                        {phase.phase}
                      </p>
                      <ul
                        className={`space-y-2 text-sm text-muted-foreground ${
                          index % 2 === 0 ? "md:text-right" : ""
                        }`}
                      >
                        {phase.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
