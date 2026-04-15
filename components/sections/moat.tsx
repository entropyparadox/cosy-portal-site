import { Card, CardContent } from "@/components/ui/card";

export function MoatSection() {
  return (
    <section id="moat" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm font-mono tracking-widest uppercase text-cosy-accent mb-4">
            Competitive Moat
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            왜 <span className="gradient-text">따라올 수 없는가</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-8">
              <div className="text-3xl mb-4">{"\u{1F310}"}</div>
              <h3 className="text-lg font-bold mb-3">네트워크 효과</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                크리에이터가 만든 에이전트와 대시보드가 다른 크리에이터에게 가치를
                제공합니다. 사용자가 늘수록 생태계의 가치가 기하급수적으로
                증가하며, 이 네트워크를 복제하는 것은 불가능합니다.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-8">
              <div className="text-3xl mb-4">{"\u{1F512}"}</div>
              <h3 className="text-lg font-bold mb-3">전환 비용 (Lock-in)</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                @cosy 이메일, 축적된 에이전트, 크루 네트워크, 거래 이력 등
                크리에이터의 디지털 자산이 COSY에 귀속됩니다. 다른 플랫폼으로
                이동하면 이 모든 것을 잃게 됩니다.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-8">
              <div className="text-3xl mb-4">{"\u{1F4CA}"}</div>
              <h3 className="text-lg font-bold mb-3">데이터 해자</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                크리에이터의 매출, 크루 관계, 에이전트 사용 패턴 등 축적된
                데이터는 시간이 지날수록 더 정교한 AI 서비스를 가능하게 합니다.
                후발주자가 절대 따라잡을 수 없는 데이터 우위입니다.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-8">
              <div className="text-3xl mb-4">{"\u{1F3AF}"}</div>
              <h3 className="text-lg font-bold mb-3">브랜드 정체성</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                &quot;COSY 크리에이터&quot;라는 타이틀 자체가 시장에서의 신뢰
                마크가 됩니다. 기능은 복제할 수 있지만, 커뮤니티가 부여하는
                브랜드 가치와 소속감은 복제할 수 없습니다.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Exit strategy hint */}
        <Card className="bg-card/30 border-cosy-accent/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-lg font-bold mb-4">Exit 시나리오</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="font-semibold text-cosy-accent mb-2">
                  Strategic M&amp;A
                </p>
                <p className="text-muted-foreground">
                  대형 플랫폼(네이버, 카카오 등)이 크리에이터 생태계 확보를 위해
                  인수
                </p>
              </div>
              <div>
                <p className="font-semibold text-cosy-blue mb-2">IPO</p>
                <p className="text-muted-foreground">
                  독자적 크리에이터 이코노미 생태계 기반 상장
                </p>
              </div>
              <div>
                <p className="font-semibold text-cosy-purple mb-2">
                  글로벌 확장
                </p>
                <p className="text-muted-foreground">
                  K-Creator 생태계를 글로벌로 확장, 해외 JV 또는 라이선싱
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
