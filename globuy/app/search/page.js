'use client'

import React from 'react';
import { usePathname, useSearchParams } from 'next/navigation'
import ImageCarousel from '@/components/reusable/ImageCarousel';
import { bannerImages } from '@/utils/data';

export default function search({}) {
    const pathname =usePathname();
    const SearchParams = useSearchParams();
    const query = SearchParams.get('q')
  return (
    <div>
      {query}
    </div>
  )
}
