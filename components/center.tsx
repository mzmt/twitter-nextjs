const Center = () => {
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
                 placeholder="いまどうしてる？"
                 required
                 minLength={1}
                 maxLength={120}
                 className="bg-gray-800 placeholder:text-xl focus:outline-none"
                 border-none
                 autoComplete="off"
                 aria-label="ツイート"
          />
          <button type='submit' className='bg-blue-500 hover:bg-blue-400 font-bold py-2 px-4 rounded-full'>
            ツイートする
          </button>
        </form>
      </div>
    </div>
  )
}

export default Center
