import Banner from '@/components/banner'
import Categories from '@/components/categories'
import Featured from '@/components/featured'
import FlashSale from '@/components/flash-sale'
import Footer from '@/components/footer'
import HeroSection from '@/components/hero-section'
import HorizontalNavBar from '@/components/horizontal-nav-bar'
import JustForYou from '@/components/just-for-you'
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
      <JustForYou/>
      <Footer/>
    </main>
  )
}
