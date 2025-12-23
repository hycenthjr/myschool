import { Card, CardContent, CardHeader, CardTitle } from '../../../ui/card';
import Button from '../../../ui/button';
import { AlertCircle, BookOpen, Calendar, CheckCircle, ClipboardList, Clock, FileText, Users } from 'lucide-react';
import Badge from '../../../ui/badge';
import { Textarea } from '../../../ui/textarea';


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

const staffDashboard = () => {
  return (
    <div>
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl text-gray-900">Staff Portal</h1>
              <p className="text-sm text-gray-600">Welcome, username.</p>
            </div>
          </div>
        </div>
      </header>

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
                  <p className="text-sm text-gray-600 mb-2">Classes Taught</p>
                  <p className="text-3xl text-gray-900">18</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">
                    Assignments Graded
                  </p>
                  <p className="text-3xl text-gray-900">42</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">Students Helped</p>
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
                          item.priority === "high" ? "destructive" : "secondary"
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
                  <p className="text-sm text-gray-900 mb-1">Staff Meeting</p>
                  <p className="text-xs text-gray-600">Tomorrow, 3:00 PM</p>
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
              <CardTitle className="text-base">AI Teaching Assistant</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Get personalized lesson suggestions and differentiated tasks for
                your students.
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
    </div>
  );
}

export default staffDashboard