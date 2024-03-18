import { PDFViewer } from "@react-pdf/renderer";
import AdminSidebar from "../components/AdminSidebar";
import MyDocument from "../components/MyDocument";
import FileUpload from "../components/SelectFile";
const Dashboard = () => {
  return (
    <div className="adminContainer">
      {/* SideBar */}
      <AdminSidebar />
      {/* Main */}
      <main>
        <PDFViewer>
          <MyDocument />
        </PDFViewer>
        <FileUpload/>
      </main>
    </div>
  );
};

export default Dashboard;
