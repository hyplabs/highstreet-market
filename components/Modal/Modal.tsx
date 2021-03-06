import { Dialog, Transition } from '@headlessui/react'
import { createContext, Fragment, MutableRefObject, useRef } from 'react'

const ModalContext = createContext<{
  ref: MutableRefObject<null> | null
}>({
  ref: null
})

const Title: React.FC = ({ children }) => (
  <Dialog.Title
    as='h3'
    className='text-lg font-medium leading-6 text-gray-900'
  >
    {children}
  </Dialog.Title>
)

const Body: React.FC = ({ children }) => (
  <ModalContext.Consumer>
    {({ ref }) => (
      <div className='mt-2'>
        <p className='text-hs-sm' ref={ref}>
          {children}
        </p>
      </div>
    )}
  </ModalContext.Consumer>
)

const Footer: React.FC = ({ children }) => (
  <div className='mt-8 flex justify-center'>
    {children}
  </div>
)

interface ModalSubComponents {
  Title: React.FC
  Body: React.FC
  Footer: React.FC
}

interface Props {
  onClose: () => void
  open: boolean
  initialFocus?: MutableRefObject<null>
  disableClose?: boolean
}

const ModalRoot: React.FC<Props> = ({ open, onClose, disableClose, children, initialFocus }) => {
  const defaultRef = useRef(null)
  const ref = initialFocus ?? defaultRef

  return (
    <ModalContext.Provider value={{ ref }}>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10 overflow-y-auto'
          onClose={disableClose ? () => {} : onClose}
          initialFocus={ref}
        >
          <div className='min-h-screen px-4 text-center'>
            <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />
            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='inline-block h-screen align-middle'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className='inline-block p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
                {children}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </ModalContext.Provider>
  )
}

const Modal: React.FC<Props> & ModalSubComponents = Object.assign(ModalRoot, { Title, Body, Footer })

export default Modal
