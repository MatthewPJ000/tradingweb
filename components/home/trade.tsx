import Image from 'next/image';

const Trade = () => {
    return (
        <div className="flex h-60 w-full flex-col overflow-hidden text-lg drop-shadow-sm sm:mt-4 sm:h-48 sm:flex-row">
            <div className="relative z-30 h-[40%] w-full rounded-t-xl bg-indigo-200 p-4 sm:h-full sm:w-[50%] sm:rounded-l-xl sm:rounded-r-none sm:p-8">
                <div className="h-full w-full items-center gap-4 pt-6 font-semibold text-indigo-700 sm:pt-0 flex flex-row">
                    <Image
                        src="/images/mana.svg"
                        alt="Ṁ"
                        className="inline-block text-7xl md:text-8xl"
                        width={32} // Set appropriate width in pixels
                        height={32} // Set appropriate height in pixels
                    />
                    <span className="mb-2 sm:mb-0">Compete with your friends by trading with play money...</span>
                </div>
            </div>
            <div className="relative h-[60%] w-full rounded-b-xl bg-indigo-700 p-4 align-bottom sm:h-full sm:w-[50%] sm:rounded-l-none sm:rounded-r-xl sm:p-8 sm:pl-16">
                <div className="absolute -left-0.5 bottom-0 z-20 h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 16" className="h-full text-indigo-200">
                        <path d="M0,0V16s3.03,0,3.03,0c.15-.52,.29-1.26,.27-2.19-.06-2.53-.86-4.21-1.64-5.87C.9,6.32,.15,4.73,.13,2.4,.13,1.57,.22,.7,.33,0H0Z"></path>
                    </svg>
                </div>
                <div className="h-full w-full items-end gap-4 font-semibold text-white sm:items-center flex flex-row">
                    <span className="mb-2 sm:mb-0 sm:text-right">Or trade with sweepcash and win real cash prizes!</span>
                    <Image
                        src="/images/sweepies.svg"
                        alt="S"
                        className="inline-block text-7xl md:text-8xl"
                        width={32} // Set appropriate width in pixels
                        height={32} // Set appropriate height in pixels
                    />
                </div>
            </div>
        </div>
    );
};

export default Trade;
