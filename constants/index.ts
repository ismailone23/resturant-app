import { draweritemtype, routetype } from './types';

export const USER_TOKEN = 'usertoken'
export const routes: routetype[] = [
    {
        name: 'home',
        title: 'Home',
        header: 'My Home',
        icon: 'home',
        tabBarBadge: 0
    },
    {
        name: 'search',
        title: 'Search',
        header: 'Search Food',
        icon: 'search',
        tabBarBadge: 0
    },
    {
        name: 'cart',
        title: 'Cart',
        header: 'Items in Cart',
        icon: 'shopping-bag',
        tabBarBadge: 9,
    },
    {
        name: 'create',
        title: 'Create',
        header: 'Create Food Display',
        icon: 'plus-square',
        tabBarBadge: 0
    },
]
export const icons = {
    search: "search",
    cart: "shopping-bag",
    create: "plus-square",
    home: "home"
}

export const draweritems: draweritemtype[] = [
    {
        icon: 'home',
        title: 'Home',
        name: 'home'
    },
    {
        icon: 'box',
        title: 'Orders',
        name: 'orders'
    },
    {
        icon: 'bookmark',
        title: 'Saved Food',
        name: 'saved'
    },
    {
        icon: 'user',
        title: 'Profile',
        name: 'profile'
    }
]