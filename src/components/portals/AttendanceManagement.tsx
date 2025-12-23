import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
// import Badge from '../ui/badge';
import Button from "../../ui/button";
import { Input } from "../../ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import {
  CheckCircle,
  XCircle,
  Clock,
  Search,
  Download,
  Calendar,
} from "lucide-react";

interface Student {
  id: string;
  name: string;
  status: "present" | "absent" | "late" | null;
  checkInTime?: string;
}

export function AttendanceManagement({ className }: { className?: string }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [students, setStudents] = useState<Student[]>([
    {
      id: "1",
      name: "Chioma Okafor",
      status: "present",
      checkInTime: "7:45 AM",
    },
    {
      id: "2",
      name: "Tunde Adeyemi",
      status: "present",
      checkInTime: "7:50 AM",
    },
    { id: "3", name: "Amina Mohammed", status: "late", checkInTime: "8:15 AM" },
    { id: "4", name: "James Wilson", status: null },
    {
      id: "5",
      name: "Fatima Ibrahim",
      status: "present",
      checkInTime: "7:40 AM",
    },
    { id: "6", name: "David Okonkwo", status: null },
    { id: "7", name: "Grace Eze", status: "present", checkInTime: "7:55 AM" },
    {
      id: "8",
      name: "Michael Nwosu",
      status: "present",
      checkInTime: "7:30 AM",
    },
  ]);

  const markAttendance = (
    studentId: string,
    status: "present" | "absent" | "late"
  ) => {
    setStudents(
      students.map((student) =>
        student.id === studentId
          ? {
              ...student,
              status,
              checkInTime:
                status !== "absent"
                  ? new Date().toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    })
                  : undefined,
            }
          : student
      )
    );
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = {
    total: students.length,
    present: students.filter((s) => s.status === "present").length,
    absent: students.filter((s) => s.status === "absent").length,
    late: students.filter((s) => s.status === "late").length,
    unmarked: students.filter((s) => s.status === null).length,
  };

  const getStatusButton = (student: Student) => {
    const buttonClass = "px-3 py-1 rounded text-sm";

    return (
      <div className="flex gap-2">
        <button
          onClick={() => markAttendance(student.id, "present")}
          className={`${buttonClass} ${
            student.status === "present"
              ? "bg-green-600 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Present
        </button>
        <button
          onClick={() => markAttendance(student.id, "late")}
          className={`${buttonClass} ${
            student.status === "late"
              ? "bg-orange-600 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Late
        </button>
        <button
          onClick={() => markAttendance(student.id, "absent")}
          className={`${buttonClass} ${
            student.status === "absent"
              ? "bg-red-600 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Absent
        </button>
      </div>
    );
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Stats */}
      <div className="grid md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl text-gray-900 mb-1">{stats.total}</div>
            <p className="text-sm text-gray-600">Total Students</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <CheckCircle className="h-6 w-6 text-green-600 mx-auto mb-1" />
            <div className="text-2xl text-gray-900 mb-1">{stats.present}</div>
            <p className="text-sm text-gray-600">Present</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Clock className="h-6 w-6 text-orange-600 mx-auto mb-1" />
            <div className="text-2xl text-gray-900 mb-1">{stats.late}</div>
            <p className="text-sm text-gray-600">Late</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <XCircle className="h-6 w-6 text-red-600 mx-auto mb-1" />
            <div className="text-2xl text-gray-900 mb-1">{stats.absent}</div>
            <p className="text-sm text-gray-600">Absent</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl text-gray-900 mb-1">{stats.unmarked}</div>
            <p className="text-sm text-gray-600">Unmarked</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="mark" className="w-full">
        <TabsList>
          <TabsTrigger value="mark">Mark Attendance</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="mark">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Year 10A - Today's Attendance</CardTitle>
                <div className="flex gap-2">
                  <Button
                    text="Export"
                    icon={<Download className="h-4 w-4" />}
                    iconPosition="left"
                    variant="outline"
                    className="gap-2"
                  />
                  <Button text="Submit Attendance" className="gap-2" />
                </div>
              </div>
              <div className="mt-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search students..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {filteredStudents.map((student) => (
                  <div
                    key={student.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-1">
                      <p className="text-gray-900 mb-1">{student.name}</p>
                      {student.checkInTime && (
                        <p className="text-sm text-gray-600">
                          Check-in: {student.checkInTime}
                        </p>
                      )}
                    </div>
                    {getStatusButton(student)}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Attendance History - This Week</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { date: "Oct 31, 2025", present: 18, late: 1, absent: 1 },
                  { date: "Oct 30, 2025", present: 19, late: 0, absent: 1 },
                  { date: "Oct 29, 2025", present: 17, late: 2, absent: 1 },
                  { date: "Oct 28, 2025", present: 20, late: 0, absent: 0 },
                  { date: "Oct 25, 2025", present: 18, late: 1, absent: 1 },
                ].map((record, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <Calendar className="h-5 w-5 text-gray-400" />
                      <p className="text-gray-900">{record.date}</p>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-gray-900">{record.present}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-orange-600" />
                        <span className="text-gray-900">{record.late}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-red-600" />
                        <span className="text-gray-900">{record.absent}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Weekly Attendance Summary",
                    period: "Oct 25 - Oct 31, 2025",
                  },
                  {
                    title: "Monthly Attendance Report",
                    period: "October 2025",
                  },
                  { title: "Term 1 Complete Report", period: "Sep - Dec 2025" },
                ].map((report, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="text-gray-900 mb-1">{report.title}</p>
                      <p className="text-sm text-gray-600">{report.period}</p>
                    </div>
                    <Button
                      text="Download"
                      variant="outline"
                      icon={<Download className="h-4 w-4" />}
                      iconPosition="left"
                      className="gap-2"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
