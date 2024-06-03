import { Box, TextField } from '@mui/material'
import cls from './page.module.scss'
import { useState } from 'react'
import { LoginForm } from '@/widgets/LoginForm'

export default function Home() {

  return (
    <section className={cls.homePage}>
      <div className={cls.homePageForm}>
        <LoginForm />
      </div>
    </section>
  )
}
