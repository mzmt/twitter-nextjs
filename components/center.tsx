import type { NextPage } from 'next'
import { useState } from "react"

const Center: NextPage = () => {
  const [tweet, setTweet] = useState('')

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
      </div>
    </div>
  )
}

export default Center
