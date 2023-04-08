import React from 'react'
import { listService } from '../../../Data/ListService'

const ServiceSection = ({isMobile}) => {
  return (
    <div className='mt-40'>
        {
            isMobile? 
            // Mobile View
            (<div className='px-3'>
                <h2 className='font-bold text-[28px]'>Kenapa harus ikut Bimbel Excelent ?</h2>
                <div className='grid -cols-1 gap-5 mt-10'>
                    {
                      listService.map((val, idx) => (
                        <div key={idx} className="bg-white shadow-md py-3 px-3 flex items-center space-x-3">
                          <img src={require('../../../assets/'+val.icon)} alt={val.icon} />
                          <p className='font-semibold'>{val.service}</p>
                        </div>
                      ))
                    }
                </div>
            </div>) : 
            // Desktop View
            (<></>)
        }
    </div>
  )
}

export default ServiceSection