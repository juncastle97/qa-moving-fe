import DriverList from '@/components/Card/DriverList'
import LikedDriverList from '@/components/Card/LikedDriverList'
import React from 'react'

export default function TestPage() {
  return (
    <>
    <div className='flex flex-col gap-40'>
      <DriverList quoteStatuses={["Office Moving", "Requested Quote"]}/>
      <LikedDriverList quoteStatuses={["Small Moving"]} />
    </div>
    </>
  )
}
