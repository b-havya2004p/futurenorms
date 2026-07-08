"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function Contact() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const whatsappUrl = `https://wa.me/917667618449?text=${encodeURIComponent(
      `Hello FutureNorms,%0A%0AI would like to discuss hiring requirements.%0A%0AName: ${data.name}%0APhone: ${data.phone}%0AEmail: ${data.email}%0AMessage: ${data.message}`
    )}`;
    window.open(whatsappUrl, "_blank");
    router.push("/thank-you");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const pulseVariant = {
    pulse: {
      scale: [1, 1.03, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  const contactInfoItems = [
    { icon: "📍", title: "Office Address", value: "13B, Dahlia Street, VGN Serenity Grove, Ayapakkam, Chennai - 600077" },
    { icon: "📞", title: "Phone", value: "+91 76676 18449", href: "tel:+917667618449" },
    { icon: "✉️", title: "Email", value: "kiruthika@futurenorms.in", href: "mailto:kiruthika@futurenorms.in" }
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden">
        {/* Floating decorative elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-1/4 left-10 w-24 h-24 bg-accent/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-1/3 right-16 w-32 h-32 bg-accent/15 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            x: [0, 15, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 7,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/10 rounded-full blur-lg"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-accent font-semibold uppercase tracking-wider mb-6"
            >
              Get In Touch
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Contact <span className="text-accent">Us</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-white/90 max-w-2xl mx-auto"
            >
              Let's discuss your hiring needs
            </motion.p>
          </motion.div>
        </div>
        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg border-2 border-primary/20 mb-8"
              >
                <h2 className="text-2xl font-bold text-accent mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  {contactInfoItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-gray-900 text-2xl shadow-md flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                        {item.href ? (
                          <div>
                            {item.href.startsWith('tel:') ? (
                              <a
                                href="tel:+917667618449"
                                className="text-xl text-primary hover:text-accent transition-colors cursor-pointer font-semibold"
                              >
                                +91 76676 18449
                              </a>
                            ) : (
                              <a
                                href="mailto:kiruthika@futurenorms.in?subject=Inquiry%20about%20Recruitment%20Services&body=Hello%20FutureNorms%2C%0A%0AI%27m%20interested%20in%20your%20recruitment%20services.%20Please%20get%20back%20to%20me.%0A%0AThank%20you!"
                                className="text-xl text-primary hover:text-accent transition-colors cursor-pointer font-semibold"
                              >
                                kiruthika@futurenorms.in
                              </a>
                            )}
                          </div>
                        ) : (
                          <p className="text-xl text-gray-700">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.a
                variants={itemVariants}
                href="https://wa.me/917667618449?text=Hello%20FutureNorms%2C%20I%27m%20interested%20in%20your%20recruitment%20services."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="block bg-[#25D366] hover:bg-[#128C7E] text-white p-6 rounded-2xl text-center transition-all shadow-md hover:shadow-xl"
              >
                <div className="flex items-center justify-center gap-3">
                  <svg
                    className="w-10 h-10"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="text-xl font-bold">Chat on WhatsApp</span>
                </div>
              </motion.a>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg border-2 border-primary/20"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                    <motion.input
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      whileFocus={{ scale: 1.01 }}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </motion.div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                      <motion.input
                        type="email"
                        {...register("email", { required: "Email is required" })}
                        whileFocus={{ scale: 1.01 }}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                      <motion.input
                        type="tel"
                        {...register("phone", { required: "Phone is required" })}
                        whileFocus={{ scale: 1.01 }}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                        placeholder="+91 9XXXXXXXXX"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                    </motion.div>
                  </div>
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <motion.textarea
                      {...register("message")}
                      rows={4}
                      whileFocus={{ scale: 1.01 }}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                      placeholder="Tell us more about your requirements..."
                    ></motion.textarea>
                  </motion.div>
                  <motion.button
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    animate="pulse"
                    type="submit"
                    className="w-full bg-accent text-gray-900 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-500 transition-all shadow-md hover:shadow-xl"
                  >
                    Submit
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
