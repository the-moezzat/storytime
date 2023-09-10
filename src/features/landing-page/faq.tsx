import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqQuestions = [
  {
    question: "Is service free?",
    answer:
      "We have a generous free tier, but if you need more, you can upgrade to a paid plan anytime.",
  },
  {
    question: "Are my files secure?",
    answer:
      "Yes, they are. We use industry-standard encryption to protect your files in transit and at rest.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "There is a significant cost associated to run this application so we regret to inform you that we do not provide any form of refunds, whether partial or in full, at this time. However, you have the freedom to cancel your subscription effortlessly whenever you desire. Once you decide to cancel, no further charges will be incurred.",
  },
  {
    question: "How does it work?",
    answer:
      "The AI Assistant meticulously trains on your document, equipping itself to respond to any of your queries with precision. Experience intelligent document interactions tailored just for you. Welcome to the the future!",
  },
];

function Faq() {
  return (
    <div className="px-16 py-16 max-lg:px-4" id="faq">
      <h2 className="mb-12 text-3xl font-bold text-gray-8 max-lg:mb-6 max-lg:text-3xl max-sm:text-2xl max-[450px]:text-lg">
        Frequently asked question
      </h2>

      <Accordion
        type="single"
        collapsible
        className="flex w-full flex-col gap-4"
      >
        {faqQuestions.map((question, i) => (
          <AccordionItem value={`item-${i}`} key={i}>
            <AccordionTrigger className="max-lg:text-lg max-sm:text-left max-sm:text-base">
              {question.question}
            </AccordionTrigger>
            <AccordionContent>{question.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Faq;
