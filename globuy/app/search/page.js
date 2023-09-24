'use client'

import React from 'react';
import { useSearchParams } from 'next/navigation'
import FlashCard from '@/components/flash-card';
import { products } from '@/utils/data';

export default function search({}) {
    const SearchParams = useSearchParams();
    const query = SearchParams.get('q');
    const keys = ['title','category'];
  return (
    <div>
      <div className="self-stretch overflow-hidden flex flex-col items-end justify-center">
          <div className="self-stretch flex flex-col py-0 px-[22px] items-center justify-center gap-[32px]">
            <div className="self-stretch flex flex-wrap gap-5 items-center justify-center">
            {products.filter(product=>keys.some((key)=>(product[key].toLowerCase().includes(query)))).map((product)=>(
                <FlashCard source={product}/>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}
