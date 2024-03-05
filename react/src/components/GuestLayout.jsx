import React from 'react'
import { Outlet } from 'react-router-dom'

function GuestLayout() {
  return (
    <div>
      Part of layout
      <Outlet/>
    </div>
  )
}

export default GuestLayout
