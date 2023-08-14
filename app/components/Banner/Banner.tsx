import Image from "next/image";



const Banner = () => {
    return (
        <main>
            <div className="px-6 lg:px-8">
                <div className="pt-16 pb-20 mx-auto max-w-7xl sm:pt-20 banner-image">
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl lg:text-7xl md:4px lh-96">
                            A simple way to <br /> Experiment and Validate.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-bluegray">
                        Testrunz is trusted by hundreds of businesses, harnessing artificial intelligence to streamline their product development processes with unmatched speed and precision. Its not just about faster innovation - its about smarter, data-driven decision making that drives successful products.
                        </p>
                    </div>

                    <div className="mt-5 text-center">
                        <button type="button" className='py-5 mt-2 font-medium text-white text-15px bg-blue px-9 leafbutton'>
                            See our portfolio
                        </button>
                        <button type="button" className='px-16 py-5 mt-2 ml-4 font-medium transition duration-150 ease-in-out border text-15px text-blue hover:text-white hover:bg-blue border-lightgrey leafbutton'>
                            More info
                        </button>
                        
                    </div>

                    <Image src={'/assets/banner/image1.svg'} alt="banner-image" width={1200} height={598} />
                </div>
            </div>
        </main>
    )
}

export default Banner;
