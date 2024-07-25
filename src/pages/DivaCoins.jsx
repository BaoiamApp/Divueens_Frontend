import React, { useState } from "react";
import Hero from "../components/DivaCoins/Hero";
import Section1 from "../components/DivaCoins/Section1";
import Section2 from "../components/DivaCoins/Section2";
import { Faqs } from './FAQ'
import { FaRegCircleQuestion } from "react-icons/fa6";

const DivaCoins = () => {

  const faqs = [
    {
      question: "Where and how can I get Diva coins?",
      answer: "They are gained through purchases, referring friends, and sharing the products on social media, among others"
    },
    {
      question: "What can I do with Diva Coins?",
      answer: " The Diva Coins can be later used to get a discount with the majority of purchases at Divueens."
    },
    {
      question: "As for the payment method used to buy Diva Coins, do Diva Coins expire?",
      answer: "Yes, Diva Coins expire one year from the date of receipt."
    },
    {
      question: "Can I transfer my Diva Coins to another user, such as my mom or my sister?",
      answer: "No, Diva Coins are not transferable to any other account or persons and are only valid for the account owner."
    },
    {
      question: "Where can I view my Diva coins balance?",
      answer: "Get to the Divueens page and click on your profile > go to ‘My Rewards’ to view the balance."
    },
    {
      question: "This brings us to the following question on the working of the referral program:",
      answer: "For each friend that you refer, after they place their first order, you both will receive 50 Diva Coins. However, the referred person earns 40 Diva Coins upon registration, and you and the referred person earn 50 Diva Coins each once the referred person has placed an order."
    },
    {
      question: "How am I going to share the referral code?",
      answer: "The referral code is unique and can be located in the profile’s area. Perform the actions described below to earn more Diva Coins. Please share them with friends and on social media."
    },
  ];

  const [active, setActive] = useState(false);
  const handleActive = (question) => {
    setActive((pre) => (pre === question ? null : question));
  }

  return (
    <>
      <Hero />
      <Section1 />
      <Section2 />

      <div className="w-full">
        <div className="flex items-center flex-col justify-center w-full ">
          <div className="bg-white mb-12 px-8 ms:px-12 py-8 rounded-xl w-full h-fit">
            <div className="flex flex-row items-center text-2xl pb-10 gap-3">
              <FaRegCircleQuestion />
              <h1 className="text-4xl font-bold ]">FAQs</h1>
            </div>
            <ul className="flex flex-col">
              {faqs.map((item, index) => (
                <Faqs key={index} question={item.question} answer={item.answer} active={active === item.question} onClick={handleActive} />
              ))}
            </ul>
          </div>

        </div>

      </div>
    </>
  )
}

export default DivaCoins;