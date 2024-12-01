import logo from '../../assets/images/catlogo.png'

const Navbar = () => {
    return (
        <header className="text-gray-600 body-font bg-greens font-raleway fixed top-0 left-0 right-0">
            <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={ logo } className="w-20 md:w-28" alt=""/>
                </a>
                <nav
                    className="md:mr-auto md:ml-4 md:pl-4 md:border-l md:border-white text-white font-bold flex flex-wrap items-center text-sm md:text-lg justify-center">
                    <a className="mr-5 hover:text-[#594eff]" href="#">Home</a>
                    <a className="mr-5 hover:text-[#594eff]" href="#adopt">Adopt Now</a>
                    <a className="mr-5 hover:text-[#594eff]" href="#services">Our Services</a>
                    <a className="mr-5 hover:text-[#594eff]" href="#reviews">Reviews</a>
                </nav>
                <button
                    className="inline-flex items-center bg-indigos text-white font-bold border-0 py-2 px-4 focus:outline-none hover:bg-[#594eff] text-sm md:text-base mt-2 md:mt-4">Register
                    now
                </button>
            </div>
        </header>
    )
};

export default Navbar;