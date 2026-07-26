import { Link } from "react-router-dom";
import iconSearch from '../../assets/images/icons/iconSearch.png';
import { sideMenuData, quickButtons } from "./menuData";

interface MenuPanelProps {
    isOpen: boolean;
};

export default function MenuPanel({ isOpen }: MenuPanelProps) {
    return(
        <div
            /* h-[calc(100dvh-7.25rem)]: 뷰포트 높이 - 헤더 높이(py-6 + 로고 h-17 = 116px) */
            className={`absolute left-0 top-full w-[471px] bg-white
                        flex flex-col h-[calc(100dvh-7.25rem)] overflow-y-auto
                        transition-all duration-1000 ease-in-out
                        ${isOpen
                            ? 'opacity-100 translate-y-0 pointer-events-auto'
                            : 'opacity-0 -translate-y-5 pointer-events-none'}`}
        >
            <ul className="flex flex-col gap-15 text-left ml-8 mt-17">
                {sideMenuData.map((menu) => (
                    <li key={menu.title}>
                        <Link
                            to= {menu.href}
                            className="text-2xl font-bold text-[#111] hover:text-[#941111] transition-colors duration-300"
                        >
                            {menu.title}
                        </Link>
                    </li>
                ))}
            </ul>

            <form
                className="relative flex justify-center items-center mt-auto pt-10"
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    type="text"
                    placeholder="SEARCH"
                    className="w-[419px] h-12 px-4 bg-[#EEEEEE] text-[#111] text-xl font-medium border-none outline-none"
                />
                <button type="submit" className="absolute top-1/2 right-9 -translate-y-1/2 w-7 h-7 cursor-pointer">
                    <img src= {iconSearch} alt="검색" />
                </button>
            </form>

            <ul className="flex justify-center items-center gap-3.5 my-6">
                {quickButtons.map((label, i) => (
                    <li
                        key={i}
                        className="px-3.5 py-1 rounded-[10px] bg-[#111] text-white text-[10px] cursor-pointer"
                    >
                        {label}
                    </li>
                ))}
            </ul>
        </div>
    );
};
