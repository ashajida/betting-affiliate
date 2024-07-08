import Link from "next/link";
import Button from "./componentss/Button";
import { client } from "@/lib/createClient";
import Image from "next/image";
import Card from "./componentss/Card";
import { getAllGames } from "./queries/game";
import { getAllBonuses } from "./queries/bonus";

const Homepage = async () => {
  const games = await getAllGames();
  const bonuses = await getAllBonuses();

  return (
    <>
      <div className="w-full h-[700px] w-[100%] bg-hero-bg bg-no-repeat bg-cover"></div>
      <section className="py-20">
        <div className="container">
          <h2 className="font-bold text-[32px] text-center mb-6">
            Welcome To Our Site
          </h2>
          <span className="text-center block">
            Your ultimate destination for all things betting
          </span>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="col-span-1">
              <h3 className="font-bold text-[58px] text-gray-200">01.</h3>
              <p>
                At [Your Website Name], you can bet on sports, casino games,
                esports, and Vegas-style betting, offering a diverse and
                exciting experience for all bettors.
              </p>
            </div>
            <div className="col-span-1">
              <h3 className="font-bold text-[58px] text-gray-200">02.</h3>
              <p>
                We prioritize safety, using advanced encryption to protect your
                information and adhering to responsible gambling policies for
                secure betting.
              </p>
            </div>
            <div className="col-span-1">
              <h3 className="font-bold text-[58px] text-gray-200">03.</h3>
              <p>
                Our platform is user-friendly, with intuitive navigation and
                straightforward betting options, ensuring a seamless experience
                for both new and experienced bettors.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-3 gap-6">
            <Card classes="col-span-1">
              <>
                <Image
                  className="mb-4"
                  src="/images/football.jpg"
                  height={473}
                  width={640}
                  alt="football"
                />
                <div className="mb-2">
                  <h5 className="mb-2 font-bold text-[24px]">Title</h5>
                  <p className="text-slate">Some Random Text</p>
                </div>
                <Button text="Play Now" />
              </>
            </Card>
            <Card classes="col-span-1">
              <>
                <Image
                  className="mb-4"
                  src="/images/football.jpg"
                  height={473}
                  width={640}
                  alt="football"
                />
                <div className="mb-2">
                  <h5 className="mb-2 font-bold text-[24px]">Title</h5>
                  <p className="text-slate">Some Random Text</p>
                </div>
                <Button text="Play Now" />
              </>
            </Card>
            <Card classes="col-span-1">
              <>
                <Image
                  className="mb-4"
                  src="/images/football.jpg"
                  height={473}
                  width={640}
                  alt="football"
                />
                <div className="mb-2">
                  <h5 className="mb-2 font-bold text-[24px]">Title</h5>
                  <p className="text-slate">Some Random Text</p>
                </div>
                <Button text="Play Now" />
              </>
            </Card>
          </div>
        </div>
      </section> */}
      <section className="py-[70px] bg-gradient-to-r from-primary to-[#b2dc56]">
        <div className="container">
          <h2 className="font-bold text-[32px] text-center mb-[58px]">
            Hot Deals 🔥
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {bonuses?.length &&
              bonuses.map((bonus: Bonus, index: number) => {
                return (
                  <Card
                    key={index}
                    classes="flex gap-2 bg-white items-center col-1 w-full justify-between p-6"
                  >
                    <>
                      <Image
                        className="rounded-full w-[100px] h-[100px] object-cover object-center"
                        src="/images/bonus.jpeg"
                        alt="bonus"
                        height={210}
                        width={270}
                      />
                      <h3 className="font-bold text-[22px] max-w-[50%]">
                        title
                      </h3>
                      <Button text="Play Now" />
                    </>
                  </Card>
                );
              })}
          </div>
        </div>
      </section>
      <section>
        <div className="container py-20">
          <h2 className="font-bold text-[32px] text-center mb-[58px]">
            Popular Games
          </h2>
          <div className="grid lg:grid-cols-4 gap-6">
            {games?.length &&
              games.map((game: Game, index: number) => {
                return (
                  <Card
                    key={index}
                    classes="bg-white col-1 w-full justify-between pb-6"
                  >
                    <Link href="">
                      <Image
                        className="w-full mb-4"
                        src="/images/bonus.jpeg"
                        alt="bonus"
                        height={210}
                        width={270}
                      />
                      <div className="px-4">
                        <h3 className="font-bold text-[24px] mb-3">Title</h3>
                      </div>
                    </Link>
                  </Card>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
