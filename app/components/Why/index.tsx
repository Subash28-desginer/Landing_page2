import Image from "next/image";

interface whydata {
    heading: string;
    subheading: string;
}

const whydata: whydata[] = [
    {
        heading: "Discover/Innovate",
        subheading: "Follow a hashtag growth total posts, videos and images.more revitions",
    },
    {
        heading: "Verify/Comply",
        subheading: "Follow a hashtag growth total posts, videos and images.more revitions",
    },
    {
        heading: "Manufacture/QC",
        subheading: "Follow a hashtag growth total posts, videos and images.more revitions",
    }
]


const Why = () => {
    return (
        <div id="about">

            <div className='px-4 mx-auto my-20 max-w-7xl sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>

                    {/* COLUMN-1 */}
                    <div className="lg:-ml-64">
                        <Image src="/assets/banner/image2.svg" alt="iPad-image" width={4000} height={900} />
                    </div>

                    {/* COLUMN-2 */}
                    <div>
                        <h3 className="pt-4 mt-5 text-4xl font-semibold text-center lg:text-5xl sm:leading-tight lg:text-start">Why we best?</h3>
                        <h4 className="pt-4 text-lg font-normal text-center sm:leading-tight text-beach lg:text-start">Dont waste time on search manual tasks. Let Automation do it for you. Simplify workflows, reduce errors, and save time.</h4>

                        <div className="mt-10">
                            {whydata.map((items, i) => (
                                <div className="flex mt-4" key={i}>
                                    <div className="flex items-center justify-center w-12 h-10 rounded-full bg-circlebg">
                                        <Image src="/assets/why/check.svg" alt="check-image" width={24} height={24} />
                                    </div>
                                    <div className="ml-5">
                                        <h4 className="text-2xl font-semibold">{items.heading}</h4>
                                        <h5 className="mt-2 text-lg font-normal text-beach">{items.subheading}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Why;
