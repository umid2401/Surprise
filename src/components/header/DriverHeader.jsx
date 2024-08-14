
import ToogleButton from "./toogleButton/ToogleButton";

export default function DriverHeader() {
  return (
    <div className="w-full bg-white shadow-md ">
      <div className="flex justify-between items-center  py-6 px-4 ">
        <ToogleButton />

        <div className="flex items-center">
          {window.innerWidth > 900&&(<Search />)}
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    
    </div>
  );
}
