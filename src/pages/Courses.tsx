import { Box, Text, Image, VStack, Grid, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";


const courses = [
  {
    title: "Full-Stack Web Development",
    description: "Learn MERN stack development from scratch and build real-world applications.",
    image: "https://th.bing.com/th/id/OIP.saZXgHRFmN3posXkSIhQyAHaFc?rs=1&pid=ImgDetMain",
    instructor: "John Doe",
  },
  {
    title: "UI/UX Design Fundamentals",
    description: "Master the art of designing intuitive and user-friendly interfaces.",
    image: "https://source.unsplash.com/400x300/?design,creative",
    instructor: "Jane Smith",
  },
  {
    title: "Mobile App Development with Flutter",
    description: "Learn to develop cross-platform mobile apps using Flutter and Dart.",
    image: "https://source.unsplash.com/400x300/?mobile,app",
    instructor: "Alice Johnson",
  },
  {
    title: "Data Science and Machine Learning",
    description: "Dive into data analysis, visualization, and predictive modeling.",
    image: "https://source.unsplash.com/400x300/?data,science",
    instructor: "Bob Brown",
  },
];

const Courses = () => {
  return (
    <div>
      <Box className="bg-gray-100 min-h-screen py-12 px-6 md:px-16 font-sans">
        <Text className="text-4xl font-bold text-gray-800 text-center mb-10">Our Courses</Text>
        
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={8}>
          {courses.map((course, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300">
              <Image src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <VStack align="start" p={5}>
                <Text className="text-xl font-semibold text-gray-800">{course.title}</Text>
                <Text className="text-gray-600 text-sm">{course.description}</Text>
                <Text className="text-gray-500 text-sm font-medium">Instructor: {course.instructor}</Text>
                <Button colorScheme="blue" variant="solid" className="mt-3">Enroll Now</Button>
              </VStack>
            </motion.div>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Courses;