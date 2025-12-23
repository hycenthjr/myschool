import { ArrowDownRight, ArrowUpRight, CheckCircle, Clock, Download } from "lucide-react";
import Badge from "../../ui/badge";
import Button from "../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Progress } from "../../ui/progress";

const Finance = () => {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Total Revenue</p>
              <ArrowUpRight className="h-4 w-4 text-green-600" />
            </div>
            <div className="text-2xl text-gray-900">₦125.0M</div>
            <p className="text-xs text-green-600 mt-1">+15% from last term</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Fees Collected</p>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </div>
            <div className="text-2xl text-gray-900">₦118.5M</div>
            <p className="text-xs text-gray-600 mt-1">96% collection rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Pending Fees</p>
              <Clock className="h-4 w-4 text-orange-600" />
            </div>
            <div className="text-2xl text-gray-900">₦6.5M</div>
            <p className="text-xs text-orange-600 mt-1">18 students</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Operating Costs</p>
              <ArrowDownRight className="h-4 w-4 text-blue-600" />
            </div>
            <div className="text-2xl text-gray-900">₦45.2M</div>
            <p className="text-xs text-gray-600 mt-1">36% of revenue</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { source: "Tuition Fees", amount: 95000000, percentage: 76 },
                { source: "Boarding Fees", amount: 18500000, percentage: 15 },
                { source: "Transport Fees", amount: 6500000, percentage: 5 },
                { source: "Other Income", amount: 5000000, percentage: 4 },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-900">{item.source}</span>
                    <span className="text-sm text-gray-600">
                      ₦{(item.amount / 1000000).toFixed(1)}M
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
            <CardTitle>Expense Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  category: "Staff Salaries",
                  amount: 28000000,
                  percentage: 62,
                },
                {
                  category: "Facilities & Maintenance",
                  amount: 8500000,
                  percentage: 19,
                },
                { category: "Utilities", amount: 5200000, percentage: 11 },
                { category: "Other Expenses", amount: 3500000, percentage: 8 },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-900">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-600">
                      ₦{(item.amount / 1000000).toFixed(1)}M
                    </span>
                  </div>
                  <Progress value={item.percentage} className="bg-red-100" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Transactions</CardTitle>
            <Button
              text="Export Report"
              icon={<Download className="h-4 w-4" />}
              size="sm"
              variant="secondary"
              className="gap-2"
              responsiveText={true}
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Student/Payee</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  date: "2025-12-01",
                  type: "Income",
                  desc: "Term 2 Tuition",
                  student: "Chioma Okafor",
                  amount: 3500000,
                  status: "Completed",
                },
                {
                  date: "2025-12-01",
                  type: "Income",
                  desc: "Boarding Fee",
                  student: "Tunde Adeyemi",
                  amount: 1200000,
                  status: "Completed",
                },
                {
                  date: "2025-11-30",
                  type: "Expense",
                  desc: "Staff Salary",
                  student: "Monthly Payroll",
                  amount: -28000000,
                  status: "Completed",
                },
                {
                  date: "2025-11-29",
                  type: "Income",
                  desc: "Term 2 Tuition",
                  student: "Amara Nwosu",
                  amount: 3500000,
                  status: "Pending",
                },
              ].map((transaction, index) => (
                <TableRow key={index}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        transaction.type === "Income" ? "default" : "secondary"
                      }
                    >
                      {transaction.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{transaction.desc}</TableCell>
                  <TableCell>{transaction.student}</TableCell>
                  <TableCell
                    className={
                      transaction.amount > 0 ? "text-green-600" : "text-red-600"
                    }
                  >
                    ₦{Math.abs(transaction.amount).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        transaction.status === "Completed"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {transaction.status}
                    </Badge>
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

export default Finance;
