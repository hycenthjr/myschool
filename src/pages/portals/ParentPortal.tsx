import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import Button from "../../ui/button";
// import { Badge } from "../../components/ui/badge";
import { Avatar, AvatarFallback } from "../../ui/avatar";
import { Progress } from "../../ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { BusTracker } from "../../components/portals/BusTracker";
import { AttendanceTracker } from "../../components/portals/AttendanceTracker";
import { GradesReports } from "../../components/portals/GradesReports";
import { FeePayment } from "../../components/portals/FeePayment";
import { MessagingCenter } from "../../components/portals/MessagingCenter";
import {
  DollarSign,
  Calendar,
  Bus,
  BookOpen,
  Activity,
  MessageSquare,
  Download,
  CheckCircle,
  Clock,
  MapPin,
  Bell,
  LogOut,
  Home,
  CreditCard,
} from "lucide-react";

export function ParentPortal() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [activeTab] = useState("overview");

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const children = [
    {
      name: "Chioma Okafor",
      class: "Year 10A",
      avatar: "CO",
      attendance: 95,
      feeStatus: "Paid",
      nextEvent: "Parent-Teacher Meeting",
    },
  ];

  const recentActivity = [
    {
      type: "attendance",
      message: "Chioma checked in at 7:45 AM",
      time: "2 hours ago",
    },
    {
      type: "grade",
      message: "New grade posted: Mathematics - 87%",
      time: "1 day ago",
    },
    {
      type: "bus",
      message: "Bus departed from school at 3:30 PM",
      time: "Yesterday",
    },
    {
      type: "message",
      message: "Message from Mr. Adebayo (Math teacher)",
      time: "2 days ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl text-gray-900">Parent Portal</h1>
              <p className="text-sm text-gray-600">
                Welcome back, {user?.name || user?.email}
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
              <Activity className="h-4 w-4" />
              Attendance
            </TabsTrigger>
            <TabsTrigger value="grades" className="gap-2">
              <BookOpen className="h-4 w-4" />
              Grades
            </TabsTrigger>
            <TabsTrigger value="fees" className="gap-2">
              <CreditCard className="h-4 w-4" />
              Fees
            </TabsTrigger>
            <TabsTrigger value="bus" className="gap-2">
              <Bus className="h-4 w-4" />
              Bus Tracking
            </TabsTrigger>
            <TabsTrigger value="messages" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Messages
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            {/* Child Summary Cards */}
            <div className="mb-8">
              <h2 className="text-xl mb-4 text-gray-900">My Children</h2>
              {children.map((child, index) => (
                <Card key={index} className="mb-4">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <Avatar className="h-16 w-16">
                        <AvatarFallback className="bg-blue-600 text-white text-xl">
                          {child.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl text-gray-900">
                              {child.name}
                            </h3>
                            <p className="text-gray-600">{child.class}</p>
                          </div>
                          <span>{child.feeStatus}</span>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <p className="text-sm text-gray-600 mb-1">
                              Attendance
                            </p>
                            <div className="flex items-center gap-2">
                              <Progress
                                value={child.attendance}
                                className="flex-1"
                              />
                              <span className="text-sm text-gray-900">
                                {child.attendance}%
                              </span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-1">
                              Next Event
                            </p>
                            <p className="text-sm text-gray-900">
                              {child.nextEvent}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              text="View Full Profile"
                              variant="outline"
                              className="flex-1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Quick Actions */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-xl mb-4 text-gray-900">Quick Actions</h2>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <DollarSign className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                        <h3 className="text-sm text-gray-900">Pay Fees</h3>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <Bus className="h-8 w-8 text-green-600 mx-auto mb-3" />
                        <h3 className="text-sm text-gray-900">Track Bus</h3>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                        <h3 className="text-sm text-gray-900">View Calendar</h3>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <BookOpen className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                        <h3 className="text-sm text-gray-900">
                          Grades & Reports
                        </h3>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <Activity className="h-8 w-8 text-red-600 mx-auto mb-3" />
                        <h3 className="text-sm text-gray-900">Attendance</h3>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <MessageSquare className="h-8 w-8 text-teal-600 mx-auto mb-3" />
                        <h3 className="text-sm text-gray-900">Messages</h3>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0"
                        >
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                            {activity.type === "attendance" && (
                              <CheckCircle className="h-5 w-5 text-blue-600" />
                            )}
                            {activity.type === "grade" && (
                              <BookOpen className="h-5 w-5 text-green-600" />
                            )}
                            {activity.type === "bus" && (
                              <Bus className="h-5 w-5 text-orange-600" />
                            )}
                            {activity.type === "message" && (
                              <MessageSquare className="h-5 w-5 text-purple-600" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-900">{activity.message}</p>
                            <p className="text-sm text-gray-500">
                              {activity.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Bus Tracker */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bus className="h-5 w-5" />
                      Bus Status
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Route</span>
                        <span>Route 3 - Lekki</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Status</span>
                        <span className="bg-green-100 text-green-700">
                          En Route
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-gray-400 mt-1" />
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">
                            Approaching Chevron Stop
                          </p>
                          <p className="text-xs text-gray-500">
                            ETA: 8 minutes
                          </p>
                        </div>
                      </div>
                      <Button
                        text="View Live Map"
                        variant="outline"
                        className="w-full"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Events */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Upcoming Events
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-900">
                            Nov 25, 2025
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 ml-6">
                          Parent-Teacher Conferences
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-900">
                            Dec 15, 2025
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 ml-6">
                          End of Term Reports
                        </p>
                      </div>
                      <Button
                        text="View full calendar →"
                        className="p-0 h-auto text-sm"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Fee Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      Fee Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">
                          Term 1 (2025)
                        </span>
                        <span className="bg-green-100 text-green-700">
                          Paid
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Balance</span>
                        <span className="text-sm text-gray-900">₦0</span>
                      </div>
                      <Button
                        text="Download Receipt"
                        icon={<Download className="h-4 w-4" />}
                        iconPosition="left"
                        variant="outline"
                        className="w-full gap-2"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="attendance">
            <AttendanceTracker studentName="Chioma Okafor" />
          </TabsContent>

          <TabsContent value="grades">
            <GradesReports studentName="Chioma Okafor" />
          </TabsContent>

          <TabsContent value="fees">
            <FeePayment studentName="Chioma Okafor" />
          </TabsContent>

          <TabsContent value="bus">
            <BusTracker routeId="route-3" />
          </TabsContent>

          <TabsContent value="messages">
            <MessagingCenter userRole="parent" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
