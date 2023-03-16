import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png"

type Props = {}

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between"
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
              <p>Home</p>
              <p>Home</p>
              <p>Home</p>
              <p>Home</p>
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