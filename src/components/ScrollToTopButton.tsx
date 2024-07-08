"use client"

import { useEffect, useState } from "react"
import { ChevronUpIcon } from "@radix-ui/react-icons"

const ScrollToTopButton = ({ threshold }: { threshold: number }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [bottomOffset, setBottomOffset] = useState(4)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > threshold)
    }

    const handleScroll = () => {
      const footer = document.querySelector("footer")
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        const windowHeight = window.innerHeight

        if (footerRect.top <= windowHeight) {
          setBottomOffset(windowHeight - footerRect.top + 4)
        } else {
          setBottomOffset(4)
        }
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    window.addEventListener("scroll", handleScroll)
    toggleVisibility()
    handleScroll()

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [threshold])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div
      className={`fixed left-1/2 transform -translate-x-1/2 p-2 transition-transform duration-200 ${
        isVisible ? "-translate-y-4 opacity-100" : "translate-y-20 opacity-0"
      } z-[999]`}
      style={{ bottom: `${bottomOffset}px`, transition: "opacity 200ms, transform 200ms" }}
    >
      <button
        className="flex items-center justify-center rounded-full p-2 outline-none border-[0.75px] border-purple-700 w-10 h-10 bg-black shadow-lg hover:shadow-[0_0_10px_#6B21A8] hover:scale-105 transition-transform duration-200"
        onClick={scrollToTop}
        title="Scroll to top"
      >
        <ChevronUpIcon className="text-white w-6 h-6" />
      </button>
    </div>
  )
}

export default ScrollToTopButton
