import Link from 'next/link'
import React from 'react'

export default function AdminNav(props: any) {
  return (
    <div>
    <div className='flex'>
        <Link href="/">Go to Website</Link>
    </div>
      {
        props.renderDefault(props)
      }
    </div>
  )
}
