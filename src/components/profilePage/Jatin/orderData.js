import img1 from "../../../assets/myOrders/img1.png"
import img2 from "../../../assets/myOrders/img2.png"
import img3 from "../../../assets/myOrders/img3.png"



const orderData = [
  {
    status: 'Delivered',
    date: '10th July 2024',
    imageUrl:img1,
    orderId: '45678910',
    description: 'Rosy Lip gloss | Shade: Angel | 3.9 ml ',
    rating: 5,
    buttons: [
      { text: 'View Order', class: 'text-black border-black border hover:bg-pink-100 mr-[20px] rounded-[50px]' },
      { text: 'Write A Review', class: 'text-white bg-rose-400 hover:bg-white hover:text-black border rounded-[50px]' }
    ],
    price:'₹599/-'
  },
  {
    status: 'In Progress',
    date: '10th July 2024',
    imageUrl:img2,
    orderId: '89678910',
    description: 'Dark Horse Mascara | Shade: Charcoal Black | 2.0ml',
    rating: 4,
    buttons: [
      { text: 'View Order', class: 'text-black border-black border hover:bg-pink-100 mr-[20px] rounded-[50px]' },
      { text: 'Cancel Order', class: 'text-white bg-rose-400 hover:bg-white hover:text-black border rounded-[50px]' }
    ],
    price:'₹499/-'
  },
  {
    status: 'In Progress',
    date: '10th July 2024',
    imageUrl:img3,
    orderId: '89979110',
    description: 'Premium Lipstick | Shade: Crimson Red | 5gm',
    rating: 4,
    buttons: [
      { text: 'View Order', class: 'text-black border-black border hover:bg-pink-100 mr-[20px] rounded-[50px]' },
      { text: 'Cancel Order', class: 'text-white bg-rose-400 hover:bg-white hover:text-black border rounded-[50px]' }
    ],
    price:'₹499/-'
  },
  {
    status: 'Cancelled',
    date: '18th July 2024',
    imageUrl:img1,
    orderId: '89979120',
    description: 'Premium Lipstick | Shade: Crimson Red | 50gm',
    rating: 3,
    buttons: [
      { text: 'View Order', class: 'text-black border-black border hover:bg-pink-100 mr-[20px] rounded-[50px]' },
      { text: 'Cancel Order', class: 'text-white bg-rose-400 hover:bg-white hover:text-black border rounded-[50px]' }
    ],
    price:'₹499/-'
  }
];

export default orderData;
