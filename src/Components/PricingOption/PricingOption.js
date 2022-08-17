import React from 'react';

const PricingOption = (props) => {
    const { name, price } = props.option;
    return (
        <div className='bg-white p-4'>
            <h2>{name}</h2>
        </div>
    );
};

export default PricingOption;