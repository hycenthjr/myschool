import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Badge from '../ui/badge';
import Button from '../ui/button';
import { Calendar } from '../ui/calendar';
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  Calendar as CalendarIcon,
  TrendingUp,
  AlertCircle 
} from 'lucide-react';
import { Progress } from '../ui/progress';

interface AttendanceRecord {
  date: string;
  status: 'present' | 'absent' | 'late' | 'excused';
  checkInTime?: string;
  checkOutTime?: string;
  notes?: string;
}

interface AttendanceStats {
  totalDays: number;
  present: number;
  absent: number;
  late: number;
  excused: number;
  percentage: number;
}

export function AttendanceTracker({ studentName }: { studentName?: string }) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const stats: AttendanceStats = {
    totalDays: 80,
    present: 76,
    absent: 2,
    late: 1,
    excused: 1,
    percentage: 95
  };

  const recentRecords: AttendanceRecord[] = [
    {
      date: 'Oct 31, 2025',
      status: 'present',
      checkInTime: '7:45 AM',
      checkOutTime: '3:30 PM'
    },
    {
      date: 'Oct 30, 2025',
      status: 'present',
      checkInTime: '7:50 AM',
      checkOutTime: '3:30 PM'
    },
    {
      date: 'Oct 29, 2025',
      status: 'late',
      checkInTime: '8:15 AM',
      checkOutTime: '3:30 PM',
      notes: 'Doctor appointment'
    },
    {
      date: 'Oct 28, 2025',
      status: 'present',
      checkInTime: '7:40 AM',
      checkOutTime: '3:30 PM'
    },
    {
      date: 'Oct 25, 2025',
      status: 'excused',
      notes: 'Representing school at Inter-State Football Championship'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'present':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'absent':
        return <XCircle className="h-5 w-5 text-red-600" />;
      case 'late':
        return <Clock className="h-5 w-5 text-orange-600" />;
      case 'excused':
        return <CheckCircle className="h-5 w-5 text-blue-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present':
        return 'bg-green-100 text-green-700';
      case 'absent':
        return 'bg-red-100 text-red-700';
      case 'late':
        return 'bg-orange-100 text-orange-700';
      case 'excused':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-3xl text-gray-900 mb-2">
                {stats.percentage}%
              </div>
              <p className="text-sm text-gray-600">Attendance Rate</p>
              <Progress value={stats.percentage} className="mt-2" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl text-gray-900">{stats.present}</div>
            <p className="text-sm text-gray-600">Present</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <XCircle className="h-8 w-8 text-red-600 mx-auto mb-2" />
            <div className="text-2xl text-gray-900">{stats.absent}</div>
            <p className="text-sm text-gray-600">Absent</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl text-gray-900">{stats.late}</div>
            <p className="text-sm text-gray-600">Late</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl text-gray-900">{stats.excused}</div>
            <p className="text-sm text-gray-600">Excused</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Records */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Attendance History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentRecords.map((record, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  {getStatusIcon(record.status)}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-gray-900">{record.date}</p>
                        <div className="flex items-center gap-3 mt-1">
                          {record.checkInTime && (
                            <p className="text-sm text-gray-600">
                              In: {record.checkInTime}
                            </p>
                          )}
                          {record.checkOutTime && (
                            <p className="text-sm text-gray-600">
                              Out: {record.checkOutTime}
                            </p>
                          )}
                        </div>
                      </div>
                      <Badge className={getStatusColor(record.status)}>
                        {record.status}
                      </Badge>
                    </div>
                    {record.notes && (
                      <p className="text-sm text-gray-600 italic">
                        {record.notes}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <Button
              text="View Full History"
              variant="outline"
              className="w-full mt-4"
            />
          </CardContent>
        </Card>

        {/* Calendar & Insights */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <CalendarIcon className="h-4 w-4" />
                Calendar View
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

          {/* Insights */}
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <TrendingUp className="h-4 w-4" />
                Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    Excellent attendance record this term!
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 text-blue-600 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    5% improvement from last term
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Alert */}
          {stats.absent > 0 && (
            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-900 mb-1">
                      Attendance Notice
                    </p>
                    <p className="text-sm text-gray-600">
                      School policy requires 90% minimum attendance. Current
                      rate: {stats.percentage}%
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
