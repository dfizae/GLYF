import { Link } from "react-router-dom";

export default function Logo() {
    return(
        <>
            <Link to= "/" className="block">
                <img src="#" alt="GLYF Logo" className="w-auto h-17 object-contain" />
            </Link>
        </>
    );
};
