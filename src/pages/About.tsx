import { Box, Flex, Text, Image, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Umer from "../assets/Umer.jpg";
import Arif from "../assets/Arif.jpg";
import Noman from "../assets/Noman.jpeg";

const AboutUs = () => {
  return (
    <div>
      <Box className="bg-gray-100 min-h-screen py-16 px-6 md:px-16 font-sans">
        {/* Hero Section */}
        <Flex className="flex flex-col md:flex-row items-center md:space-x-12">
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Image
              src="https://th.bing.com/th/id/OIP.saZXgHRFmN3posXkSIhQyAHaFc?rs=1&pid=ImgDetMain"
              alt="Team Collaboration"
              className="rounded-lg shadow-lg w-full md:w-96"
            />
          </motion.div>

          <VStack align="start" className="mt-6 md:mt-0 max-w-2xl">
            <Text className="text-4xl font-bold text-gray-800">About Us</Text>
            <Text className="text-gray-600 text-lg leading-relaxed">
              Welcome to our Collaborative Learning Platform, where individuals come together to share knowledge, grow, and innovate.
              Our mission is to create an engaging environment that fosters teamwork and creativity in learning.
            </Text>
            <Text className="text-gray-600 text-lg leading-relaxed mt-4">
              We all studied at <strong>COMSATS University Abbottabad</strong>, majoring in <strong>BS Computer Science</strong>. Our passion for
              technology and learning brought us together to create this platform.
            </Text>
            <Text className="text-gray-600 text-lg leading-relaxed mt-4">
              Our aim is to connect learners and educators through interactive and insightful content. Whether you are a student,
              a developer, or an enthusiast, this platform is designed to help you grow and succeed in the tech world.
            </Text>
          </VStack>
        </Flex>

        {/* Our Mission Section */}
        <Box className="mt-12 text-center">
          <Text className="text-2xl font-semibold text-gray-800">Our Mission</Text>
          <Text className="text-gray-600 max-w-3xl mx-auto mt-2">
            We believe in the power of collective learning and the impact of knowledge sharing. Our goal is to
            connect learners and educators through interactive and insightful content.
          </Text>
        </Box>

        {/* Team Section */}
        <Box className="mt-12 text-center">
          <Text className="text-2xl font-semibold text-gray-800">Meet Our Team</Text>
          <Flex className="flex flex-wrap justify-center mt-6 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} className="text-center max-w-sm">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="rounded-full border-4 border-gray-300 shadow-md w-48 h-48 object-cover mx-auto"
                />
                <Text className="text-gray-700 font-bold text-xl mt-2">{member.name}</Text>
                <Text className="text-gray-600 text-md font-bold">{member.role}</Text>
              </motion.div>
            ))}
          </Flex>
        </Box>
      </Box>
    
    </div>
  );
};

const teamMembers = [
  { name: "Muhammad Noman", role: "Frontend Developer", image: Noman },
  { name: "Umer", role: "Backend Developer", image: Umer },
  { name: "Arif", role: "Flutter Developer", image: Arif },
];

export default AboutUs;