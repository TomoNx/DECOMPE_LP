import { Phone, User, Mail, Instagram, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactSection() {
  const contactPersons = [
    {
      name: "Rayssa Ameyliananda",
      phone: "081210913466"
    },
    {
      name: "Widhy Fadhiil Aldino",
      phone: "0895386891729"
    }
  ]

  return (
    <div className="w-full max-w-6xl mx-auto scroll-animate">
      {/* Contact Persons Section */}
      <div className="mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Contact Person
          </span>
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contactPersons.map((person, index) => (
            <Card key={index} className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 enhanced-hover neon-border group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-red-600/30 group-hover:border-red-500/60 transition-all duration-300">
                  <User className="w-8 h-8 text-red-400 group-hover:text-red-300 transition-colors" />
                </div>
                <CardTitle className="text-lg text-white group-hover:text-red-100 transition-colors">
                  {person.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex items-center justify-center gap-3 text-gray-300 group-hover:text-red-200 transition-colors">
                  <Phone className="w-5 h-5 text-red-400 group-hover:text-red-300 transition-colors" />
                  <a 
                    href={`tel:${person.phone}`}
                    className="hover:text-red-400 transition-colors font-mono tracking-wider"
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
      <div className="border-t border-red-900/30 pt-8">
        <h4 className="text-xl font-semibold text-center mb-6 text-red-300">
          Official Contact
        </h4>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-400">
          <div className="flex items-center gap-3 hover:text-red-300 transition-colors cursor-pointer">
            <Mail className="w-5 h-5 text-red-400" />
            <span className="text-sm md:text-base">decompe@digitalrevolution.com</span>
          </div>
          <div className="flex items-center gap-3 hover:text-red-300 transition-colors cursor-pointer">
            <Instagram className="w-5 h-5 text-red-400" />
            <span className="text-sm md:text-base">@decompe_revolution</span>
          </div>
          <div className="flex items-center gap-3 hover:text-red-300 transition-colors cursor-pointer">
            <Globe className="w-5 h-5 text-red-400" />
            <span className="text-sm md:text-base">www.decompe4-0.id</span>
          </div>
        </div>
      </div>
    </div>
  )
}