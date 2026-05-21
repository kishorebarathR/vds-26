"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/my-journey", label: "My Journey" },
  { href: "/sincerely-me", label: "Sincerely, Me" },
  { href: "/my-constituency", label: "My Constituency" },
  { href: "/in-my-book-shelf", label: "In My Book Shelf" },
  { href: "/press-releases", label: "Press Releases" },
  { href: "/newsletters", label: "Newsletters" },
  { href: "/get-in-touch", label: "Get in Touch" },
]

const Headerpage = () => {
  const pathname = usePathname()
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [drawerOpen])

  const handleLinkClick = () => setDrawerOpen(false)

  return (
    <div>
      {/* Header Top Section */}
      <nav className="bg-[#033B5F] drop-shadow-lg ">
        <div className="lg:max-w-screen-xl flex flex-wrap items-center justify-between p-0">
          <Link href="/" passHref>
            <div className="lg:flex items-center  cursor-pointer">
              <Image
                width={1050}
                height={850}
                src="/home_images/vds-main.png"
                className="p-0 w-72 h-32"
                alt="vds"
              />
              <div className="lg:-ml-10 ml-4">
                <p className="text-white text-[30px] font-bold">
                  V D Satheesan
                </p>
                <p className="text-white text-[20px]  font-bold">
                  For the people
                </p>
              </div>
            </div>
          </Link>

          <div className="hidden lg:block w-1/2">
            <p className="text-white m-5 italic text-[20px] text-left">
              “People respect us not for our ability to make laws, but because
              of our ability to undo the injustice done to our people.”
            </p>
          </div>
        </div>
      </nav>

      {/* Hamburger Button */}
      <div className="fixed top-4 right-5 z-40">
        <button
          className="px-5 py-2.5 "
          onClick={() => setDrawerOpen(!drawerOpen)}
          aria-label="Toggle Menu"
        >
          <Image
            src="/home_images/menu.svg"
            alt="Menu"
            className="w-12 h-12"
            width={50}
            height={50}
          />
        </button>
      </div>

      {/* Drawer Menu */}
      <div
        id="drawer-right-example"
        className={`bg-[#033B5F] fixed top-0 right-0 z-40 h-screen overflow-y-auto transition-transform ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        } w-72`}
        tabIndex="-1"
      >
        <button
          type="button"
          className="text-red-600 bg-transparent hover:bg-gray-200 rounded-lg p-2 absolute top-2 right-2"
          onClick={handleLinkClick}
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M13.414 6.586a2 2 0 0 1 2.828 2.828L12.828 12l3.414 3.414a2 2 0 1 1-2.828 2.828L10 14.828l-3.414 3.414a2 2 0 1 1-2.828-2.828L7.172 12 3.758 8.586a2 2 0 1 1 2.828-2.828L10 9.172l3.414-3.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        <ul className="merriweather-regular text-xl font-medium text-white">
          {navLinks.map(({ href, label }) => (
            <li
              key={href}
              onClick={handleLinkClick}
              className={`border-b ${pathname === href ? "bg-gray-500" : ""}`}
            >
              <Link href={href} passHref>
                <div className="flex items-center py-5 px-4 rounded-lg text-[16px] cursor-pointer">
                  <span>{label}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-25 z-30"
          onClick={handleLinkClick}
        ></div>
      )}
    </div>
  )
}

export default Headerpage
