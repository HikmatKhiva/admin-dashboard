import { IconButton } from '@mui/material';
import React from 'react'

const PaginationTable = ({ customerTableNumber, totalPosts, paginate, currentPage, paginateNext, paginatePrev }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / customerTableNumber); i++) {
        pageNumbers.push(i)
    }
    return (
        <div>
            <ul className='pagination'>
                <li><IconButton onClick={() => paginatePrev()}>Prev</IconButton></li>
                {pageNumbers.map(number => (
                    <li className={`${number === currentPage && 'active'}`} key={number}>
                        <IconButton onClick={() => paginate(number)} >{number}</IconButton>
                    </li>
                ))}
                <li><IconButton onClick={() => paginateNext(pageNumbers.length)}>Next</IconButton></li>
            </ul>
        </div>
    )
}

export default PaginationTable