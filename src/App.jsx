import React from 'react'
import useFetch from './Hooks/Fetch'

const App = () => {

  const url = "https://jsonplaceholder.typicode.com/users"
  const fetchHook = useFetch(url);
  console.log(fetchHook.data)

  if (fetchHook.loading) {
    return (
      <div className='h-screen flex items-center justify-center'>
      <h1 className='text-center text-2xl animate-bounce'> Loading..... </h1>
      </div>
      )
  }

  if (fetchHook.error) {
    return <h1>Something Went Wrong!</h1>
  }

  return (
    <>
      <h1 className='text-4xl font-bold text-center mt-4 mb-6'>Users List</h1>

      <div className='grid grid-cols-4 gap-4 ml-4'>
      {fetchHook.data.data.map((items) => {
        return (
          <>
          <div className='border-2 border-black flex flex-col py-3 w-90 rounded-lg'>
            <h1 className='text-lg'><span className='text-lg font-bold ml-4'>Name:      </span>{items.name}</h1>
            <p><span className='text-lg font-bold ml-4'>User Name:      </span> {items.username}</p>
            <p><span className='text-lg font-bold ml-4'>Email:      </span> {items.email}</p>
            <br />
          </div>
          </>
        )
              
      })}

      </div>
    </>
  )
}

export default App