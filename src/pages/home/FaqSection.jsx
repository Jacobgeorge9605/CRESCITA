import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const faqs = [
    {
        question: "How much is the participation fee?",
        answer: "Early bird registration fee: 350. Registration fee: 450. (Food and accommodation included)",
    },
    {
        question: "Who can participate in Medihack?",
        answer: "Participants should be school or college students and not working professionals.",
    },
    {
        question: "What are the Hackathon prizes?",
        answer: "View the prizes section for more information",
    },
    {
        question: "Can we use any reference material during the contest?",
        answer: "Yes, participants are allowed to use reference materials during the contest.",
    },
    {
        question:
            "What is the participation policy regarding teams? Is participation exclusive to teams, and if so, what is the maximum team size?",
        answer: "Yes, participation is exclusive to teams, with a maximum team size of 4 members.",
    },
    {
        question: "As a beginner, is there any value in registering?",
        answer:
            "Absolutely! Hackathons offer a fantastic opportunity to dive into new technologies, build skills, and connect with others. Regardless of your experience level, there's something valuable for everyone to gain.",
    },
    {
        question: "When are the problem statements revealed?",
        answer: "Software problem statements are released at the start of the hackathon, Hardware problem statements are released 2 days prior.",
    },
];

const FaqBox = ({ question, answer, isOpen, onClick }) => (
    <div
        className="relative bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:-translate-y-1 hover:shadow-lg mb-4"
        onClick={onClick}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
    >
        <div className="p-4 flex items-center justify-between cursor-pointer">
            <h3 className="text-lg font-bold text-indigo-600">{question}</h3>
            <div className="text-gray-600">
                <FontAwesomeIcon
                    icon={isOpen ? faCaretUp : faCaretDown}
                    className="w-6 h-6 transition-transform transform"
                />
            </div>
        </div>
        {isOpen && <p className="px-4 py-2 text-gray-800 font-bold">{answer}</p>}
    </div>
);

const FaqSection = ({ id }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleFaq = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    const filteredFaqs = faqs.filter((faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div id={id} className="bg-purple-900 py-10 w-screen">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="title-component mb-8">
                    <div className="title-decoration">
                        <span className="title-decorative-line-left bg-blue-500"></span>
                        <h1 className="text-lg title-heading text-white font-bold">FAQ</h1>
                        <span className="title-decorative-line-right bg-blue-500"></span>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="mb-6">
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-md"
                        placeholder="Search FAQs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <ul>
                    {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((faq, index) => (
                            <li key={index}>
                                <FaqBox
                                    question={faq.question}
                                    answer={faq.answer}
                                    isOpen={openIndex === index}
                                    onClick={() => toggleFaq(index)}
                                />
                            </li>
                        ))
                    ) : (
                        <p className="text-white font-bold">No FAQs match your search query.</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default FaqSection;