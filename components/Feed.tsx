import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'
import TweetBox from './TweetBox'

const Feed = () => {
  return (
    <div className="col-span-7 max-h-screen overflow-scroll  border-x pb-4 lg:col-span-5">
      <div className="flex items-center justify-between pb-4">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon className="mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter transition-all duration-200 ease-out hover:rotate-180 active:scale-125" />
      </div>
      <TweetBox />
    </div>
  )
}

export default Feed
