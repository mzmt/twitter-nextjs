import type { NextPage } from 'next'
import { useState, useEffect, useRef } from "react"
import { lightTheme, darkTheme } from 'picmo'
import { createPopup } from '@picmo/popup-picker'
import { TwemojiRenderer } from '@picmo/renderer-twemoji'

const Center: NextPage = () => {
  const [tweet, setTweet] = useState('')
  // useEffectの中で最新のtweetの値を参照する
  const tweetRef = useRef('')
  tweetRef.current = tweet

  useEffect(() => {
    const trigger = document.querySelector<HTMLElement>('.emoji-button')!
    const picker = createPopup({
      renderer: new TwemojiRenderer(),
      autoFocus: 'emojis',
      theme: darkTheme,
    }, {
      referenceElement: trigger,
      hideOnClickOutside: false,
      showCloseButton: false,
    })
    trigger.addEventListener('click', function () {
      picker.toggle()
    })
    picker.addEventListener('emoji:select', event => {
      setTweet(tweetRef.current + event.emoji)
    })
  }, [])

  return (
    <div>
      <div>
        <p className='font-bold text-xl'>ホーム</p>
      </div>
      <div>
        <form action="/hoge" method="post">
          <input type="text"
                 id="tweet"
                 name="tweet"
                 value={tweet}
                 onChange={(event) => setTweet(event.target.value)}
                 placeholder="いまどうしてる？"
                 required
                 minLength={1}
                 maxLength={120}
                 className="bg-gray-800 placeholder:text-xl focus:outline-none"
                 border-none
                 autoComplete="off"
                 aria-label="ツイート"
          />
          { tweet != '' ? (
              <button type='submit' className='bg-blue-500 hover:bg-blue-400 font-bold py-2 px-4 rounded-full'>
              ツイートする
            </button>
          ) :
            <button type='submit' className='bg-gray-500 text-gray-200 font-bold py-2 px-4 rounded-full' disabled>
              ツイートする
            </button>
          }
        </form>
        <button type='button' className='emoji-button bg-blue-500 text-gray-200 font-bold py-2 px-4 rounded-full'>emoji</button>
      </div>
    </div>
  )
}

export default Center
