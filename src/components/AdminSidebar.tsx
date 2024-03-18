import { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { Link, useLocation, Location } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();
  return (
    <aside>
      <h2>PDF Editing</h2>
      <div>
        <h5>Dashboard</h5>
        <ul>
          <Li
            url="/admin/dashboard"
            text="Dashboard"
            location={location}
            Icon={RiDashboardFill}
          />
          {/* Product */}
          <Li
            url="/admin/product"
            text="Product"
            location={location}
            Icon={RiShoppingBag3Fill}
          />
          {/* Customers */}
          <Li
            url="/admin/customer"
            text="Customer"
            location={location}
            Icon={IoIosPeople}
          />
          {/* Transation */}
          <Li
            url="/admin/transaction"
            text="Transation"
            location={location}
            Icon={AiFillFileText}
          />
        </ul>
      </div>
    </aside>
  );
};
interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}
const Li = ({ url, text, location, Icon }: LiProps) => {
  return (
    <li
      style={{
        backgroundColor: location.pathname.includes(url)
          ? "rgba(0,115,255,0.1)"
          : "white",
      }}
    >
      <Link
        style={{
          color: location.pathname.includes(url) ? "rgba(0,115,255)" : "black",
        }}
        to={url}
      >
        <Icon />
        {text}
      </Link>
    </li>
  );
};

export default AdminSidebar;
