import SideMenu from "./SideMenu";
import Logo from "./Logo";
import GNB from "./GNB";

export default function Header() {
    return(
        <>
            <header className="fixed top-0 left-0 z-50 w-full flex items-center justify-evenly">
                <div>
                    <SideMenu/>
                </div>

                <div>
                    <Logo/>
                </div>

                <nav>
                    <GNB />
                </nav>
            </header>
        </>
    );
};
