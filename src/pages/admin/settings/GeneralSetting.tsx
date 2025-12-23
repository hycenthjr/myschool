import { Activity, RefreshCw, Save, Shield, UserPlus } from "lucide-react";
import Button from "../../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";
import { Label } from "../../../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../ui/select";
import { Input } from "../../../ui/input";
import { Switch } from "../../../ui/switch";

const GeneralSetting = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>School Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="school-name">School Name</Label>
              <Input id="school-name" defaultValue="Arenas Group of Schools" />
            </div>
            <div>
              <Label htmlFor="school-code">School Code</Label>
              <Input id="school-code" defaultValue="AGS-NG-001" />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                defaultValue="Plot 123, Victoria Island, Lagos, Nigeria"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" defaultValue="+234 800 123 4567" />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" defaultValue="info@arenasschools.ng" />
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <Button text="Save Changes" icon={<Save className="h-4 w-4" />} className="gap-2"/>
            <Button text="Cancel" variant="outline"/>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Academic Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="current-term">Current Term</Label>
                <Select defaultValue="term1">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="term1">Term 1 - 2025/2026</SelectItem>
                    <SelectItem value="term2">Term 2 - 2025/2026</SelectItem>
                    <SelectItem value="term3">Term 3 - 2025/2026</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="grading-system">Grading System</Label>
                <Select defaultValue="gpa">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpa">GPA (4.0 Scale)</SelectItem>
                    <SelectItem value="percentage">Percentage</SelectItem>
                    <SelectItem value="letter">Letter Grades</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-900">
                  Enable Online Admissions
                </p>
                <p className="text-xs text-gray-600">
                  Allow new student applications through the website
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-900">
                  Automated Attendance Tracking
                </p>
                <p className="text-xs text-gray-600">
                  Use RFID/biometric systems for attendance
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Financial Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="currency">Currency</Label>
                <Select defaultValue="ngn">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ngn">Nigerian Naira (₦)</SelectItem>
                    <SelectItem value="usd">US Dollar ($)</SelectItem>
                    <SelectItem value="gbp">British Pound (£)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="payment-deadline">Fee Payment Deadline</Label>
                <Input
                  id="payment-deadline"
                  type="date"
                  defaultValue="2026-01-15"
                />
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-900">Enable Online Payments</p>
                <p className="text-xs text-gray-600">
                  Accept credit cards, bank transfers, and mobile money
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-900">
                  Automatic Payment Reminders
                </p>
                <p className="text-xs text-gray-600">
                  Send email/SMS reminders for overdue fees
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>System Preferences</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-900">Email Notifications</p>
                <p className="text-xs text-gray-600">
                  Receive system alerts and updates via email
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-900">SMS Notifications</p>
                <p className="text-xs text-gray-600">
                  Send important alerts via SMS
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-900">
                  Two-Factor Authentication
                </p>
                <p className="text-xs text-gray-600">
                  Require 2FA for all admin users
                </p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-900">Data Backup</p>
                <p className="text-xs text-gray-600">
                  Automatic daily backups at 2:00 AM
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <Button
              text="Manage User Roles & Permissions"
              icon={<UserPlus className="h-4 w-4" />}
              variant="outline"
              className="w-full justify-start gap-2"
            />

            <Button
              text="Security Settings"
              icon={<Shield className="h-4 w-4" />}
              variant="outline"
              className="w-full justify-start gap-2"
            />
            <Button
              text="View System Logs"
              icon={<Activity className="h-4 w-4" />}
              variant="outline"
              className="w-full justify-start gap-2"
            />

            <Button
              text="Reset System Cache"
              icon={<RefreshCw className="h-4 w-4" />}
              variant="outline"
              className="w-full justify-start gap-2"
            />
              
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default GeneralSetting