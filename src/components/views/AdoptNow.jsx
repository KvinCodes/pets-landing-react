import pets4 from '../../assets/images/4.png'
import pets2 from '../../assets/images/2.png'
import pets3 from '../../assets/images/3.png'
import paws2 from '../../assets/images/paws2.png'
import pets5 from '../../assets/images/5.png'
import pets1 from '../../assets/images/1.png'

const AdoptNow = () => {
    return (
        <section id="adopt"
            className="flex flex-col justify-center font-bold text-white items-center px-10 md:px-20 pt-12 h-full font-raleway">
            <h1 className="text-3xl text-black mb-3 md:mb-10">Adopt Now</h1>
            <div className="flex flex-col md:flex-row justify-center items-center pt-4 md:pb-2">
                <div className="flex flex-col md:flex-row justify-center items-center md:justify-between bg-yellows w-full md:w-1/3 p-5 mx-2">
                    <div className="md:pl-5 md:pt-5 flex flex-col items-center md:items-start">
                        <h1 className="text-xl">Archie and siblings</h1>
                        <button className="text-center border-2 py-2 px-3 mt-3 hover:bg-black hover:bg-opacity-30">
                            Adopt now
                        </button>
                    </div>
                    <img src={pets4} className="w-2/3 md:w-1/2 pt-4 md:pt-0" alt="" />
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center md:justify-between bg-purples w-full md:w-1/3 p-5 mx-2">
                    <div className="md:pl-5 md:pt-5 flex flex-col items-center md:items-start">
                        <h1 className="text-xl">Archie and siblings</h1>
                        <button className="border-2 py-2 px-3 mt-3 hover:bg-black hover:bg-opacity-30">
                            Adopt now
                        </button>
                    </div>
                    <img src={pets2} className="w-2/3 md:w-1/2 pt-4 md:pt-0" alt="" />
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center md:justify-between bg-greens w-full md:w-1/3 p-5 mx-2">
                    <div className="md:pl-5 md:pt-5 flex flex-col items-center md:items-start">
                        <h1 className="text-xl">Archie and siblings</h1>
                        <button className="border-2 py-2 px-3 mt-3 hover:bg-black hover:bg-opacity-30">
                            Adopt now
                        </button>
                    </div>
                    <img src={pets3} className="w-2/3 md:w-1/2 pt-4 md:pt-0" alt="" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center md:pt-2 pb-4">
                <div className="flex flex-col md:flex-row justify-center items-center md:justify-between bg-reds w-full md:w-1/2 p-5 mx-2">
                    <div className="md:pl-5 md:pt-5 flex flex-col items-center md:items-start">
                        <h1 className="text-2xl">Archie and siblings</h1>
                        <button className="border-2 py-2 px-3 mt-3 hover:bg-black hover:bg-opacity-30">
                            Adopt now
                        </button>
                        <img src={paws2} className="w-1/2 pt-4 hidden md:block" alt="" />
                    </div>
                    <img src={pets1} className="w-2/2 md:w-1/2 pt-4 md:pt-0" alt="" />
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center md:justify-between bg-indigos w-full md:w-1/2 p-5 mx-2">
                    <div className="md:pl-5 md:pt-5 flex flex-col items-center md:items-start">
                        <h1 className="text-2xl">Archie and siblings</h1>
                        <button className="border-2 py-2 px-3 mt-3 hover:bg-black hover:bg-opacity-30">
                            Adopt now
                        </button>
                        <img src={paws2} className="w-1/2 pt-4 hidden md:block" alt="" />
                    </div>
                    <img src={pets5} className="w-2/2 md:w-1/2 pt-4 md:pt-0" alt="" />
                </div>
            </div>
        </section>
    )
};

export default AdoptNow;