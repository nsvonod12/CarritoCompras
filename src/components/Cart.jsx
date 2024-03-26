import { Fragment, useMemo } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Example({ open, setOpen, cart, setCart, MAX_PRODUCTS, MIN_PRODUCTS}) {

  const cartTotal = useMemo (() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart]); 

  const increaseQuantity = function(id){
    
    const updateCart = cart.map(item => {
      if(item.id === id && item.quantity < MAX_PRODUCTS){
          return{
              ...item,
              quantity: item.quantity + 1
          }
      }
      return item
    })
    setCart(updateCart)
  }

  const decrementQuantity = (id) => {
    const updateCart = cart.map(item => {
      if(item.id === id && item.quantity > MIN_PRODUCTS){
          return{
              ...item,
              quantity: item.quantity - 1
          }
      }
      return item
    })
      setCart(updateCart)
  }

  const removeToCart = (id) => {
    const updateCart = cart.filter(item => item.id !== id);
    setCart(updateCart);
  }

  const emptyCart = () => {
    setCart([]);
  }
    
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-red-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {cart.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div className="mb-5">
                                    {/* <div className="flex justify-between text-base font-medium text-gray-900"> */}
                                    <div className="grid grid-cols-3 text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={product.href}>
                                          {product.name}
                                        </a>
                                      </h3>

                                      <p className="mx-auto">Quantity</p>

                                      <p className="ml-4">${product.price * product.quantity}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {product.color}
                                    </p>
                                  </div>

                                  <div className="grid grid-cols-3">
                                    <p className="text-gray-500">
                                      
                                    </p>

                                    <div className="flex justify-evenly items-center text-sm">
                                      <a
                                        className="cursor-pointer select-none font-semibold bg-gray-200 px-2.5 py-1 rounded-lg hover:scale-95 ease-in-out hover:bg-gray-300 duration-50"
                                        onClick={() => decrementQuantity(product.id)}
                                      >
                                        -
                                      </a>
                                      <p>{product.quantity}</p>
                                      <a
                                        className="cursor-pointer select-none font-semibold bg-gray-200 px-2 py-1 rounded-lg hover:scale-95 ease-in-out hover:bg-gray-300 duration-50"
                                        onClick={() => increaseQuantity(product.id)}
                                      >
                                        +
                                      </a>
                                    </div>

                                    <div className="flex justify-end">
                                      <button
                                        type="button"
                                        className="font-medium text-red-400 hover:text-red-600"
                                        onClick={()=> removeToCart(product.id)}
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Total</p>
                        <p>${cartTotal}</p>
                      </div>
                      {/* <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p> */}
                      <div className="mt-6">
                        <a 
                          className="cursor-pointer flex items-center justify-center rounded-md border border-transparent bg-indigo-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          onClick={emptyCart}
                        >
                          Empty Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
