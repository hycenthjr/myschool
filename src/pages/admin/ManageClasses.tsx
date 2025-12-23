import { Edit, Eye, Plus, Users } from "lucide-react";
import Button from "../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { classesData } from "../../lib/admin/data";
import Badge from "../../ui/badge";

const ManageClasses = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Class Management</CardTitle>
            <Button
              text="Create New Class"
              icon={<Plus className="h-4 w-4" />}
              className="gap-2"
              variant="dark"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {classesData.map((classItem, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-gray-900 mb-1">{classItem.name}</h3>
                      <p className="text-sm text-gray-600">{classItem.room}</p>
                    </div>
                    <Badge variant="dark">{classItem.students} students</Badge>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {classItem.teacher}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      text="View"
                      icon={<Eye className="h-4 w-4 mr-1" />}
                      variant="secondary"
                      className="flex-1"
                    />
                    <Button
                      text="Edit"
                      icon={<Edit className="h-4 w-4 mr-1" />}
                      variant="secondary"
                      className="flex-1"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManageClasses;
