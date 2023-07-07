import Image from 'next/image'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import WhatsDifferent from './components/WhatsDifferent/WhatsDifferent'
import StepByStep from './components/StepByStep/StepByStep'

export default function App() {
  return (
   <>
   <Header />
   <main>
   <Hero />
   <WhatsDifferent />
   <StepByStep />

   </main>
   </>
  )
}
