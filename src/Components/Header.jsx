function Header(){
    return( <div>
      <div className='px-10 flex justify-between text-2xl bg-orange-500  text-white'>
        <h1 className='text-5xl'>Nooty</h1>
      <ul className='flex gap-10'>
        <li className='hover:underline'>Home</li>
        <li className='hover:underline'>Projects</li>
        <li className='hover:underline'>About</li>
      </ul>
      </div>
    </div>
    )
  }
  export default Header;