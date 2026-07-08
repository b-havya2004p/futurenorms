import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-800 py-16 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/logo.png"
                alt="FutureNorms Logo"
                width={56}
                height={56}
                className="rounded-2xl shadow-lg"
              />
              <h2 className="text-3xl font-bold text-primary">FutureNorms</h2>
            </div>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              We don't just fill roles – we solve hiring problems. Precision-led executive search across IT, GCC, Manufacturing, Engineering, BFSI, and EdTech, delivered pan-India.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/kiru98?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#0A66C2] rounded-full flex items-center justify-center hover:bg-[#004182] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61591031709239"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#1877F2] rounded-full flex items-center justify-center hover:bg-[#0C5FCC] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.736-.9 10.125-5.865 10.125-11.854z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary border-b-2 border-primary/30 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">
                  <span className="text-accent">→</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">
                  <span className="text-accent">→</span> Our Services
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">
                  <span className="text-accent">→</span> Why FutureNorms
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">
                  <span className="text-accent">→</span> Our Expertise
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">
                  <span className="text-accent">→</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary border-b-2 border-primary/30 pb-2">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <a href="mailto:kiruthika@futurenorms.in?subject=Inquiry%20about%20Recruitment%20Services&body=Hello%20FutureNorms%2C%0A%0AI%27m%20interested%20in%20your%20recruitment%20services.%20Please%20get%20back%20to%20me.%0A%0AThank%20you!" className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="#EA4335" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <span>kiruthika@futurenorms.in</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <a href="https://wa.me/917667618449?text=Hello%20FutureNorms%2C%20I%27m%20interested%20in%20your%20recruitment%20services." className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="#25D366" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <span>+91 76676 18449</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-12 pt-8 text-center">
          <p className="text-gray-600 text-lg">&copy; 2026 FutureNorms Talent Solutions. Engineering Your Future. Today. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
