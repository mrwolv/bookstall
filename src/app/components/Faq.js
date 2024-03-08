"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "../constants/stall";

const Faq = () => {
  // Group the FAQ items into pairs of two for the 2x2 grid layout
  const groupedFaq = [];
  for (let i = 0; i < faq.length; i += 3) {
    groupedFaq.push(faq.slice(i, i + 3));
  }

  return (
    <section className="mt-10 bg-[rgb(243,243,243)]">
      <div className="px-5 mt-4 container md:py-10">
        <h1 className="mt-4 text-[#333369] text-[1.8rem] md:text-[2.1rem] font-bold">
          FAQs
        </h1>

        <div className="mt-5 grid auto-cols-auto md:grid-flow-col md:grid-cols-1 gap-3 md:px-0 auto-cols-auto">
          {/* Map through grouped FAQ items */}
          {groupedFaq.map((faqPair, index) => (
            <div key={index} className="grid grid-cols-1 gap-4 ">
              {/* Map through each pair */}
              {faqPair.map((faqItem) => (
                <Accordion
                  key={faqItem.id}
                  type="single"
                  collapsible
                  className=""
                >
                  <AccordionItem value={faqItem.id}>
                    <AccordionTrigger className="text-[1.3rem] text-[#333369]">
                      {faqItem.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[1.2rem] mt-2">
                      {faqItem.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
