import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import Logo from "@/assets/Logo.png"

type Props = {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
}

const Navbar = ({selectedPage,setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const pages = ["Home", "Benefits", "Our Classes", "Contact Us"];

  return (
    <nav>
      <div
        className={`${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          {/* left side logo area */}
          <div className={`${flexBetween} w-full gap-16`}>
            <img alt="logo" src={Logo}/>
          </div>
          {/* right side menu area */}
          <div className={`${flexBetween} w-full`}>
            {/* inner right side : home,benefits...links */}
            <div className={`${flexBetween} gap-8 text-sm`}>
              {pages.map((page,i)=>(
                <Link
                  key={i}
                  page={page}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}  
                />
              ))}
            </div>
            {/* inner left side: Sign in and BUTTON  */}
            <div className={`${flexBetween} gap-8`}>
              <p>Sign In</p>
              <button>Become a Member</button>
            </div>
          </div>
        </div>
          
      </div>
    </nav>
  )
}

export default Navbar