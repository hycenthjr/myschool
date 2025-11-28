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
// import { Badge } from "../../components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { SportsAnalytics } from "../../components/portals/SportsAnalytics";
import {
  Trophy,
  Users,
  Calendar,
  Target,
  Award,
  Bell,
  LogOut,
  Home,
  ClipboardList,
  BarChart3,
} from "lucide-react";

export function CoachPortal() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

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

  const teamRoster = [
    {
      name: "Chioma Okafor",
      position: "Midfielder",
      attendance: 95,
      performance: 88,
    },
    {
      name: "Tunde Adeyemi",
      position: "Forward",
      attendance: 92,
      performance: 85,
    },
    {
      name: "David Okonkwo",
      position: "Defender",
      attendance: 98,
      performance: 90,
    },
    {
      name: "Grace Eze",
      position: "Goalkeeper",
      attendance: 100,
      performance: 92,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl text-gray-900">Sports Coach Portal</h1>
              <p className="text-sm text-gray-600">
                Training & Team Management
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
            <TabsTrigger value="roster" className="gap-2">
              <Users className="h-4 w-4" />
              Team Roster
            </TabsTrigger>
            <TabsTrigger value="training" className="gap-2">
              <ClipboardList className="h-4 w-4" />
              Training
            </TabsTrigger>
            <TabsTrigger value="performance" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              Performance
            </TabsTrigger>
            <TabsTrigger value="competitions" className="gap-2">
              <Trophy className="h-4 w-4" />
              Competitions
            </TabsTrigger>
            <TabsTrigger value="schedule" className="gap-2">
              <Calendar className="h-4 w-4" />
              Schedule
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
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
                      <p className="text-sm text-gray-600">
                        Nov 5, 2025 • 4:00 PM
                      </p>
                      <p className="text-sm text-gray-600">Home Stadium</p>
                      <Button text="View Details" className="w-full mt-3" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="roster">
            <Card>
              <CardHeader>
                <CardTitle>Team Roster - Eagles U-17</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {teamRoster.map((player, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex-1">
                        <p className="text-gray-900">{player.name}</p>
                        <p className="text-sm text-gray-600">
                          {player.position}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Attendance</p>
                          <p className="text-gray-900">{player.attendance}%</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Performance</p>
                          <p className="text-gray-900">{player.performance}%</p>
                        </div>
                      </div>
                      <Button
                        text="View Profile"
                        variant="outline"
                        className="ml-4"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance">
            <SportsAnalytics />
          </TabsContent>

          <TabsContent value="training">
            <Card>
              <CardHeader>
                <CardTitle>Training Plans & Drills</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Training schedules, drills, and session planning would be
                  displayed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="competitions">
            <Card>
              <CardHeader>
                <CardTitle>Competitions & Tournaments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Competition schedule, results, and tournament management would
                  be displayed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <CardTitle>Training & Match Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Complete calendar with training sessions and matches would be
                  displayed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
