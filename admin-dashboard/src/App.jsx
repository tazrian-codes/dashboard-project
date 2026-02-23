import './App.css'
import { useState } from 'react'

function App() {
  const [ sideBarOpen, setSideBarOpen ] = useState(false);

  const navItems = [
    {name: 'Dashboard', icon: '📊'},
    {name: 'Projects', icon: '🗂️'},
    {name: 'Calendar', icon: '🗓️'},
    {name: 'Documents', icon: '📑'},
    {name: 'Reports', icon: '📈'},
  ]
  return (
    <div className='flex bg-gray-100 h-screen'>
      {/* sidebar */}
      <div className= {`fixed lg:static bg-white w-52 lg:w-84 h-screen shadow
      ${sideBarOpen ? 'translate-x-0' : '-translate-x-52'} lg:translate-x-0`}>

        <div className=''>
          <div className='flex justify-between border-b-2 border-b-gray-300 p-4'>
            <h2 className='text-xl'>Logo</h2>
            <p className='w-7 h-7 text-center text-white bg-red-600 rounded
             cursor-pointer hover:bg-red-700' onClick={() => setSideBarOpen(false)}>x</p>
            </div>
          </div>
          {/* nav items */}
            <div className='space-y-4 w-full'>
              {navItems.map((item) => {
                return (
                  <div className=' hover:bg-gray-200 cursor-pointer'>
                    <div className='flex space-x-2 p-4'>
                      <div className='text-xl'>{item.icon}</div>
                      <div className='text-xl'>{item.name}</div>
                    </div>
                  </div>
                )
              })}
            </div>
        </div>
      
      {/* main content */}
      <main className='flex-1'>
        <header className='bg-white flex justify-between items-center p-4'>
          <button className='font-bold text-xl lg:hidden cursor-pointer'
          onClick = {() => setSideBarOpen(true)}>☰</button>
          <h1 className='text-xl font-bold'>Dashboard</h1>
          <div className='bg-gray-300 w-8 h-8 rounded-full'></div>
        </header>

        <div className='grid grid-cols-1 md:grid-cols-3 m-4 gap-4'>
          {/* cards */}
          <div className='bg-white rounded shadow-md p-4'>
            <h4 className='text-xl font-bold'>Card 1</h4>
            <p>This is a sample card.</p>
          </div>

          <div className='bg-white rounded shadow-md p-4'>
            <h4 className='text-xl font-bold'>Card 1</h4>
            <p>This is a sample card.</p>
          </div>

          <div className='bg-white rounded shadow-md p-4'>
            <h4 className='text-xl font-bold'>Card 1</h4>
            <p>This is a sample card.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
