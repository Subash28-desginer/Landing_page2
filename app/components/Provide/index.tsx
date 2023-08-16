import Image from "next/image";
import Link from "next/link";

interface datatype {
    imgSrc: string;
    country: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: "/assets/banner/Image3.svg",
        country: "Marketing",
        paragraph: 'Follow a hashtag total posts, videos',

    },
  
]


const Provide = () => {
    return (
        <div id="services">

            <div className='px-4 mx-auto my-10 max-w-7xl sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 gap-8 lg:grid-cols-12'>

                    {/* COLUMN-1 */}
                    <div className='flex justify-center col-span-6'>
                        <div className="flex flex-col justify-center p-10 align-middle">
                            <p className="pt-4 mt-5 text-4xl font-semibold text-center lg:text-6xl lh-81 lg:text-start">One Unified Platform</p>
                            <h4 className="pt-4 text-lg font-normal text-center lh-33 lg:text-start text-bluegray">No more juggling multiple tools and platforms. With Twinmo Testrunz, you have a single unified platform for every aspect of product development. This includes all stakeholders - engineers, lab managers, technicians, research, development, and production teams. Streamline every type of experiment or test, and manage all units under test, from components to subsystems to the full product.</h4>
                            <Link href={'/'} className="flex gap-2 mx-auto mt-4 text-xl font-medium text-blue lg:mx-0 space-links">Learn more <Image src={'/assets/provide/arrow.svg'} alt={'arrow'} width={20} height={20} /></Link>
                        </div>
                    </div>

                    <div className='lg:col-span-1'></div>

                    {/* COLUMN-2 */}
                    <div className='col-span-6 lg:col-span-5'>
                        <div className='grid grid-cols-1 px-10 py-12 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 bg-bluebg rounded-3xl'>
                            {Aboutdata.map((item, i) => (
                                <div key={i} className='p-6 bg-white shadow-xl rounded-3xl lg:-ml-32'>
                                    <Image src={item.imgSrc} alt={item.imgSrc} width={64} height={64} className="mb-5" />
                                    <h4 className="text-2xl font-semibold">{item.country}</h4>
                                    <h4 className='my-2 text-lg font-normal text-bluegray'>{item.paragraph}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Provide;
