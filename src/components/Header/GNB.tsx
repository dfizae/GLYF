import { Link } from "react-router-dom";
import { menuDate } from "./menuData";

export default function GNB() {
    
    return(
        <>
            <ul className="flex gap-8">
                {menuDate.map((items, i) => (
                    <li key={i} >
                        <Link to={items.href} target={items.target} rel={items.rel}>
                            <img src= {items.icon} alt= {items.alt} />
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};
