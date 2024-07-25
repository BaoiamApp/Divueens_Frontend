export default function Slider(){
  return(
    <>
      <div className="flex justify-center w-full mt-8">
        <ul className="flex justify-between w-1/4 min-w-[300px]">
          {['Register', 'order', 'Payment', 'Done!'].map((step, index) => (
            <li key={index} className="flex flex-col items-center relative">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                index < 2 ? 'bg-rose-500 border-rose-500 text-white' : 'border-gray-300 text-gray-300'
              }`}>
                {index + 1}
              </div>
              <span className={`mt-2 text-xs ${index < 2 ? 'text-rose-500 font-medium' : 'text-gray-500'}`}>
                {step}
              </span>
              {index < 3 && (
                <div className={`absolute top-4 left-11 w-auto h-0.5 ${
                  index < 2 ? 'bg-rose-500' : 'bg-gray-300'
                }`}></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}