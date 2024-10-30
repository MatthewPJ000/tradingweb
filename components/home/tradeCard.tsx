// components/TradeCard.tsx
import React from 'react';
import Image from 'next/image';

const TradeCard: React.FC = () => {
    return (
        <div className="justify-between rounded-lg flex flex-row">
            <div className="w-full gap-2 sm:max-w-lg flex flex-col">
                <h1 className="mb-4 text-4xl">Trade on politics &amp; more</h1>
                <div className="text-lg">
                    <div className="mb-2">The largest social prediction market.</div>
                    <div className="mb-2">Get real-time odds on politics, tech, and sports. Win cash prizes for your predictions!</div>
                </div>
                <button 
                    type="button" 
                    className="inline-flex items-center justify-center 
                        rounded-lg shadow-lg 
                        transition-all duration-300 ease-in-out 
                        hover:shadow-xl 
                        disabled:cursor-not-allowed text-center 
                        px-8 py-4 text-lg font-bold 
                        disabled:bg-gray-300 text-white 
                        bg-gradient-to-r hover:from-green-500 
                        hover:to-blue-500 
                        from-blue-400 to-blue-600 
                        mt-4"
                >
                    Start Predicting
                </button>

                <div className="text-ink-500 my-1.5 justify-center text-sm flex flex-row">
                    Get
                    <div className="coin-offset items-center whitespace-nowrap mx-1 flex flex-row">
                    <Image
                        src="/images/mana.svg"
                        alt="Ṁ"
                        width={16} // Set to a size you prefer (1em is approximately 16px)
                        height={16}
                        className="inline-block mr-1" // Tailwind class for margin-right
                        />
                            1,000
                        </div>
                        and
                        <div className="coin-offset items-center whitespace-nowrap mx-1 flex flex-row">
                            <Image
                            src="/images/sweepies.svg"
                            alt="S"
                            width={16}
                            height={16}
                            className="inline-block mr-1"
                            />3.00
                                    </div>
                                    to start trading!
                                </div>
                            </div>
                            <div className="mx-auto hidden h-full sm:flex flex flex-col">
                            <Image
                            src="/images/manipurple.png" // Adjusted to include leading slash
                            alt="manifold logo"
                            width={220}
                            height={300} // Replace with a specific height if desired
                            className="my-auto"
                        />
            </div>
        </div>
    );
};

export default TradeCard;
