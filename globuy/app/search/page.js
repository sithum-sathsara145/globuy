'use client'

import React from 'react';
import { usePathname } from 'next/navigation'
import ImageCarousel from '@/components/reusable/ImageCarousel';
import { bannerImages } from '@/utils/data';

export default function search() {
    const pathname =usePathname();
  return (
    <div>search {pathname}
    <ImageCarousel className='' src={bannerImages}/>
    </div>
  )
}
