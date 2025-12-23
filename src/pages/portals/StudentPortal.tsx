import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import Button from "../../ui/button";
// import { Badge } from "../../components/ui/badge";
// import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { Progress } from "../../ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { SportsAnalytics } from "../../components/portals/SportsAnalytics";
import { GradesReports } from "../../components/portals/GradesReports";
import { MakerIncubator } from "../../components/portals/MakerIncubator";
import { AttendanceTracker } from "../../components/portals/AttendanceTracker";
import { MessagingCenter } from "../../components/portals/MessagingCenter";
import {
  BookOpen,
  Trophy,
  Briefcase,
  Calendar,
  Clock,
  Bell,
  Award,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  LogOut,
  Home,
  Activity,
  Target,
  MessageSquare,
} from "lucide-react";

export function StudentPortal() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [activeTab] = useState("overview");

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const todaySchedule = [
    {
      time: "8:00 AM",
      subject: "Mathematics",
      room: "Block A, Room 12",
      status: "completed",
    },
    {
      time: "9:30 AM",
      subject: "Physics",
      room: "Science Lab 2",
      status: "completed",
    },
    {
      time: "11:00 AM",
      subject: "English Literature",
      room: "Block B, Room 5",
      status: "in-progress",
    },
    {
      time: "1:00 PM",
      subject: "Lunch Break",
      room: "Dining Hall",
      status: "upcoming",
    },
    {
      time: "2:00 PM",
      subject: "Entrepreneurship Workshop",
      room: "Maker Lab",
      status: "upcoming",
    },
    {
      time: "4:00 PM",
      subject: "Football Training",
      room: "Main Pitch",
      status: "upcoming",
    },
  ];

  const assignments = [
    {
      subject: "Mathematics",
      title: "Calculus Problem Set 3",
      due: "Tomorrow",
      status: "pending",
    },
    {
      subject: "Physics",
      title: "Lab Report: Momentum",
      due: "2 days",
      status: "pending",
    },
    {
      subject: "English",
      title: "Essay: Macbeth Analysis",
      due: "5 days",
      status: "draft",
    },
  ];

  const badges = [
    { name: "Python Fundamentals", icon: "🐍", date: "Oct 2025" },
    { name: "Top Scorer - Math", icon: "📐", date: "Sep 2025" },
    { name: "Team Captain", icon: "⚽", date: "Aug 2025" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl text-gray-900">Student Portal</h1>
              <p className="text-sm text-gray-600">
                Welcome back, {user?.name || user?.email?.split("@")[0]}!
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                text=""
                variant="ghost"
                icon={<Bell className="h-5 w-5" />}
              />
              <Link to="/">
                <Button variant="outline" text="Back to Website" />
              </Link>
              <Button
                variant="ghost"
                text="Sign Out"
                icon={<LogOut className="h-4 w-4" />}
                onClick={handleSignOut}
                className="gap-2"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full"> */}
        <Tabs defaultValue={activeTab} className="w-full">
          <TabsList className="grid w-full grid-cols-7 mb-8">
            <TabsTrigger value="overview" className="gap-2">
              <Home className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="courses" className="gap-2">
              <BookOpen className="h-4 w-4" />
              Courses
            </TabsTrigger>
            <TabsTrigger value="sports" className="gap-2">
              <Trophy className="h-4 w-4" />
              Sports
            </TabsTrigger>
            <TabsTrigger value="business" className="gap-2">
              <Briefcase className="h-4 w-4" />
              Business
            </TabsTrigger>
            <TabsTrigger value="attendance" className="gap-2">
              <Activity className="h-4 w-4" />
              Attendance
            </TabsTrigger>
            <TabsTrigger value="achievements" className="gap-2">
              <Award className="h-4 w-4" />
              Badges
            </TabsTrigger>
            <TabsTrigger value="messages" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Messages
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Today's Schedule */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Today's Schedule
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {todaySchedule.map((item, index) => (
                        <div
                          key={index}
                          className={`flex items-center gap-4 p-3 rounded-lg ${
                            item.status === "in-progress"
                              ? "bg-blue-50 border-2 border-blue-200"
                              : "bg-gray-50"
                          }`}
                        >
                          <div className="text-sm text-gray-900 min-w-[70px]">
                            {item.time}
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-900">{item.subject}</p>
                            <p className="text-sm text-gray-600">{item.room}</p>
                          </div>
                          {item.status === "completed" && (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          )}
                          {item.status === "in-progress" && <span>Now</span>}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Assignments Due */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Assignments Due
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {assignments.map((assignment, index) => (
                        <div
                          key={index}
                          className="flex items-start justify-between p-4 bg-gray-50 rounded-lg"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span>{assignment.subject}</span>
                              {assignment.status === "pending" && (
                                <AlertCircle className="h-4 w-4 text-orange-600" />
                              )}
                            </div>
                            <p className="text-gray-900 mb-1">
                              {assignment.title}
                            </p>
                            <p className="text-sm text-gray-600">
                              Due in {assignment.due}
                            </p>
                          </div>
                          <Button text="Submit" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Performance Overview */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Performance Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <p className="text-sm text-gray-600 mb-2">
                          Overall GPA
                        </p>
                        <p className="text-3xl text-gray-900">3.7</p>
                        <Progress value={85} className="mt-2" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-2">Attendance</p>
                        <p className="text-3xl text-gray-900">95%</p>
                        <Progress value={95} className="mt-2" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-2">Class Rank</p>
                        <p className="text-3xl text-gray-900">#4</p>
                        <p className="text-sm text-gray-600 mt-2">
                          of 45 students
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Links */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Links</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Button
                        text="My Courses"
                        icon={<BookOpen className="h-4 w-4" />}
                        iconPosition="left"
                        variant="outline"
                        className="w-full justify-start gap-2"
                      />
                      <Button
                        text="Sports Dashboard"
                        icon={<Trophy className="h-4 w-4" />}
                        iconPosition="left"
                        variant="outline"
                        className="w-full justify-start gap-2"
                      />
                      <Button
                        text="My Business"
                        icon={<Briefcase className="h-4 w-4" />}
                        iconPosition="left"
                        variant="outline"
                        className="w-full justify-start gap-2"
                      />
                      <Button
                        text="Calendar"
                        icon={<Calendar className="h-4 w-4" />}
                        iconPosition="left"
                        variant="outline"
                        className="w-full justify-start gap-2"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Achievements & Badges */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      Recent Badges
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {badges.map((badge, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg"
                        >
                          <div className="text-2xl">{badge.icon}</div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-900">
                              {badge.name}
                            </p>
                            <p className="text-xs text-gray-600">
                              {badge.date}
                            </p>
                          </div>
                        </div>
                      ))}
                      <Button
                        text="View all achievements →"
                        className="p-0 h-auto text-sm w-full"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Events */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Upcoming
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-900 mb-1">
                          Inter-House Sports Day
                        </p>
                        <p className="text-xs text-gray-600">Nov 12, 2025</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-900 mb-1">
                          Pitch Competition
                        </p>
                        <p className="text-xs text-gray-600">Nov 18, 2025</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-900 mb-1">
                          Term Exams Begin
                        </p>
                        <p className="text-xs text-gray-600">Dec 1, 2025</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="courses">
            <GradesReports />
          </TabsContent>

          <TabsContent value="sports">
            <SportsAnalytics />
          </TabsContent>

          <TabsContent value="business">
            <MakerIncubator />
          </TabsContent>

          <TabsContent value="attendance">
            <AttendanceTracker />
          </TabsContent>

          <TabsContent value="achievements">
            <div className="space-y-6">
              {/* Digital Credentials */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Digital Credentials & Badges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      {
                        title: "Python Fundamentals",
                        issuer: "Computer Science Dept",
                        date: "Oct 2025",
                        icon: "🐍",
                        verified: true,
                      },
                      {
                        title: "Top Scorer - Mathematics",
                        issuer: "Academic Excellence",
                        date: "Sep 2025",
                        icon: "📐",
                        verified: true,
                      },
                      {
                        title: "Team Captain - Football",
                        issuer: "Sports Department",
                        date: "Aug 2025",
                        icon: "⚽",
                        verified: true,
                      },
                      {
                        title: "Entrepreneurship Award",
                        issuer: "Maker Lab",
                        date: "Jul 2025",
                        icon: "💡",
                        verified: true,
                      },
                      {
                        title: "Community Service (50 hours)",
                        issuer: "Student Affairs",
                        date: "Jun 2025",
                        icon: "🤝",
                        verified: true,
                      },
                      {
                        title: "Public Speaking Champion",
                        issuer: "Debate Club",
                        date: "May 2025",
                        icon: "🎤",
                        verified: true,
                      },
                    ].map((badge, index) => (
                      <Card
                        key={index}
                        className="hover:shadow-lg transition-shadow"
                      >
                        <CardContent className="p-6 text-center">
                          <div className="text-4xl mb-3">{badge.icon}</div>
                          <h3 className="text-gray-900 mb-2">{badge.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {badge.issuer}
                          </p>
                          <p className="text-xs text-gray-500 mb-3">
                            {badge.date}
                          </p>
                          {badge.verified && (
                            <span className="bg-green-100 text-green-700">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Verified
                            </span>
                          )}
                          <div className="flex gap-2 mt-4">
                            <Button
                              text="View"
                              variant="outline"
                              className="flex-1"
                            />
                            <Button
                              text="Share"
                              variant="outline"
                              className="flex-1"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Academic Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle>Academic Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Honor Roll - Term 1, 2025",
                        description: "GPA 3.7 or higher",
                        icon: "🎓",
                      },
                      {
                        title: "Perfect Attendance Award",
                        description: "100% attendance for 3 consecutive months",
                        icon: "✅",
                      },
                      {
                        title: "STEM Excellence Award",
                        description:
                          "Outstanding performance in Science & Technology",
                        icon: "🔬",
                      },
                    ].map((achievement, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg"
                      >
                        <div className="text-3xl">{achievement.icon}</div>
                        <div className="flex-1">
                          <p className="text-gray-900 mb-1">
                            {achievement.title}
                          </p>
                          <p className="text-sm text-gray-600">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Progress Tracking */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Progress Towards Goals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        goal: "Maintain 3.5+ GPA",
                        progress: 100,
                        status: "achieved",
                      },
                      {
                        goal: "Complete 100 community service hours",
                        progress: 85,
                        status: "in-progress",
                      },
                      {
                        goal: "Win State Championship",
                        progress: 60,
                        status: "in-progress",
                      },
                      {
                        goal: "Launch Successful Business",
                        progress: 75,
                        status: "in-progress",
                      },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-gray-900">{item.goal}</p>
                          <span
                            className={
                              item.status === "achieved"
                                ? "bg-green-100 text-green-700"
                                : "bg-blue-100 text-blue-700"
                            }
                          >
                            {item.status === "achieved"
                              ? "Achieved"
                              : `${item.progress}%`}
                          </span>
                        </div>
                        <Progress value={item.progress} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="messages">
            <MessagingCenter userRole="student" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
