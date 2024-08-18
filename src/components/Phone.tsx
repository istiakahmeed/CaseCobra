/* eslint-disable @next/next/no-img-element */
import React, { HTMLAttributes } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface IPhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string,
  dark?: boolean
}
const Phone = ({ imgSrc, className, dark = false, ...props }: IPhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}>
      <img
        src={dark
          ? "/phone-template-dark-edges.png"
          : "/phone-template-white-edges.png"
        }
        alt="phone image"
        className="pointer-events-none z-50 select-none"
      />
      <div className="absolute -z-10 inset-0">
        <img
          className='object-cover min-w-full min-h-full'
          src={imgSrc}
          alt='overlaying phone image'
        />
      </div>
    </div>
  )
}

export default Phone
