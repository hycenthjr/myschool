import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import Button from "../../components/ui/button";
import Badge  from "../../components/ui/badge";
import { Textarea } from "../../components/ui/textarea";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { AttendanceManagement } from "../../components/portals/AttendanceManagement";
import { MessagingCenter } from "../../components/portals/MessagingCenter";
import {
  FileText,
  Users,
  Clock,
  Calendar,
  CheckCircle,
  Bell,
  ClipboardList,
  BookOpen,
  AlertCircle,
  LogOut,
  Home,
  GraduationCap,
  BarChart3,
  MessageSquare,
} from "lucide-react";

export function StaffPortal() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const todayClasses = [
    {
      time: "8:00 AM",
      class: "Year 10A - Mathematics",
      room: "Block A, Room 12",
      status: "completed",
    },
    {
      time: "9:30 AM",
      class: "Year 11B - Mathematics",
      room: "Block A, Room 12",
      status: "in-progress",
    },
    {
      time: "11:00 AM",
      class: "Year 10B - Mathematics",
      room: "Block A, Room 12",
      status: "upcoming",
    },
    {
      time: "2:00 PM",
      class: "Year 12A - Further Maths",
      room: "Block A, Room 12",
      status: "upcoming",
    },
  ];

  const pendingTasks = [
    { task: "Submit daily report", due: "Today, 5:00 PM", priority: "high" },
    { task: "Grade Year 10 assignments", due: "Tomorrow", priority: "medium" },
    { task: "Lesson plan approval (HOD)", due: "Nov 1", priority: "low" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl text-gray-900">Staff Portal</h1>
              <p className="text-sm text-gray-600">
                Welcome, {user?.name || user?.email}
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
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="overview" className="gap-2">
              <Home className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="attendance" className="gap-2">
              <ClipboardList className="h-4 w-4" />
              Attendance
            </TabsTrigger>
            <TabsTrigger value="grades" className="gap-2">
              <GraduationCap className="h-4 w-4" />
              Grades
            </TabsTrigger>
            <TabsTrigger value="classes" className="gap-2">
              <Users className="h-4 w-4" />
              Classes
            </TabsTrigger>
            <TabsTrigger value="reports" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              Reports
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
                      Today's Classes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {todayClasses.map((item, index) => (
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
                            <p className="text-gray-900">{item.class}</p>
                            <p className="text-sm text-gray-600">{item.room}</p>
                          </div>
                          {item.status === "completed" && (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          )}
                          {item.status === "in-progress" && <span>Now</span>}
                          {item.status === "upcoming" && (
                            <Button text="View Plan" variant="outline" />
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Daily Report */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Submit Daily Report
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div>
                        <label className="text-sm text-gray-700 mb-2 block">
                          Learning objectives covered today:
                        </label>
                        <Textarea
                          placeholder="e.g., Year 10A completed quadratic equations module, students demonstrated strong understanding of factorization..."
                          rows={4}
                        />
                      </div>
                      <div>
                        <label className="text-sm text-gray-700 mb-2 block">
                          Students requiring additional support:
                        </label>
                        <Textarea
                          placeholder="List any students who need extra help or intervention..."
                          rows={3}
                        />
                      </div>
                      <div>
                        <label className="text-sm text-gray-700 mb-2 block">
                          Notes / Incidents:
                        </label>
                        <Textarea
                          placeholder="Any notable events, behavioral issues, or achievements to report..."
                          rows={3}
                        />
                      </div>
                      <div className="flex gap-3">
                        <Button
                          text="Submit Report"
                          className="bg-gradient-to-r from-blue-600 to-purple-600"
                        />
                        <Button text="Save Draft" variant="outline" />
                      </div>
                    </form>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle>This Week's Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <p className="text-sm text-gray-600 mb-2">
                          Classes Taught
                        </p>
                        <p className="text-3xl text-gray-900">18</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-2">
                          Assignments Graded
                        </p>
                        <p className="text-3xl text-gray-900">42</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-2">
                          Students Helped
                        </p>
                        <p className="text-3xl text-gray-900">67</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Button
                        text="Create Lesson Plan"
                        icon={<BookOpen className="h-4 w-4" />}
                        iconPosition="left"
                        variant="outline"
                        className="w-full justify-start gap-2"
                      />
                      <Button
                        text="Take Attendance"
                        icon={<ClipboardList className="h-4 w-4" />}
                        iconPosition="left"
                        variant="outline"
                        className="w-full justify-start gap-2"
                      />
                      <Button
                        text="View My Classes"
                        icon={<Users className="h-4 w-4" />}
                        iconPosition="left"
                        variant="outline"
                        className="w-full justify-start gap-2"
                      />
                      <Button
                        text="Duty Roster"
                        icon={<Calendar className="h-4 w-4" />}
                        iconPosition="left"
                        variant="outline"
                        className="w-full justify-start gap-2"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Pending Tasks */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5" />
                      Pending Tasks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {pendingTasks.map((item, index) => (
                        <div key={index} className="p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-start justify-between mb-2">
                            <p className="text-sm text-gray-900">{item.task}</p>
                            <Badge
                              variant={
                                item.priority === "high"
                                  ? "destructive"
                                  : "secondary"
                              }
                              className="text-xs"
                            >
                              {item.priority}
                            </Badge>
                          </div>
                          <p className="text-xs text-gray-600">{item.due}</p>
                        </div>
                      ))}
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
                          Staff Meeting
                        </p>
                        <p className="text-xs text-gray-600">
                          Tomorrow, 3:00 PM
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-900 mb-1">
                          Parent-Teacher Conferences
                        </p>
                        <p className="text-xs text-gray-600">Nov 25, 2025</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-900 mb-1">
                          End of Term Exams
                        </p>
                        <p className="text-xs text-gray-600">Dec 1-15, 2025</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* AI Assistant */}
                <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
                  <CardHeader>
                    <CardTitle className="text-base">
                      AI Teaching Assistant
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Get personalized lesson suggestions and differentiated
                      tasks for your students.
                    </p>
                    <Button
                      text="Generate Resources"
                      variant="outline"
                      className="w-full"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="attendance">
            <AttendanceManagement />
          </TabsContent>

          <TabsContent value="grades">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Grade Entry - Year 10A Mathematics</CardTitle>
                  <Button text="Save Grades" className="gap-2" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Chioma Okafor",
                      assignment1: 85,
                      assignment2: 90,
                      midterm: 87,
                      project: 92,
                    },
                    {
                      name: "Tunde Adeyemi",
                      assignment1: 78,
                      assignment2: 82,
                      midterm: 80,
                      project: 85,
                    },
                    {
                      name: "Amina Mohammed",
                      assignment1: 92,
                      assignment2: 88,
                      midterm: 90,
                      project: 95,
                    },
                    {
                      name: "James Wilson",
                      assignment1: 75,
                      assignment2: 79,
                      midterm: 77,
                      project: 80,
                    },
                    {
                      name: "Fatima Ibrahim",
                      assignment1: 88,
                      assignment2: 90,
                      midterm: 89,
                      project: 91,
                    },
                  ].map((student, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-900 mb-3">{student.name}</p>
                      <div className="grid grid-cols-4 gap-4">
                        <div>
                          <label className="text-sm text-gray-600">
                            Assignment 1
                          </label>
                          <input
                            type="number"
                            defaultValue={student.assignment1}
                            className="w-full mt-1 px-3 py-2 border rounded"
                            min="0"
                            max="100"
                          />
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">
                            Assignment 2
                          </label>
                          <input
                            type="number"
                            defaultValue={student.assignment2}
                            className="w-full mt-1 px-3 py-2 border rounded"
                            min="0"
                            max="100"
                          />
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">
                            Midterm
                          </label>
                          <input
                            type="number"
                            defaultValue={student.midterm}
                            className="w-full mt-1 px-3 py-2 border rounded"
                            min="0"
                            max="100"
                          />
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">
                            Project
                          </label>
                          <input
                            type="number"
                            defaultValue={student.project}
                            className="w-full mt-1 px-3 py-2 border rounded"
                            min="0"
                            max="100"
                          />
                        </div>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-sm text-gray-600">
                          Current Average:
                        </span>
                        <span className="text-lg text-gray-900">
                          {Math.round(
                            (student.assignment1 +
                              student.assignment2 +
                              student.midterm +
                              student.project) /
                              4
                          )}
                          %
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="classes">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Year 10A - Mathematics",
                  students: 20,
                  schedule: "Mon, Wed, Fri 8:00 AM",
                },
                {
                  name: "Year 11B - Mathematics",
                  students: 18,
                  schedule: "Tue, Thu 9:30 AM",
                },
                {
                  name: "Year 10B - Mathematics",
                  students: 22,
                  schedule: "Mon, Wed 11:00 AM",
                },
                {
                  name: "Year 12A - Further Maths",
                  students: 15,
                  schedule: "Tue, Thu 2:00 PM",
                },
              ].map((classInfo, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-base">
                      {classInfo.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Students</span>
                        <span className="text-gray-900">
                          {classInfo.students}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Schedule</span>
                        <span className="text-gray-900">
                          {classInfo.schedule}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        <Button text="View Roster" variant="outline" />
                        <Button text="Lesson Plans" variant="outline" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reports">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Class Performance Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        class: "Year 10A",
                        avgGrade: 85,
                        attendance: 95,
                        topStudent: "Amina Mohammed",
                      },
                      {
                        class: "Year 11B",
                        avgGrade: 82,
                        attendance: 92,
                        topStudent: "David Okonkwo",
                      },
                      {
                        class: "Year 10B",
                        avgGrade: 80,
                        attendance: 94,
                        topStudent: "Grace Eze",
                      },
                      {
                        class: "Year 12A",
                        avgGrade: 88,
                        attendance: 97,
                        topStudent: "Chioma Okafor",
                      },
                    ].map((classData, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-lg text-gray-900">
                            {classData.class}
                          </p>
                          <Button text="View Details" variant="outline" />
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600">Avg Grade</p>
                            <p className="text-xl text-gray-900">
                              {classData.avgGrade}%
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-600">Attendance</p>
                            <p className="text-xl text-gray-900">
                              {classData.attendance}%
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-600">Top Student</p>
                            <p className="text-sm text-gray-900">
                              {classData.topStudent}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Generated Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Term 1 Progress Reports",
                        date: "Oct 2025",
                        status: "Ready",
                      },
                      {
                        title: "Weekly Performance Summary",
                        date: "Week of Oct 25",
                        status: "Ready",
                      },
                      {
                        title: "Attendance Analysis",
                        date: "October 2025",
                        status: "Ready",
                      },
                    ].map((report, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      >
                        <div>
                          <p className="text-gray-900">{report.title}</p>
                          <p className="text-sm text-gray-600">{report.date}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="bg-green-100 text-green-700">
                            {report.status}
                          </span>
                          <Button text="Download" variant="outline" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="messages">
            <MessagingCenter userRole="staff" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
