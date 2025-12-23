import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";
import Button from "../../../ui/button";
import {
  Download,
  Edit,
  Eye,
  Filter,
  Search,
  Trash2,
} from "lucide-react";
import { Input } from "../../../ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../ui/table";
import Badge from "../../../ui/badge";
import { Progress } from "../../../ui/progress";
import { studentsData } from "../../../lib/admin/data";
import Icons from "../../../constants/Icons";



const Students = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>All Students</CardTitle>
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
              <Input placeholder="Search students..." className="pl-10" />
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Attendance</TableHead>
                <TableHead>GPA</TableHead>
                <TableHead>Fee Status</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {studentsData.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.class}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={student.attendance} className="w-16" />
                      <span className="text-sm">{student.attendance}%</span>
                    </div>
                  </TableCell>
                  <TableCell>{student.gpa}</TableCell>
                  <TableCell>
                    <Badge
                      variant={student.fees === "Paid" ? "paid" : "pending"}
                    >
                      {student.fees}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-700">
                      {student.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Button
                        icon={<Eye className="h-4 w-4" />}
                        variant="ghost"
                        text={""}
                      />

                      <Button
                        icon={<Edit className="h-4 w-4" />}
                        variant="ghost"
                        text={""}
                      />

                      <Button
                        icon={<Trash2 className="h-4 w-4 text-red-600" />}
                        variant="ghost"
                        text={""}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Students;
