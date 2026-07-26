import { useState, useEffect } from "react";
import SideMenu from "./SideMenu";
import Logo from "./Logo";
import GNB from "./GNB";
import MenuPanel from "./MenuPanel";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 사이드메뉴가 열려 있는 동안 body 스크롤 잠금
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);

    return(
        <>
            <header className="fixed top-0 left-0 z-50 w-full flex items-center justify-between py-6 px-7 bg-white">
                <div>
                    <SideMenu onClick={() => setIsMenuOpen(!isMenuOpen)} />
                </div>

                <div className="ml-50">
                    <Logo/>
                </div>

                <nav>
                    <GNB />
                </nav>

                <MenuPanel isOpen={isMenuOpen} />
            </header>

            <div
                onClick={() => setIsMenuOpen(false)}
                className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300
                            ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            />
        </>
    );
};
