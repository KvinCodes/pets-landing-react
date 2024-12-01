import { images } from '../../config/images'

const Reviews = () => {
    return (
        <section id="reviews" className="flex flex-col items-center justify-center px-6 md:px-20 pb-12 w-full font-raleway">
            <div className="w-full flex items-center justify-center mb-10">
                <h1 className="text-3xl text-black font-bold">Reviews</h1>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="w-full md:w-1/2 bg-yellows py-6 px-6 md:mr-3 mb-2 md:mb-0">
                    <div>
                        <i className="fa-solid fa-quote-right text-3xl"></i>
                        <p className="text-sm md:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sunt quae aliquid ratione
                            exercitationem, pariatur harum itaque animi saepe aliquam nam beatae nisi natus tenetur ab
                            explicabo
                            mollitia voluptates. Accusamus.</p>
                    </div>
                    <div className="flex flex-row pt-5">
                        <img src={images.icons.person} className="w-20 px-4" alt="" />
                        <div>
                            <h1 className="font-bold">Lorem, ipsum.</h1>
                            <h2>Lorem, ipsum dolor.</h2>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 bg-yellows py-6 px-6 md:ml-3">
                    <div>
                        <i className="fa-solid fa-quote-right text-3xl"></i>
                        <p className="text-sm md:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sunt quae aliquid ratione
                            exercitationem, pariatur harum itaque animi saepe aliquam nam beatae nisi natus tenetur ab
                            explicabo
                            mollitia voluptates. Accusamus.</p>
                    </div>
                    <div className="flex flex-row pt-5">
                        <img src={images.icons.person} className="w-20 px-4" alt="" />
                        <div>
                            <h1 className="font-bold">Lorem, ipsum.</h1>
                            <h2>Lorem, ipsum dolor.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Reviews;