function App() {
  return (
    <div className="w-full mx-auto font-lexend">
        <div className="relative max-w-7xl mx-auto h-[480px] flex justify-between items-center overflow-hidden">
            <div className="absolute top-80 -left-6 w-80 sm:w-80 h-80 sm:h-80 rounded-full bg-green-50"></div>
            <div className="absolute bottom-80 -right-6 w-80 sm:w-80 h-80 sm:h-80 rounded-full bg-green-50"></div>
            <div className="p-4 z-10">
                <div className="text-8xl font-semibold text-green-900">
                    <h1 className="">Hello</h1>
                    <h1 className="">I am</h1>
                    <span className="text-green-500">Akhil Thomas</span>
                </div>
                <div className="p">
                      <p className="my-4 text-base leading-tight text-green-800">Software Developer at <span className="text-sm font-medium text-green-900">Tata Consultancy Services (TCS)</span></p>
                  </div>
                <div className="">
                <button class="my-4 px-6 py-4 bg-green-500 text-white rounded-lg flex">
                    <span class="mr-2">Contact me </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </button>
                </div>
            </div>
          </div>
            <div className="max-w-7xl mt-4 mx-auto md:flex justify-between items-center ">
                <div className="p-6 w-80 flex justify-start items-center">
                  <h2 className="flex justify-start items-center text-8xl font-semibold text-green-900">2+</h2>
                  <h3 className="ml-5 flex justify-start items-center text-4xl font-semibold text-green-500">Years Experience Working</h3>
                </div>
                <div className="flex flex-col justify-start items-center p-6">
                  <div className="flex flex-col justify-start items-center text-3xl font-semibold text-green-800"><span>Product Specialist and Developer,</span> <span>specialized in UI/UX and Full Stack Developer</span></div>
                  {/* <div className="flex justify-between items-start space-x-2">
                      <div className="w-80 h-40 flex flex-col justify-end items-center bg-green-50">
                          <span>UI/UX Design</span>
                      </div>
                      <div className="w-80 h-40 flex flex-col justify-end items-center bg-green-50">
                          <span>UI/UX Design</span>
                      </div>
                      <div className="w-80 h-40 flex flex-col justify-end items-center bg-green-50">
                          <span>UI/UX Design</span>
                      </div>
                    </div> */}
                </div>  
            </div>
    </div>
  );
}

export default App;
