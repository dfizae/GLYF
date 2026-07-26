import SocialSwiper from './SocialSwiper';
import iconInstagram from '../../../assets/images/icons/iconInstagram.png';

export default function SocialSection() {
    return(
        <>
            <section className="relative w-full py-8 pb-19 flex flex-col items-center text-center bg-[#111] text-white">
                <h1 className="text-6xl font-bold">Social</h1>
                <h1 className="text-5xl font-bold mt-17 leading-tight">
                    여러분의 하루,<br/>GLYF과 함께 하세요.
                </h1>

                <div className="mt-12">
                    <a href="#" title="GLYF 인스타그램">
                        <img
                            src= {iconInstagram}
                            alt="글맆 인스타그램 링크 아이콘"
                            className="transition-transform duration-700 ease-in-out hover:rotate-360"
                        />
                    </a>
                </div>

                <SocialSwiper />
            </section>
        </>
    );
};
