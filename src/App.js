function App() {
  return (
    <div className="w-full mx-auto font-lexend">
        <div className="relative w-full h-[480px] flex justify-between items-center overflow-hidden">
            <div className="absolute top-80 -left-6 w-52 sm:w-80 h-52 sm:h-80 rounded-full bg-green-50"></div>
            <div className="absolute bottom-80 -right-6 w-52 sm:w-80 h-52 sm:h-80 rounded-full bg-green-50"></div>
            <div className="p-4 z-10">
                <div className="text-7xl font-semibold text-green-900">
                    <h1 className="">Hello</h1>
                    <h1 className="">I'am <span className="text-green-500">Akhil Thomas</span></h1> 
                </div>
                <div className="p">
                      <p className="my-4 text-sm leading-tight text-green-800">Software Developer at <span className="text-sm font-medium text-green-900">Tata Consultancy Services (TCS)</span></p>
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
    </div>
  );
}

export default App;
