import React from 'react'
import { listPackage } from '../../../Data/ListPackage'
import CheckList from '../../../assets/check-circle.svg'
import '../../../index.css'

const PackageSection = ({isMobile}) => {
  return (
    <div className='mt-40'>
        {
            isMobile? 
            // Mobile View
            (<div className='p-3 bg-orange-400'>
                <h2 className='font-bold text-[22px] text-white text-center'>Mau Berlangganan? Yuk, cek paketnya!</h2>             
                <div className='mt-10 grid grid-cols-1 gap-5 bg-cyan-200 rounded-md p-3'>
                    {
                        listPackage.map((val, idx) => (
                            <div key={idx} className="bg-white rounded-md pb-5">
                                <div className='from-cyan-600 bg-gradient-to-r rounded-t-md to-cyan-500 w-full py-3'>
                                    <h4 className='text-white font-semibold text-center text-[18px]'>{val.title}</h4>
                                </div>
                                {/* Price */}
                                <div className='flex items-center justify-between p-3'>
                                    <div>
                                        <p className='text-[13px] font-semibold'>Harga paket</p>
                                        <p className='text-[18px] text-red-500 font-semibold pt-2'>{val.price}</p>
                                    </div>
                                    <div>
                                        <button className='bg-orange-500 p-3 rounded-full font-semibold text-white'>Beli Paket</button>
                                    </div>
                                </div>
                                {/* Benefit */}
                                <div className='border border-dashed border-gray-300 w-full mb-4'/>
                                <div className='overflow-y-scroll scroll-smooth space-y-3 pb-5 h-40 px-3 scroll-m-10'>
                                    {
                                        val.benefit?.map((list) => (
                                            <div key={list} className="items-center flex space-x-2">
                                                <img src={CheckList} alt="check-list" className='w-4'/>
                                                <p>{list}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>) : 
            // Desktop
            (<></>)
        }
    </div>
  )
}

export default PackageSection