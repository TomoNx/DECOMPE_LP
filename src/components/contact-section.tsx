"use client"

import { Phone, User, Mail, Instagram, Globe, ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import SponsorMarquee from "@/components/sponsor-marquee"
import MediaPartnerMarquee from "@/components/media-partner-marquee"

export default function ContactSection() {
  const tContact = useTranslations("contact")
  const tFaq = useTranslations("faq")
  const [showAllFaqs, setShowAllFaqs] = useState(false)
  
  const contactPersons = [
    {
      name: "Rayssa Ameyliananda",
      phone: "6281210913466"
    },
    {
      name: "Widhy Fadhiil Aldino",
      phone: "62895386891729"
    }
  ]

  return (
    <div className="w-full max-w-6xl mx-auto scroll-animate">
      {/* Contact Persons Section */}
      <div className="mb-8 sm:mb-12">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
          <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            {tContact("personTitle")}
          </span>
        </h3>
        
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {contactPersons.map((person, index) => (
            <Card key={index} className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 enhanced-hover neon-border group">
              <CardHeader className="text-center pb-3 sm:pb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-red-600/30 group-hover:border-red-500/60 transition-all duration-300">
                  <User className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 group-hover:text-red-300 transition-colors" />
                </div>
                <CardTitle className="text-base sm:text-lg text-white group-hover:text-red-100 transition-colors">
                  {person.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <div className="flex items-center justify-center gap-2 sm:gap-3 text-gray-300 group-hover:text-red-200 transition-colors">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 group-hover:text-red-300 transition-colors flex-shrink-0" />
                  <a 
                    href={`https://wa.me/${person.phone}`}
                    className="hover:text-red-400 transition-colors font-mono tracking-wider text-sm sm:text-base break-all"
                  >
                    {person.phone}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Social media moved to footer below */}

      {/* FAQ Footer */}
      <footer className="mt-8 sm:mt-12 border-t border-red-900/30 pt-8 sm:pt-10">
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-600/20 border border-red-600/40 text-red-300 text-xs sm:text-sm backdrop-blur-sm mb-3">
            {tFaq("badge")}
          </div>
          <h4 className="text-2xl sm:text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              {tFaq("title")}
            </span>
          </h4>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            {tFaq("subtitle")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {/* Always visible first 6 FAQs */}
            {Array.from({ length: 6 }, (_, index) => {
              const itemNumber = index + 1
              const paddedNumber = itemNumber.toString().padStart(2, '0')
              
              return (
                <AccordionItem key={`item-${itemNumber}`} value={`item-${itemNumber}`} className="border-none">
                  <div className="rounded-xl border border-red-900/40 bg-black/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300">
                    <AccordionTrigger className="hover:no-underline px-4 sm:px-5 text-white">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <span className="text-[10px] sm:text-xs font-bold text-red-300 px-2 py-1 rounded-md bg-gradient-to-br from-red-900/40 to-red-700/30 border border-red-700/60">
                          {paddedNumber}
                        </span>
                        <span className="text-sm sm:text-base text-red-200">{tFaq(`items.${itemNumber}.q`)}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 sm:px-5 pb-4 text-gray-300 text-left">
                      {tFaq(`items.${itemNumber}.a`)}
                    </AccordionContent>
                  </div>
                </AccordionItem>
              )
            })}
            
            {/* Conditionally animated additional 6 FAQs */}
            <AnimatePresence>
              {showAllFaqs && Array.from({ length: 6 }, (_, index) => {
                const itemNumber = index + 7 // Start from FAQ 7
                const paddedNumber = itemNumber.toString().padStart(2, '0')
                
                return (
                  <motion.div
                    key={`item-${itemNumber}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ 
                      duration: 0.3,
                      ease: "easeInOut"
                    }}
                    style={{ overflow: 'hidden' }}
                  >
                    <AccordionItem value={`item-${itemNumber}`} className="border-none">
                      <div className="rounded-xl border border-red-900/40 bg-black/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300">
                        <AccordionTrigger className="hover:no-underline px-4 sm:px-5 text-white">
                          <div className="flex items-center gap-3 sm:gap-4">
                            <span className="text-[10px] sm:text-xs font-bold text-red-300 px-2 py-1 rounded-md bg-gradient-to-br from-red-900/40 to-red-700/30 border border-red-700/60">
                              {paddedNumber}
                            </span>
                            <span className="text-sm sm:text-base text-red-200">{tFaq(`items.${itemNumber}.q`)}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 sm:px-5 pb-4 text-gray-300 text-left">
                          {tFaq(`items.${itemNumber}.a`)}
                        </AccordionContent>
                      </div>
                    </AccordionItem>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </Accordion>
          
          {/* Simplified Load More / Show Less Button */}
          <div className="text-center mt-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Button
                onClick={() => setShowAllFaqs(!showAllFaqs)}
                variant="outline"
                className="border-red-600/50 text-red-400 hover:bg-red-600/20 hover:text-red-300 px-6 py-3 rounded-lg backdrop-blur-sm transition-all duration-300 enhanced-hover neon-border group"
              >
                {showAllFaqs ? (
                  <>
                    <ChevronUp className="mr-2 h-4 w-4 group-hover:text-red-300 transition-colors" />
                    {tFaq("showLess")}
                  </>
                ) : (
                  <>
                    <ChevronDown className="mr-2 h-4 w-4 group-hover:text-red-300 transition-colors" />
                    {tFaq("loadMore")}
                  </>
                )}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Sponsor Section */}
        {/*<div className="mt-12 sm:mt-14 md:mt-16">
          <SponsorMarquee speed="medium" direction="left" pauseOnHover={true} />
        </div> */}

        {/* Media Partner Section */}
        {/*<div className="mt-8 sm:mt-10 md:mt-12">
          <MediaPartnerMarquee speed="fast" direction="right" pauseOnHover={true} />
        </div>*/}

        {/* Official Contact Footer (no title) */}
        <div className="mt-12 sm:mt-14 md:mt-16 border-t border-red-900/30 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center text-gray-400">
            <div className="flex items-center gap-2 sm:gap-3 hover:text-red-300 transition-colors cursor-pointer">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base break-all">decompe@digitalrevolution.com</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 hover:text-red-300 transition-colors cursor-pointer">
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base">@decompe_revolution</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 hover:text-red-300 transition-colors cursor-pointer">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base">www.decompe4-0.id</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}