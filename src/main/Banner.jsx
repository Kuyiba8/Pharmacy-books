import React from 'react'
//import BannerCards from '../home/BannerCards'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left side */}
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Buy And Sell Your Books
                <span className='text-teal-700'> for the best prices</span>
                </h2>
                <p>And even if our gospel is veiled, 
                   it is veiled to those who are 
                   perishing. The god of this age has 
                   blinded the minds of unbelievers, 
                   so that they cannot see the light of the 
                   gospel of the glory of Christ, who is the 
                   image of God." If the world doesn't believe, 
                   it's because it is influenced, bound, by the 
                   spirit of unbelief. Let's rebuke this spirit so 
                   they can believe, so that this demon will let 
                   go of their minds, and the light of the gospel of
                    the glory of Christ can shine in their lives.</p>
                    <div>
                        <input type="search" name="search" id="search" 
                        placeholder='search a book' className='py-2 
                        px-2 rounded-s-sm outline-none' />
                        <button className="bg-teal-600 px-6 py-2 
                         text-white font-medium hover:bg-teal-900 
                         transition-all ease-in duration-200">
                            Search
                        </button>
                    </div>
            </div>
            {/* right side */}
            {/* <div><BannerCards /></div> */}

        </div>
    </div>
  )
}

export default Banner