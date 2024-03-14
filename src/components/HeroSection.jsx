import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Image,
  Link,
  Button,
  Tabs,
  Tab,
  Divider,
  Avatar,
} from "@nextui-org/react";
import Cards from "./Cards";
import { GoProjectRoadmap } from "react-icons/go";
import { RiUserLine } from "react-icons/ri";
export default function HeroSection() {
  return (
    <>
      <section>
        <main className="bg-violet-50 pb-[210px]">
          <div className="py-20  md:mx-44">
            <div className="flex flex-col md:flex-row justify-between items-center mx-auto">
              <div className="max-w-lg mx-4 text-violet-400 text-center md:text-left mb-8 md:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 ">
                    Hello There 👋
                  </h1>
                  <h1 className=" md:text-4xl text-blue-500">
                    I'm <span>Adlin Qaidul Jaisy</span>
                  </h1>
                  <div className="mt-2"></div>
                  <TypeAnimation
                    className="text-xl"
                    sequence={[
                      "I am FrontEnd Developer",
                      1000,
                      "I am Try To Being Productive",
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </motion.div>
              </div>

              <div className="flex justify-end">
                <div className="overflow-hidden max-w-sm md:wax-w-full w-full">
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div>
                      <div className="text-center"></div>
                      <Image
                        className="size-[390px] object-cover min-w-0"
                        src="/Zaynime.jpg"
                        radius="full"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <main className="">
          <div className="flex justify-center items-center">
            <section className="mt-24 flex">
              <RiUserLine size="3em" color="" className="mr-4" />
              <h1 className="text-5xl font-montserrat font-semibold">
                About
                <span className="text-indigo-300"> Me</span>
              </h1>
            </section>
          </div>

          <section>
            <div className="flex justify-center items-center mt-8 mb-[149px]">
              <div className="flex items-center">
                <Card className="max-w-sm  md:max-w-lg flex justify-center items-center">
                  <Image
                    src="/Zaynime.jpg"
                    className="rounded-full object-contain"
                    height={230}
                    width={230}
                  />
                  <Divider />
                  <div className="m-8">
                    <h1 className="text-3xl font-semibold">
                      Adlin Qaidul Jaisy
                    </h1>
                    <p className="mt-2 text-gray-600">
                      My name is Adlin Qaidul Jaisy, I Live in West Java, More
                      Precisely at Banjaran, I'm Being Motivated When Someone
                      Invite Me To A Personal Project Or Even Product That
                      Contain About Coding
                    </p>
                  </div>
                  <Divider />
                  <CardFooter className="flex justify-between">
                    <Button
                      color="primary"
                      variant="flat"
                      radius="full"
                      className=""
                    >
                      Checkout My Project
                    </Button>
                    <Button color="primary" variant="flat" radius="full">
                      Contact
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>

          <section className="bg-violet-50 pt-4 pb-5">
            <div className="flex justify-center items-center">
              <section className="flex">
                <GoProjectRoadmap size="3em" className="mr-2" />
                <h1 className="text-5xl font-montserrat font-semibold">
                  My
                  <span className="text-indigo-300"> Tech Stack</span>
                </h1>
              </section>
            </div>

            <div className="flex justify-center mt-10">
              <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                <Cards tech="Javascript" image="/Js.png" />
                <Cards tech="Vue" image="/VueJS.jpg" />
                <Cards tech="React" image="/React.png" />
                <Cards tech="Git" image="/Git.png" />
              </div>
            </div>
          </section>
          <section className="mt-20">
            <div className="flex justify-center items-center">
              <section className="flex">
                <GoProjectRoadmap size="3em" className="mr-2" />
                <h1 className="text-5xl font-montserrat font-semibold">
                  My
                  <span className="text-indigo-300"> Project</span>
                </h1>
              </section>
            </div>
          </section>

          <div className="">
          
          </div>
          <div className="mb-96"> </div>
        </main>
      </section>
    </>
  );
}
