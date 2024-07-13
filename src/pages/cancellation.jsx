import React from 'react';

const cancellationPolicyData = [
    {
        title: 'Cancellation before shipment (Only valid on orders placed & delivery in India):',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium obcaecati consequuntur amet. Quasi odio inventore reiciendis fugiat atque impedit qui! Hic assumenda aliquid doloribus quos! Amet hic pariatur distinctio.',
    },
    {
        title: 'How will I get refunded for the cancelled orders and how long will this process take?',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium obcaecati consequuntur amet. Quasi odio inventore reiciendis fugiat atque impedit qui! Hic assumenda aliquid doloribus quos! Amet hic pariatur distinctio.',
    },
    {
        title: 'What if I used discount vouchers or loyalty points during time of payment and I have to cancel my order?',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium obcaecati consequuntur amet. Quasi odio inventore reiciendis fugiat atque impedit qui! Hic assumenda aliquid doloribus quos! Amet hic pariatur distinctio.',
    },
    {
        title: 'Returns, Replacements and Refunds:',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium obcaecati consequuntur amet. Quasi odio inventore reiciendis fugiat atque impedit qui! Hic assumenda aliquid doloribus quos! Amet hic pariatur distinctio.',
    },
    {
        title: 'Which are the items that cannot be returned/exchanged?',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium obcaecati consequuntur amet. Quasi odio inventore reiciendis fugiat atque impedit qui! Hic assumenda aliquid doloribus quos! Amet hic pariatur distinctio.',
    },
    {
        title: 'Categories not eligible for Return:',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium obcaecati consequuntur amet. Quasi odio inventore reiciendis fugiat atque impedit qui! Hic assumenda aliquid doloribus quos! Amet hic pariatur distinctio.',
    },
    {
        title: 'I have received a damaged or defective item/wrong product in my order, how should I proceed?',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium obcaecati consequuntur amet. Quasi odio inventore reiciendis fugiat atque impedit qui! Hic assumenda aliquid doloribus quos! Amet hic pariatur distinctio.',
    },
    {
        title: 'How will I get refunded for the returned orders and how long will this process take?',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium obcaecati consequuntur amet. Quasi odio inventore reiciendis fugiat atque impedit qui! Hic assumenda aliquid doloribus quos! Amet hic pariatur distinctio.',
    },
];

function ReturnPolicy() {
  return (
    <div className="bg-[rgb(249,249,250)]">
      <br />
      <div className="w-[80%] bg-white m-auto pl-[5%] py-4">
        <p className="text-center text-rose-700 font-extrabold mb-2">CANCELLATION AND RETURN POLICY</p>
        {cancellationPolicyData.map((item, index) => (
          <div key={index}>
            <p className="text-black font-bold px-2">{item.title}</p>
            <p className="w-[85%] mb-3 px-5">{item.description}</p>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}

export default ReturnPolicy;