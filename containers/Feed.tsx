import React from 'react'
import { MiniProfile, Posts, Stories } from '../components'

const Feed = () => {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto gap-x-10'>

<section className='col-span-2 '>
<Stories/>
<Posts/>
</section>

<section className='hidden md:col-span-1 xl:inline-grid '>
  <div className='fixed'>
  <MiniProfile/>
  </div>

</section>

    </main>
  )
}

export default Feed