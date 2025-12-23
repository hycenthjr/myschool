import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";
import Button from "../../../ui/button";
import {
  Activity,
  AlertCircle,
  Calendar,
  ClipboardList,
  FileText,
  Heart,
  Phone,
  Pill,
} from "lucide-react";

const todayAppointments = [
  {
    time: "9:00 AM",
    student: "Chioma Okafor",
    reason: "Regular checkup",
    status: "completed",
  },
  {
    time: "10:30 AM",
    student: "Tunde Adeyemi",
    reason: "Medication refill",
    status: "in-progress",
  },
  {
    time: "2:00 PM",
    student: "Amina Mohammed",
    reason: "Minor injury",
    status: "upcoming",
  },
  {
    time: "3:30 PM",
    student: "James Wilson",
    reason: "Health certificate",
    status: "upcoming",
  },
];

const activeCases = [
  {
    student: "Grace Eze",
    condition: "Asthma - Monitoring",
    severity: "medium",
    lastVisit: "Yesterday",
  },
  {
    student: "David Okonkwo",
    condition: "Sports injury recovery",
    severity: "low",
    lastVisit: "3 days ago",
  },
  {
    student: "Fatima Ibrahim",
    condition: "Allergies - Active management",
    severity: "medium",
    lastVisit: "1 week ago",
  },
];

const NurseDashboard = () => {
  return (
    <div>
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl text-gray-900">Health Center Portal</h1>
              <p className="text-sm text-gray-600">Nurse / Matron Dashboard</p>
            </div>
            
          </div>
        </div>
      </header>

      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-6 text-center">
            <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl text-gray-900">4</div>
            <p className="text-sm text-gray-600">Today's Appointments</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Activity className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl text-gray-900">12</div>
            <p className="text-sm text-gray-600">Active Cases</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Pill className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl text-gray-900">3</div>
            <p className="text-sm text-gray-600">Low Stock Alerts</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Heart className="h-8 w-8 text-red-600 mx-auto mb-2" />
            <div className="text-2xl text-gray-900">45</div>
            <p className="text-sm text-gray-600">Students Seen (Week)</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {todayAppointments.map((appointment, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-3 rounded-lg ${
                      appointment.status === "in-progress"
                        ? "bg-blue-50 border-2 border-blue-200"
                        : "bg-gray-50"
                    }`}
                  >
                    <div className="text-sm text-gray-900 min-w-[70px]">
                      {appointment.time}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900">{appointment.student}</p>
                      <p className="text-sm text-gray-600">
                        {appointment.reason}
                      </p>
                    </div>
                    {appointment.status === "completed" && (
                      <span className="bg-green-100 text-green-700">
                        Completed
                      </span>
                    )}
                    {appointment.status === "in-progress" && (
                      <span>In Progress</span>
                    )}
                    {appointment.status === "upcoming" && (
                      <Button text="Check In" variant="outline" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Active Monitoring Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {activeCases.map((case_item, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-gray-900">{case_item.student}</p>
                        <p className="text-sm text-gray-600">
                          {case_item.condition}
                        </p>
                      </div>
                      <span
                        className={
                          case_item.severity === "high"
                            ? "bg-red-100 text-red-700"
                            : case_item.severity === "medium"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                        }
                      >
                        {case_item.severity}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">
                      Last visit: {case_item.lastVisit}
                    </p>
                    <Button
                      text="View Record"
                      variant="outline"
                      className="mt-2"
                    />
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
                  text="New Health Record"
                  icon={<ClipboardList className="h-4 w-4" />}
                  iconPosition="left"
                  variant="outline"
                  className="w-full justify-start gap-2"
                />
                <Button
                  text="Schedule Checkup"
                  icon={<Calendar className="h-4 w-4" />}
                  iconPosition="left"
                  variant="outline"
                  className="w-full justify-start gap-2"
                />
                <Button
                  text="Dispense Medication"
                  icon={<Pill className="h-4 w-4" />}
                  iconPosition="left"
                  variant="outline"
                  className="w-full justify-start gap-2"
                />
                <Button
                  text="Generate Report"
                  icon={<FileText className="h-4 w-4" />}
                  iconPosition="left"
                  variant="outline"
                  className="w-full justify-start gap-2"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2 text-red-900">
                <AlertCircle className="h-5 w-5" />
                Emergency Contacts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>Hospital: 123-456-7890</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>Ambulance: 911</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>School Admin: 098-765-4321</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Inventory Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Paracetamol</span>
                  <span>Low</span>
                </div>
                <div className="flex justify-between">
                  <span>Bandages</span>
                  <span>Low</span>
                </div>
                <div className="flex justify-between">
                  <span>First Aid Kits</span>
                  <span className="bg-yellow-100 text-yellow-700">Medium</span>
                </div>
              </div>
              <Button
                text="Reorder Supplies"
                variant="outline"
                className="w-full mt-3"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NurseDashboard;
