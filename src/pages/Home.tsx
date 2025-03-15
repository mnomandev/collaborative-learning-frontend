import { Box, Heading, Text, Button, Flex, Image, VStack } from "@chakra-ui/react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  return (
    <div>
      <Box as="section" className="p-6 md:p-12 bg-gray-100 min-h-screen">
        {/* Hero Section with Carousel */}
        <Flex className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-12">
          <VStack className="text-center md:text-left md:w-1/2 space-y-6">
            <Heading as="h1" className="text-4xl md:text-5xl font-bold text-gray-900 ">
              Learn, Collaborate, and Grow Together
            </Heading>
            <Text className="text-lg text-gray-600 max-w-lg">
              Join a community of passionate learners and educators sharing knowledge to build a better future.
            </Text>
            <Button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition">
              Get Started
            </Button>
          </VStack>
          <Box className="w-full md:w-1/2 rounded-lg shadow-lg mt-6 md:mt-0">
            <Carousel showThumbs={false} infiniteLoop autoPlay>
              <div>
                <Image src="https://th.bing.com/th/id/R.91e405540afc7df662c187334f68d4b4?rik=NgimURkPoqIQgQ&riu=http%3a%2f%2fnomadiclearning.com%2fassets%2fimg%2fiStock-639820888.jpg&ehk=uQxAEl7UyNOX6l%2bdohnSP0QX0N846gMFUX93wGY5fU0%3d&risl=&pid=ImgRaw&r=0" />
              </div>
              <div>
                <Image src="https://numberdyslexia.com/wp-content/uploads/2023/03/COLLABORATE-VS-cOOPERATIVE.jpg" alt="Learning 2" className="rounded-lg" />
              </div>
              <div>
                <Image src="https://knowledgeone.ca/wp-content/uploads/2020/10/collaborative-learning.jpg" alt="Learning 3" className="rounded-lg" />
              </div>
            </Carousel>
          </Box>
        </Flex>

        {/* Features Section */}
        <Box className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
          {features.map((feature, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              <Card className="bg-white p-6 rounded-xl shadow-md text-center">
                <CardContent>
                  <Heading as="h3" className="text-xl font-semibold text-gray-800 mb-3">
                    {feature.title}
                  </Heading>
                  <Text className="text-gray-600">{feature.description}</Text>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Box>
    </div>
  )
}

const features = [
  {
    title: "Collaborative Learning",
    description: "Engage with peers, share knowledge, and work on projects together.",
  },
  {
    title: "Expert Mentorship",
    description: "Learn from industry experts and experienced mentors.",
  },
  {
    title: "Flexible Courses",
    description: "Access a wide range of courses anytime, anywhere.",
  },
];
