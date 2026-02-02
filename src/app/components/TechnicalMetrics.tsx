"use client";

import { motion } from "framer-motion";

export default function TechnicalMetrics() {
    return (
        <section className="py-20 px-4 bg-background/40">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-center text-foreground"
                >
                    Impact & Achievements
                </motion.h2>
                <div className="grid grid-cols-1 gap-12">
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-emerald-600 dark:text-emerald-400">
                            Backend & System Design
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-background/70 rounded-xl p-6 border border-foreground/10 backdrop-blur-sm"
                            >
                                <h4 className="text-lg font-semibold text-foreground">
                                    Microservices & Contracts
                                </h4>
                                <ul className="mt-2 space-y-2 text-foreground/75">
                                    <li>• Designed and evolved REST APIs in microservice-based platforms (D2C commerce and service/booking domains).</li>
                                    <li>• Coordinated API contracts between frontend (Next.js) and service layers (NestJS), reducing integration friction.</li>
                                    <li>• Kept services maintainable by isolating responsibilities and defining clear domain boundaries.</li>
                                </ul>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-background/70 rounded-xl p-6 border border-foreground/10 backdrop-blur-sm"
                            >
                                <h4 className="text-lg font-semibold text-foreground">
                                    Data & Business Workflows
                                </h4>
                                <ul className="mt-2 space-y-2 text-foreground/75">
                                    <li>• Integrated relational and NoSQL systems (e.g., MySQL, DynamoDB, SQL Server) across different products.</li>
                                    <li>• Implemented business rules for commerce/booking flows and operational workflows (including batch processes).</li>
                                    <li>• Automated recurring operations to reduce manual overhead and improve consistency.</li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-emerald-600 dark:text-emerald-400">
                            Infrastructure & DevOps
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-background/70 rounded-xl p-6 border border-foreground/10 backdrop-blur-sm"
                            >
                                <h4 className="text-lg font-semibold text-foreground">
                                    Cloud & Observability
                                </h4>
                                <ul className="mt-2 space-y-2 text-foreground/75">
                                    <li>• Worked across AWS-based stacks (compute, storage, CDN, serverless) to support scalable services.</li>
                                    <li>• Used monitoring and logs (e.g., CloudWatch, New Relic) to diagnose issues and improve reliability.</li>
                                    <li>• Contributed to performance analysis and operational readiness in production environments.</li>
                                </ul>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-background/70 rounded-xl p-6 border border-foreground/10 backdrop-blur-sm"
                            >
                                <h4 className="text-lg font-semibold text-foreground">
                                    CI/CD & Delivery
                                </h4>
                                <ul className="mt-2 space-y-2 text-foreground/75">
                                    <li>• Contributed to CI/CD pipelines (GitLab) to automate build, test and deployment workflows.</li>
                                    <li>• Supported low-risk releases through repeatable Docker-based processes and controlled rollouts.</li>
                                    <li>• Helped keep delivery fast without compromising stability and maintainability.</li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-emerald-600 dark:text-emerald-400">
                            Product & Team Impact
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-background/70 rounded-xl p-6 border border-foreground/10 backdrop-blur-sm"
                            >
                                <h4 className="text-lg font-semibold text-foreground">
                                    User-Facing Value
                                </h4>
                                <ul className="mt-2 space-y-2 text-foreground/75">
                                    <li>• Shipped features that directly impacted end users (commerce storefronts, booking/rental flows, internal tools).</li>
                                    <li>• Balanced UX needs with backend constraints to keep systems reliable and predictable.</li>
                                    <li>• Iterated based on feedback from stakeholders to refine workflows and reduce friction.</li>
                                </ul>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-background/70 rounded-xl p-6 border border-foreground/10 backdrop-blur-sm"
                            >
                                <h4 className="text-lg font-semibold text-foreground">
                                    Collaboration & Ownership
                                </h4>
                                <ul className="mt-2 space-y-2 text-foreground/75">
                                    <li>• Worked cross-team to clarify requirements and deliver incrementally without surprises.</li>
                                    <li>• Took ownership across the lifecycle: implementation, production support, maintenance and documentation.</li>
                                    <li>• Improved team knowledge sharing through documentation and code quality practices.</li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
