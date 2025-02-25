import p_img1 from './p_img1.jpg'
import p_img2_1 from './p_img2.jpg'
import p_img2_2 from './p_img2_1.jpg'
import p_img2_3 from './p_img2_2.jpg'
import p_img2_4 from './p_img2_3.jpg'
import p_img3_1 from './p_img3.jpg'
import p_img3_2 from './p_img3_1.jpg'
import p_img4 from './p_img4.jpg'
import p_img5_1 from './p_img5.jpg'
import p_img5_2 from './p_img5_1.jpg'
import p_img6 from './p_img6.jpg'
import p_img7 from './p_img7.jpg'
import p_img8_1 from './p_img8.jpg'
import p_img8_2 from './p_img8_1.jpg'
import p_img9_1 from './p_img9.jpg'
import p_img9_2 from './p_img9_1.jpg'
import p_img9_3 from './p_img9_2.jpg'
import p_img9_4 from './p_img9_3.jpg'
import p_img10_1 from './p_img10.jpg'
import p_img10_2 from './p_img10_1.jpg'
import p_img11_1 from './p_img11_1.jpg'
import p_img11_2 from './p_img11_2.jpg'
import p_img11_5 from './p_img11_5.jpg'
import p_img11_4 from './p_img11_4.jpg'
import p_img12_1 from './p_img12_1.jpg'
import p_img13_1 from './p_img13_1.jpg'
import p_img13_2 from './p_img13_2.jpg'
import p_img14_1 from './p_img14_1.jpg'
import p_img15_1 from './p_img15_1.jpg'
import p_img16_1 from './p_img16_1.jpg'
import p_img17_1 from './p_img17_1.jpg'


import logo from './logo.png'
import hero_img from './hero_img.jpg'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.jpg'
import contact_img from './contact_img.jpg'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'
import save_money from './save-money.jpg'
import free_shopping from './free-shopping.jpg'
import always_active from './24-img.jpg'
import happy_sell from './happy-sell.jpg'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    stripe_logo,
    cross_icon,
    save_money,
    free_shopping,
    always_active,
    happy_sell,
}


export const products = [
    {
        _id: "aaaaa",
        name: "Iphone XR",
        description: "The Apple iPhone XR is a smartphone that was tested with the iOS 12.0. 1 operating system. This model weighs 6.9 ounces, has a 6.1 inch display, 12-megapixel main camera, and 7-megapixel selfie camera. It comes with 3GB of RAM. It was tested with 64GB of storage.",
        price: 100,
        image: [p_img1],
        category: "Apple",
        subCategory: "Phone",
        Storage: ["64GB", "128GB", "256GB"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "Iphone 13",
        description: "The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface.",
        price: 200,
        image: [p_img2_1,p_img2_2,p_img2_3,p_img2_4],
        category: "Apple",
        subCategory: "Phone",
        storage: ["128GB", "256GB", "512GB"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "Air Pod",
        description: "AirPods Pro 2 take the listening experience to a new level of individuality. Personalised Spatial Audio with dynamic head tracking 3 works with all your devices to immerse you deeper in all-around-you sound when you're listening to music, watching a movie or gaming.",
        price: 120,
        image: [p_img3_1,p_img3_2],
        category: "Apple",
        subCategory: "Other",
        storage: ["1st Gen", "2nd Gen"],
        date: 1716234545448,
        bestseller: false
    },
    {
        _id: "aaaad",
        name: "Apple Smart Watch",
        description: "Apple Watch Series 7 <br> Full screen ahead.Largest, most advanced display yet.Most durable Apple Watch ever.Breakthrough health innovations.Up to 33% faster charging.",
        price: 200,
        image: [p_img4],
        category: "Apple",
        subCategory: "Other",
        storage: ["32"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaae",
        name: "Headset",
        description: "AirPods Max. <br> Up to 20 hours of listening time on a single charge with Active Noise Cancellation or Transparency mode enabled.Up to 20 hours of movie playback on a single charge with Spatial Audio on.5 minutes of charge time provides around 1.5 hours of listening time",
        price: 250,
        image: [p_img5_1,p_img5_2],
        category: "Apple",
        subCategory: "Other",
        storage: [""],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaaf",
        name: "MAC Book Pro",
        description: "Apple MacBook Pro is a macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels. It is powered by a Core i5 processor and it comes with 12GB of RAM. The Apple MacBook Pro packs 512GB of SSD storage",
        price: 1500,
        image: [p_img6],
        category: "Apple",
        subCategory: "Laptop",
        storage: ["512GB", "1TB", "2TB"],
        date: 1716623423448,
        bestseller: true
    },
    {
        _id: "aaaag",
        name: "10th Gen Ipad",
        description: "The iPad is a touchscreen tablet PC made by Apple. The original iPad debuted in 2010. Apple has four iPad product lines: iPad, iPad mini, iPad Air and iPad Pro. All models are available in a variety of colors. They run Apple iPadOS mobile operating system (OS) and have Wi-Fi and Bluetooth connectivity.",
        price: 190,
        image: [p_img7],
        category: "Apple",
        subCategory: "Other",
        storage: ["64GB", "256GB"],
        date: 1716621542448,
        bestseller: false
    },
    {
        _id: "aaaah",
        name: "Iphone 12",
        description: "The iPhone 12 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.06 inches diagonally (actual viewable area is less).",
        price: 140,
        image: [p_img8_1,p_img8_2],
        category: "Apple",
        subCategory: "Phone",
        storage: ["64GB", "128GB", "256GB"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaai",
        name: "Iphone 16 and Iphone 16Plus",
        description: "The two-in-one 48MP Fusion camera lets you take stunning super-high-resolution images, or zoom in with the 2x optical-quality Telephoto. The Ultra Wide camera shoots extreme close-up macro photos or wider, more expansive pictures. Altogether, it's like having four lenses in your pocket.",
        price: 3598,
        image: [p_img9_1,p_img9_2,p_img9_3,p_img9_4],
        category: "Apple",
        subCategory: "Phone",
        storage: ["128GB", "256GB", "512GB"],
        date: 1716621235448,
        bestseller: true
    },
    {
        _id: "aaaaj",
        name: "Iphone 15",
        description: "iPhone 15 is powered by a hexa-core Apple A16 Bionic processor. It comes with 6GB of RAM. The iPhone 15 supports wireless charging. As far as the cameras are concerned, the iPhone 15 on the rear packs a dual camera setup featuring a 48-megapixel (f/1.6) primary camera, and a 12-megapixel (f/2.4) camera. ",
        price: 2110,
        image: [p_img10_1,p_img10_2],
        category: "Apple",
        subCategory: "Phone",
        sizes: ["128GB", "256GB", "512GB"],
        date: 1716622235448,
        bestseller: false
    },
    {
        _id: "aaaak",
        name: "Iphone 16 Pro to Max",
        description: "iPhone 16 Pro and iPhone 16 Pro Max. Built for Apple Intelligence. Durable titanium design. Camera Control. 4K 120 fps Dolby Vision. A18 Pro chip. The two-in-one 48MP Fusion camera lets you take stunning super-high-resolution images, or zoom in with the 2x optical-quality Telephoto. The Ultra Wide camera shoots extreme close-up macro photos or wider, more expansive pictures. Altogether, it's like having four lenses in your pocket.",
        price: 3950,
        image: [p_img11_1,p_img11_2,p_img11_4,p_img11_5,],
        category: "Apple",
        subCategory: "Phone",
        sizes: ["256GB", "512GB", "1TB"],
        date: 1716623345448,
        bestseller: true
    },
    {
        _id: "aaaal",
        name: "Samsung Galaxy Z-fold",
        description: "Search",
        price: 2950,
        image: [p_img12_1],
        category: "Samsung",
        subCategory: "Phone",
        sizes: ["search"],
        date: 1716623345448,
        bestseller: true
    },
    {
        _id: "aaaam",
        name: "Samsung Galaxy S10 plus",
        description: "Search",
        price: 1950,
        image: [p_img13_1,p_img13_2],
        category: "Samsung",
        subCategory: "Phone",
        sizes: ["search"],
        date: 1716623345448,
        bestseller: true
    },
    {
        _id: "aaaan",
        name: "Xiaomi",
        description: "Search",
        price: 1950,
        image: [p_img14_1],
        category: "Other",
        subCategory: "Phone",
        sizes: ["search"],
        date: 1716623345448,
        bestseller: true
    },
    {
        _id: "aaaao",
        name: "Google pixel",
        description: "Search",
        price: 1950,
        image: [p_img15_1],
        category: "Other",
        subCategory: "Phone",
        sizes: ["search"],
        date: 1716623345448,
        bestseller: true
    },
    {
        _id: "aaaaop",
        name: "Huawei Honor 8X",
        description: "Search",
        price: 1950,
        image: [p_img16_1],
        category: "Other",
        subCategory: "Phone",
        sizes: ["search"],
        date: 1716623345448,
        bestseller: false
    },
    {
        _id: "aaaaoq",
        name: "Huawei Y9",
        description: "Search",
        price: 1950,
        image: [p_img17_1],
        category: "Other",
        subCategory: "Phone",
        sizes: ["search"],
        date: 1716623345448,
        bestseller: false
    },


  ]
