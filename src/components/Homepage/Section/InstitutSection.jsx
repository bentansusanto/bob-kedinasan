import React from 'react'
import { listInstitut } from '../../../Data/ListInstitut'

const InstitutSection = ({isMobile}) => {
  return (
    <div className='mt-40'>
        {
            isMobile? 
            // Mobile View
            (<div className='px-3'>
                <h2 className='font-semibold'>Materi disesuaikan dengan sekolah kedinasan berikut:</h2>
                <div className='grid grid-cols-2 gap-5 mt-10 justify-items-center'>
                    {
                        listInstitut.map((val, idx) => (
                            <div key={idx}>
                                <img src={require('../../../assets/' + val.foto)} alt={val.foto} className="rounded-md" />
                                <h4 className='font-semibold pt-3 pb-1'>{val.nama}</h4>
                                <p className='text-[14px]'>{val.fullName}</p>
                            </div>
                        ))
                    }
                </div>
            </div>) :
            // Desktop View
            (<div></div>)
        }
    </div>
  )
}

export default InstitutSection