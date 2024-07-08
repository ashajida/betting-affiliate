import React from 'react'
import { getBonus } from '../queries/bonus';
import { getGame } from '../queries/game';
import { urlFor } from '@/lib/createClient';
import Link from 'next/link';
import Card from '../componentss/Card';
import Image from 'next/image';

type Props = {
    searchParams: SearchParams
}

const Search = async ({ searchParams }: Props) => {
  const query = searchParams.q;

  const games = await getGame(query);
  const bonus = await getBonus(query);

  let collection = [] as Array<Game | Bonus>;

  if(games?.length) {
    collection = [...games]
  }

  if(bonus?.length) {
    collection = [...bonus]
  }

  console.log(collection, 'collection....')


  return (
    <section className='py-20'>
       <div className="container">
        <div className="flex flex-col md:flex-row gap-6">
        {
            collection?.length
            &&
            collection.map((data, index) => {
                return(
                    <Card key={index} classes="bg-white col-1 w-full justify-between pb-6">
                        <Link href=''>
                          <Image
                            className="w-full mb-4"
                            src={urlFor(data.image).url()}
                            alt="bonus"
                            height={210}
                            width={270}
                          />
                          <div className="px-4">
                          <h3 className="font-bold text-[24px] mb-3">{data.title}</h3>
                          </div>
                        </Link>
                      </Card>
                );
            })
        }
        </div>
       </div>
    </section>
  )
}

export default Search