import React from 'react'

export default function ErrorPage({ status }) {
  const title = {
    503: '503: Service Unavailable',
    500: '500: Server Error',
    404: '404: Page Not Found',
    403: '403: Forbidden',
  }[status]

  const description = {
    503: 'Sorry, we are doing some maintenance. Please check back soon.',
    500: 'Whoops, something went wrong on our servers.',
    404: 'Sorry, the page you are looking for could not be found.',
    403: 'Sorry, you are forbidden from accessing this page.',
  }[status]
  console.log(status)
  return (
    <div className='flex flex-row items-center h-screen'>
        <img src='/svgs/Robot.svg' className='h-96'/>
        <div className='border bg-secondary h-80'></div>
        <div className='flex-1 flex flex-col items-center'>
            <h1 className='text-xl'>{title}</h1>
            <div>{description}</div>
        </div>
    </div>
  )
}