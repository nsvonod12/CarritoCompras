import {useState} from 'react'
import Cart from '../components/Cart'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = ({cart, setCart, MAX_PRODUCTS, MIN_PRODUCTS, numItems}) => {
    
    const [open, setOpen] = useState(false);
    
    const handleCart = () => {
        setOpen(true);
    }


  return (
    <>
        <nav className="bg-gray-200 sticky top-0">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12">
                <div className="flex items-center justify-between h-16 lg:h-[72px]">
                    <div className="flex items-center flex-shrink-0">
                        <a href="#" title="" className="inline-flex">
                            <p className="text-4xl mt-4 mb-4 font-semibold italic tracking-wider">🌊</p>
                        </a>
                    </div>

                    <div className="flex items-center justify-end space-x-5">

                        <button type="button" className="relative p-2 -m-2 text-gray-950 transition-all duration-200"
                            onClick={handleCart}
                        >
                            <FontAwesomeIcon className='text-2xl' icon={faShoppingCart}/>

                            <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-indigo-600 rounded-full"> {numItems} </span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <div className="container grid xs:grid-rows-2 md:grid-cols-2 place-items-center mx-auto">
            <div className="h-full bg-indigo-900 pb-6"> 
                <div className="text-white">
                    <div className="px-10 py-10">
                        <h1 className="text-6xl mt-4 mb-4 font-bold italic tracking-wider">🌊 Aqua</h1>
                        <p className="leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorem quos in magni eos magnam molestiae provident illo, temporibus atque officia. Eum obcaecati minus veritatis inventore culpa voluptas laboriosam cupiditate?</p>
                    </div>
                </div>
                    
                <div className="px-10 flex gap-3">
                    <a href="" className="p-2 bg-blue-400 rounded font-semibold hover:scale-105 ease-in-out hover:bg-blue-500 duration-150">Catalogue</a>
                    <a href="" className="p-2 bg-slate-400 rounded font-semibold hover:scale-105 ease-in-out hover:bg-white duration-150">Contact us</a>
                </div>
            </div>

            <div className="h-full">
                <img className="object-cover h-full" src="/img/clothes.webp" alt="fondo" />
            </div>

        </div>
        
        <Cart 
          open={open}
          setOpen={setOpen}
          cart={cart}
          setCart={setCart}
          MAX_PRODUCTS={MAX_PRODUCTS}
          MIN_PRODUCTS={MIN_PRODUCTS}
        />

    </>
  )
}

export default Header