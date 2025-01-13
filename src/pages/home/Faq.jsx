import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Container, Typography } from "@mui/material"; // Ensure you're using MUI components
import { motion } from "framer-motion"; // Ensure framer-motion is installed

// const faqs = [
//     {
//         question: "What is Crescita 2.0?",
//         answer: "Crescita 2.0 is the three-day flagship event of IEEE SB LBSCEK, featuring hackathons, workshops, technical talks, and much more.",
//     },
//     {
//         question: "When and where is Crescita 2.0 happening?",
//         answer: "Crescita 2.0 will take place on January 24, 25, and 26, 2025, at LBS College of Engineering, Kasaragod.",
//     },
//     {
//         question: "Who can participate in Crescita 2.0?",
//         answer: "Students, tech enthusiasts, and innovators from across India are welcome to participate.",
//     },
//     {
//         question: "What is the participation fee for Crescita 2.0?",
//         answer: "Early bird registration fee: ₹699. Standard registration fee: ₹1000. (Includes food and accommodation.)",
//     },
//     {
//         question: "What events are included in Crescita 2.0?",
//         answer: "The event includes hackathons, workshops, technical talks, competitions, games, and a music night.",
//     },
//     {
//         question: "How can I register for Crescita 2.0?",
//         answer: "You can register online through the official Crescita 2.0 website. Stay tuned for the registration link.",
//     },
//     {
//         question: "Are food and accommodation provided?",
//         answer: "Yes, food and accommodation are included in the registration fee.",
//     },
//     {
//         question: "Will transportation be arranged?",
//         answer: "Transportation to the venue is the participant's responsibility, but assistance can be provided upon request.",
//     },
//     {
//         question: "What are the timings for the event?",
//         answer: "The event begins at 9 AM each day and continues until late evening. Specific schedules will be shared closer to the event.",
//     },
//     {
//         question: "Can I participate in multiple events?",
//         answer: "Yes, participants can register and participate in multiple events, provided the schedules do not overlap.",
//     },
//     {
//         question: "Is Crescita 2.0 open to beginners?",
//         answer: "Absolutely! Crescita 2.0 offers opportunities for participants of all skill levels to learn, compete, and network.",
//     },
//     {
//         question: "Can I attend just the workshops or talks?",
//         answer: "Yes, you can choose to attend individual events, but registration is required.",
//     },
//     {
//         question: "Will there be certificates for participants?",
//         answer: "Yes, all participants will receive certificates for attending Crescita 2.0.",
//     },
//     {
//         question: "Are there any networking opportunities?",
//         answer: "Yes, Crescita 2.0 provides ample opportunities to network with peers, industry experts, and mentors.",
//     },
//     {
//         question: "How can I contact the organizers?",
//         answer: "For inquiries, email us at crescita2.0@lbscek.ac.in or call the provided helpline numbers.",
//     },
// ];

const FaqBox = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            style={{
                position: "relative",
                backgroundColor: "white",
                borderRadius: "0.5rem",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                transition: "transform 0.3s, box-shadow 0.3s",
                marginBottom: "1rem",
                cursor: "pointer",
            }}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div
                style={{
                    padding: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: "1.125rem",
                        color: "#04d9ff",
                    }}
                >
                    {question}
                </Typography>
                <div style={{ color: "#04d9ff" }}>
                    <FontAwesomeIcon
                        icon={isOpen ? faCaretUp : faCaretDown}
                        style={{
                            width: "1.5rem",
                            height: "1.5rem",
                            transition: "transform 0.3s",
                        }}
                    />
                </div>
            </div>
            {isOpen && (
                <Typography
                    variant="body2"
                    sx={{
                        padding: "0.5rem 1rem",
                        color: "#04d9ff",
                    }}
                >
                    {answer}
                </Typography>
            )}
        </div>
    );
};

const FaqSection = () => {
    const animationParent = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
    };

    const animationChild = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <Container
            id="FAQ"
            sx={{
                backdropFilter: "blur(3px) saturate(110%)",
                backgroundColor: "rgba(255, 255, 255, 0.01)",
                maxWidth: "100vw",
                pt: "5vh",
            }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    minHeight: "100vh",
                    pt: "5vh",
                }}
                component={motion.div}
                initial="hidden"
                whileInView="show"
                variants={animationParent}
            >
                <Typography
                    component={motion.h6}
                    variants={animationChild}
                    viewport={{ once: true }}
                    variant="h6"
                    sx={{
                        color: "#04d9ff",
                        borderBottom: 2,
                        py: 0.8,
                        letterSpacing: "1px",
                        width: "fit-content",
                        // margin: "0 auto",
                        mb: 2,
                        fontSize: { xs: "14px", lg: "16px" },
                        textAlign: "left",  // Align to the left
                    }}
                >
                    FAQ
                </Typography>

                <ul style={{ listStyle: "none", padding: 0 }}>
                    {faqs.map((faq, index) => (
                        <li key={index}>
                            <FaqBox question={faq.question} answer={faq.answer} />
                        </li>
                    ))}
                </ul>
            </Container>
        </Container>
    );
};

export default FaqSection;
