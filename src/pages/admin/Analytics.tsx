import { ArrowUpRight, Briefcase, CheckCircle, TrendingUp, Trophy, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Progress } from "../../ui/progress";
import Badge from "../../ui/badge";

const Analytics = () => {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Academic Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-4">
              <div className="text-3xl text-gray-900 mb-1">3.6</div>
              <p className="text-sm text-gray-600">Average GPA</p>
              <div className="flex items-center justify-center gap-1 mt-2">
                <ArrowUpRight className="h-4 w-4 text-green-600" />
                <span className="text-sm text-green-600">
                  +0.2 vs last term
                </span>
              </div>
            </div>
            <Progress value={72} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Student Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-4">
              <div className="text-3xl text-gray-900 mb-1">94.5%</div>
              <p className="text-sm text-gray-600">Overall Rate</p>
              <div className="flex items-center justify-center gap-1 mt-2">
                <ArrowUpRight className="h-4 w-4 text-green-600" />
                <span className="text-sm text-green-600">
                  +2.1% improvement
                </span>
              </div>
            </div>
            <Progress value={94.5} className="bg-green-100" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Fee Collection</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-4">
              <div className="text-3xl text-gray-900 mb-1">96%</div>
              <p className="text-sm text-gray-600">Collection Rate</p>
              <div className="flex items-center justify-center gap-1 mt-2">
                <ArrowUpRight className="h-4 w-4 text-green-600" />
                <span className="text-sm text-green-600">+3% vs target</span>
              </div>
            </div>
            <Progress value={96} className="bg-blue-100" />
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Enrollment Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { year: "2025/2026", students: 450, change: "+12%" },
                { year: "2024/2025", students: 402, change: "+8%" },
                { year: "2023/2024", students: 372, change: "+5%" },
                { year: "2022/2023", students: 354, change: "+3%" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-200 rounded-lg"
                >
                  <div>
                    <p className="text-gray-900">{item.year}</p>
                    <p className="text-sm text-gray-600">
                      {item.students} students
                    </p>
                  </div>
                  <Badge className="bg-green-100 text-green-700">
                    {item.change}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { metric: "Student Retention Rate", value: 97, target: 95 },
                { metric: "Parent Satisfaction", value: 92, target: 90 },
                { metric: "Staff Retention", value: 94, target: 90 },
                { metric: "College Acceptance Rate", value: 88, target: 85 },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-900">{item.metric}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">
                        {item.value}%
                      </span>
                      {item.value >= item.target && (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      )}
                    </div>
                  </div>
                  <Progress value={item.value} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Key Performance Indicators</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                label: "Academic Excellence",
                value: "68 students",
                desc: "Honor Roll (GPA > 3.5)",
                icon: TrendingUp,
                color: "text-blue-600",
              },
              {
                label: "Sports Achievements",
                value: "12 medals",
                desc: "State & National Level",
                icon: Trophy,
                color: "text-yellow-600",
              },
              {
                label: "Business Ventures",
                value: "8 active",
                desc: "Student Startups",
                icon: Briefcase,
                color: "text-purple-600",
              },
              {
                label: "Community Service",
                value: "2,450 hrs",
                desc: "This Academic Year",
                icon: Users,
                color: "text-green-600",
              },
            ].map((kpi, index) => {
              const IconComponent = kpi.icon;
              return (
                <div key={index} className="text-center">
                  <IconComponent
                    className={`h-8 w-8 ${kpi.color} mx-auto mb-2`}
                  />
                  <div className="text-xl text-gray-900 mb-1">{kpi.value}</div>
                  <p className="text-sm text-gray-900 mb-1">{kpi.label}</p>
                  <p className="text-xs text-gray-600">{kpi.desc}</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Analytics