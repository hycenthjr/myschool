import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import Badge from "../../ui/badge";
import Button from "../../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { Progress } from "../../ui/progress";
import {
  Trophy,
  Target,
  TrendingUp,
  Award,
  Calendar,
  Clock,
  Activity,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface SportProfile {
  sport: string;
  position: string;
  level: string;
  teamName: string;
}

export function SportsAnalytics() {
// { studentName }: { studentName?: string }
  const profile: SportProfile = {
    sport: "Football",
    position: "Midfielder",
    level: "Varsity",
    teamName: "Eagles U-17",
  };

  const performanceData = [
    { week: "Week 1", goals: 2, assists: 3, minutes: 90 },
    { week: "Week 2", goals: 1, assists: 2, minutes: 90 },
    { week: "Week 3", goals: 3, assists: 1, minutes: 75 },
    { week: "Week 4", goals: 2, assists: 4, minutes: 90 },
    { week: "Week 5", goals: 4, assists: 2, minutes: 90 },
  ];

  const skillsData = [
    { skill: "Speed", value: 85 },
    { skill: "Stamina", value: 90 },
    { skill: "Technique", value: 88 },
    { skill: "Teamwork", value: 92 },
    { skill: "Strategy", value: 80 },
    { skill: "Defense", value: 75 },
  ];

  const stats = {
    matchesPlayed: 15,
    goals: 12,
    assists: 12,
    minutesPlayed: 1260,
    winRate: 73,
  };

  const upcomingMatches = [
    {
      opponent: "vs. Lions Academy",
      date: "Nov 5, 2025",
      time: "4:00 PM",
      venue: "Home Stadium",
      competition: "Lagos State Championship",
    },
    {
      opponent: "vs. Tigers FC",
      date: "Nov 12, 2025",
      time: "2:00 PM",
      venue: "Away",
      competition: "Inter-School Tournament",
    },
  ];

  const achievements = [
    {
      title: "Top Scorer",
      description: "Lagos State U-17 Tournament",
      date: "Oct 2025",
    },
    {
      title: "MVP Award",
      description: "Inter-House Sports Day",
      date: "Sep 2025",
    },
    { title: "Team Captain", description: "Eagles U-17", date: "Aug 2025" },
  ];

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl mb-2">{profile.sport} Athlete Profile</h2>
              <div className="space-y-1">
                <p className="opacity-90">Position: {profile.position}</p>
                <p className="opacity-90">Team: {profile.teamName}</p>
                <p className="opacity-90">Level: {profile.level}</p>
              </div>
            </div>
            <Trophy className="h-12 w-12 opacity-80" />
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <Trophy className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl text-gray-900">{stats.matchesPlayed}</div>
            <p className="text-sm text-gray-600">Matches</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl text-gray-900">{stats.goals}</div>
            <p className="text-sm text-gray-600">Goals</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Activity className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl text-gray-900">{stats.assists}</div>
            <p className="text-sm text-gray-600">Assists</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl text-gray-900">{stats.minutesPlayed}</div>
            <p className="text-sm text-gray-600">Minutes</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-8 w-8 text-teal-600 mx-auto mb-2" />
            <div className="text-2xl text-gray-900">{stats.winRate}%</div>
            <p className="text-sm text-gray-600">Win Rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Tabs */}
      <Tabs defaultValue="performance" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="skills">Skills Radar</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="goals"
                    stroke="#3b82f6"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="assists"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Weekly Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="goals" fill="#3b82f6" />
                  <Bar dataKey="assists" fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Skills Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart data={skillsData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="skill" />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} />
                    <Radar
                      name="Current Level"
                      dataKey="value"
                      stroke="#3b82f6"
                      fill="#3b82f6"
                      fillOpacity={0.6}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Detailed Skills Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skillsData.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-900">
                          {skill.skill}
                        </span>
                        <span className="text-sm text-gray-600">
                          {skill.value}/100
                        </span>
                      </div>
                      <Progress value={skill.value} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Matches
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingMatches.map((match, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-lg text-gray-900">
                          {match.opponent}
                        </p>
                        <Badge variant="secondary" className="mt-1">
                          {match.competition}
                        </Badge>
                      </div>
                      <Button text="View Details" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-3">
                      <div>
                        <p className="text-sm text-gray-600">Date & Time</p>
                        <p className="text-sm text-gray-900">
                          {match.date} at {match.time}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Venue</p>
                        <p className="text-sm text-gray-900">{match.venue}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Recent Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg"
                  >
                    <Trophy className="h-8 w-8 text-yellow-600 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-gray-900 mb-1">{achievement.title}</p>
                      <p className="text-sm text-gray-600">
                        {achievement.description}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {achievement.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Coach Feedback */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-base">Latest Coach Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-900 mb-1">
                Coach Adeyemi • Oct 28, 2025
              </p>
              <p className="text-sm text-gray-700">
                "Excellent performance in last week's match. Your passing
                accuracy has improved significantly. Focus on defensive
                positioning in the next training session."
              </p>
            </div>
            <Button variant="outline" text="View All Feedback" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
