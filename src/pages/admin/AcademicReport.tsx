import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { CheckCircle, FileText, GraduationCap, TrendingUp, UserCheck } from 'lucide-react';
import Badge from '../../ui/badge';
import Button from '../../ui/button';

const AcademicReport = () => {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl text-gray-900">3.6</div>
            <p className="text-sm text-gray-600">Average GPA</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl text-gray-900">85%</div>
            <p className="text-sm text-gray-600">Pass Rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <UserCheck className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl text-gray-900">94.5%</div>
            <p className="text-sm text-gray-600">Attendance</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <GraduationCap className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl text-gray-900">68</div>
            <p className="text-sm text-gray-600">Honor Students</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Performance by Class</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { class: "Year 12A", avgGpa: 3.8, attendance: 96, students: 24 },
              { class: "Year 11A", avgGpa: 3.7, attendance: 94, students: 28 },
              { class: "Year 10A", avgGpa: 3.6, attendance: 95, students: 25 },
              { class: "Year 9A", avgGpa: 3.5, attendance: 93, students: 30 },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-gray-900">{item.class}</h3>
                    <Badge variant="primary">{item.students} students</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Average GPA</p>
                      <p className="text-gray-900">{item.avgGpa}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Attendance</p>
                      <p className="text-gray-900">{item.attendance}%</p>
                    </div>
                  </div>
                </div>
                <Button text='Report' icon={<FileText className="h-4 w-4 mr-1" />} variant="secondary" className='bg-white' responsiveText={true} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default AcademicReport