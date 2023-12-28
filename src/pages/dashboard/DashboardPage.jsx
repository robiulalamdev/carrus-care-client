import RegisterTable from "../../components/dashboard-ui/DContentArea/RegisterTable";
import useAuth from "../../lib/hooks/useAuth";
import LoginPage from "./login/LoginPage";

const DashboardPage = () => {
  const { isLogged } = useAuth();
  return (
    <>
      {isLogged ? (
        <div className="scrollbar h-full w-full flex-grow px-4 max-h-screen min-h-screen overflow-y-auto max-w-[1900px] mx-auto">
          <RegisterTable />
        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
};

export default DashboardPage;
