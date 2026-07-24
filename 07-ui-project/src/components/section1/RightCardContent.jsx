
const RightCardContent = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center font-bold '>{props.id+1}</h2>
        <div>
          <p className='text-lg leading-relaxed mb-14 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, asperiores?Lorem ipsum dolor sit amet.</p>
        <div className='flex justify-between'>
        <button className='bg-blue-600 text-white font-semibold px-8 py-3 rounded-full'>{props.tag}</button>
        <button className='bg-blue-600 text-white font-semibold px-4 py-3 rounded-full'><i class="ri-arrow-right-line"></i></button>
      </div>
    </div>
    </div>
  )
}

export default RightCardContent
