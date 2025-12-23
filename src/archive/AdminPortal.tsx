import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Button from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Users,
  GraduationCap,
  DollarSign,
  BarChart3,
  Settings,
  Shield,
  Bell,
  LogOut,
  Home,
  TrendingUp,
  UserCheck,
  School,
  Activity,
} from "lucide-react";

export function AdminPortal() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [activeTab] = useState("overview");

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const stats = {
    totalStudents: 450,
    totalStaff: 65,
    attendance: 94.5,
    revenue: 125000000,
    pendingApprovals: 12,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">
                Management & Administration
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
        <Tabs defaultValue={activeTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="overview" className="gap-2">
              <Home className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="students" className="gap-2">
              <GraduationCap className="h-4 w-4" />
              Students
            </TabsTrigger>
            <TabsTrigger value="staff" className="gap-2">
              <Users className="h-4 w-4" />
              Staff
            </TabsTrigger>
            <TabsTrigger value="finance" className="gap-2">
              <Users className="h-4 w-4" />
              Finance
            </TabsTrigger>
            <TabsTrigger value="analytics" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="settings" className="gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            {/* Key Metrics */}
            <div className="grid md:grid-cols-5 gap-4 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <GraduationCap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl text-gray-900">
                    {stats.totalStudents}
                  </div>
                  <p className="text-sm text-gray-600">Total Students</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl text-gray-900">
                    {stats.totalStaff}
                  </div>
                  <p className="text-sm text-gray-600">Staff Members</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <UserCheck className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl text-gray-900">
                    {stats.attendance}%
                  </div>
                  <p className="text-sm text-gray-600">Attendance</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <DollarSign className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl text-gray-900">
                    ₦{(stats.revenue / 1000000).toFixed(1)}M
                  </div>
                  <p className="text-sm text-gray-600">Revenue (Term)</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl text-gray-900">
                    {stats.pendingApprovals}
                  </div>
                  <p className="text-sm text-gray-600">Pending</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          action: "New student admission approved",
                          user: "Admissions Office",
                          time: "5 minutes ago",
                        },
                        {
                          action: "Fee payment received - ₦3.5M",
                          user: "Finance Department",
                          time: "15 minutes ago",
                        },
                        {
                          action: "Staff leave request approved",
                          user: "HR Department",
                          time: "1 hour ago",
                        },
                        {
                          action: "New bus route added",
                          user: "Transport Manager",
                          time: "2 hours ago",
                        },
                      ].map((activity, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-3 bg-gray-50 rounded-lg"
                        >
                          <Activity className="h-5 w-5 text-blue-600 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-gray-900">{activity.action}</p>
                            <p className="text-sm text-gray-600">
                              {activity.user} • {activity.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>System Alerts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        {
                          type: "warning",
                          message: "12 fee payment reminders pending",
                          priority: "medium",
                        },
                        {
                          type: "info",
                          message: "Term 2 begins in 14 days",
                          priority: "low",
                        },
                        {
                          type: "warning",
                          message: "3 staff contracts expiring next month",
                          priority: "high",
                        },
                      ].map((alert, index) => (
                        <div
                          key={index}
                          className={`p-3 rounded-lg border ${
                            alert.priority === "high"
                              ? "bg-red-50 border-red-200"
                              : alert.priority === "medium"
                              ? "bg-yellow-50 border-yellow-200"
                              : "bg-blue-50 border-blue-200"
                          }`}
                        >
                          <div className="flex items-start gap-2">
                            <Bell className="h-4 w-4 mt-0.5" />
                            <p className="text-sm text-gray-900">
                              {alert.message}
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
                        text="Manage Admissions"
                        icon={<GraduationCap className="h-4 w-4" />}
                        iconPosition="left"
                        variant="outline"
                        className="w-full justify-start gap-2"
                      />

                      <Button
                        text="Staff Management"
                        icon={<Users className="h-4 w-4" />}
                        iconPosition="left"
                        variant="outline"
                        className="w-full justify-start gap-2"
                      />

                      <Button
                        text="Financial Reports"
                        icon={<DollarSign className="h-4 w-4" />}
                        iconPosition="left"
                        variant="outline"
                        className="w-full justify-start gap-2"
                      />
                      <Button
                        text="Academic Calendar"
                        icon={<School className="h-4 w-4" />}
                        iconPosition="left"
                        variant="outline"
                        className="w-full justify-start gap-2"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Performance Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">
                          Student Enrollment
                        </p>
                        <p className="text-gray-900">↑ 12% vs last term</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">
                          Fee Collection Rate
                        </p>
                        <p className="text-gray-900">96% on-time</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">
                          Overall Attendance
                        </p>
                        <p className="text-gray-900">94.5% average</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="students">
            <Card>
              <CardHeader>
                <CardTitle>Student Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Student records, enrollments, and academic management features
                  would be displayed here.
                </p>
                <div className="mt-4 grid md:grid-cols-3 gap-4">
                  <Button
                    text="View All Students"
                    icon={<GraduationCap className="h-4 w-4" />}
                    iconPosition="left"
                    variant="outline"
                    className="gap-2"
                  />
                  <Button
                    text="Manage Classes"
                    icon={<Users className="h-4 w-4" />}
                    iconPosition="left"
                    variant="outline"
                    className="gap-2"
                  />
                  <Button
                    text="Academic Reports"
                    icon={<BarChart3 className="h-4 w-4" />}
                    iconPosition="left"
                    variant="outline"
                    className="gap-2"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="staff">
            <Card>
              <CardHeader>
                <CardTitle>Staff Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Staff directory, hiring, payroll, and HR management would be
                  displayed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="finance">
            <Card>
              <CardHeader>
                <CardTitle>Financial Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Revenue tracking, fee management, expenses, and financial
                  reports would be displayed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>System Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive analytics, dashboards, and performance metrics
                  would be displayed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  System configuration, user permissions, and administrative
                  settings would be displayed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
