import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'free', price: 0, benefits: ['lifetime free',
                'unlimited deals',
                'localized deals',
                'fantastic deals',
                'crazy deals']
        },
        {
            id: 2, name: 'regular', price: 9.99, benefits: ['everything on free',
                'unlimited deals',
                'localized deals',
                'fantastic deals',
                'crazy deals']
        },
        {
            id: 3, name: 'premium', price: 19.99, benefits: ['everything on free',
                'unlimited deals',
                'localized deals',
                'fantastic deals',
                'crazy deals']
        },
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-white'>Best deal of the town</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum commodi fugit quam officiis, iusto quibusdam a itaque blanditiis voluptatum minima!</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOptions.map(option => <PricingOption
                        key={option.id}
                        option={option}
                    >

                    </PricingOption>)
                }

            </div>
        </div>
    );
};

export default Pricing;