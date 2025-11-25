import iconStore from '../../assets/images/icons/iconStore.svg';
import iconUser from '../../assets/images/icons/iconUser.svg'
import iconCart from '../../assets/images/icons/iconCart.svg';
import iconDeliver from '../../assets/images/icons/iconDeliver.svg';

export interface menuItem {
    title: string;
    icon: string;
    href: string;
    alt: string;
    target: string;
    rel: string;
};


export const menuDate : menuItem[] = [
        {title: "store", icon: iconStore, href: "#", alt: "쇼핑몰 링크", target: "_blank", rel: "noopener noreferrer"},
        {title: "profile", icon: iconUser, href: "#", alt: "내 프로필 링크", target: "_blank", rel: "noopener noreferrer"},
        {title: "purchase", icon: iconCart, href: "#", alt: "장바구니 링크", target: "_blank", rel: "noopener noreferrer"},
        {title: "delivery", icon: iconDeliver, href: "#", alt: "배송조회 링크", target: "_blank", rel: "noopener noreferrer"},
];