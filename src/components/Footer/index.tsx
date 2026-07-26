import FooterLogo from '../../assets/logo/FooterLogo.png';
import { footerMenus } from './footerData';

export default function Footer() {
    return(
        <>
            <footer className="w-full bg-white">
                <div className="w-[92%] max-w-450 mx-auto pt-38">
                    <div className="flex justify-between items-start pb-3 border-b-2 border-[#787878]">
                        <div className="flex flex-col gap-15">
                            <img src= {FooterLogo} alt="푸터 로고" className="w-auto h-12 self-start object-contain" />
                            <span className="text-[#787878] text-sm">© 2024 Beaubble, Inc. All Rights Reserved.</span>
                        </div>

                        <div className="flex">
                            {footerMenus.map((menu) => (
                                <ul key={menu.title} className="flex flex-col gap-4 w-72 text-sm font-semibold">
                                    <li className="mb-1 text-xl">{menu.title}</li>
                                    {menu.items.map((item) => (
                                        <li key={item.label}>
                                            <a
                                                href= {item.href}
                                                className="text-[#111] hover:text-[#840749] transition-colors duration-100"
                                            >
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </div>

                    <div className="py-8">
                        <p className="text-xs text-[#787878] leading-5">
                            (주)뷰블코리아 | 대표자: Jun Young Lim, 임준영 | 사업자등록번호: 813-81-02325 | 서울 성동구 연무장5가길 7 성수역 현대테라스타워 | 대표번호: 1522-6653 (유선상담불가) | 통신판매업신고:<br/>2024-서울성동-0398 사업자정보확인 | 개인정보관리책임자: 임준영
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};
