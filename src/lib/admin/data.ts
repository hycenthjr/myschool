const stats = {
  totalStudents: 450,
  totalStaff: 65,
  attendance: 94.5,
  revenue: 125000000,
  pendingApprovals: 12,
};

// Sample data
const studentsData = [
  {
    id: "STU001",
    name: "Chioma Okafor",
    class: "Year 10A",
    status: "Active",
    attendance: 45,
    gpa: 3.8,
    fees: "Paid",
  },
  {
    id: "STU002",
    name: "Tunde Adeyemi",
    class: "Year 11B",
    status: "Active",
    attendance: 92,
    gpa: 3.5,
    fees: "Paid",
  },
  {
    id: "STU003",
    name: "Amara Nwosu",
    class: "Year 9C",
    status: "Active",
    attendance: 88,
    gpa: 3.6,
    fees: "Pending",
  },
  {
    id: "STU004",
    name: "Emeka Johnson",
    class: "Year 12A",
    status: "Active",
    attendance: 97,
    gpa: 3.9,
    fees: "Paid",
  },
  {
    id: "STU005",
    name: "Ngozi Eze",
    class: "Year 10B",
    status: "Active",
    attendance: 90,
    gpa: 3.4,
    fees: "Paid",
  },
];

const staffData = [
  {
    id: "STF001",
    name: "Dr. Adebayo Olatunji",
    role: "Mathematics Teacher",
    department: "Academics",
    status: "Active",
    contract: "2026-08-31",
  },
  {
    id: "STF002",
    name: "Mrs. Fatima Hassan",
    role: "English Teacher",
    department: "Academics",
    status: "Active",
    contract: "2025-12-31",
  },
  {
    id: "STF003",
    name: "Coach Mike Okonkwo",
    role: "Sports Coach",
    department: "Sports",
    status: "Active",
    contract: "2027-06-30",
  },
  {
    id: "STF004",
    name: "Mr. Chukwuma Nnadi",
    role: "Boarding Supervisor",
    department: "Boarding",
    status: "Active",
    contract: "2026-03-31",
  },
  {
    id: "STF005",
    name: "Ms. Aisha Bello",
    role: "School Nurse",
    department: "Health",
    status: "Active",
    contract: "2026-12-31",
  },
];

const classesData = [
  {
    name: "Year 9A",
    students: 28,
    teacher: "Mrs. Ibrahim",
    room: "Block A-101",
  },
  {
    name: "Year 9B",
    students: 30,
    teacher: "Mr. Okonkwo",
    room: "Block A-102",
  },
  {
    name: "Year 10A",
    students: 25,
    teacher: "Dr. Olatunji",
    room: "Block B-201",
  },
  {
    name: "Year 10B",
    students: 27,
    teacher: "Mrs. Hassan",
    room: "Block B-202",
  },
  { name: "Year 11A", students: 22, teacher: "Mr. Eze", room: "Block C-301" },
];
export { stats, studentsData, staffData, classesData };