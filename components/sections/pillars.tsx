import { Card, CardContent } from "@/components/ui/card";

interface PillarData {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  colorClass: string;
  bgClass: string;
  icon: string;
  features: string[];
}

const pillars: PillarData[] = [
  {
    number: "01",
    title: "일상화",
    subtitle: "Dailyness",
    description:
      "COSY를 크리에이터의 아침 첫 화면으로. 매일 접속하는 것이 자연스러운 습관이 되는 환경을 만듭니다.",
    colorClass: "text-cosy-accent",
    bgClass: "bg-cosy-accent-soft",
    icon: "\u2600",
    features: [
      "개인 맞춤형 대시보드 — 매출, 크루, 알림, 오늘의 할 일",
      "위젯 시스템으로 홈 화면 자유 구성",
      "일일/주간 인사이트 리포트 자동 생성",
      "크리에이터 활동의 모든 데이터가 한 곳에",
    ],
  },
  {
    number: "02",
    title: "소속감",
    subtitle: "Belonging",
    description:
      "COSY 크리에이터라는 정체성. @cosy 이메일과 인증 마크로 '나는 여기 소속'이라는 자부심을 만듭니다.",
    colorClass: "text-cosy-warm",
    bgClass: "bg-cosy-warm-soft",
    icon: "\u{1F91D}",
    features: [
      "@cosy.creator 전용 이메일 시스템",
      "크리에이터 프로필 & 디지털 명함",
      "티어별 인증 배지 (외부 SNS 사용 가능)",
      "연간 크리에이터 어워드 & 컨퍼런스",
    ],
  },
  {
    number: "03",
    title: "솔루션",
    subtitle: "Solutions",
    description:
      "이메일과 슬랙을 합친 통합 커뮤니케이션. 브랜드, 크루, 팬과의 모든 소통이 COSY 안에서 이루어집니다.",
    colorClass: "text-cosy-blue",
    bgClass: "bg-cosy-blue-soft",
    icon: "\u{1F4AC}",
    features: [
      "COSY 메신저 — 이메일 + 채팅 하이브리드",
      "브랜드 \u2194 크리에이터 다이렉트 채널",
      "크루 내부 팀 커뮤니케이션",
      "통합 알림 허브 (매출, 매칭, 정산)",
    ],
  },
  {
    number: "04",
    title: "인프라",
    subtitle: "Infrastructure",
    description:
      "크리에이터판 Claude. AI 에이전트를 직접 만들고, 마켓에서 거래하는 독자적 생태계를 구축합니다.",
    colorClass: "text-cosy-purple",
    bgClass: "bg-cosy-purple-soft",
    icon: "\u{1F916}",
    features: [
      "Agent Builder — 노코드로 AI 에이전트 제작",
      "COSY DB API 연동으로 데이터 활용",
      "Dashboard Builder — 커스텀 대시보드 제작",
      "Marketplace — 에이전트/대시보드 판매 수익",
    ],
  },
  {
    number: "05",
    title: "브랜딩",
    subtitle: "Branding",
    description:
      "COSY를 쓰는 것 자체가 프리미엄 오피스에 있는 경험. 크리에이터의 전문성을 시각적으로 증명합니다.",
    colorClass: "text-cosy-rose",
    bgClass: "bg-cosy-rose-soft",
    icon: "\u{1F3E2}",
    features: [
      "프리미엄 비주얼 아이덴티티 시스템",
      "크리에이터 인증 마크 — 외부 플랫폼 활용",
      '"COSY 크리에이터" = 전문가 레이블',
      "브랜드 협업 우선 매칭 혜택",
    ],
  },
];

export function PillarsSection() {
  return (
    <section id="pillars" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm font-mono tracking-widest uppercase text-cosy-accent mb-4">
            Five Pillars
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            포털의{" "}
            <span className="gradient-text">5대 축</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            기능을 넘어 세계관을 만드는 다섯 가지 핵심 축.
            <br />각 축은 독립적이면서도 유기적으로 연결됩니다.
          </p>
        </div>

        <div className="space-y-6">
          {pillars.map((pillar) => (
            <Card
              key={pillar.number}
              className="bg-card/50 border-border/50 hover:border-border transition-colors"
            >
              <CardContent className="p-8 md:p-10">
                <div className="grid md:grid-cols-[200px_1fr] gap-8">
                  {/* Left: Number + Title */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`text-3xl ${pillar.bgClass} h-12 w-12 rounded-xl flex items-center justify-center`}
                      >
                        {pillar.icon}
                      </span>
                      <span className="font-mono text-sm text-muted-foreground">
                        {pillar.number}
                      </span>
                    </div>
                    <h3 className={`text-2xl font-bold ${pillar.colorClass}`}>
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {pillar.subtitle}
                    </p>
                  </div>

                  {/* Right: Description + Features */}
                  <div>
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      {pillar.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {pillar.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className={`${pillar.colorClass} mt-0.5`}>
                            &#x25B8;
                          </span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
