import Link from 'next/link'
import React from 'react'
import Card from '../componentss/Card'
import Image from 'next/image'
import { getAllBonuses } from '../queries/bonus'
import { urlFor } from '@/lib/createClient'

const Bonuses = async () => {

    const bonuses = await getAllBonuses();
  return (
    <section className='py-20'>
    <div className="container">
        <div className='flex gap-3 items-center mb-8'>
            <p>Browse By:</p>  
            <Link className='border rounded-xl border-primary py-1 px-3' href=''>item</Link>
        </div>
        <div className='grid grid-cols-4 gap-6'>
            {
                bonuses?.length
                &&
                bonuses.map((bonus: Bonus, index: number) => {
                    return(
                        <Card key={index} classes="bg-white col-1 w-full justify-between pb-6">
                        <Link href=''>
                          <Image
                            className="w-full mb-4"
                            src={urlFor(bonus.image).url()}
                            alt="bonus"
                            height={210}
                            width={270}
                          />
                          <div className="px-4">
                          <h3 className="font-bold text-[24px] mb-3">{bonus.title}</h3>
                          </div>
                        </Link>
                      </Card>
                    )
                })
            }
        </div>
    </div>
</section>
  )
}

export default Bonuses