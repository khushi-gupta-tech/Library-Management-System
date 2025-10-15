import { useState } from "react";
import {
  Home,
  BookOpen,
  Book,
  Users,
  UserPlus,
  BarChart,
  FileText,
  LogOut,
  Menu,
  X,
} from "lucide-react"; // ✅ Import all icons from lucide-react

// ✅ Import your subcomponents (create or connect them)
import BookAvailable from "./BookAvailable";
import IssueBook from "./IssueBook";
import ReturnBook from "./ReturnBook";
import PayFine from "./PayFine";
import AddMembership from "./AddMembership";
import AddBook from "./AddBook";
import UserManagement from "./UserManagement";
import Reports from "./Reports";

const Dashboard = ({ isAdmin }) => {
  const [currentPage, setCurrentPage] = useState("home");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const menuItems = isAdmin
    ? [
        { id: "home", label: "Dashboard", icon: Home },
        { id: "bookAvailable", label: "Check Availability", icon: BookOpen },
        { id: "issueBook", label: "Issue Book", icon: Book },
        { id: "returnBook", label: "Return Book", icon: Book },
        { id: "addMembership", label: "Add Membership", icon: UserPlus },
        { id: "addBook", label: "Add Book/Movie", icon: Book },
        { id: "userManagement", label: "User Management", icon: Users },
        { id: "reports", label: "Reports", icon: BarChart },
      ]
    : [
        { id: "home", label: "Dashboard", icon: Home },
        { id: "bookAvailable", label: "Check Availability", icon: BookOpen },
        { id: "issueBook", label: "Issue Book", icon: Book },
        { id: "returnBook", label: "Return Book", icon: Book },
        { id: "reports", label: "Reports", icon: BarChart },
      ];

  const renderPage = () => {
    switch (currentPage) {
      case "bookAvailable":
        return <BookAvailable />;
      case "issueBook":
        return <IssueBook />;
      case "returnBook":
        return <ReturnBook onPayFine={() => setCurrentPage("payFine")} />;
      case "payFine":
        return <PayFine onComplete={() => setCurrentPage("home")} />;
      case "addMembership":
        return <AddMembership />;
      case "addBook":
        return <AddBook />;
      case "userManagement":
        return <UserManagement />;
      case "reports":
        return <Reports />;
      default:
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Welcome to Library Management System
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Total Books</h3>
                  <Book className="w-8 h-8 text-indigo-600" />
                </div>
                <p className="text-3xl font-bold text-gray-800">1,234</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Active Members</h3>
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-3xl font-bold text-gray-800">567</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Issued Books</h3>
                  <FileText className="w-8 h-8 text-orange-600" />
                </div>
                <p className="text-3xl font-bold text-gray-800">89</p>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">System Information</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  •{" "}
                  {isAdmin
                    ? "Admin access: Full access to all modules"
                    : "User access: Reports and Transactions only"}
                </li>
                <li>• Use the navigation menu to access different modules</li>
                <li>• All validations are implemented as per requirements</li>
              </ul>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-indigo-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <BookOpen className="w-8 h-8 mr-2" />
              <h1 className="text-xl font-bold">Library Management</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm">{isAdmin ? "Admin" : "User"} Portal</span>
              <button
                onClick={() => window.location.reload()}
                className="flex items-center gap-2 bg-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-800 transition"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="md:hidden"
              >
                {showMobileMenu ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <aside
          className={`${
            showMobileMenu ? "block" : "hidden"
          } md:block w-64 bg-white shadow-md min-h-screen`}
        >
          <div className="p-4">
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setShowMobileMenu(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition ${
                    currentPage === item.id
                      ? "bg-indigo-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">{renderPage()}</main>
      </div>
    </div>
  );
};

export default Dashboard;
