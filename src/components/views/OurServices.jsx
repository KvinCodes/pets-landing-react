import foto1 from '../../assets/images/foto1.png'

const OurServices = () => {
    return (
        <section id="services" className="flex flex-col md:flex-wrap md:flex-row items-center pt-5 pb-4 px-10 md:px-20 mb-5 mt-5 font-raleway">
        <div className="w-full flex items-center justify-center order-1 md:order-1">
            <h1 className="text-3xl text-black font-bold mb-4 md:mb-10">Our Services</h1>
        </div>
        <div className="flex flex-wrap justify-center w-full md:w-2/3 p-5 order-3 md:order-2">
            <div className="w-full md:w-1/2">
                <div className="flex flex-col justify-center items-center py-6 px-6 ">
                    <h1 className="font-bold text-2xl">#01</h1>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, aspernatur at
                        ratione ex iusto
                        debitis?
                    </p>
                </div>
            </div>
            <div className="w-full md:w-1/2">
                <div className="flex flex-col justify-center items-center py-6 px-6">
                    <h1 className="font-bold text-2xl">#02</h1>
                    <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima harum dolor
                        aliquam expedita id
                        amet.
                    </p>
                </div>
            </div>
            <div className="w-full md:w-1/2">
                <div className="flex flex-col justify-center items-center py-6 px-6">
                    <h1 className="font-bold text-2xl">#03</h1>
                    <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, dolor ut nisi
                        iste error in!</p>
                </div>
            </div>
            <div className="w-full md:w-1/2">
                <div className="flex flex-col justify-center items-center py-6 px-6">
                    <h1 className="font-bold text-2xl">#04</h1>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto
                        nesciunt dolorum, tenetur distinctio quisquam.</p>
                </div>
            </div>
        </div>
        <div className="flex flex-row w-full md:w-1/3 p-5 order-2 md:order-3">
            <img src={foto1} className="w-full" alt=""/>
        </div>
    </section>
    )
};

export default OurServices;