import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Badge from '../ui/badge';
import Button from '../ui/button';
import { Bus, MapPin, Clock, Phone, AlertCircle, Navigation } from 'lucide-react';

interface BusRoute {
  id: string;
  routeName: string;
  busNumber: string;
  driver: string;
  driverPhone: string;
  status: 'on-time' | 'delayed' | 'arrived' | 'departing';
  currentLocation: string;
  nextStop: string;
  eta: string;
  students: number;
  stops: Stop[];
}

interface Stop {
  name: string;
  time: string;
  status: 'completed' | 'current' | 'upcoming';
}

export function BusTracker({ routeId }: { routeId?: string }) {
  const [selectedRoute, setSelectedRoute] = useState<BusRoute>({
    id: 'route-3',
    routeName: 'Route 3 - Lekki',
    busNumber: 'AGS-BUS-03',
    driver: 'Mr. Oladipo',
    driverPhone: '+234 801 234 5678',
    status: 'on-time',
    currentLocation: 'Approaching Chevron Stop',
    nextStop: 'Chevron Roundabout',
    eta: '8 minutes',
    students: 24,
    stops: [
      { name: 'School Campus', time: '3:30 PM', status: 'completed' },
      { name: 'Admiralty Way', time: '3:45 PM', status: 'completed' },
      { name: 'Chevron Roundabout', time: '4:00 PM', status: 'current' },
      { name: 'VGC Gate', time: '4:15 PM', status: 'upcoming' },
      { name: 'Ajah Junction', time: '4:30 PM', status: 'upcoming' },
    ]
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-time':
        return 'bg-green-100 text-green-700';
      case 'delayed':
        return 'bg-orange-100 text-orange-700';
      case 'arrived':
        return 'bg-blue-100 text-blue-700';
      case 'departing':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Route Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Bus className="h-5 w-5" />
              {selectedRoute.routeName}
            </CardTitle>
            <Badge className={getStatusColor(selectedRoute.status)}>
              {selectedRoute.status.replace("-", " ").toUpperCase()}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Bus Number</p>
              <p className="text-gray-900">{selectedRoute.busNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Students Onboard</p>
              <p className="text-gray-900">{selectedRoute.students} students</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Driver</p>
              <p className="text-gray-900">{selectedRoute.driver}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Contact</p>
              <div className="flex items-center gap-2">
                <a
                  href={`tel:${selectedRoute.driverPhone}`}
                  className="text-blue-600 hover:underline"
                >
                  {selectedRoute.driverPhone}
                </a>
                <Phone className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Current Status */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-gray-900 mb-1">
                  {selectedRoute.currentLocation}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>
                    ETA to {selectedRoute.nextStop}: {selectedRoute.eta}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              text="View Live Map"
              icon={<Navigation className="h-4 w-4" />}
              iconPosition="left"
              className="flex-1 gap-2"
            />
            <Button
              text="Call Driver"
              icon={<Phone className="h-4 w-4" />}
              iconPosition="left"
              variant="outline"
              className="gap-2"
            />
          </div>
        </CardContent>
      </Card>

      {/* Route Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Route Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {selectedRoute.stops.map((stop, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      stop.status === "completed"
                        ? "bg-green-500 border-green-500"
                        : stop.status === "current"
                        ? "bg-blue-500 border-blue-500 ring-4 ring-blue-100"
                        : "bg-white border-gray-300"
                    }`}
                  />
                  {index < selectedRoute.stops.length - 1 && (
                    <div
                      className={`w-0.5 h-12 ${
                        stop.status === "completed"
                          ? "bg-green-500"
                          : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-gray-900">{stop.name}</p>
                      <p className="text-sm text-gray-600">{stop.time}</p>
                    </div>
                    {stop.status === "current" && (
                      <Badge>Current Location</Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Safety Notice */}
      <Card className="bg-amber-50 border-amber-200">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
            <div>
              <p className="text-sm text-gray-900 mb-1">Safety First</p>
              <p className="text-sm text-gray-600">
                All buses are equipped with GPS tracking and safety monitors. In
                case of emergency, contact the driver directly or call the
                school hotline: +234 800 123 4567
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
