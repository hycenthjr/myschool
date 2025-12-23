import { Card, CardContent, CardHeader, CardTitle } from '../../../ui/card';
import { AlertTriangle, Bus, ClipboardList, MapPin, Navigation, Users, Wrench } from 'lucide-react';
import Button from '../../../ui/button';

const fleetStatus = [
  {
    bus: "AGS-BUS-01",
    route: "Route 1 - Victoria Island",
    status: "on-route",
    students: 18,
    driver: "Mr. Oladipo",
  },
  {
    bus: "AGS-BUS-02",
    route: "Route 2 - Ikoyi",
    status: "on-route",
    students: 22,
    driver: "Mr. Adeleke",
  },
  {
    bus: "AGS-BUS-03",
    route: "Route 3 - Lekki",
    status: "on-route",
    students: 24,
    driver: "Mrs. Adekunle",
  },
  {
    bus: "AGS-BUS-04",
    route: "Route 4 - Ajah",
    status: "maintenance",
    students: 0,
    driver: "N/A",
  },
  {
    bus: "AGS-BUS-05",
    route: "Route 5 - Surulere",
    status: "parked",
    students: 0,
    driver: "Mr. Johnson",
  },
];

const maintenanceSchedule = [
  {
    bus: "AGS-BUS-04",
    service: "Engine maintenance",
    date: "Today",
    priority: "high",
  },
  {
    bus: "AGS-BUS-02",
    service: "Routine inspection",
    date: "Nov 10",
    priority: "medium",
  },
  {
    bus: "AGS-BUS-05",
    service: "Tire replacement",
    date: "Nov 15",
    priority: "low",
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "on-route":
      return <span className="bg-green-100 text-green-700">On Route</span>;
    case "parked":
      return <span className="bg-gray-100 text-gray-700">Parked</span>;
    case "maintenance":
      return <span className="bg-orange-100 text-orange-700">Maintenance</span>;
    default:
      return null;
  }
};

const TransportDashboard = () => {
  return (
    <div>
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl text-gray-900">
                Transport Management Portal
              </h1>
              <p className="text-sm text-gray-600">Fleet & Route Management</p>
            </div>
          </div>
        </div>
      </header>
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-6 text-center">
            <Bus className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl text-gray-900">5</div>
            <p className="text-sm text-gray-600">Total Buses</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Navigation className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl text-gray-900">3</div>
            <p className="text-sm text-gray-600">On Route</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl text-gray-900">64</div>
            <p className="text-sm text-gray-600">Students Today</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <AlertTriangle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl text-gray-900">1</div>
            <p className="text-sm text-gray-600">In Maintenance</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Fleet Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {fleetStatus.map((bus, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <Bus className="h-8 w-8 text-blue-600" />
                      <div>
                        <p className="text-gray-900">{bus.bus}</p>
                        <p className="text-sm text-gray-600">{bus.route}</p>
                        {bus.driver !== "N/A" && (
                          <p className="text-xs text-gray-500">
                            Driver: {bus.driver}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      {getStatusBadge(bus.status)}
                      {bus.students > 0 && (
                        <p className="text-sm text-gray-600 mt-1">
                          {bus.students} students
                        </p>
                      )}
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
                  text="View Live Map"
                  icon={<Navigation className="h-4 w-4" />}
                  iconPosition="left"
                  variant="outline"
                  className="w-full justify-start gap-2"
                />
                <Button
                  text="Manage Routes"
                  icon={<MapPin className="h-4 w-4" />}
                  iconPosition="left"
                  variant="outline"
                  className="w-full justify-start gap-2"
                />
                <Button
                  text="Driver Roster"
                  icon={<ClipboardList className="h-4 w-4" />}
                  iconPosition="left"
                  variant="outline"
                  className="w-full justify-start gap-2"
                />
                <Button
                  text="Schedule Service"
                  icon={<Wrench className="h-4 w-4" />}
                  iconPosition="left"
                  variant="outline"
                  className="w-full justify-start gap-2"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Wrench className="h-5 w-5" />
                Maintenance Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {maintenanceSchedule.map((item, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg ${
                      item.priority === "high"
                        ? "bg-red-50 border border-red-200"
                        : item.priority === "medium"
                        ? "bg-yellow-50 border border-yellow-200"
                        : "bg-blue-50 border border-blue-200"
                    }`}
                  >
                    <p className="text-sm text-gray-900">{item.bus}</p>
                    <p className="text-xs text-gray-600">{item.service}</p>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default TransportDashboard