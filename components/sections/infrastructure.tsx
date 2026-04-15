import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function InfrastructureSection() {
  return (
    <section id="infra" className="py-32 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.65_0.18_280/6%)_0%,transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <Badge
            variant="secondary"
            className="mb-4 bg-cosy-purple-soft text-cosy-purple border-cosy-purple/20"
          >
            Core Differentiator
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            크리에이터판{" "}
            <span className="text-cosy-purple">Claude</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            COSY DB 기반의 AI 에이전트를 직접 만들고, 판매하고, 연결하는
            <br />
            크리에이터 전용 인프라 생태계
          </p>
        </div>

        {/* Architecture diagram */}
        <Card className="bg-card/30 border-border/30 mb-12">
          <CardContent className="p-8 md:p-12">
            <div className="font-mono text-sm text-muted-foreground">
              {/* Top layer */}
              <div className="text-center mb-6">
                <div className="inline-block border border-cosy-purple/30 bg-cosy-purple-soft rounded-lg px-6 py-3">
                  <span className="text-cosy-purple font-semibold text-base">
                    Creator Workspace
                  </span>
                  <br />
                  <span className="text-xs">
                    Dashboard &bull; Messenger &bull; Profile
                  </span>
                </div>
              </div>

              {/* Connection line */}
              <div className="flex justify-center mb-6">
                <div className="h-8 w-px bg-border" />
              </div>

              {/* Middle layer - 3 columns */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="border border-cosy-accent/30 bg-cosy-accent-soft rounded-lg p-4 text-center">
                  <span className="text-cosy-accent font-semibold">
                    Agent Builder
                  </span>
                  <br />
                  <span className="text-xs">
                    No-Code / Low-Code
                    <br />
                    AI Agent \u5236\u4F5C
                  </span>
                </div>
                <div className="border border-cosy-blue/30 bg-cosy-blue-soft rounded-lg p-4 text-center">
                  <span className="text-cosy-blue font-semibold">
                    Dashboard Builder
                  </span>
                  <br />
                  <span className="text-xs">
                    Custom Analytics
                    <br />
                    \ub370\uc774\ud130 \uc2dc\uac01\ud654
                  </span>
                </div>
                <div className="border border-cosy-warm/30 bg-cosy-warm-soft rounded-lg p-4 text-center">
                  <span className="text-cosy-warm font-semibold">
                    Marketplace
                  </span>
                  <br />
                  <span className="text-xs">
                    Buy &amp; Sell
                    <br />
                    \uc5d0\uc774\uc804\ud2b8/\ub300\uc2dc\ubcf4\ub4dc \uac70\ub798
                  </span>
                </div>
              </div>

              {/* Connection line */}
              <div className="flex justify-center mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-px w-16 bg-border" />
                  <span className="text-xs text-muted-foreground border border-border rounded px-2 py-0.5">
                    COSY API Hub
                  </span>
                  <div className="h-px w-16 bg-border" />
                </div>
              </div>

              {/* Bottom layer */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-border/50 bg-muted/30 rounded-lg p-4 text-center">
                  <span className="text-foreground font-semibold">
                    COSY Platform DB
                  </span>
                  <br />
                  <span className="text-xs">
                    \ud68c\uc6d0 &bull; \ub9e4\ucd9c &bull; \uc0c1\ud488 &bull; \uc815\uc0b0 &bull; \ud06c\ub8e8 &bull; \ud2f0\uc5b4
                  </span>
                </div>
                <div className="border border-border/50 bg-muted/30 rounded-lg p-4 text-center">
                  <span className="text-foreground font-semibold">
                    External APIs
                  </span>
                  <br />
                  <span className="text-xs">
                    Shopify &bull; Cafe24 &bull; \uce74\uce74\uc624 &bull; PG\uc0ac &bull; \ud648\ud0dd\uc2a4
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Separator className="my-12 bg-border/30" />

        {/* Use cases */}
        <h3 className="text-xl font-semibold mb-8 text-center">
          에이전트 활용 시나리오
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "매출 분석 에이전트",
              desc: "일별/주별/월별 매출 트렌드 분석, 이상 징후 자동 감지, 성과 리포트 자동 생성",
              badge: "Analytics",
              color: "bg-cosy-accent-soft text-cosy-accent border-cosy-accent/20",
            },
            {
              title: "콘텐츠 추천 에이전트",
              desc: "매출 데이터 기반 최적 상품 추천, 타겟 오디언스 분석, 콘텐츠 기획 보조",
              badge: "Content",
              color: "bg-cosy-blue-soft text-cosy-blue border-cosy-blue/20",
            },
            {
              title: "크루 관리 에이전트",
              desc: "크루원 성과 모니터링, 수익 분배 최적화, 신규 크루원 추천 및 온보딩",
              badge: "Management",
              color: "bg-cosy-warm-soft text-cosy-warm border-cosy-warm/20",
            },
          ].map((item) => (
            <Card
              key={item.title}
              className="bg-card/50 border-border/50"
            >
              <CardContent className="p-6">
                <Badge variant="secondary" className={item.color}>
                  {item.badge}
                </Badge>
                <h4 className="text-lg font-semibold mt-4 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            크리에이터가 만든 에이전트가 생태계의 자산이 됩니다.
            <br />
            <span className="text-foreground font-medium">
              사용자가 많아질수록, 플랫폼의 가치가 기하급수적으로 증가합니다.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
