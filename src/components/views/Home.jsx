import pets3 from '../../assets/images/dog3.png'
import pets5 from '../../assets/images/dog5.png'
import cat1 from '../../assets/images/cat1.png'

const Home = () => {
    return (
        <section class="flex flex-col justify-center items-center mt-40 md:mt-32">
        <div class="flex flex-col justify-center items-center pt-8">
            <h1 class="font-merriweather text-center text-2xl md:text-4xl pb-4">A smarter pet pharmacy</h1>
            <p class="font-medium text-center">HUMAN-GREAT QUALITY. WALLET-FRIENDLY PRICES.</p>
            <button
                class="py-1 px-2 md:py-2 md:px-4 text-sm md:text-base text-white font-medium bg-indigos hover:bg-[#594eff] mt-2 md:mt-5 mb-2 md:mb-0">START
                YOUR PLAN</button>
        </div>
        <div class="flex flex-row w-full justify-center items-center mt-2">
            <img src={pets3} class="w-1/3 md:w-1/4 hidden md:block" alt=""/>
            <img src={pets5} class="w-1/3 md:w-1/5 " alt=""/>
            <img src={cat1} class="w-1/3 md:w-1/5" alt=""/>
        </div>
    </section> 
    )
};

export default Home;