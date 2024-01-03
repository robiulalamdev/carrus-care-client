import { Spinner } from "@material-tailwind/react";
import RegisterTable from "../../components/dashboard-ui/DContentArea/RegisterTable";
import useAuth from "../../lib/hooks/useAuth";
import LoginPage from "./login/LoginPage";

const DashboardPage = () => {
  const { isLogged, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="w-full min-h-screen h-full flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      {isLogged ? (
        <div className="scrollbar flex flex-col h-full w-full flex-grow px-4 max-h-screen min-h-screen overflow-y-auto max-w-[1900px] mx-auto">
          <RegisterTable />
        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
};

export default DashboardPage;
