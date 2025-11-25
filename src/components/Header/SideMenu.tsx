import iconSidemenu from '../../assets/images/icons/iconSidemenu.svg';

export default function SideMenu() {
    return(
        <button className='p-0 flex items-center justify-center bg-transparent border-none cursor-pointer'>
            <img src = {iconSidemenu} alt="sideMenu 아이콘" />
        </button>
    );
};
