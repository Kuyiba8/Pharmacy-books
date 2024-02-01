// import React from 'react';
// import { Link } from 'react-router-dom';
// import Category from '../components/Category';



// function Home() {
//   return (
//     <div>
//       <h1>Welcome to Book Website</h1>
//       <div>
//         <Link to="/category/chemistry">
//           <img src={categoryImages.chemistry} alt="Chemistry" />
//         </Link>
//         <Link to="/category/herbal">
//           <img src={categoryImages.herbal} alt="Herbal" />
//         </Link>
//         {/* Add more category links and images as needed */}
//       </div>
//     </div>
//   );
// }

// export default Home;



import React from 'react';
import Category from '../components/Category';

function Home() {
  return (
    <div className='w-full h-full'>
              <h1 className='text-center text-2xl mt-10'>Categories</h1>
      <div className=' mx-auto my-10'>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-1 '>
      <Category categoryName="Pharmacology" />
      <Category categoryName="Pharmaceutical" />
      <Category categoryName="Chemistry" />
      <Category categoryName="Toxicology" />
      <Category categoryName="Herbal" />
      <Category categoryName="Firstaid" />
      <Category categoryName="Medical" />
      <Category categoryName="Others" />
       {/* Add more categories as needed */}
      </div>
    </div>
    </div>
  );
}

export default Home;
