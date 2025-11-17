import React from 'react'
import Maplibre from '../../components/Map/Maplibre'

export default function ExplorerPlayground() {
  return (
    <div className='h-screen relative w-full'>
        {/* <div>
          <button className='absolute top-2 right-2 p-2 border rounded-md bg-white'>Export</button>
        </div> */}
        <Maplibre />
    </div>
  )
}
