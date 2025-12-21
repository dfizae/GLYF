import { recommendData } from "./recommendData";

export default function RecommendSection() {
    return(
        <>
            <section className="relative w-full py-13 flex items-center justify-center flex-col bg-[#F1F1F1]">
                <h1 className="text-6xl font-bold mb-17">Recommend</h1>
                <div className="absolute top-19 right-[22.5%] flex gap-5 items-center">
                    <span className="font-extrabold">Go To Shop</span>
                    <img src="/src/assets/images/icons/iconCircledRightBlack.svg" alt="바로가기 창" />
                </div>
                <ul className="flex gap-38">
                    {recommendData.map((data) => (
                    <li className="flex flex-col items-center">
                        <img src= {data.src} alt= {data.alt} />
                        <p className="text-base font-semibold mt-5">{data.title}</p>
                        <div className="flex gap-3">
                            <span className="py-1 px-2 text-white bg-[#941111] rounded-md text-xs font-extrabold">{data.discount}</span>
                            <span className="text-base font-extrabold">{data.currentPrice}</span>
                            <span className="text-base font-extrabold line-through text-gray-400">{data.realPrice}</span>
                        </div>
                    </li>
                    ))}       
                </ul>
            </section>
        </>
    );
};
