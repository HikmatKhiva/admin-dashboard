import React from 'react';
import './styleData.css'
import { ArrowUpward } from '@mui/icons-material';
const DateSaleItem = ({ icon, upSale, saleNumber, saleText, addPr }) => {
    return (
        <div className="data-sale__item flex-container  items-center">
            <img src={icon} alt="saleIcon" />
            <span className='flex-container flex-col '>
                <span className='sale-item'>
                    {addPr ? saleNumber + '%' : saleNumber} <span className='sale-up'> {upSale && <span> <ArrowUpward className='upSaleIcon' /> {upSale}%</span>}</span>
                </span>
                <span className='sale-text'>{saleText}</span>
            </span>
        </div>
    )
}

export default DateSaleItem;