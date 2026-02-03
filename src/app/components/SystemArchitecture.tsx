'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
                >
                    System Architecture & Projects
                </motion.h2>
                <div className="grid grid-cols-1 gap-8">
                    {[
                        {
                            title: "D2C E-commerce Platforms",
                            description:
                                "Distributed, microservices-based D2C e-commerce platforms for online sales of Small Domestic Appliances across multiple regions and brands.",
                            details: [
                                "Worked across multiple D2C storefronts (EMEA and NA), contributing to both feature delivery and platform evolution.",
                                "Built and maintained a microservices architecture with Next.js on the frontend, NestJS REST APIs, and PHP/Symfony for backend services and batch workflows.",
                                "Implemented integrations and operational tooling across AWS (e.g. storage, messaging, monitoring), supporting scalable and resilient environments.",
                                "Used Docker-based development and deployment workflows, with Redis for caching/session-like workloads and performance improvements.",
                                "Collaborated with cross-functional teams to ship changes safely, focusing on reliability, observability, and performance in a high-traffic commerce context.",
                            ],
                            tech: [
                                "Next.js",
                                "NestJS",
                                "PHP",
                                "Symfony",
                                "Redis",
                                "Docker",
                                "AWS",
                                "REST APIs",
                                "Algolia",
                            ],
                            links: [
                                { label: "KitchenAid IT", url: "https://www.kitchenaid.it/" },
                                { label: "KitchenAid US", url: "https://www.kitchenaid.com/" },
                            ],
                        },
                        {
                            title: 'Home Appliance Repair Microservices Platform',
                            description:
                                'Microservices-based backend and web application for booking and managing home appliance repairs at scale.',
                            details: [
                                'Implemented microservices with PHP/Symfony and REST APIs, integrating Vue.js for the frontend experience.',
                                'Containerized services with Docker and deployed on AWS ECS, ensuring reliable, repeatable releases.',
                                'Integrated MySQL and DynamoDB with monitoring via CloudWatch and New Relic.',
                                'Designed the architecture to support zero-downtime deployments through GitLab CI/CD pipelines.',
                            ],
                            tech: [
                                'PHP',
                                'Symfony',
                                'Vue.js',
                                'Docker',
                                'AWS ECS',
                                'MySQL',
                                'DynamoDB',
                                'CloudWatch',
                                'GitLab CI'
                            ],
                            links: [
                                {
                                    label: "Whirlpool IT Support",
                                    url: "https://www.whirlpool.it/supporto/fissa-un-appuntamento/easy-service",
                                },
                                {
                                    label: "Indesit IT Support",
                                    url: "https://www.indesit.it/assistenza/fuori-garanzia",
                                },
                            ],
                        },
                        {
                            title: 'Global Retail Store Locator Microservice',
                            description:
                                'Microservice and micro frontend powering a global store locator for retail locations.',
                            details: [
                                'Collaborated with stakeholders to gather requirements and define features for the store locator domain.',
                                'Built a Node.js/TypeScript microservice exposing REST APIs consumed by a micro frontend.',
                                'Implemented a data ingestion pipeline with AWS Lambda for automated daily store database updates.',
                                'Ensured real-time availability of worldwide retail data through robust synchronization workflows.',
                            ],
                            tech: [
                                'Node.js',
                                'TypeScript',
                                'AWS Lambda',
                                'REST APIs',
                                'Google Docs'
                            ],
                            links: [
                                {
                                    label: "Whirlpool IT Locator",
                                    url: "https://www.whirlpool.it/supporto/service-locator",
                                },
                                {
                                    label: "Indesit IT Locator",
                                    url: "https://www.indesit.it/store-locator",
                                },
                            ],
                        },
                        {
                            title: 'Business Applications & Tools',
                            description:
                                'Web and mobile applications to streamline rental flows, working time tracking, and financial operations.',
                            details: [
                                'Developed a responsive rental platform using HTML5, CSS3, JavaScript, PHP and WordPress.',
                                'Built an Android app (Java, Firebase) for automatic working hours calculation, reducing manual errors.',
                                'Developed ASP.NET Core web applications with SQL Server for financial management workflows.',
                                'Containerized .NET services with Docker and set up CI/CD with GitHub pipelines for automated deployments.',
                            ],
                            tech: [
                                'Java',
                                'Android',
                                'Firebase',
                                'ASP.NET Core',
                                'SQL Server',
                                'Docker',
                                'WordPress'
                            ],
                        },
                    ].map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white dark:bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-800"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                {project.description}
                            </p>
                            <div className="mb-6">
                                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                                    Key Responsibilities & Results
                                </h4>
                                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                                    {project.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-sm px-3 py-1 bg-blue-500/10 text-blue-800 dark:text-blue-300 rounded-full border border-blue-500/20"
                                    >
										{tech}
									</span>
                                ))}
                            </div>
                            {project.links && project.links.length > 0 && (
                                <div className="mt-6">
                                    <h4 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                                        Live Examples
                                    </h4>
                                    <div className="flex flex-wrap gap-3">
                                        {project.links.map((link, i) => (
                                            <a
                                                key={i}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="
                                                    inline-flex items-center
                                                    px-3 py-1.5
                                                    text-sm font-medium
                                                    rounded-md
                                                    border
                                                    transition-colors
                                                    bg-background/50
                                                    text-foreground/80
                                                    border-foreground/15
                                                    hover:bg-foreground/5
                                                    hover:text-foreground
                                                    hover:border-foreground/30
                                                  "
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
