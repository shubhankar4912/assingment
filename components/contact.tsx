"use client"
import React from 'react'

function Contact() {
  return (
    <div className=' flex items-center justify-center  '>
        <div className=' w-[676px] h-[260px] bg-white shadow-lg pl-5 pt-5'>
        <h2 className='w-[600px] h-[48px]  font-semibold text-2xl leading-6'>Leave your contacts and we will call you back
        within 30 minutes</h2>
        <div className=' flex flex-col gap-5'>  
        <div className='flex'>
            <Input label={"Full name"} placeholder={"My Name"}></Input>
            <Input label={"Phone number"} placeholder={'+91 0000000000'}> </Input>

         </div>
        <div className='flex'>
            <Input label='Business name' placeholder='ABC Technologies PVT LTD'></Input>
            <Input label='Business mail' placeholder='demoaccount@gmail.com'></Input>
            <button className="w-[132px] h-[58px] rounded-lg px-4 text-center  bg-lime-400">Get
            consultation</button>
        </div>

        </div>
         
 
        </div>
    </div>
  )
}

function Input({label,placeholder}:{label:string,
  placeholder:string
}){
    return <div className='flex flex-col'>
    <label htmlFor="" className='text-slate-400'> {label}</label>
    <input className='w-[244px] h-[22px] placeholder-black shadow-md mx-2' type="text" placeholder={placeholder} />
</div>
   
}
export default Contact
