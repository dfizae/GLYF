import { Link } from "react-router-dom";
import MainLogo from "../../assets/logo/MainLogo.svg";

export default function Logo() {
    return(
        <>
            <Link to= "/" className="block">
                <img 
                   className="w-auto h-17 object-contain" 
                   src= {MainLogo} 
                   alt="GLYF Main Logo"
                />
            </Link>
        </>
    );
};
