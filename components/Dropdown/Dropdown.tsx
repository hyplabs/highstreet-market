import { Menu, Transition } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'


type DropdownProps = {
  button: ReactNode
  items: { activeElement?: JSX.Element, element: JSX.Element, key: string | number }[]
  itemsClassName?: string
  className?: string
}

const Dropdown: React.FC<DropdownProps> = ({ button, items, itemsClassName, className }: DropdownProps) => (
  <div className={`text-right ${className}`}>
    <Menu as="div" className="relative inline-block text-left w-full">
      <div>
        <Menu.Button className='w-full'>
          {button}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute right-0 bg-white divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${itemsClassName}`}
        >
          {items.map(({ key, activeElement, element }) => (
            <div className='px-1 py-1' key={key}>
              <Menu.Item>
                {({ active }) => (
                  active && activeElement ? activeElement : element
                )}
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  </div>
)

export default Dropdown
