import Image from "next/image";
import Link from "next/link";
import SupernovaLogo from "../../public/Supernova.svg";
import SuperstackLogo from "../../public/superstack.svg";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[100dvh] font-proxima overflow-hidden bg-[#0C0C0D] -z-20">
      <div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-b from-[#0B151E] to-[#0B151E]/0 pointer-events-none -z-10" />
      {[...Array(15)].map((_, i) => (
  <div
    key={i}
    className="absolute animate-star"
    style={{
      top: `${Math.random() * 30}%`,
      left: `${Math.random() * 90 + 5}%`, 
      width: `2px`,
      height: `2px`,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
      animationDelay: `${-Math.random() * 20}s`,
    }}
  />
))}
      <Image
        src="/k4-logo.svg"
        alt="K4 Logo"
        width={70}
        height={70}
        priority
        className="absolute left-6 sm:left-8 top-8"
      />
      <div className="flex flex-col items-center gap-8 max-w-full md:pb-10">
        <div className="px-4 gap-4 flex flex-col items-center">
          <div className="text-center text-xl md:text-2xl whitespace-normal sm:whitespace-nowrap text-white">
          K4 is a proprietary technology and investment firm focused on cryptocurrencies
          </div>
          <div className="text-center text-lg md:text-xl whitespace-normal sm:whitespace-nowrap text-[#9D9D9D]">
          Superstack, Supernova Research
          </div>
        </div>
        {/* <div className="flex flex-row gap-4 max-w-full px-4 flex-wrap justify-center">
          <Link 
            href="https://superstack.xyz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-[200px] h-[48px] bg-[#191A1B] text-white rounded-lg border border-[#1D1E21] hover:bg-[#1D1E21] transition-colors duration-200 cursor-pointer justify-center items-center flex"
          >
            <Image 
              src={SuperstackLogo} 
              alt="Superstack Logo" 
              style={{ width: '140px', height: 'auto' }}
            />
          </Link>
          <Link 
            href="/" 
            rel="noopener noreferrer"
            className="pt-0.5 w-[200px] h-[48px] bg-[#191A1B] text-white rounded-lg border border-[#1D1E21] hover:bg-[#1D1E21] transition-colors duration-200 cursor-pointer justify-center items-center flex"
          >
            <Image 
              src={SupernovaLogo} 
              alt="Supernova Logo" 
              style={{ width: '150px', height: 'auto' }}
            />
          </Link>
        </div> */}
      </div>
      
      <div className="absolute bottom-5 sm:bottom-10 flex flex-col items-center gap-3">
        <div className="flex items-center gap-4">
          <span className="text-base">New York</span>
          <div className="w-[4px] h-[4px] rounded-full bg-white/25"></div>
          <span className="text-base">Hong Kong</span>
        </div>
        <div className="text-base text-[#9D9D9D]">K4 Trading Inc.</div>
      </div>
    </div>
  );
}
