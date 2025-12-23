import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import Badge from "../../ui/badge";
import Button from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import {
  CreditCard,
  DollarSign,
  Download,
  CheckCircle,
  Clock,
  AlertCircle,
  Receipt,
} from "lucide-react";
import { Progress } from "../../ui/progress";

interface FeeItem {
  category: string;
  amount: number;
  status: "paid" | "pending" | "overdue";
  dueDate: string;
}

interface PaymentHistory {
  date: string;
  description: string;
  amount: number;
  method: string;
  reference: string;
}

export function FeePayment({ studentName }: { studentName?: string }) {
  const [paymentMethod, setPaymentMethod] = useState("card");
  // const [selectedFees, setSelectedFees] = useState<string[]>([]);

  const feeBreakdown: FeeItem[] = [
    {
      category: "Tuition Fee",
      amount: 2500000,
      status: "paid",
      dueDate: "Sep 1, 2025",
    },
    {
      category: "Boarding Fee",
      amount: 800000,
      status: "paid",
      dueDate: "Sep 1, 2025",
    },
    {
      category: "Sports Program",
      amount: 150000,
      status: "paid",
      dueDate: "Sep 1, 2025",
    },
    {
      category: "Technology Fee",
      amount: 100000,
      status: "paid",
      dueDate: "Sep 1, 2025",
    },
    {
      category: "Term 2 Fees",
      amount: 3550000,
      status: "pending",
      dueDate: "Jan 5, 2026",
    },
  ];

  const paymentHistory: PaymentHistory[] = [
    {
      date: "Sep 1, 2025",
      description: "Term 1 Fees (Full Payment)",
      amount: 3550000,
      method: "Bank Transfer",
      reference: "AGS-2025-001234",
    },
    {
      date: "Jun 1, 2025",
      description: "Term 3 Fees - Previous Year",
      amount: 3400000,
      method: "Card Payment",
      reference: "AGS-2025-000987",
    },
  ];

  const summary = {
    totalPaid: 3550000,
    totalPending: 3550000,
    totalAmount: 7100000,
    percentPaid: 50,
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "paid":
        return <Badge className="bg-green-100 text-green-700">Paid</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-700">Pending</Badge>;
      case "overdue":
        return <Badge className="bg-red-100 text-red-700">Overdue</Badge>;
      default:
        return null;
    }
  };

  const formatCurrency = (amount: number) => {
    return `₦${amount.toLocaleString()}`;
  };

  return (
    <div className="space-y-6">
      {/* Fee Summary */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <p className="opacity-90 mb-1">Total Fees</p>
              <p className="text-3xl">{formatCurrency(summary.totalAmount)}</p>
            </div>
            <div>
              <p className="opacity-90 mb-1">Amount Paid</p>
              <p className="text-3xl">{formatCurrency(summary.totalPaid)}</p>
            </div>
            <div>
              <p className="opacity-90 mb-1">Balance</p>
              <p className="text-3xl">{formatCurrency(summary.totalPending)}</p>
            </div>
            <div>
              <p className="opacity-90 mb-2">Payment Progress</p>
              <Progress value={summary.percentPaid} className="bg-white/20" />
              <p className="text-sm opacity-90 mt-1">
                {summary.percentPaid}% Complete
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="current" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="current">Current Fees</TabsTrigger>
          <TabsTrigger value="pay">Make Payment</TabsTrigger>
          <TabsTrigger value="history">Payment History</TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Fee Breakdown - Academic Year 2025/2026</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {feeBreakdown.map((fee, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        {fee.status === "paid" ? (
                          <CheckCircle className="h-6 w-6 text-green-600" />
                        ) : fee.status === "overdue" ? (
                          <AlertCircle className="h-6 w-6 text-red-600" />
                        ) : (
                          <Clock className="h-6 w-6 text-yellow-600" />
                        )}
                      </div>
                      <div>
                        <p className="text-gray-900 mb-1">{fee.category}</p>
                        <p className="text-sm text-gray-600">
                          Due: {fee.dueDate}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl text-gray-900 mb-2">
                        {formatCurrency(fee.amount)}
                      </p>
                      {getStatusBadge(fee.status)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-900 mb-1">
                      Payment Plan Available
                    </p>
                    <p className="text-sm text-gray-600">
                      You can pay in installments. Contact the bursar's office
                      for more information.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pay">
          <Card>
            <CardHeader>
              <CardTitle>Make a Payment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Select Fee Items */}
                <div>
                  <Label className="text-base mb-3 block">
                    Select Items to Pay
                  </Label>
                  <div className="space-y-3">
                    {feeBreakdown
                      .filter((fee) => fee.status !== "paid")
                      .map((fee, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 border rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              id={`fee-${index}`}
                              className="w-4 h-4"
                            />
                            <label
                              htmlFor={`fee-${index}`}
                              className="cursor-pointer"
                            >
                              <p className="text-gray-900">{fee.category}</p>
                              <p className="text-sm text-gray-600">
                                Due: {fee.dueDate}
                              </p>
                            </label>
                          </div>
                          <p className="text-gray-900">
                            {formatCurrency(fee.amount)}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <Label className="text-base mb-3 block">Payment Method</Label>
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 border p-4 rounded-lg">
                        <RadioGroupItem value="card" id="card" />
                        <Label
                          htmlFor="card"
                          className="flex items-center gap-2 cursor-pointer flex-1"
                        >
                          <CreditCard className="h-5 w-5" />
                          <div>
                            <p className="text-gray-900">Card Payment</p>
                            <p className="text-sm text-gray-600">
                              Visa, Mastercard, Verve
                            </p>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 border p-4 rounded-lg">
                        <RadioGroupItem value="bank" id="bank" />
                        <Label
                          htmlFor="bank"
                          className="flex items-center gap-2 cursor-pointer flex-1"
                        >
                          <DollarSign className="h-5 w-5" />
                          <div>
                            <p className="text-gray-900">Bank Transfer</p>
                            <p className="text-sm text-gray-600">
                              Direct bank transfer
                            </p>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 border p-4 rounded-lg">
                        <RadioGroupItem value="ussd" id="ussd" />
                        <Label
                          htmlFor="ussd"
                          className="flex items-center gap-2 cursor-pointer flex-1"
                        >
                          <DollarSign className="h-5 w-5" />
                          <div>
                            <p className="text-gray-900">USSD</p>
                            <p className="text-sm text-gray-600">
                              Pay with USSD code
                            </p>
                          </div>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Card Details (if card selected) */}
                {paymentMethod === "card" && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        className="mt-1"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" className="mt-1" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Bank Details (if bank selected) */}
                {paymentMethod === "bank" && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-900 mb-3">
                      Transfer to the following account:
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Bank Name:</span>
                        <span className="text-gray-900">
                          First Bank of Nigeria
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Account Name:</span>
                        <span className="text-gray-900">
                          Arenas Group of Schools
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Account Number:</span>
                        <span className="text-gray-900">1234567890</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Reference:</span>
                        <span className="text-gray-900">
                          {studentName || "Student"}-TERM2-2026
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Payment Summary */}
                <div className="border-t pt-4">
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-900">Total Amount</span>
                    <span className="text-2xl text-gray-900">
                      {formatCurrency(summary.totalPending)}
                    </span>
                  </div>
                  <Button
                    text="Proceed to Payment"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {paymentHistory.map((payment, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Receipt className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <p className="text-gray-900 mb-1">
                          {payment.description}
                        </p>
                        <p className="text-sm text-gray-600">{payment.date}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <p className="text-sm text-gray-600">
                            Method: {payment.method}
                          </p>
                          <p className="text-sm text-gray-600">
                            Ref: {payment.reference}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl text-gray-900 mb-2">
                        {formatCurrency(payment.amount)}
                      </p>
                      <Button
                        text="Receipt"
                        icon={<Download className="h-4 w-4" />}
                        iconPosition="left"
                        variant="outline"
                        className="gap-2"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Help Section */}
      <Card className="bg-amber-50 border-amber-200">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
            <div>
              <p className="text-sm text-gray-900 mb-1">Need Help?</p>
              <p className="text-sm text-gray-600">
                For payment issues or questions, contact the bursar's office at{" "}
                <a
                  href="tel:+2348001234567"
                  className="text-blue-600 hover:underline"
                >
                  +234 800 123 4567
                </a>{" "}
                or email{" "}
                <a
                  href="mailto:fees@arenasschools.edu.ng"
                  className="text-blue-600 hover:underline"
                >
                  fees@arenasschools.edu.ng
                </a>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
