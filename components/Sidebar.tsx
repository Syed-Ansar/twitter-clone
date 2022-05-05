import React from 'react'
import SidebarRow from './SidebarRow'
import {
  BellIcon,
  BookmarkIcon,
  ChatAltIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  HashtagIcon,
  HomeIcon,
  UserIcon,
} from '@heroicons/react/outline'

const Sidebar = () => {
  return (
    <div className="cols-span-2 flex flex-col items-center px-4 md:items-start">
      <img
        src="https://links.papareact.com/drq"
        alt="Twitter Icon"
        className="m-3 h-10 w-10"
      />
      <SidebarRow title="Home" Icon={HomeIcon} />
      <SidebarRow title="Explore" Icon={HashtagIcon} />
      <SidebarRow title="Notifications" Icon={BellIcon} />
      <SidebarRow title="Messages" Icon={ChatAltIcon} />
      <SidebarRow title="Bookmarks" Icon={BookmarkIcon} />
      <SidebarRow title="List" Icon={CollectionIcon} />
      <SidebarRow title="Sign In" Icon={UserIcon} />
      <SidebarRow title="More" Icon={DotsCircleHorizontalIcon} />
    </div>
  )
}

export default Sidebar
