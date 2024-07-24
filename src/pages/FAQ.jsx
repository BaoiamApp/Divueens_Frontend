import React, { useState } from 'react'
import { FaRegCircleQuestion } from 'react-icons/fa6';
import { FaCircleMinus, FaCirclePlus } from 'react-icons/fa6';


export const Faqs = ({ question, active, answer, onClick }) => {
    const toggle = () => {
        onClick(question);
    }

    return (
            <li className='py-3 w-full h-fit'>
                <div className='flex justify-between' onClick={toggle}>
                    <h2 className={`w-70% max-sm:w-72 font-semibold hover:text-rose-500 cursor-pointer ${active ? 'text-rose-500' : 'text-[#000000]'}`} >{question}</h2>
                    <button className="text-rose-500">
                        {active ? <FaCircleMinus  /> : <FaCirclePlus />}
                    </button>
                </div>
                <p className={`text-start py-3 mb-3 leading-tight ${active ? 'block' : 'hidden'} text-[#3f3c3e]`}>{answer}</p>
            </li>
    )
}


function FaqsPage() {
 
const faqs = [
  {
      question: "HOW DO I PLACE ORDER ON DIVUEENS?",
      answer: "Select your desired products at Divueens and add them to the cart. Click on “Proceed To Buy” and fill in your details such as your name, phone number, the address you want your order to be shipped and proceed further. Select the mode of payment for your order and click on “Place My Order.”",
  },
  {
      question: "HOW CAN I TRACK MY ORDER?",
      answer: <div><p className='mb-2'>You can track your order from the “My Order” section. You can instantly check the status of your order and all the past orders. Click on the order you want to track and select the “Track” option. It will show you the current status of your order.</p>
      <p >Some orders might take time to show the current status. Please wait for 6 hours after the order has been placed and check again to track and know the current status of your order.</p>
      </div>
    },   
  {
      question: " HOW DO I CANCEL ORDER ON DIVUEENS?",
      answer: "Once you have placed an order, go to the “My Order” section and click on the order that you want to cancel. Once the order details show, there will be an option of “Cancel Order”. Click on it and choose a reason as to why you are cancelling the order from the list of reasons given or choose “Others” if your reason to cancel the order is not provided. Proceed further and your order will be cancelled. You can visit Divueens page and shop for your desired product again."
  },
  {
      question: "HOW CAN I CHANGE ADDRESS OR PHONE NUMBER IN ORDER?",
      answer: <div><p className='mb-2'>If you wish to change the shipping address or phone number, you can do it through the “My Order” section before the products have been dispatched. You can see the edit icon on the order detail page. Fill in the new shipping address or the phone number and save it.</p>
      <p> Please note that you cannot change the shipping address once the order has been shipped.</p>
      </div>
  },    
  {
      question: "HOW CAN I GET FREE ORDER DELIVERY?",
      answer: "You can get free delivery on orders above Rs:499."
  },
  {
      question: "CAN I ASK FOR FASTEST DELIVERY REQUEST?",
      answer: <div><p className='mb-2'>At Divueens we try to get your orders as soon as possible but if you want your order to reach you at your earliest then you can opt for the fastest delivery option. While you are placing an order, the date of the delivery is shown to you. You can opt for the date that you want your order to be shipped on and pay an amount that will be charged to you on your order depending on the day you select.</p>
      <p> You can choose a date for fastest delivery and not pay the extra charges that are charged if you become a valued member at Divueens.</p>
      </div>
  },
  {
      question: "CAN I ORDER SOME PRODUCT AS A GIFT?",
      answer: "Yes, you can order products and send them as a gift to your friends or loved ones. After you choose the products you want to buy and proceed towards buying them, you will get an option of “Send as Gift”. Select that option and add the shipping address you want it to be delivered and the name of the receiver and proceed to the payment option."
  },
  {
      question: "IF I GET ANY DEFECTIVE PRODUCT HOW WOULD I CONNECT WITH YOU?",
      answer: "If you get a defective product you can take a picture and a video of the defective product and can connect with us from the homepage of Divueens where we provide you with our customer care email address. You can connect with us through our provided email and can also return the product that was defective by following the steps explained in the “How Would I Return The Product” section. "
  },
  {
      question: "HOW WOULD I RETURN THE PRODUCT ?",
      answer: <div>
              <p>Returning of the products ordered from Divueens is only available for products that are:</p>
              <ol >
              <li>a. Damaged</li>
              <li>b. Defective</li>
              <li>c. If the wrong products were delivered</li>
              <li>d. The product that was ordered was missing</li> 
              </ol>
              <p className='mb-2'>If you want to return the product due to above mentioned reasons, click on the “My Order” section and select the order that you want to return. Select “Return This Order” and select the reason as to why you are returning it from the list of reasons provided. Proceed further and share the image or the video of the product for our reference. Once your request is received, we will initiate the pick up of the item from you. Return the product to the person who comes to pick the way you received it with all the packaging.</p>
              <p>Returns will not be accepted under the following conditions:</p>
              <ol>
              <li>a. If the request is initiated after 10 days of order delivery</li>
              <li>b. If the product is used by the customer</li>
              <li>c. If the product is damaged because of misuse or overuse by the customer</li>
              <li>d. The product is the promotional product</li>
              <li>e. Serial number is tampered</li>
              <li>f. If the packaging misses certain things that were given when the order was delivered such as price tags, labels, original packaging, freebies and other accessories that were given with the packaging</li> 
              </ol>
      </div>
  },
  {
      question: "WHAT SHOULD I DO IF I GET WRONG OR DAMAGE PRODUCT?",
      answer: "You can raise your concerns by sending us an email using our customer care email address that is provided in the “Contact Us”. Send us the image or a video if the product is damaged. Also you can return the product by following the steps that have been mentioned in our “How Would I Return The Product?"
  },
  {
    question: " HOW DO I SIGN UP FOR A DIVUEENS ACCOUNT?",
    answer: "Click on the “Sign In/Sign Up” page. Fill in the required details such as your name, phone number, shipping address, email address, etc. and create a password for your account. Proceed further and create your account and enjoy your hassle free shopping."
},
{
  question: "HOW CAN I UPDATE MY SHIPPING ADDRESS?",
  answer: "If you want to update your shipping address, you can click on “My Profile” and select the “Edit” option. You can easily manage your profile and can update your shipping address."
},
{
  question: "HOW CAN I RECOVER MY ACCOUNT IN CASE OF FORGOTTEN PASSWORD?",
  answer: "In case you have forgotten your account password, you can click on “Forgotten Password” and can enter the email address or the phone number to get one time password. After entering the one time password, you can create a new password for your account and can continue using your account on Divueens."
},
{
  question: "HOW DO I CHANGE OR UPDATE MY PERSONAL INFORMATION?",
  answer: "You can change or update your personal information by going to the “My Profile” section. Click on the “edit” option and change or update your personal information and continue using your account without any problems."
}
];


  const [active, setActive] = useState(false);
  const handleActive = (question) =>{
    setActive((pre)=> (pre === question ? null : question ));
  }
  return (
    // <div className="w-full  bg-gradient-to-r from-[#efdce8] via-[#faa3c5] via-30% to-[#e0d2d7] ">
    <div className="w-full">
      <div className="flex items-center flex-col justify-center w-full ">
      {/* <h1 className="text-4xl m-4 text-white">Divueens</h1> */}
        
        <div className="bg-white mb-12 px-12 py-8 max-sm:px-5 rounded-xl w-2/3 max-sm:w-3/4 h-fit">
          <div className="flex flex-row items-center text-2xl pb-10 gap-3">
            <FaRegCircleQuestion/>
            <h1 className="text-4xl font-bold ]">FAQs</h1>
          </div>
          <ul className="flex flex-col">
            {faqs.map((item, index)=>(
              <Faqs key={index} question={item.question} answer={item.answer} active={active === item.question}  onClick={handleActive} />
            ))}
          </ul>
        </div>
       
      </div>

    </div>

  )
}

export default FaqsPage
