import React, { useState, useEffect } from 'react'
import Loading from '../Loading/Loading';
import PaginationTable from './PaginationTable';
import TableItem from './TableItem';
import './table.css'
const CustomerTable = ({ searchUser, customerTableNumber }) => {
    const searchUserArr = [];
    const [posts, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json()
            setPost(data)
            setLoading(false)
        }
        fetchPost()
    }, [navigator.onLine])
    const indexOfLastPost = currentPage * customerTableNumber;
    const indexOfFirstPost = indexOfLastPost - customerTableNumber;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    if (loading) {
        return <Loading />
    }

    // Change Page
    const paginate = (number) => setCurrentPage(prev => prev = number);
    const paginateNext = (lastNumber) => {
        if (currentPage < lastNumber) {
            setCurrentPage(prev => prev + 1)
        }
    }
    const paginatePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1)
        }
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name Customer</th>
                        <th>Jenis</th>
                        <th>Kuantitas</th>
                        <th>Tanggal Pengiriman</th>
                    </tr>
                </thead>
                <tbody>
                    {posts && currentPosts.map(value => (
                        <TableItem
                            key={value.id}
                            name={value.title}
                            id={value.id}
                            jenis={value.id}
                            kuantitas={value.id}
                            peng={value.id} />
                    ))}
                </tbody>
            </table>
            <PaginationTable
                customerTableNumber={customerTableNumber}
                paginate={paginate}
                totalPosts={posts.length}
                currentPage={currentPage}
                paginateNext={paginateNext}
                paginatePrev={paginatePrev}
            />
        </>
    )
}

export default CustomerTable;