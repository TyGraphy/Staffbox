"use client"

import { useState, useEffect } from "react"
import { Mail, Linkedin, Instagram, Phone, Calendar, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function MaintenancePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F2C23] via-[#0F2C23] to-[#1a4a3a] flex flex-col items-center justify-center px-4 py-8">
      {/* Logo */}
      <div
        className={`mb-12 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}
      >
        <div className="relative w-64 h-32 md:w-80 md:h-40">
          <Image
            src="/images/staffbox-logo.jpg"
            alt="StaffBox Corp LLC Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center max-w-2xl mx-auto space-y-8">
        {/* Main Heading */}
        <div
          className={`transition-all duration-1000 delay-300 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#F0F0F0] mb-6 leading-tight">
            We're Building Something{" "}
            <span className="bg-gradient-to-r from-[#00D07E] to-[#7EE8A2] bg-clip-text text-transparent">Great</span>.
          </h1>
        </div>

        {/* Subtext */}
        <div
          className={`transition-all duration-1000 delay-500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-lg md:text-xl text-[#F0F0F0]/80 leading-relaxed mb-8">
            StaffBox Corp LLC is working behind the scenes to bring you a better experience. Stay tuned!
          </p>
        </div>

        {/* Contact Options */}
        <div
          className={`transition-all duration-1000 delay-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="space-y-4">
            {/* Email Button */}
            <Button
              asChild
              className="bg-gradient-to-r from-[#00D07E] to-[#7EE8A2] hover:from-[#00B86B] hover:to-[#6BD693] text-[#0F2C23] font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <a href="mailto:contact@staffboxcorp.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </Button>

            {/* Additional Contact Options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
              {/* Phone */}
              <a
                href="tel:+919429290991"
                className="flex items-center gap-2 text-[#F0F0F0] hover:text-[#00D07E] transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-[#F0F0F0]/5"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+91 94292 90991</span>
              </a>

              {/* Calendar Meeting */}
              <a
                href="https://calendar.app.google/QhBVHSB5gL2pTFbE7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#F0F0F0] hover:text-[#00D07E] transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-[#F0F0F0]/5"
              >
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">Schedule Meeting</span>
              </a>
            </div>

            {/* Fiverr Gig Link */}
            <div className="mt-6">
              <a
                href="https://www.fiverr.com/s/38qymeA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#F0F0F0] hover:text-[#7EE8A2] transition-colors duration-300 px-6 py-3 rounded-full border border-[#F0F0F0]/20 hover:border-[#7EE8A2]/50 hover:bg-[#F0F0F0]/5"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm font-medium">Connect on Fiverr</span>
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div
          className={`transition-all duration-1000 delay-900 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://www.linkedin.com/company/staffbox-corp/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#F0F0F0]/10 hover:bg-gradient-to-r hover:from-[#00D07E] hover:to-[#7EE8A2] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 text-[#F0F0F0] group-hover:text-[#0F2C23]" />
            </a>
            <a
              href="https://www.instagram.com/staffbox_llc/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#F0F0F0]/10 hover:bg-gradient-to-r hover:from-[#00D07E] hover:to-[#7EE8A2] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
            >
              <Instagram className="w-6 h-6 text-[#F0F0F0] group-hover:text-[#0F2C23]" />
            </a>
          </div>
          <p className="text-[#F0F0F0]/60 text-xs mt-4">Follow us for updates</p>
        </div>
      </div>

      {/* Footer */}
      <div
        className={`mt-auto pt-16 transition-all duration-1000 delay-1100 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="text-[#F0F0F0]/60 text-sm text-center">© 2025 StaffBox Corp LLC. All rights reserved.</p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#00D07E]/10 to-[#7EE8A2]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-[#7EE8A2]/10 to-[#00D07E]/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#00D07E]/5 to-[#7EE8A2]/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}
