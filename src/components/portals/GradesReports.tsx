import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import Badge from "../../ui/badge";
import Button from "../../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { Progress } from "../../ui/progress";
import {
  BookOpen,
  TrendingUp,
  TrendingDown,
  Download,
  Eye,
  Award,
  Target,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface Subject {
  name: string;
  teacher: string;
  currentGrade: number;
  previousGrade: number;
  trend: "up" | "down" | "stable";
  assignments: number;
  tests: number;
}

export function GradesReports({ studentName }: { studentName?: string }) {
  console.log("Selected Student:", studentName);

  const subjects: Subject[] = [
    {
      name: "Mathematics",
      teacher: "Mr. Adebayo",
      currentGrade: 87,
      previousGrade: 82,
      trend: "up",
      assignments: 5,
      tests: 3,
    },
    {
      name: "Physics",
      teacher: "Dr. Okonkwo",
      currentGrade: 92,
      previousGrade: 90,
      trend: "up",
      assignments: 4,
      tests: 2,
    },
    {
      name: "Chemistry",
      teacher: "Mrs. Ibrahim",
      currentGrade: 85,
      previousGrade: 88,
      trend: "down",
      assignments: 6,
      tests: 3,
    },
    {
      name: "English Literature",
      teacher: "Ms. Williams",
      currentGrade: 90,
      previousGrade: 90,
      trend: "stable",
      assignments: 4,
      tests: 2,
    },
    {
      name: "Biology",
      teacher: "Dr. Eze",
      currentGrade: 88,
      previousGrade: 85,
      trend: "up",
      assignments: 5,
      tests: 3,
    },
    {
      name: "Computer Science",
      teacher: "Mr. Okafor",
      currentGrade: 95,
      previousGrade: 93,
      trend: "up",
      assignments: 3,
      tests: 2,
    },
  ];

  const termProgress = [
    { month: "Sep", gpa: 3.5 },
    { month: "Oct", gpa: 3.6 },
    { month: "Nov", gpa: 3.7 },
  ];

  const gradeDistribution = [
    { grade: "A (90-100)", count: 3 },
    { grade: "B (80-89)", count: 3 },
    { grade: "C (70-79)", count: 0 },
    { grade: "D (60-69)", count: 0 },
    { grade: "F (<60)", count: 0 },
  ];

  const overallStats = {
    gpa: 3.7,
    rank: 4,
    totalStudents: 45,
    honors: true,
  };

  const getTrendIcon = (trend: string) => {
    if (trend === "up")
      return <TrendingUp className="h-4 w-4 text-green-600" />;
    if (trend === "down")
      return <TrendingDown className="h-4 w-4 text-red-600" />;
    return <div className="h-4 w-4" />;
  };

  const getGradeColor = (grade: number) => {
    if (grade >= 90) return "text-green-600";
    if (grade >= 80) return "text-blue-600";
    if (grade >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="space-y-6">
      {/* Overall Performance */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <p className="opacity-90 mb-1">Overall GPA</p>
              <p className="text-4xl">{overallStats.gpa}</p>
              <Progress
                value={overallStats.gpa * 25}
                className="mt-2 bg-white/20"
              />
            </div>
            <div>
              <p className="opacity-90 mb-1">Class Rank</p>
              <p className="text-4xl">#{overallStats.rank}</p>
              <p className="text-sm opacity-90 mt-1">
                of {overallStats.totalStudents} students
              </p>
            </div>
            <div>
              <p className="opacity-90 mb-1">Status</p>
              <div className="flex items-center gap-2 mt-2">
                {overallStats.honors && (
                  <>
                    <Award className="h-6 w-6" />
                    <span className="text-xl">Honor Roll</span>
                  </>
                )}
              </div>
            </div>
            <div className="flex items-center justify-end">
              <Button
                text="Download Report Card"
                icon={<Download className="h-4 w-4" />}
                iconPosition="left"
                // variant="secondary"
                className="gap-2"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="current" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="current">Current Grades</TabsTrigger>
          <TabsTrigger value="trends">Trends & Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="space-y-4">
          {subjects.map((subject, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl flex-shrink-0">
                    {subject.currentGrade}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl text-gray-900 mb-1">
                          {subject.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {subject.teacher}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {getTrendIcon(subject.trend)}
                        {subject.trend !== "stable" && (
                          <span className="text-sm text-gray-600">
                            {subject.trend === "up" ? "+" : ""}
                            {subject.currentGrade - subject.previousGrade} pts
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">
                          Current Grade
                        </p>
                        <p
                          className={`text-2xl ${getGradeColor(
                            subject.currentGrade
                          )}`}
                        >
                          {subject.currentGrade}%
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">
                          Assignments
                        </p>
                        <p className="text-gray-900">
                          {subject.assignments} completed
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Tests</p>
                        <p className="text-gray-900">
                          {subject.tests} completed
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button
                        text="View Details"
                        icon={<Eye className="h-4 w-4" />}
                        iconPosition="left"
                        variant="outline"
                        className="gap-2"
                      />
                      <Button
                        text="Assignments"
                        icon={<BookOpen className="h-4 w-4" />}
                        variant="outline"
                        className="gap-2"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>GPA Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={termProgress}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[0, 4]} />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="gpa"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      name="GPA"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Grade Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={gradeDistribution}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="grade" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Subject Performance Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={subjects.map((s) => ({
                    name: s.name,
                    grade: s.currentGrade,
                  }))}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    angle={-45}
                    textAnchor="end"
                    height={100}
                  />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Bar dataKey="grade" fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Insights */}
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Target className="h-5 w-5" />
                Performance Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    Strong performance in STEM subjects - Computer Science (95%)
                    and Physics (92%)
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Target className="h-5 w-5 text-blue-600 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    Chemistry grade dropped slightly. Consider additional
                    tutoring or study group.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Award className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    Consistent improvement this term - GPA increased from 3.5 to
                    3.7
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Available Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Term 1 Report Card",
                    date: "Oct 2025",
                    status: "Available",
                  },
                  {
                    title: "Mid-Term Progress Report",
                    date: "Sep 2025",
                    status: "Available",
                  },
                  {
                    title: "Previous Year Final Report",
                    date: "Jun 2025",
                    status: "Available",
                  },
                ].map((report, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-start gap-4">
                      <BookOpen className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="text-gray-900">{report.title}</p>
                        <p className="text-sm text-gray-600">{report.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-700">
                        {report.status}
                      </Badge>
                      <Button
                        text="Download"
                        icon={<Download className="h-4 w-4" />}
                        variant="outline"
                        className="gap-2"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Teacher Comments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-sm text-gray-900">
                      Mr. Adebayo - Mathematics
                    </p>
                    <p className="text-xs text-gray-600">Oct 28, 2025</p>
                  </div>
                  <p className="text-sm text-gray-700">
                    "Excellent progress this term. Shows strong understanding of
                    calculus concepts and consistently helps peers during group
                    work."
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-sm text-gray-900">
                      Dr. Okonkwo - Physics
                    </p>
                    <p className="text-xs text-gray-600">Oct 27, 2025</p>
                  </div>
                  <p className="text-sm text-gray-700">
                    "Outstanding performance in lab work and theoretical
                    understanding. Recommended for advanced physics track."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
