import { notFound } from 'next/navigation'
import React from 'react'
import DesignConfigurator from './DesignConfigurator'
import { db } from '@/db'

interface IPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined,
  }
}

const Page = async ({ searchParams }: IPageProps) => {

  const { id } = searchParams

  if (!id || typeof id !== "string") {
    return notFound()
  }

  const configuration = await db.configuration.findUnique({
    where: { id },
  })

  if (!configuration) {
    return notFound()
  }

  const { imageUrl, width, height } = configuration



  return (
    <DesignConfigurator
      imageUrl={imageUrl}
      configId={configuration.id}
      imageDimensions={{ width, height }}
    />
  )
}

export default Page
