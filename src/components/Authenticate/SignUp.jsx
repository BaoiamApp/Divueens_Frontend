
export default function Signup (){
    
    return(
      <>
       
      

      <div className="">
        


        <div>
         
          <form action="#" className="flex flex-col gap-6 mt-[30px]">
            <div>
              <input className="h-[30px] w-80 ml-[30px] p-[20px] border-2 border-gray-400 rounded-lg" type="text" placeholder="Email Address" required/>
            </div>
            <div>
              <input className="h-[30px] w-80 ml-[30px] p-[20px] border-2 border-gray-400 rounded-lg"type="password" placeholder="Password" required/>
            </div>
            <div>
              <input className="h-[45px] w-80 ml-[30px] py-[20px] px-[20px] border-2 border-gray-400 rounded-lg" type="password" placeholder="Confirm password" required/>
            </div>
            <div className="ml-3 px-3"><input type="checkbox"/> I agree with the user's terms and conditions</div>
            <div className="text-center bg-gradient-to-r from-rose-500 to-rose-800 text-white w-80 rounded-xl h-[45px] [b-3] ml-[35px] mb-[20px]">
              <input className="text-2xl pt-2" type="submit" value="Signup"/>
            </div>
          </form>
          
          
          
        </div>
      </div>
      
    

      
      
      
      
      
      
      </>  
    )
}