import { Phone, User, Mail, Instagram, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactSection() {
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
            Contact Person
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

      {/* Social Media & Official Contact */}
      <div className="border-t border-red-900/30 pt-6 sm:pt-8">
        <h4 className="text-lg sm:text-xl font-semibold text-center mb-4 sm:mb-6 text-red-300">
          Official Contact
        </h4>
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
    </div>
  )
}