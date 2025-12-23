import {
  Activity,
  AlertTriangle,
  Briefcase,
  Calendar,
  Download,
  Edit,
  Eye,
  Filter,
  GraduationCap,
  Mail,
  Search,
  Users,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../ui/table";
import Badge from "../../../ui/badge";
import Button from "../../../ui/button";
import { Progress } from "../../../ui/progress";
import { staffData } from "../../../lib/admin/data";
import { Input } from "../../../ui/input";
import Icons from "../../../constants/Icons";

const Staffs = () => {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl text-gray-900">65</div>
            <p className="text-sm text-gray-600">Total Staff</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <GraduationCap className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl text-gray-900">42</div>
            <p className="text-sm text-gray-600">Teaching Staff</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Briefcase className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl text-gray-900">23</div>
            <p className="text-sm text-gray-600">Support Staff</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <AlertTriangle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl text-gray-900">3</div>
            <p className="text-sm text-gray-600">Contracts Expiring</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Staff Directory</CardTitle>
            <div className="flex items-center gap-2">
              <Button
                text="Filter"
                icon={<Filter className="h-4 w-4" />}
                variant="secondary"
                className="gap-2"
                responsiveText={true}
              />

              <Button
                text="Export"
                icon={<Download className="h-4 w-4" />}
                variant="secondary"
                className="gap-2"
                responsiveText={true}
              />

              <Button
                text="Add Student"
                icon={Icons}
                variant="dark"
                className="gap-2"
                responsiveText={true}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search staff..." className="pl-10" />
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Staff ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Contract Expiry</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {staffData.map((staff) => (
                <TableRow key={staff.id}>
                  <TableCell>{staff.id}</TableCell>
                  <TableCell>{staff.name}</TableCell>
                  <TableCell>{staff.role}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{staff.department}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      {staff.contract}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-700">
                      {staff.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Button
                        text=""
                        icon={<Eye className="h-4 w-4" />}
                        variant="ghost"
                      />
                      <Button
                        text=""
                        icon={<Edit className="h-4 w-4" />}
                        variant="ghost"
                      />
                      <Button
                        text=""
                        icon={<Mail className="h-4 w-4" />}
                        variant="ghost"
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Department Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { dept: "Academics", count: 42, percentage: 65 },
                { dept: "Sports", count: 8, percentage: 12 },
                { dept: "Boarding", count: 6, percentage: 9 },
                { dept: "Administration", count: 5, percentage: 8 },
                { dept: "Health & Support", count: 4, percentage: 6 },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-900">{item.dept}</span>
                    <span className="text-sm text-gray-600">
                      {item.count} staff
                    </span>
                  </div>
                  <Progress value={item.percentage} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                {
                  action: "New hire: Mrs. Afolabi (Physics)",
                  time: "2 days ago",
                },
                { action: "Leave approved: Coach Okonkwo", time: "3 days ago" },
                {
                  action: "Contract renewed: Dr. Olatunji",
                  time: "5 days ago",
                },
                {
                  action: "Training completed: First Aid Course",
                  time: "1 week ago",
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <Activity className="h-4 w-4 text-blue-600 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-600">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Staffs;
