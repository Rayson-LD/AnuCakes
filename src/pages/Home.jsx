import Header from "../components/layouts/Header";
import React from 'react'
import bg from '../resources/bg.png'
function Home() {
  return (
      <div style={{backgroundImage:`url(${bg})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>
      <Header/>
      <div class="hero min-h-screen bg-ghost">
  <div class="hero-content flex-col lg:flex-row">
    <img src={bg} class="max-w-sm  shadow-2xl" style={{borderRadius:0}}/>
    <div>
      <h1 class="text-5xl ">Unforgettable Sweetness You'll Keep Craving For.</h1>
      <p class="py-6">Anu's Cakes is a retail business specializing in producing and selling cakes, We may also sell cupcakes, muffins, sponges, as well as other baked goods that fall under the title of a cake.</p>
      <button class="btn btn-primary">BUY NOW</button>
    </div>
  </div>
</div>
      </div>
    
  )
}

export default Home