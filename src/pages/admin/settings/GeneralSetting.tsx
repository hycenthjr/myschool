import {
  Activity, 
  RefreshCw,
  Save,
  Shield,
  UserPlus,
} from "lucide-react";
import Button from "../../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";
import { Label } from "../../../ui/label";
import { Input } from "../../../ui/input";
import Switch  from "../../../ui/switch";
import { useForm } from "react-hook-form";
import ArrowDown from "../../../ui/ArrowDown";
import { useState } from "react";

const baseInput =
  "w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2 text-sm text-black outline-none focus:border-black-500 focus:ring-2 appearance-none block";

const GeneralSetting = () => {
  const [isEnabled, setIsEnabled] = useState({
    admission: true,
    tracking: true,
    payments: true,
    reminder: true,
    email: true,
    sms: true,
    authentication: true,
    backup: true,
  });
  const {
    register,
    formState: { errors },
  } = useForm();

  const handleSwitchChange = (
    event:React.ChangeEvent<HTMLInputElement>
  ) => {
    const {name, checked} = event.target;
    setIsEnabled((prev) => ({
      ...prev, [name]: checked,
    }));
  };

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
            <Button
              text="Save Changes"
              icon={<Save className="h-4 w-4" />}
              className="gap-2"
              variant="secondary"
            />
            <Button text="Cancel" variant="secondary" />
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
                <div className="relative">
                  <select
                    id="current-term"
                    {...register("currentTerm", { required: true })}
                    className={baseInput}
                    defaultValue="term1"
                  >
                    {/* <option value="">Select</option> */}
                    <option value="term1">Term 1 - 2025/2026</option>
                    <option value="term1">Term 2 - 2025/2026</option>
                    <option value="term1">Term 3 - 2025/2026</option>
                  </select>
                  <ArrowDown />
                </div>
                {errors.currentTerm && (
                  <span className="text-red-500 text-sm">Required</span>
                )}
              </div>

              <div>
                <Label htmlFor="grading-system">Grading System</Label>
                <div className="relative">
                  <select
                    id="grading-system"
                    {...register("gradingSystem", { required: true })}
                    className={baseInput}
                    defaultValue="gpa"
                  >
                    {/* <option value="">Select</option> */}
                    <option value="gpa">GPA (4.0 Scale)</option>
                    <option value="percentage">Percentage</option>
                    <option value="letter">Letter Grades</option>
                  </select>

                  <ArrowDown />
                </div>
                {errors.gradingSystem && (
                  <span className="text-red-500 text-sm">Required</span>
                )}
              </div>

              {/* <div>
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
              </div> */}

              {/* <div>
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
              </div> */}
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
              <Switch
                name="admission"
                checked={isEnabled.admission}
                onChange={handleSwitchChange}
              />
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
              <Switch
                name="tracking"
                checked={isEnabled.tracking}
                onChange={handleSwitchChange}
              />
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
                <div className="relative">
                  <select
                    id="currency"
                    {...register("currency", { required: true })}
                    className={baseInput}
                    defaultValue="ngn"
                  >
                    {/* <option value="">Select</option> */}
                    <option value="ngn">Nigerian Naira (₦)</option>
                    <option value="usd">US Dollar ($)</option>
                    <option value="gbp">British Pound (£)</option>
                  </select>

                  <ArrowDown />
                </div>
                {/* <div className="relative">
                  <select
                    {...register("driver", {
                      required: "Driver selection is required",
                    })}
                    className={`mt-1 block w-full appearance-none rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 bg-white ${
                      errors.driver
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-500"
                    }`}
                  >
                    <option value="">Select driver</option>
                    {driverData.map((driver) => (
                      <option key={driver.id} value={driver.name}>
                        {driver.name}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-500">
                    <MdOutlineKeyboardArrowDown />
                  </span>
                </div> */}
                {errors.currency && (
                  <span className="text-red-500 text-sm">Required</span>
                )}
              </div>
              {/* <div>
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
              </div> */}
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
              <Switch
                name="payments"
                checked={isEnabled.payments}
                onChange={handleSwitchChange}
              />
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
              <Switch
                name="reminder"
                checked={isEnabled.reminder}
                onChange={handleSwitchChange}
              />
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
              <Switch
                name="email"
                checked={isEnabled.email}
                onChange={handleSwitchChange}
              />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-900">SMS Notifications</p>
                <p className="text-xs text-gray-600">
                  Send important alerts via SMS
                </p>
              </div>
              <Switch
                name="sms"
                checked={isEnabled.sms}
                onChange={handleSwitchChange}
              />
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
              <Switch
                name="authentication"
                checked={isEnabled.authentication}
                onChange={handleSwitchChange}
              />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-900">Data Backup</p>
                <p className="text-xs text-gray-600">
                  Automatic daily backups at 2:00 AM
                </p>
              </div>
              <Switch
                name="backup"
                checked={isEnabled.backup}
                onChange={handleSwitchChange}
              />
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
};

export default GeneralSetting;
