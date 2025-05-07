import axios from 'axios'
import { 
    CART_ADD_ITEM, 
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESSS,
    CART_SAVE_PAYMENT_METHOD
} from './../constants/cartConstants'

// export const addToCart = (id, qty) => async (dispatch, getState) => {
//     try {
//         const { data } = await axios.get(`/api/seeds/${id}`)
//         dispatch({
//             type: CART_ADD_ITEM,
//             payload: {
//                 seed: data._id,
//                 name: data.name,
//                 image: data.image,
//                 price: data.price,
//                 countInStock: data.countInStock,
//                 qty,
//             }
//         })
//     } catch (error) {
//         try {
//             const { data } = await axios.get(`/api/lendMachines/${id}`)
//             dispatch({
//                 type: CART_ADD_ITEM,
//                 payload: {
//                     seed: data._id,
//                     name: data.name,
//                     image: data.image,
//                     price: data.price,
//                     countInStock: data.quantity,
//                     qty,
//                 }
//             })
//         } catch (error) { 
//             const { data } = await axios.get(`/api/consumer/${id}`)
//             dispatch({
//                 type: CART_ADD_ITEM,
//                 payload: {
//                     seed: data._id,
//                     name: data.prod_name,
//                     image: data.image,
//                     price: data.price,
//                     countInStock: data.quantity,
//                     qty,
//                 }
//             })
//         }
//     }

//     localStorage.setItem('cartItems', JSON.stringify(getState().cartSeed.cartItems))
// }


export const addToCart = (id, qty) => (dispatch, getState) =>
     {
    // Replace this array with your actual product list from Farmer_ProductSeedScreen
    const productSeeds = [
        {
            _id: '1',
            name: 'Wheat Seeds',
            image: 'https://5.imimg.com/data5/TK/JE/MY-31990508/wheat-seeds-500x500.jpg',
            price: 150,
            countInStock: 10,
        },
        {
            _id: '2',
            name: 'Rice Seeds',
            image: 'https://gonefarmers.com/cdn/shop/products/image_7dbb3679-f62e-4d20-b7f6-36c154bb7f22_1200x1200.jpg?v=1665752959',
            price: 120,
            countInStock: 15,
        },
        {
            _id: '3',
            name: 'Corn Seeds',
            image: 'https://media.istockphoto.com/id/1308275817/photo/close-up-of-organic-yellow-corn-seed-or-maize-full-frame-background.jpg?s=612x612&w=0&k=20&c=W0hNlejbZQ41HMPd8j5IsDuS8B96JO9plGFtqsuZEd0=',
            price: 180,
            countInStock: 12,
        },
        {
            _id: '4',
            name: 'Soybean Seeds',
            image: 'https://5.imimg.com/data5/BU/NH/TX/SELLER-51900729/soya-doc-500x500.jpg',
            price: 160,
            countInStock: 8,
        },
        {
            _id: '5',
            name: 'Barley Seeds',
            image: 'https://t3.ftcdn.net/jpg/04/53/31/92/360_F_453319239_gfodTaG7yrnHPC3b8O2vJwlllIJtS3xW.jpg',
            price: 140,
            countInStock: 10,
        },
        {
            _id: '6',
            name: 'Cotton Seeds',
            image: 'https://media.sciencephoto.com/image/c0273279/800wm',
            price: 200,
            countInStock: 5,
        }
    ];

    const data = productSeeds.find(seed => seed._id === id);

    if (data) {
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                seed: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty
            }
        });

        localStorage.setItem('cartItems', JSON.stringify(getState().cartSeed.cartItems));
    } else {
        console.error("Product not found!");
    }
};


export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cartSeed.cartItems))
}

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESSS,
        payload: data
    })

    localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data
    })

    localStorage.setItem('paymentMethod', JSON.stringify(data))
}