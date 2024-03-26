import Constact from "../constants/Constant";
//@ts-ignore
import logoicon from "../assets/login-icon.png";
//@ts-ignore
import pdf from "../assets/PDF_TECH.svg";
function Nav() {
  return (
    <header className="py-2 w-auto h-52 bg-blueBg ">
      <nav className="px-10 flex  items-center justify-between">
        <img width={200} height={140} src={pdf} className="w-[200px] h-[140px]" alt="Logo" />
        <div className="flex justify-center items-center">
          <ul className="flex gap-10">
            {Constact.map((item) => {
              return (
                <h3 className="text-white font-medium from-neutral-50 uppercase">
                  {item.title}
                </h3>
              );
            })}
          </ul>
          <div className="flex bg-gradient-to-r from-[#41C93E] to-[#74F27E] w-[136px] h-[48px] justify-between items-center px-4 ml-8 drop-shadow-md md:visible ">
            <img
              className="w-[20px] h-[20px] "
              src={logoicon}
              alt="logo Icon"
            />
            <button className="text-blueBg text-2xl font-normal bg-">
              Login
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
