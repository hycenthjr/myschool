import { Link } from "react-router";
import Button from "../../components/ui/button";
import { Home } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-8 h-screen justify-center items-center">
      <h1 className="text-6xl">Coming Soon!</h1>
      <Link to="/">
        <Button
          text="Go Back to Home Page"
          icon={<Home className="h-4 w-4" />}
          className="cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default Dashboard;
