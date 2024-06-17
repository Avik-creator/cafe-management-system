import Slide from "@/components/Slide";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import Nirvik from "@/public/Nirvik Ghosh.jpg";
import Rudra from "@/public/Rudra.jpg";
import Snehasis from "@/public/Snehasis.jpg";
import Subha from "@/public/Subha.jpg";
import Avik from "@/public/Avik.gif";

export default function Component() {
  return (
    <ScrollArea className="h-screen min-h-screen">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="text-center space-y-4 mb-8">
          <Slide>
            <h1 className="text-3xl font-bold">Meet Our Team</h1>
          </Slide>
          <Slide delay={0.2}>
            <p className="text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
              We are a bunch of enthusiastic students who are passionate about
              technology and are always eager to learn new things. We are a team
              of 5 members who are working on this project to provide a platform
              for students to learn and grow in the field of technology. We are
              always open to new ideas and suggestions. Feel free to reach out
              to us.
            </p>
          </Slide>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Slide key={index} delay={0.1 * index}>
              <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-md">
                <div className="relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white text-lg font-semibold">
                      {member.name}
                      <span>
                        <a href=""></a>
                      </span>
                    </h3>
                    <p className="text-white text-sm">{member.role}</p>
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <p className="text-gray-500 dark:text-gray-400">
                    {member.description}
                  </p>
                </div>
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}

const teamMembers = [
  {
    name: "Nirvik Ghosh",
    role: "Student",
    image: Nirvik,
    description:
      "I am a pre-final year B.Tech Information Technology student at Maulana Abul Kalam Azad University of Technology. My primary programming language is Python, with expertise in Flask, Django, and MySQL. I have a strong interest in backend web development and have completed numerous projects using these technologies. I excel in teamwork, am a quick learner, and take responsibility seriously. In my free time, I enjoy watching anime and playing games.",
  },
  {
    name: "Subha Sadhu",
    role: "Frontend",
    image: Subha,
    description:
      "I am Subha Sadhu. Currently a student and an aspiring software developer. I am currently learning to code and engineer softwares for the use of fellow humans. I consider myself a learner for life and love to learn about programming and the underlying engineering and working of the systems.",
  },
  {
    name: "Rudra Banerjee",
    role: "Backend",
    image: Rudra,
    description:
      "Makautian aspiring to become a full stack developer with a continuous learning attitude. Currently working on ML projects as well  as a Django Backend developer.",
  },
  {
    name: "Snehasis Sardar",
    role: "Backend",
    image: Snehasis,
    description:
      "I am a Machine Learning enthusiast and backend developer currently learning Django to enhance my web development skills with innovative data-driven solutions.",
  },
  {
    name: "Avik Mukherjee",
    role: "Frontend",
    image: Avik,
    description: "A Former Child.",
  },
];
