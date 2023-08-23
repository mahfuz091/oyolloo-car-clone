import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
const Navbar = () => (
  <div className='navbar '>
    <div className='page-wrapper overflow-x-hidden'>
      <div className='flex justify-between items-center px-2 py-3 md:py-5 md:px-0'>
        <Bars3CenterLeftIcon className='w-[36px] h-[36px] text-white' />
        <Image src='/logo.png' width={100.97} height={30} alt='Logo' />
        <div className='flex gap-[18.55px]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M21 21L15 15L21 21ZM17 10C17 10.9193 16.8189 11.8295 16.4672 12.6788C16.1154 13.5281 15.5998 14.2997 14.9497 14.9497C14.2997 15.5998 13.5281 16.1154 12.6788 16.4672C11.8295 16.8189 10.9193 17 10 17C9.08075 17 8.1705 16.8189 7.32122 16.4672C6.47194 16.1154 5.70026 15.5998 5.05025 14.9497C4.40024 14.2997 3.88463 13.5281 3.53284 12.6788C3.18106 11.8295 3 10.9193 3 10C3 8.14348 3.7375 6.36301 5.05025 5.05025C6.36301 3.7375 8.14348 3 10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10Z'
              stroke='white'
              stroke-width='1.25'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='23'
            height='22'
            viewBox='0 0 23 22'
            fill='none'
          >
            <g clip-path='url(#clip0_24_475)'>
              <path
                d='M11.2991 10.6008C12.7429 10.6008 13.993 10.083 15.0148 9.06123C16.0362 8.03967 16.5542 6.78973 16.5542 5.3457C16.5542 3.90216 16.0363 2.65205 15.0146 1.63016C13.9929 0.608766 12.7428 0.0909119 11.2991 0.0909119C9.85503 0.0909119 8.60509 0.608766 7.58353 1.63033C6.56197 2.65189 6.04395 3.902 6.04395 5.3457C6.04395 6.78973 6.56197 8.03984 7.58353 9.0614C8.60542 10.0828 9.85553 10.6008 11.2991 10.6008ZM8.48773 2.53437C9.27159 1.75051 10.1911 1.36949 11.2991 1.36949C12.4068 1.36949 13.3265 1.75051 14.1106 2.53437C14.8944 3.31839 15.2756 4.23808 15.2756 5.3457C15.2756 6.45365 14.8944 7.37317 14.1106 8.15719C13.3265 8.94122 12.4068 9.32224 11.2991 9.32224C10.1914 9.32224 9.27192 8.94105 8.48773 8.15719C7.70371 7.37334 7.32252 6.45365 7.32252 5.3457C7.32252 4.23808 7.70371 3.31839 8.48773 2.53437Z'
                fill='white'
              />
              <path
                d='M20.4938 16.868C20.4644 16.4429 20.4048 15.9791 20.3171 15.4894C20.2285 14.996 20.1145 14.5296 19.978 14.1033C19.8368 13.6627 19.6452 13.2275 19.408 12.8106C19.1622 12.3778 18.8732 12.0009 18.5489 11.6908C18.2098 11.3664 17.7947 11.1055 17.3146 10.9153C16.8362 10.726 16.306 10.6301 15.7389 10.6301C15.5162 10.6301 15.3008 10.7215 14.8848 10.9923C14.6288 11.1593 14.3293 11.3524 13.9951 11.5659C13.7093 11.7481 13.3221 11.9187 12.8439 12.0731C12.3773 12.2241 11.9035 12.3007 11.4358 12.3007C10.9684 12.3007 10.4946 12.2241 10.0277 12.0731C9.54997 11.9188 9.16262 11.7482 8.87731 11.5661C8.54622 11.3545 8.24659 11.1614 7.98675 10.9922C7.5711 10.7213 7.3557 10.6299 7.13298 10.6299C6.56569 10.6299 6.03568 10.726 5.55744 10.9154C5.07771 11.1054 4.66239 11.3662 4.32298 11.691C3.99872 12.0012 3.70975 12.3779 3.46405 12.8106C3.22718 13.2275 3.03542 13.6625 2.89426 14.1034C2.75793 14.5297 2.64391 14.996 2.55535 15.4894C2.46746 15.9784 2.40804 16.4424 2.37857 16.8685C2.34961 17.2851 2.33496 17.7188 2.33496 18.1569C2.33496 19.2958 2.69701 20.2178 3.41095 20.8978C4.11607 21.5688 5.04891 21.9091 6.18366 21.9091H16.6892C17.8237 21.9091 18.7565 21.5688 19.4618 20.8978C20.1759 20.2183 20.5379 19.296 20.5379 18.1567C20.5378 17.7171 20.523 17.2835 20.4938 16.868ZM18.5802 19.9715C18.1143 20.4149 17.4957 20.6305 16.6891 20.6305H6.18366C5.37684 20.6305 4.75827 20.4149 4.29252 19.9716C3.83559 19.5367 3.61353 18.9429 3.61353 18.1569C3.61353 17.7481 3.62702 17.3444 3.65398 16.9569C3.68028 16.5767 3.73405 16.1591 3.81378 15.7153C3.89252 15.277 3.99273 14.8657 4.11191 14.4933C4.22627 14.1362 4.38224 13.7827 4.57567 13.4421C4.76027 13.1175 4.97267 12.839 5.20705 12.6146C5.42628 12.4047 5.7026 12.2329 6.02819 12.1041C6.32932 11.9849 6.66773 11.9197 7.0351 11.9098C7.07988 11.9337 7.15961 11.9791 7.28879 12.0633C7.55163 12.2346 7.85458 12.43 8.1895 12.6439C8.56703 12.8846 9.05342 13.102 9.63453 13.2896C10.2286 13.4817 10.8345 13.5793 11.436 13.5793C12.0374 13.5793 12.6434 13.4817 13.2372 13.2898C13.8188 13.1019 14.305 12.8846 14.6831 12.6436C15.0258 12.4245 15.3203 12.2348 15.5831 12.0633C15.7123 11.9793 15.792 11.9337 15.8368 11.9098C16.2043 11.9197 16.5428 11.9849 16.844 12.1041C17.1695 12.2329 17.4458 12.4049 17.665 12.6146C17.8994 12.8389 18.1118 13.1173 18.2964 13.4423C18.49 13.7827 18.6461 14.1364 18.7603 14.4931C18.8797 14.866 18.98 15.2772 19.0586 15.7151C19.1382 16.1597 19.1921 16.5775 19.2184 16.9571V16.9574C19.2456 17.3434 19.2592 17.7469 19.2594 18.1569C19.2592 18.9431 19.0371 19.5367 18.5802 19.9715Z'
                fill='white'
              />
            </g>
            <defs>
              <clipPath id='clip0_24_475'>
                <rect
                  width='21.8181'
                  height='21.8182'
                  fill='white'
                  transform='translate(0.54541 0.0909119)'
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <hr className='navline overflow-hidden' />
    </div>
  </div>
);

export default Navbar;