import SideMenu from "./SideMenu";
import Logo from "./Logo";
import GNB from "./GNB";

export default function Header() {
    return(
        <>
            <header className="fixed top-0 left-0 z-50 w-full flex items-center justify-between py-8 px-7">
                <div>
                    <SideMenu/>
                </div>

                <div className="ml-50">
                    <Logo/>
                </div>

                <nav>
                    <GNB />
                </nav>
            </header>
        </>
    );
};
