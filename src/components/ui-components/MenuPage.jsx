import { useParams } from 'react-router-dom';
import MenuItem from './MenuItem';
import Loader from '../core/Loader';
import useFetchMenu from '../../hooks/useFetchMenu';
// import {useEffect, useState} from 'react'; 
// import {useFetch} from '../hooks/useFetch';


function MenuPage() {
    const { restaurantId } = useParams();
    const { menu, loading, error } = useFetchMenu(restaurantId);
    // const {data: menuData, loading: menuLoading} = useFetchMenu(menuId);
    // const {data: itemsData, loading: itemsLoading} = useFetch(`http://localhost:3000/api/menu/${menuId}/items`);

    if (loading) return <Loader />;
    if (error) return <div className="error">Error: {error}</div>;


    return (
        <div className="menupage">
          <h2>Menu</h2>
          <div className="menu-list">
            {menu.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>
    );
}

export default MenuPage;
