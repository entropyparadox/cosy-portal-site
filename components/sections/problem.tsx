import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function ProblemSection() {
  return (
    <section id="problem" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-mono tracking-widest uppercase text-cosy-accent mb-4">
          Why Portal?
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          플랫폼만으로는
          <br />
          <span className="text-muted-foreground">충분하지 않습니다</span>
        </h2>

        <Separator className="my-12 bg-border/50" />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Platform side */}
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center text-lg">
                  &#x2699;
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Platform</h3>
                  <p className="text-sm text-muted-foreground">What you DO</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-border mt-1">&#x2022;</span>
                  <span>기능 중심 — 판매, 정산, 매칭</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-border mt-1">&#x2022;</span>
                  <span>도구로서의 가치 — 더 나은 도구가 나오면 이탈</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-border mt-1">&#x2022;</span>
                  <span>자본 싸움에 취약 — 대형 플레이어가 복제 가능</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-border mt-1">&#x2022;</span>
                  <span>사용자는 &quot;고객&quot;으로 존재</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Portal side */}
          <Card className="card-glow bg-card/50 border-cosy-accent/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-cosy-accent-soft flex items-center justify-center text-lg">
                  &#x2728;
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cosy-accent">
                    Portal
                  </h3>
                  <p className="text-sm text-muted-foreground">Who you ARE</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-cosy-accent mt-1">&#x2713;</span>
                  <span>
                    정체성 중심 — 소속감, 브랜딩, 커뮤니티
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cosy-accent mt-1">&#x2713;</span>
                  <span>생태계로서의 가치 — 떠나면 네트워크를 잃음</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cosy-accent mt-1">&#x2713;</span>
                  <span>
                    독보적 해자(Moat) — 사용자가 만든 에이전트/도구가 자산
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cosy-accent mt-1">&#x2713;</span>
                  <span>
                    사용자는 &quot;시민&quot;으로 존재 — 공동 소유의식
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground">
            샌드박스가 동일한 기능을 만들어도,{" "}
            <span className="text-foreground font-medium">
              COSY의 세계관은 복제할 수 없습니다.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
