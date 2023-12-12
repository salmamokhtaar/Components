import React from 'react'

function MyComponents(props) {
  return ( <div>
  <div className='ml-10 w-[400px] rounded-xl p-4 border  mb-6 border-blue-500 mt-[40px]'>
          <img  className="w-full h-[300px]" src={props.image} />
      <h1 className="font-bold"> {props.title} </h1>
      <p> {props.desc} </p>
      <button className='bg-orange-500 text-white p-3 mt-4'>Download</button>

    </div>
</div>
   
  )
}

export default MyComponents
