export interface FooterMenu {
    title: string;
    items: { label: string; href: string }[];
}

export const footerMenus: FooterMenu[] = [
    {
        title: 'GLYF',
        items: [
            {label: 'SHOP', href: '#'},
            {label: 'COMMUNITY', href: '#'},
            {label: 'ABOUT', href: '#'},
        ],
    },
    {
        title: 'SUPPORT',
        items: [
            {label: '배송조회', href: '#'},
            {label: '이용약관', href: '#'},
            {label: '개인정보처리방침', href: '#'},
        ],
    },
];
