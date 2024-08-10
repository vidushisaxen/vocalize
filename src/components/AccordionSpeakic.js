import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../components/ui/accordion";
  
  export function AccordionSpeakic() {
    return (
      
      <section className="w-[40%] h-full mobile:w-[95%] mobile:mt-[10vw] mobile:h-full tablet:w-[95%] tablet:mt-[10vw] tablet:h-full tablet:mb-[10vw]">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="faq-ques">
              <p className="fadeh2">
              What languages does Speakic support?
              </p>
            </AccordionTrigger>
            <AccordionContent className="faq-ans fadetext">
            Speakic supports over 50 languages, including popular ones like Spanish, French, German, Mandarin, Japanese, and more. We continuously work to add more languages to our platform.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="faq-ques">
              <p className="fadeh2">How accurate is the speech-to-text and text-to-speech conversion?
              </p>
              </AccordionTrigger>
            <AccordionContent className="faq-ans fadetext">
            Speakic utilizes state-of-the-art voice recognition and synthesis technology to ensure high accuracy in speech-to-text and text-to-speech conversions. Our technology adapts to different accents and dialects for better performance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="faq-ques">
              <p className="fadeh2">
              Is Speakic suitable for beginners?
              </p>
            </AccordionTrigger>
            <AccordionContent className="faq-ans fadetext">
            Absolutely! Speakic is designed for learners of all levels, from beginners to advanced speakers. Our interactive lessons are tailored to different proficiency levels to make learning effective and enjoyable.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="faq-ques">
              <p className="fadeh2">
              Can I track my progress in Speakic?
              </p>
            </AccordionTrigger>
            <AccordionContent className="faq-ans fadetext">
            Yes, Speakic provides detailed progress tracking. You can monitor your language learning journey, set goals, and review your achievements to stay motivated and on track.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="faq-ques">
              <p className="fadeh2">Does Speakic offer customer support?</p></AccordionTrigger>
            <AccordionContent className="faq-ans fadetext">
            Yes, Speakic has a dedicated customer support team ready to assist you with any issues or questions. You can contact us through the app or via our website for prompt assistance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="faq-ques">
              <p className="fadeh2">
              Can I practice speaking with native speakers using Speakic?
              </p>
            </AccordionTrigger>
            <AccordionContent className="faq-ans fadetext">
            Yes, Speakic offers a feature to connect with native speakers for real-time conversation practice. This helps you improve your pronunciation, fluency, and cultural understanding.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="faq-ques">
              <p className="fadeh2">
              Can Speakic be used for professional purposes?</p>
            </AccordionTrigger>
            <AccordionContent className="faq-ans fadetext">
            Yes, Speakic is ideal for professionals needing language support for business, travel, or communication. Our platform includes specialized vocabulary and scenarios tailored for professional use.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger className="faq-ques">
              <p className="fadeh2">Does Speakic offer cultural insights and context in its lessons?
              </p>
              </AccordionTrigger>
            <AccordionContent className="faq-ans fadetext">
            Yes, Speakic includes cultural insights and context in its lessons to help you understand not just the language but also the customs and etiquette of the regions where the language is spoken. This enriches your learning experience and prepares you for real-world interactions.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      
    );
  }
  