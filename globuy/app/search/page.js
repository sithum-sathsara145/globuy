'use client'

import React from 'react';
import { usePathname } from 'next/navigation'

export default function search() {
    const pathname =usePathname();
  return (
    <div>search {pathname}</div>
  )
}
