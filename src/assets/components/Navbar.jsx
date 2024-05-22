import React from 'react';



// const Menulinks=[
//   {
//     id:1,
//     name:"Home",
//     link:"/Home",
//   },
//   {
//     id:2,
//     name:"About Us",
//     link:"/#About Us",
//   },
//   {
//     id:3,
//     name:"Products",
//     link:"/#",
//   },
//   {
//     id:4,
//     name:"Features",
//     link:"/#",
//   },
//   {
//     id:5,
//     name:"Reviews",
//     link:"/#",
//   },
//   {
//     id:6,
//     name:"Contact Us",
//     link:"/#",
//   },
// ]


const Navbar = () => {
  return (
    <div className='top-0 left-0 w-full bg-white shadow '>
        <div className="container px-6 py-5 md:px-16 md:py-5">
          <div className="flex items-center justify-between">
            <div className='text-center'>
              <h3 className='text-xl font-bold text-secondary md:text-3xl'>FoodDelivery</h3>
            </div>
            
            <div>
              <button className='text-xl text-black'>Sign In</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar



