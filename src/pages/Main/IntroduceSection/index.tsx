import IntroduceText from "./IntroduceText";
import SwiperProfile from "./SwiperProfile";

export default function IntroduceSection() {
    return(
        <>
            <section className="w-full py-40 px-20 bg-linear-to-b from-[#F9F9F9] to-[#C0C0C0]">
                <div className="flex justify-evenly items-start mt-10">
                    <IntroduceText />
                    <SwiperProfile />
                </div>
            </section>
        </>
    );
};
