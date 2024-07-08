import Link from 'next/link'
import React from 'react'
import Card from '../componentss/Card'
import Image from 'next/image'
import { getAllGames } from '../queries/game'
import { urlFor } from '@/lib/createClient'

const Games = async () => {
  const games = await getAllGames();

  console.log(games);
  return (
    <section className='py-20'>
        <div className="container">
            <div className='flex gap-3 items-center mb-8'>
                <p>Browse By:</p>  
                <Link className='border rounded-xl border-primary py-1 px-3' href=''>item</Link>
            </div>
            <div className='grid grid-cols-4 gap-6'>
                {
                    games?.length
                    &&
                    games.map((game: Game, index: number) => {
                        console.log(urlFor(game.image).url())
                        return(
                            <Card key={index} classes="bg-white col-1 w-full justify-between pb-6">
                            <Link href={game.link}>
                              <Image
                                className="w-full mb-4"
                                src={urlFor(game.image).url()}
                                alt="bonus"
                                height={210}
                                width={270}
                              />
                              <div className="px-4">
                              <h3 className="font-bold text-[24px] mb-3">{game.title}</h3>
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

export default Games