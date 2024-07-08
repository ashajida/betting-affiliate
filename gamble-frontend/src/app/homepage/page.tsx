import Link from "next/link";
import Button from "../componentss/Button";

const Homepage = () => {
    return(
        <>
    <header className="w-full border-b border-bright/[.1]">
      <div className="mx-auto lg:container">
        <div className="col items-center justify-between lg:flex">
          <div className="logo-wrapper">
            <span>Logo</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list hidden" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x hidden" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          </div>
          <nav className="col lg:ml-auto lg:flex lg:gap-4">
            <div className="lg:inline-flex">
              <a href="#" className="lg:py-6 lg:px-3 text-bright hover:text-blue-300 font-bold">Example 1</a>
            </div>
            <div className="lg:inline-flex">
              <a href="#" className="lg:py-6 lg:px-3 text-bright hover:text-blue-300 font-bold">Example 2</a>
            </div>
            <div className="lg:inline-flex">
              <a href="#" className="lg:py-6 lg:px-3 text-bright hover:text-blue-300 font-bold">Example 3</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <div className="mx-auto md:container">
      <div className="hero flex col justify-center lg:pt-[160px]">
        <h1 className="bg-gradient-to-br from-bright to-[#fff] bg-clip-text text-transparent text-5xl font-bold my-auto">Welcome to Gambler Nation <br></br> Where all the magic happens</h1>
      </div>
      <div className="grid grid-cols-8 gap-4">
            <main className="col-span-5 text-bright font-medium">
                <div className="content">
                    <h2 className="text-3xl font-medium mb-[32px]">Heading One</h2>
                    <p className="content__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>
            </main>
            <div className="col-span-2 text-bright pl-4">
                <h3>Top Sites</h3>
                <div className="panel flex gap-3">
                    <div>
                        <img src="https://placehold.co/150"/>
                        <span>Title</span>
                    </div>
                    <div className="panel__body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        <br></br>
                       <Button>Button</Button>
                    </div>
                </div>
            </div>
      </div>
    </div>
    <footer></footer>
        </>
    );
}


export default Homepage;