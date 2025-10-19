import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'
import logo from '../assets/Trans-IT_logo.png'
import moon from "../assets/moon.svg"
import sun from "../assets/sun.svg"
import { useEffect, useState } from 'react'

const navigation = [
  { name: 'Blogs', href: 'blogs' },
  { name: 'About', href: 'about' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const NavBar = () => {
  const [isDark,setIsDark] = useState<boolean>(false)
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 bg-background/70 backdrop-blur-lg border-b border-highlight  after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20">
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 ui-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 ui-open:block" />
            </DisclosureButton>
          </div>

          {/* Logo + Desktop Nav */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start gap-8">
            {/* Logo */}
            <NavLink to="/" className="flex items-center">
              <img
                src={logo}
                alt="Trans-It"
                className="h-9 w-auto transition-transform duration-300 hover:scale-105"
              />
            </NavLink>

            {/* Desktop Links */}
            <div className="flex items-center hidden sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? 'text-blue-400'
                        : 'text-text hover:text-heading',
                      'text-sm font-medium '
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
            <div className='flex items-center' >
              <button className='cursor-pointer p-2 rounded-lg transition-colors duration-200 hover:bg-highlight' onClick={() => setIsDark(!isDark)}>
                {isDark ? ( <img className='h-7 w-auto' src={moon} alt="moonicon" /> ):( <img className='h-7 w-auto' src={sun} alt="sunicon" /> )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <DisclosurePanel className="sm:hidden border-t border-white/10 bg-black/90 backdrop-blur-sm">
        <div className="space-y-1 px-3 py-3">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                classNames(
                  isActive
                    ? 'bg-blue-900/40 text-blue-200'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium transition'
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

export default NavBar
