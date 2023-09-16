import Banner from '@/components/banner'
import Categories from '@/components/categories'
import Featured from '@/components/featured'
import FlashSale from '@/components/flash-sale'
import HeroSection from '@/components/hero-section'
import HorizontalNavBar from '@/components/horizontal-nav-bar'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <HorizontalNavBar/>
      <Categories/>
      <Banner/>
      <Featured/>
      <FlashSale/>
    </main>
  )
}
