import { category, draweritemtype, routetype } from './types';

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
export const dumydata: category[] = [
    {
        id: '1',
        title: 'Pizza',
        subtitle: '',
        categoryimage: 'https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg'
    },
    {
        id: '2',
        title: 'Burger',
        subtitle: '',
        categoryimage: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg'
    },
    {
        id: '3',
        title: 'Kacchi',
        subtitle: 'Polao Chicken, Polao with chicken, Biryani',
        categoryimage: 'https://images.pexels.com/photos/5695615/pexels-photo-5695615.jpeg'
    },
    {
        id: '4',
        title: 'Fries',
        subtitle: 'French Fries',
        categoryimage: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg'
    },
    {
        id: '5',
        title: 'Steak',
        subtitle: 'Beef, Beef Steak',
        categoryimage: 'https://images.pexels.com/photos/236887/pexels-photo-236887.jpeg'
    },
    {
        id: '6',
        title: 'Cake',
        subtitle: 'Cake, Sweets, Pastry Cake',
        categoryimage: 'https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg'
    },
    {
        id: '7',
        title: 'Sweets',
        subtitle: 'Motichur, Sweets, Laddu',
        categoryimage: 'https://wellfoodonline.com/wp-content/uploads/2020/10/Motichur-Laddu-1.jpg'
    },
    {
        id: '8',
        title: 'Chocolates',
        subtitle: 'Chocolates, Dairy Milk, Kitkat',
        categoryimage: 'https://w4s8p5t8.rocketcdn.me/wp-content/uploads/2019/01/vegan-milk-chocolate-recipe.jpg'
    },
    {
        id: '9',
        title: 'Breads',
        subtitle: 'Breads, Milk, Eggs',
        categoryimage: 'https://blog.naturesbasket.co.in/wp-content/uploads/2018/10/A-World-of-Breads.jpg'
    },
    {
        id: '10',
        title: 'Vegetables',
        subtitle: 'Vegetables, Veg, Potato, Tomato',
        categoryimage: 'https://assistinghands.com/6/wp-content/uploads/sites/29/2019/01/Eat-Vegetables.jpg'
    }
]