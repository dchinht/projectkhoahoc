/* eslint-disable no-unused-vars */
import React from 'react'
import HomeLayout from '../../components/HomeLayout/HomeLayout'
import { Outlet } from 'react-router-dom'

function Education() {
  return (
    <div>
    <HomeLayout>
      <Outlet/>
    </HomeLayout>
    </div>
  )
}

export default Education