import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";
import Button from "../../../ui/button";
import {
  Award,
  BarChart3,
  Calendar,
  ClipboardList,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import Notification from "../../../components/admin/Notification";

 const todaySchedule = [
   {
     time: "6:00 AM",
     activity: "Morning Training - Track & Field",
     location: "Main Stadium",
   },
   {
     time: "4:00 PM",
     activity: "Football Practice - U-17 Team",
     location: "Football Pitch",
   },
   { time: "6:00 PM", activity: "Team Meeting", location: "Sports Center" },
 ];

const CoachDashboard = () => {
  return (
    <div>
      <header className="bg-white border-b border-gray-200 mb-[5%] sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">
                Management & Administration
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Notification />
            </div>
          </div>
        </div>
      </header>

      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl text-gray-900">28</div>
            <p className="text-sm text-gray-600">Team Members</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Trophy className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl text-gray-900">5</div>
            <p className="text-sm text-gray-600">Wins This Season</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl text-gray-900">94%</div>
            <p className="text-sm text-gray-600">Avg Attendance</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl text-gray-900">3</div>
            <p className="text-sm text-gray-600">Upcoming Matches</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {todaySchedule.map((session, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="text-sm text-gray-900 min-w-[70px]">
                      {session.time}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900">{session.activity}</p>
                      <p className="text-sm text-gray-600">
                        {session.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button
                  text="Mark Attendance"
                  icon={<ClipboardList className="h-4 w-4" />}
                  iconPosition="left"
                  variant="outline"
                  className="w-full justify-start gap-2"
                />
                <Button
                  text="Log Performance"
                  icon={<BarChart3 className="h-4 w-4" />}
                  iconPosition="left"
                  variant="outline"
                  className="w-full justify-start gap-2"
                />
                <Button
                  text="Schedule Training"
                  icon={<Calendar className="h-4 w-4" />}
                  iconPosition="left"
                  variant="outline"
                  className="w-full justify-start gap-2"
                />
                <Button
                  text="Match Report"
                  icon={<Trophy className="h-4 w-4" />}
                  iconPosition="left"
                  variant="outline"
                  className="w-full justify-start gap-2"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
            <CardHeader>
              <CardTitle className="text-base">Upcoming Match</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-gray-900">vs. Lions Academy</p>
                <p className="text-sm text-gray-600">Nov 5, 2025 • 4:00 PM</p>
                <p className="text-sm text-gray-600">Home Stadium</p>
                <Button text="View Details" className="w-full mt-3" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CoachDashboard;
