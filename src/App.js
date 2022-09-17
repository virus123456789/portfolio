function App() {
  return (
    <div class="w-full mx-auto font-lexend">
        <div class="relative max-w-7xl h-[480px] mx-auto bg-white flex justify-between items-center overflow-hidden">
            <div class="absolute top-44 -left-10 w-96 h-96 rounded-full bg-green-50"></div>
            <div class="absolute bottom-44 -right-20 w-96 h-96 rounded-full bg-green-50"></div>
            <div class="p-2 z-10">
                <div class="my-5 flex flex-col justify-start items-start text-green-900">
                    <h1 class="text-7xl font-semibold">Hello</h1>
                    <h1 class="text-7xl font-semibold">I'am <span class="text-7xl font-semibold text-green-500">Akhil Thomas</span></h1>
                    
                </div>
                {/* <h3 class="my-4 text-xl font-medium text-gray-600">Full Stack Developer</h3> */}
                <div class="relative">
                    <p class="my-4 text-base leading-tight text-green-800">Software Developer at Tata Consultancy Services(TCS)</p>
                    <span class="absolute -bottom-1 right-64 w-[248px] h-[2px] rounded-lg bg-green-900"></span>
                </div>
                <button class="my-4 px-6 py-4 bg-green-500 text-white rounded-lg flex">
                    <span class="mr-2">Contact me </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
  );
}

export default App;
