"use client"

import React from 'react'
import InputBox from '@/components/input.component'
import googleIcon from "@/public/imgs/google.png"
import  Link from 'next/link'
import Image from 'next/image'
import AnimationWrapper from '@/common/page-animation'

const UserAuthForm = ({type="sign-in"}) => {
  return (
    <AnimationWrapper keyValue={type}>
 <section className='h-cover flex items-center justify-center' >
        <form className='w-[80%] max-w-[400px] '>
            <h1 className='text-4xl font-gelasio capitalize text-center mb-24' >
         {type=="sign-in" ? "Welcome Back" : "Join us today"}
            </h1>
         {
            type != "sign-in" ? <InputBox name={"Fullname"} placeholder={"Fullname"} type={"text"}  icon={"user"} /> : ""
         }

         <InputBox name={"Email"} placeholder={"Email"} type={"email"}  icon={"email"} />
         <InputBox name={"Password"} placeholder={"Password"} type={"password"}  icon={"password"} />

         <button type='submit'  className='btn-dark center mt-14' > {type.replace("-"," ")}</button>
         <div className='relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold center ' >
            <hr className='w-1/2 border-black' ></hr>
            <p>Or</p>
            <hr className='w-1/2 border-black' ></hr>
            </div>
            <button  className='btn-dark center mt-14 flex items-center justify-center gap-4 w-[90%] center' > <Image src={googleIcon} className='w-5 '   alt='google'></Image>  {"Continue with Google"}</button>
            {
                type=="sign-in" ?<p className='mt-6 text-dark-grey text-xl text-center' > Dont have an account <Link href={"/signup"} className='underline text-black text-xl ml-1' > Join us today </Link>  </p>:<p className='mt-6 text-dark-grey text-xl text-center' > Already a member? <Link href={"/signin"}  className='underline text-black text-xl ml-1' > Sign in here </Link>  </p>
            }
      
        </form>
    </section>
    </AnimationWrapper>
   
  )
}

export default UserAuthForm