import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function JVStructureSection() {
  return (
    <section id="jv" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.72_0.19_160/5%)_0%,transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm font-mono tracking-widest uppercase text-cosy-accent mb-4">
            Joint Venture
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            EP &times; GlowUpRise
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            각자의 강점을 결합하여 독보적인 크리에이터 생태계를 구축합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* EP */}
          <Card className="bg-card/50 border-cosy-purple/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-cosy-purple-soft flex items-center justify-center text-xl font-bold text-cosy-purple">
                  EP
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    Entropy Paradox
                  </h3>
                  <Badge
                    variant="secondary"
                    className="bg-cosy-purple-soft text-cosy-purple border-cosy-purple/20"
                  >
                    Portal Lead
                  </Badge>
                </div>
              </div>

              <Separator className="mb-6 bg-border/30" />

              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-cosy-purple mt-0.5 font-bold">01</span>
                  <div>
                    <span className="font-medium text-foreground">
                      브랜딩 & 철학
                    </span>
                    <p className="text-muted-foreground">
                      포털의 비전, 세계관, 브랜드 아이덴티티 설계
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cosy-purple mt-0.5 font-bold">02</span>
                  <div>
                    <span className="font-medium text-foreground">
                      AI 인프라 구축
                    </span>
                    <p className="text-muted-foreground">
                      에이전트 빌더, API Hub, 마켓플레이스 개발
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cosy-purple mt-0.5 font-bold">03</span>
                  <div>
                    <span className="font-medium text-foreground">
                      기술 아키텍처
                    </span>
                    <p className="text-muted-foreground">
                      포털 시스템 설계, 개발, 운영
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cosy-purple mt-0.5 font-bold">04</span>
                  <div>
                    <span className="font-medium text-foreground">
                      생태계 전략
                    </span>
                    <p className="text-muted-foreground">
                      네트워크 효과 설계, Exit 전략 수립
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* GlowUpRise */}
          <Card className="bg-card/50 border-cosy-warm/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-cosy-warm-soft flex items-center justify-center text-xl font-bold text-cosy-warm">
                  G
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    GlowUpRise
                  </h3>
                  <Badge
                    variant="secondary"
                    className="bg-cosy-warm-soft text-cosy-warm border-cosy-warm/20"
                  >
                    Platform Lead
                  </Badge>
                </div>
              </div>

              <Separator className="mb-6 bg-border/30" />

              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-cosy-warm mt-0.5 font-bold">01</span>
                  <div>
                    <span className="font-medium text-foreground">
                      플랫폼 운영
                    </span>
                    <p className="text-muted-foreground">
                      COSY 플랫폼 기능 개발, 유지보수, 운영
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cosy-warm mt-0.5 font-bold">02</span>
                  <div>
                    <span className="font-medium text-foreground">
                      크리에이터 네트워크
                    </span>
                    <p className="text-muted-foreground">
                      MCN 기반 크리에이터 확보, 커뮤니티 운영
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cosy-warm mt-0.5 font-bold">03</span>
                  <div>
                    <span className="font-medium text-foreground">
                      커머스 인프라
                    </span>
                    <p className="text-muted-foreground">
                      쇼핑몰 연동, 정산, 캐시 시스템
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cosy-warm mt-0.5 font-bold">04</span>
                  <div>
                    <span className="font-medium text-foreground">
                      데이터 자산
                    </span>
                    <p className="text-muted-foreground">
                      크리에이터/매출/상품 DB, API 제공
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Synergy */}
        <Card className="bg-card/30 border-border/30">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold mb-6">시너지 구조</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-cosy-warm">
                <span className="font-semibold">GlowUpRise DB</span>
              </div>
              <span className="text-muted-foreground hidden md:block">
                &#x2192;
              </span>
              <span className="text-muted-foreground md:hidden">
                &#x2193;
              </span>
              <div className="border border-border/50 rounded-lg px-4 py-2 text-muted-foreground">
                COSY API Hub
              </div>
              <span className="text-muted-foreground hidden md:block">
                &#x2192;
              </span>
              <span className="text-muted-foreground md:hidden">
                &#x2193;
              </span>
              <div className="flex items-center gap-2 text-cosy-purple">
                <span className="font-semibold">EP Agent Builder</span>
              </div>
              <span className="text-muted-foreground hidden md:block">
                &#x2192;
              </span>
              <span className="text-muted-foreground md:hidden">
                &#x2193;
              </span>
              <div className="flex items-center gap-2 text-cosy-accent">
                <span className="font-semibold">Creator Ecosystem</span>
              </div>
            </div>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
              GlowUpRise의 데이터 자산과 EP의 AI 인프라가 결합하여,
              <br />
              <span className="text-foreground">
                크리에이터가 직접 도구를 만들고 거래하는 자생적 생태계
              </span>
              를 형성합니다.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
