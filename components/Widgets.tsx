import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

const Widgets = () => {
  return (
    <div className="col-span-2 mt-2 hidden px-2 lg:inline">
      <div className="flex items-center space-x-2 rounded-full bg-gray-100 p-3">
        <SearchIcon className="h-5 w-5 flex-shrink-0" />
        <input
          type="text"
          placeholder="Search Twitter"
          className=" flex-1 bg-transparent outline-none"
        />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="mipaltan"
        options={{ height: 700 }}
      />
    </div>
  )
}

export default Widgets
