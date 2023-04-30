import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import Logo from "@/assets/Logo.png"
import { SelectedPage } from '@/shared/types';
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const pages: string[] = ["Home", "Benefits", "Our Classes", "Contact Us"];
  const [isMenuToggled, setIsMenuToggle] = useState<boolean>(false);  //点击控制菜单隐藏和展示
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");//查看窗口是否大于1600px
  // console.log(isAboveMediumScreens)
  console.log(isMenuToggled)

  return (
    <nav>
      <div
        className={`${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side logo area */}
            <img alt="logo" src={Logo} />
            {/* right side menu area */}
            {isAboveMediumScreens
              ?
              (<div className={`${flexBetween} w-full`}>
                {/* inner right side : home,benefits...links */}
                <div className={`${flexBetween} gap-8`}>
                  {pages.map((page, i) => (
                    <Link
                      key={i}
                      page={page}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  ))}
                </div>
                {/* inner left side: Sign in and BUTTON  */}
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <p>Sign In</p>
                  <ActionButton
                    setSelectedPage={setSelectedPage}

                  >Become a Member</ActionButton>
                </div>
              </div>)
              :
              (
                <button className="rounded-full bg-secondary-500 p-2"
                  onClick={() => setIsMenuToggle(!isMenuToggled)}
                >
                  <Bars3Icon className="h-6 w-6 text-white" />
                </button >
              )
            }
          </div>
        </div>
      </div>
      {/* 折叠菜单 */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100">
          {/* 关闭按钮 */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggle(!isMenuToggled)}>
              <XMarkIcon className="w-6 h-6 text-gray-400" />
            </button>
          </div>
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            {pages.map((page, i) => (
              <Link
                key={i}
                page={page}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </div>
        </div>
      )}


    </nav>
  )
}

export default Navbar