 function App() {
  return (
    <div className="w-full mx-auto font-lexend">
        <div className="relative max-w-7xl mx-auto h-[480px] flex justify-between items-center overflow-hidden">
            <div className="absolute top-80 -left-6 w-80 sm:w-80 h-80 sm:h-80 rounded-full bg-blue-50"></div>
            <div className="absolute bottom-80 -right-6 w-80 sm:w-80 h-80 sm:h-80 rounded-full bg-blue-50"></div>
            <div className="p-4 z-10">
                <div className="text-6xl md:text-7xl font-semibold text-blue-900">
                    <h1 className="">Hello</h1>
                    <h1 className="">I am</h1>
                    <span className="text-blue-500">Akhil Thomas</span>
                </div>
                <div className="p">
                      <p className="my-4 text-base leading-tight text-blue-800">Software Developer at <span className="text-sm font-medium text-blue-900">Tata Consultancy Services (TCS)</span></p>
                  </div>
                <div className="">
                <button class="my-4 px-6 py-4 bg-blue-500 text-white rounded-lg flex">
                    <span class="mr-2">Contact me </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </button>
                </div>
            </div> 
          </div>
          <div className="max-w-7xl mx-auto p-6 flex justify-between items-center">
              <div className="w-56">
                  <h2 className="text-5xl text-blue-900 font-bold">2+</h2>
                  <h5 className="text-xl font-semibold text-blue-500">Years Experience Working</h5>
              </div>
              <div className="flex justify-start items-center space-x-10">
                <div className="w-44 h-44 p-6 bg-blue-50 rounded-lg flex flex-col justify-end items-start space-y-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-blue-900">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                    </svg>
                    <span className="text-sm text-blue-900 font-semibold">Product Specialist/Owner</span>
                </div>
                <div className="w-44 h-44 p-6 bg-blue-50 rounded-lg flex flex-col justify-end items-start space-y-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-blue-900">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                    <span className="text-sm text-blue-900 font-semibold">UI/UX Designer</span>
                </div>
                <div className="w-44 h-44 p-6 bg-blue-50 rounded-lg flex flex-col justify-end items-start space-y-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-blue-900">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    </svg>
                    <span className="text-sm text-blue-900 font-semibold">Fullstack Developer</span>
                </div>
                
              </div>
          </div>
    </div>
  );
}

export default App;
