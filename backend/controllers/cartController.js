import userModel from "../models/userModel.js";


// add to user cart
const addToCart = async (req, res) => {
    try {
        
        const { userId, itemId, storage } = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        if (cartData[itemId]) {
            if (cartData[itemId][storage]) {
                cartData[itemId][storage] += 1
            }
            else {
                cartData[itemId][storage] = 1
            }
        }else {
            cartData[itemId] = {}
            cartData[itemId][storage] = 1
        }

        await userModel.findByIdAndUpdate(userId, {cartData})

        res.json({ success: true, message: 'Product added to cart' })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
        
    }
}

// update user cart
const updateCart = async (req, res) => {
     try {
        
        const { userId, itemId, storage, quantity } = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        cartData[itemId][storage] = quantity

        await userModel.findByIdAndUpdate(userId, {cartData})
        res.json({ success: true, message: 'Cart Updated' })

     } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
     }
}

// get user cart data
const getUserCart = async (req, res) => {

    try {
        
        const { userId } = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        res.json({ success: true, cartData});

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }

}

export {addToCart, updateCart, getUserCart};