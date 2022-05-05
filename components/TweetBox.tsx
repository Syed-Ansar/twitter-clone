import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline'
import React, { useState } from 'react'

const TweetBox = () => {
  const [input, setinput] = useState<string>('')

  return (
    <div className="flex space-x-2 border-y p-5">
      <img
        className="mt-4 h-14 w-14 rounded-full object-cover"
        src="https://links.papareact.com/gll"
        alt=""
      />
      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
            value={input}
            onChange={(e) => setinput(e.target.value)}
            className="h-24 w-full text-xl outline-none"
            type="text"
            placeholder="Whats's Happening?"
          />
          <div className="flex items-center md:items-start ">
            <div className="flex flex-1 cursor-pointer space-x-2 text-twitter">
              <PhotographIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <SearchCircleIcon className="h-5 w-5" />
              <EmojiHappyIcon className="h-5 w-5" />
              <CalendarIcon className="h-5 w-5" />
              <LocationMarkerIcon className="h-5 w-5" />
            </div>
            <div>
              <button
                disabled={!input}
                className="rounded-full bg-twitter px-5 py-2 font-bold text-white disabled:opacity-40"
              >
                Tweet
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TweetBox
