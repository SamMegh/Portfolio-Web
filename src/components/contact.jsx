import { motion } from "framer-motion";

// Use motion in a no-op expression so linters don't flag it as unused
void motion;

function Contact() {
  // Social links data
  const socialLinks = [
    {
      name: "CONTACT ME",
      href: "mailto:sam.megh0305@gmail.com",
      delay: 0,
    },
    {
      name: "LINKEDIN",
      href: "https://www.linkedin.com/in/ankit-megh-951025274/",
      delay: 0.1,
    },
    {
      name: "GITHUB",
      href: "https://github.com/SamMegh",
      delay: 0.2,
    },
    {
      name: "INSTAGRAM",
      href: "https://www.instagram.com/ankit_megh0305/",
      delay: 0.3,
    },
  ];

  // Top labels split into two rows to match design
  const topRowLabels = ["DRIBBBBLE", "LINKEDIN", "BEHANCE"];
  const bottomRowLabels = ["INSTAGRAM", "FIGMA", "COMMUNITY"];

  return (
    <section
      id="ContactSection"
      className="w-full select-none text-white flex items-center justify-center relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 py-16 flex flex-col items-center">
        {/* Top Labels */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full flex flex-col items-center gap-6 mb-10">
          <div className="flex justify-between w-full max-w-3xl text-[10px] sm:text-xs tracking-[0.35em] text-gray-400">
            {topRowLabels.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
          <div className="flex justify-between w-full max-w-3xl text-[10px] sm:text-xs tracking-[0.35em] text-gray-500">
            {bottomRowLabels.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        </motion.div>

        {/* Center - LET'S TALK */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-10 text-center">
          <h1 className="text-[5rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[10.5rem] font-extrabold leading-none tracking-tight bg-gradient-to-r from-gray-200 via-white to-gray-400 bg-clip-text text-transparent select-none">
            LET'S TALK
          </h1>
        </motion.div>

        {/* Social Buttons Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className={`px-8 sm:px-10 py-3 sm:py-3.5 rounded-full border text-xs sm:text-sm font-semibold 
                 bg-white text-black border-white hover:bg-transparent hover:text-white
              `}>
              {link.name}
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Credits */}
        <div className="w-full flex items-center justify-between text-[9px] sm:text-[10px] tracking-[0.25em] text-gray-500 mt-4">
          <p>
            <span className="font-semibold"> Email.</span> <span className="font-bold text-sm select-all">sam.megh0305@gmail.com</span>
          </p>
          <p>
            DESIGN BY <span className="font-bold text-sm">ANKIT MEGH</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
