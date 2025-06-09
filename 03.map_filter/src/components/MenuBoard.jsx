import React, { useState } from 'react'
import menuData from '../assets/data/coffee_menu.json'
import MenuItem from './MenuItem';
import MenuNav from './MenuNav';

const MenuBoard = () => {

    console.log(menuData);
    
    const [menus, setMenus] = useState(menuData);

    const menuFilter = (category) => {
        // alert("클릭");
        console.log('선택한 메뉴:', category);
        
        let filterData = menuData.filter((item)=>item.category === category);

        console.log(filterData);

        if(category === 'All') {
            // menus는 가장 최근에 조회한 정보가 저장되어 있음
            // 'All'을 누르면 최근 정보로만 조회
            // import한 menuData로 초기화해줘야 전체 메뉴가 출력된다.
            setMenus(menuData);
        } else {
            setMenus(filterData);
        }

    }

    return (
        <div className='menu-board'>
            <h1>메뉴판</h1>

            <MenuNav onFilter={menuFilter}/>

            <div className='menu-list'>
                {menus.map((menu, index) => (
                    <MenuItem key="index" info={menu}/>
                ))}
            </div>
        </div>
    )

}

export default MenuBoard