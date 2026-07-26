import iconSidemenu from '../../assets/images/icons/iconSidemenu.svg';

interface SideMenuProps {
    onClick: () => void;
};

export default function SideMenu({ onClick }: SideMenuProps) {
    return(
        <button
            onClick={onClick}
            className='p-0 flex items-center justify-center bg-transparent border-none cursor-pointer'
        >
            <img src = {iconSidemenu} alt="sideMenu 아이콘" />
        </button>
    );
};
