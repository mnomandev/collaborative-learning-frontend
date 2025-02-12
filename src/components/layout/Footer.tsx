import { Box, Flex, Text, Link, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" className="relative bg-gray-900 text-white mt-12 overflow-hidden">
      {/* Upper Curve */}
      <Box className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
        >
          <path
            fill="#1a202c"
            d="M0,256L80,229.3C160,203,320,149,480,138.7C640,128,800,160,960,165.3C1120,171,1280,149,1360,138.7L1440,128V320H1360C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320H0V256Z"
          ></path>
        </svg>
      </Box>
      
      <Flex className="flex flex-col items-center text-center px-6 py-20 relative z-10">
        <Text className="text-lg font-semibold">Collaborative Learning Platform</Text>
        <Text className="text-gray-400 max-w-lg mt-2">
          Learn, collaborate, and grow with a community of passionate learners and educators.
        </Text>

        {/* Social Media Icons */}
        <Flex className="flex space-x-6 mt-6">
          {socialLinks.map((social, index) => (
            <motion.div key={index} whileHover={{ scale: 1.2 }}>
              <Link href={social.href} isExternal>
                <Icon as={social.icon} className="text-xl text-gray-300 hover:text-white transition" boxSize={8} />
              </Link>
            </motion.div>
          ))}
        </Flex>

        <Text className="text-gray-500 text-sm mt-6">© 2025 Collaborative Learning. All Rights Reserved.</Text>
      </Flex>
    </Box>
  );
};

const socialLinks = [
  { icon: FaFacebook, href: "https://facebook.com" },
  { icon: FaTwitter, href: "https://twitter.com" },
  { icon: FaLinkedin, href: "https://linkedin.com" },
  { icon: FaInstagram, href: "https://instagram.com" },
];

export default Footer;
