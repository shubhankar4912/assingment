import React from "react";

function Navbar() {
  return (
    <div className=" z-[-1] p-5 flex items-center justify-center" >
    <div className=" flex justify-between w-4/5 h-24 p-10 gap-[80px] rounded-lg  shadow-2xl">
      <div className=" flex items-center justify-center">
        <img className="w-[174px] h-[60px]" src="./mycompany.png" alt="My Company Logo" />
      </div>
      <div className="flex gap-3">
        <div>Services</div>
        <div>Media</div>
        <div>Cases</div>
        <div>FAQ</div>
        <div>Contacts</div>
      </div>
      <div className="flex gap-5">
        <div className="flex items-center gap-2">
          <img src="./phoneicon.png" alt="Phone Icon" />
          <div>+91 000000000</div>
        </div>
        <div className="flex items-center gap-2">
          <img src="./emailicon.png" alt="Email Icon" />
          <div>demo@gmail.com</div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
