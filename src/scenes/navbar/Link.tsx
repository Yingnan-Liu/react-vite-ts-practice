import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from '@/shared/types';

/**
 * 导航栏的跳转链接 组件
 */

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage:(value:SelectedPage)=>void
}

function Link({
    page,
    selectedPage,
    setSelectedPage
}: Props) {
  const lowerCasePage = page.toLowerCase().replace(/ /g,"") as SelectedPage//转为小写并删除空格
  return (
      <AnchorLink
          className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
          transition duration-500 hover:text-primary-300 text-sm  w-auto
          `}
          href={`#${lowerCasePage}`}
          onClick={()=>setSelectedPage(lowerCasePage)}
      >
          {page}
      </AnchorLink>
  )
}

export default Link