import RegisterTable from "../../components/dashboard-ui/DContentArea/RegisterTable";
import Header from "../../components/shared/Header";
import useAuth from "../../lib/hooks/useAuth";
import LoginPage from "./login/LoginPage";

const DashboardPage = () => {
  const { isLogged } = useAuth();
  return (
    <>
      {isLogged ? (
        <div className="scrollbar flex flex-col h-full w-full flex-grow px-4 max-h-screen min-h-screen overflow-y-auto max-w-[1900px] mx-auto">
          <Header />
          <RegisterTable />
        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
};

export default DashboardPage;
