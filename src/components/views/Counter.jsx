import { useState } from 'react'
import Navbar from './Nabvar'
import Footer from './Footer';

const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        setCount(count + 2);
    }

    const decrementCounter = () => {
        setCount(count - 2);
    }

    const resetCounter = () => {
        setCount(0);
    }

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center p-6 py-36 space-y-6 bg-slate-400 rounded-lg shadow-xl mx-auto mt-10 w-auto">
                <h2 className="text-3xl font-bold text-gray-800">CONTADOR</h2>
                <p className="text-white text-2xl font-bold">Este contador permite incrementar, decrementar de 2 en 2 y resetear el valor del contador.</p>

                <div className="flex flex-col items-center justify-center space-y-4">
                    <p className="text-2xl font-semibold text-gray-700">Contador: <span className="text-4xl font-bold text-indigo-600">{count}</span></p>

                    <div className="flex space-x-4">
                        <button
                            onClick={incrementCounter}
                            className="px-4 py-2 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
                        >
                            Incrementar
                        </button>

                        <button
                            onClick={decrementCounter}
                            className="px-4 py-2 bg-red-500 text-white font-bold rounded-lg shadow-lg hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
                        >
                            Decrementar
                        </button>

                        <button
                            onClick={resetCounter}
                            className="px-4 py-2 bg-yellow-500 text-white font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
                        >
                            Resetear
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>



    )
};

export default Counter;