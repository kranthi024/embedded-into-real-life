"use client";

import { useState } from "react";
import Link from "next/link";
import ContactModal from "./ContactModal";;

const products = [
  {
    icon: "🌡️",
    title: "Room Temperature Monitor",
    category: "IoT Monitoring",
    description:
      "Monitor temperature and humidity in real time with remote access, status monitoring and alerts.",
    features: ["Temperature", "Humidity", "Cloud Monitoring", "Alerts"],
  },
  {
    icon: "🏠",
    title: "Home Automation",
    category: "Smart Home",
    description:
      "Control lights, appliances and other devices through intelligent automation and connected systems.",
    features: ["Lighting", "Appliances", "Remote Control", "Automation"],
  },
  {
    icon: "💡",
    title: "Automatic Street Light",
    category: "Automation",
    description:
      "Automatically control street lighting based on ambient conditions while reducing unnecessary operation.",
    features: ["Light Sensing", "Automatic Control", "Energy Saving", "Monitoring"],
  },
  {
    icon: "⚙️",
    title: "Custom Embedded Systems",
    category: "Custom Solutions",
    description:
      "Purpose-built embedded systems designed around your specific application, requirements and budget.",
    features: ["Custom Hardware", "Firmware", "Sensors", "Control"],
  },
];

const services = [
  {
    number: "01",
    title: "Embedded System Development",
    description:
      "Microcontroller-based hardware and firmware development for practical applications.",
  },
  {
    number: "02",
    title: "IoT Development",
    description:
      "Connected devices, cloud integration, dashboards, monitoring and notifications.",
  },
  {
    number: "03",
    title: "Automation",
    description:
      "Automate repetitive operations using sensors, controllers and intelligent logic.",
  },
  {
    number: "04",
    title: "PCB & Electronics",
    description:
      "Electronic circuit design, component selection, PCB development and prototyping.",
  },
  {
    number: "05",
    title: "Student Projects",
    description:
      "School, diploma and engineering projects converted from ideas into working prototypes.",
  },
  {
    number: "06",
    title: "Custom Solutions",
    description:
      "Tell us your problem and we will work toward a practical embedded solution.",
  },
];

const projectCategories = [
  {
    icon: "🎓",
    title: "College Projects",
    description:
      "Engineering and diploma projects involving embedded systems, IoT, automation, electronics and intelligent systems.",
    tags: ["ECE", "EEE", "CSE", "IoT"],
  },
  {
    icon: "🔬",
    title: "School Projects",
    description:
      "Interactive science and technology projects suitable for school exhibitions, competitions and demonstrations.",
    tags: ["Science", "Electronics", "IoT", "STEM"],
  },
  {
    icon: "🏭",
    title: "Industrial Projects",
    description:
      "Monitoring, automation and custom electronics solutions for real-world industrial applications.",
    tags: ["Monitoring", "Automation", "Industry", "IoT"],
  },
];

const faqs = [
  {
    question: "Can I request a completely custom project?",
    answer:
      "Yes. You can describe your requirement, application and expected outcome. We can then discuss the hardware, software and development approach.",
  },
  {
    question: "Do you provide school and college projects?",
    answer:
      "Yes. We can develop prototype-based projects for school, diploma and engineering applications, depending on the project requirements.",
  },
  {
    question: "Can your devices be connected to the internet?",
    answer:
      "Yes. Depending on the application, systems can be designed with Wi-Fi, Bluetooth, cellular or other communication technologies.",
  },
  {
    question: "Can I monitor my device remotely?",
    answer:
      "For supported IoT products, remote monitoring can be provided through a web dashboard or mobile application.",
  },
  {
    question: "Can I purchase a ready-made product?",
    answer:
      "Selected products can be offered as ready-to-use systems. Custom products may require requirement confirmation before an order is placed.",
  },
  {
    question: "Do you provide technical support?",
    answer:
      "Yes. Product documentation, troubleshooting and customer support can be provided according to the product or project.",
  },
];

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  const openContact = () => {
    setContactOpen(true);
  };

  const closeContact = () => {
    setContactOpen(false);
  };

  return (
    <main className="bg-black text-white">

      {/* CONTACT POPUP */}
      <ContactModal
        isOpen={contactOpen}
        onClose={closeContact}
      />

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <button
            type="button"
            onClick={openContact}
            className="text-left"
          >
            <div className="text-lg font-bold tracking-wider">
              EMBEDDED
            </div>

            <div className="text-[9px] tracking-[0.35em] text-gray-500">
              INTO REAL LIFE
            </div>
          </button>

          <div className="hidden items-center gap-7 text-sm text-gray-400 md:flex">

            <button
              onClick={openContact}
              className="transition hover:text-white"
            >
              Products
            </button>

            <button
              onClick={openContact}
              className="transition hover:text-white"
            >
              Services
            </button>

            <button
              onClick={openContact}
              className="transition hover:text-white"
            >
              Projects
            </button>

            <button
              onClick={openContact}
              className="transition hover:text-white"
            >
              About
            </button>

            <button
              onClick={openContact}
              className="transition hover:text-white"
            >
              Contact
            </button>

          </div>

          <button
            onClick={openContact}
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-gray-200"
          >
            Customer Login
          </button>

        </div>

      </nav>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">

        <div className="absolute inset-0">

          <div className="absolute left-1/2 top-[-100px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-white/[0.05] blur-[120px]" />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:70px_70px]" />

        </div>

        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-24">

          <div className="max-w-5xl">

            <button
              onClick={openContact}
              className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-gray-400 transition hover:border-white/30 hover:text-white"
            >
              <span className="mr-3 h-2 w-2 rounded-full bg-green-400" />
              Embedded Systems • IoT • Automation • Electronics
            </button>

            <h1 className="text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl md:text-8xl lg:text-9xl">
              EMBEDDED
              <br />
              <span className="text-gray-500">
                INTO REAL LIFE.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">
              We turn ideas and real-world problems into practical
              embedded systems, IoT devices, automation solutions and
              working prototypes.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button
                onClick={openContact}
                className="rounded-full bg-white px-7 py-3.5 font-semibold text-black transition hover:bg-gray-200"
              >
                Explore Products
              </button>

              <button
                onClick={openContact}
                className="rounded-full border border-white/20 px-7 py-3.5 font-semibold transition hover:bg-white hover:text-black"
              >
                Start a Project
              </button>

            </div>

            <div className="mt-14 flex flex-wrap gap-8 text-sm text-gray-500">
              <span>✓ Custom Solutions</span>
              <span>✓ Prototype Development</span>
              <span>✓ Technical Support</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="border-t border-white/10 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-12 md:grid-cols-2 md:items-end">

            <div>

              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
                What We Do
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Technology should
                <br />
                <span className="text-gray-500">
                  solve problems.
                </span>
              </h2>

            </div>

            <p className="max-w-xl leading-8 text-gray-400">
              From a simple sensor-based project to a connected industrial
              monitoring system, we design technology around the actual
              requirement rather than forcing every problem into the same
              solution.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRODUCTS
      ===================================================== */}

      <section
        id="products"
        className="border-t border-white/10 py-24"
      >

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
              Products
            </p>

            <h2 className="text-4xl font-bold md:text-6xl">
              Ready-to-build
              <br />
              <span className="text-gray-500">
                solutions.
              </span>
            </h2>

          </div>


          <div className="grid gap-5 md:grid-cols-2">

            {products.map((product) => (
              <button
                key={product.title}
                type="button"
                onClick={openContact}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-left transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.06]"
              >

                <div className="flex items-start justify-between">

                  <div className="text-4xl">
                    {product.icon}
                  </div>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-500">
                    {product.category}
                  </span>

                </div>

                <h3 className="mt-10 text-2xl font-semibold">
                  {product.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {product.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">

                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-white/[0.05] px-3 py-1.5 text-xs text-gray-400"
                    >
                      {feature}
                    </span>
                  ))}

                </div>

                <div className="mt-8 flex items-center text-sm font-medium">
                  Enquire about this product
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>

              </button>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        id="services"
        className="border-t border-white/10 py-24"
      >

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
              Services
            </p>

            <h2 className="text-4xl font-bold md:text-6xl">
              From electronics
              <br />
              <span className="text-gray-500">
                to complete systems.
              </span>
            </h2>

          </div>


          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (
              <button
                key={service.number}
                type="button"
                onClick={openContact}
                className="border-t border-white/10 pt-6 text-left transition hover:border-white/40"
              >

                <div className="text-sm text-gray-600">
                  {service.number}
                </div>

                <h3 className="mt-4 text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-500">
                  {service.description}
                </p>

                <p className="mt-5 text-sm text-gray-600 transition group-hover:text-white">
                  Discuss this service →
                </p>

              </button>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          PROJECT CATEGORIES
      ===================================================== */}

      <section
        id="projects"
        className="border-t border-white/10 py-24"
      >

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
              Projects
            </p>

            <h2 className="text-4xl font-bold md:text-6xl">
              Ideas become
              <br />
              <span className="text-gray-500">
                working prototypes.
              </span>
            </h2>

          </div>


          <div className="grid gap-5 md:grid-cols-3">

            {projectCategories.map((project) => (
              <button
                key={project.title}
                type="button"
                onClick={openContact}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-left transition hover:border-white/30 hover:bg-white/[0.06]"
              >

                <div className="text-4xl">
                  {project.icon}
                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">

                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

                <p className="mt-7 text-sm text-gray-500">
                  Discuss a project →
                </p>

              </button>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section
        id="how-it-works"
        className="border-t border-white/10 py-24"
      >

        <div className="mx-auto max-w-7xl px-6">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
            How It Works
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            From idea to
            <br />
            <span className="text-gray-500">
              real-world solution.
            </span>
          </h2>


          <div className="mt-16 grid gap-8 md:grid-cols-5">

            <Process
              number="01"
              title="Discuss"
              text="Understand your requirement and objective."
              onClick={openContact}
            />

            <Process
              number="02"
              title="Design"
              text="Select hardware, sensors and system architecture."
              onClick={openContact}
            />

            <Process
              number="03"
              title="Build"
              text="Develop the electronics, firmware and software."
              onClick={openContact}
            />

            <Process
              number="04"
              title="Test"
              text="Test the system and refine its operation."
              onClick={openContact}
            />

            <Process
              number="05"
              title="Deliver"
              text="Provide the working solution and support."
              onClick={openContact}
            />

          </div>

        </div>
      </section>


      {/* =====================================================
          WHY US
      ===================================================== */}

      <section className="border-t border-white/10 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-16 md:grid-cols-2">

            <div>

              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
                Why Choose Us
              </p>

              <h2 className="text-4xl font-bold md:text-6xl">
                Built around
                <br />
                <span className="text-gray-500">
                  your requirement.
                </span>
              </h2>

            </div>


            <div className="grid gap-8 sm:grid-cols-2">

              <Reason
                title="Practical"
                text="Solutions designed around actual applications and requirements."
                onClick={openContact}
              />

              <Reason
                title="Custom"
                text="Hardware and software can be adapted to your project."
                onClick={openContact}
              />

              <Reason
                title="Affordable"
                text="We aim to create useful technology without unnecessary complexity."
                onClick={openContact}
              />

              <Reason
                title="Support"
                text="Technical guidance and support throughout the project lifecycle."
                onClick={openContact}
              />

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CUSTOMER PORTAL
      ===================================================== */}

      <section
        id="customer"
        className="border-t border-white/10 py-24"
      >

        <div className="mx-auto max-w-7xl px-6">

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-16">

            <div className="grid gap-12 md:grid-cols-2 md:items-center">

              <div>

                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
                  Customer Portal
                </p>

                <h2 className="text-4xl font-bold md:text-6xl">
                  Your devices.
                  <br />
                  <span className="text-gray-500">
                    Your dashboard.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-gray-400">
                  Customers will be able to access their orders,
                  projects, registered devices, monitoring data,
                  warranty information and support requests from one
                  account.
                </p>

                <button
                  onClick={openContact}
                  className="mt-8 rounded-full bg-white px-7 py-3.5 font-semibold text-black transition hover:bg-gray-200"
                >
                  Customer Login
                </button>

              </div>


              <div className="rounded-2xl border border-white/10 bg-black p-6">

                <div className="flex items-center justify-between border-b border-white/10 pb-5">

                  <div>
                    <p className="text-sm text-gray-500">
                      Customer Dashboard
                    </p>

                    <p className="mt-1 font-medium">
                      Device Overview
                    </p>
                  </div>

                  <span className="rounded-full bg-green-400/10 px-3 py-1 text-xs text-green-400">
                    Online
                  </span>

                </div>


                <div className="mt-6 grid grid-cols-2 gap-3">

                  <DashboardItem
                    label="Devices"
                    value="02"
                  />

                  <DashboardItem
                    label="Projects"
                    value="01"
                  />

                  <DashboardItem
                    label="Orders"
                    value="03"
                  />

                  <DashboardItem
                    label="Support"
                    value="01"
                  />

                </div>


                <div className="mt-3 rounded-xl border border-white/10 p-5">

                  <p className="text-xs text-gray-500">
                    Room Temperature Monitor
                  </p>

                  <div className="mt-4 flex items-end justify-between">

                    <div>
                      <p className="text-3xl font-semibold">
                        27.4°C
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        Temperature
                      </p>
                    </div>

                    <div className="text-right">

                      <p className="text-xl">
                        58%
                      </p>

                      <p className="text-xs text-gray-500">
                        Humidity
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          START PROJECT
      ===================================================== */}

      <section
        id="start-project"
        className="border-t border-white/10 py-24"
      >

        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Start a Project
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-6xl">
            Have an idea?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Tell us what you want to build. Whether it is a school
            project, college prototype, IoT device or custom
            automation system, we can discuss the requirements.
          </p>

          <button
            onClick={openContact}
            className="mt-10 rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-200"
          >
            Discuss Your Project →
          </button>

          <p className="mt-8 text-sm text-gray-600">
            Proprietor: G Kranthi Kumar
          </p>

          <a
            href="tel:+916309117193"
            className="mt-2 inline-block text-sm text-gray-500 hover:text-white"
          >
            +91 6309117193
          </a>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section
        id="faq"
        className="border-t border-white/10 py-24"
      >

        <div className="mx-auto max-w-5xl px-6">

          <div className="mb-14">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
              FAQ
            </p>

            <h2 className="text-4xl font-bold md:text-6xl">
              Frequently asked
              <br />
              <span className="text-gray-500">
                questions.
              </span>
            </h2>

          </div>


          <div className="divide-y divide-white/10">

            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group py-6"
              >

                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium">
                  {faq.question}

                  <span className="text-2xl text-gray-500 transition group-open:rotate-45">
                    +
                  </span>

                </summary>

                <p className="mt-4 max-w-3xl leading-7 text-gray-500">
                  {faq.answer}
                </p>

              </details>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="border-t border-white/10 py-28">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-5xl font-bold md:text-7xl">
            EMBED YOUR
            <br />
            <span className="text-gray-500">
              IDEA INTO REAL LIFE.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-gray-400">
            Let&apos;s turn your concept into a working electronic,
            embedded or IoT solution.
          </p>

          <button
            onClick={openContact}
            className="mt-10 rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-200"
          >
            Start a Project
          </button>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-14">

          <div className="grid gap-12 md:grid-cols-4">

            <div className="md:col-span-2">

              <button
                type="button"
                onClick={openContact}
                className="text-left"
              >
                <div className="text-xl font-bold tracking-wider">
                  EMBEDDED
                </div>

                <div className="text-xs tracking-[0.35em] text-gray-500">
                  INTO REAL LIFE
                </div>
              </button>

              <p className="mt-6 max-w-md leading-7 text-gray-500">
                Embedded systems, IoT, automation and custom
                electronics designed for real-world applications.
              </p>

            </div>


            <div>

              <h3 className="font-medium">
                Explore
              </h3>

              <div className="mt-5 flex flex-col gap-3 text-sm text-gray-500">

                <button
                  onClick={openContact}
                  className="text-left hover:text-white"
                >
                  Products
                </button>

                <button
                  onClick={openContact}
                  className="text-left hover:text-white"
                >
                  Services
                </button>

                <button
                  onClick={openContact}
                  className="text-left hover:text-white"
                >
                  Projects
                </button>

                <button
                  onClick={openContact}
                  className="text-left hover:text-white"
                >
                  How It Works
                </button>

              </div>

            </div>


            <div>

              <h3 className="font-medium">
                Contact
              </h3>

              <div className="mt-5 flex flex-col gap-3 text-sm text-gray-500">

                <p>
                  <span className="text-gray-400">
                    Proprietor:
                  </span>{" "}
                  G Kranthi Kumar
                </p>

                <a
                  href="tel:+916309117193"
                  className="hover:text-white"
                >
                  <span className="text-gray-400">
                    Phone:
                  </span>{" "}
                  +91 6309117193
                </a>

                <button
                  onClick={openContact}
                  className="text-left hover:text-white"
                >
                  Contact Us
                </button>

                <button
                  onClick={openContact}
                  className="text-left hover:text-white"
                >
                  Customer Login
                </button>

              </div>

            </div>

          </div>


          <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-xs text-gray-600 md:flex-row">

            <p>
              © {new Date().getFullYear()} Embedded Into Real Life.
              All rights reserved.
            </p>

            <p>
              Embedded Systems • IoT • Automation
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}


/* =========================================================
   COMPONENTS
========================================================= */

function Process({
  number,
  title,
  text,
  onClick,
}: {
  number: string;
  title: string;
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="border-l border-white/20 pl-6 text-left transition hover:border-white/60"
    >

      <div className="text-sm text-gray-600">
        {number}
      </div>

      <h3 className="mt-4 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-500">
        {text}
      </p>

    </button>
  );
}


function Reason({
  title,
  text,
  onClick,
}: {
  title: string;
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-left"
    >

      <div className="mb-4 h-px w-10 bg-white/40" />

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-500">
        {text}
      </p>

    </button>
  );
}


function DashboardItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 p-4">

      <p className="text-xs text-gray-500">
        {label}
      </p>

      <p className="mt-2 text-2xl font-semibold">
        {value}
      </p>

    </div>
  );
}