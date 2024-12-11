// "use client";

// import {
//   Accordion,
//   AccordionItem,
//   AccordionHeader,
//   AccordionBody,
// } from "react-bootstrap";

// function Faq() {
//   const faqs = [
//     {
//       id: "0",
//       question: "What are the benefits of Unlimited?",
//       answer:
//         "Being an Unlimited learner means you get: Access to thousands of FutureLearn short courses and tests A printable digital Certificate of Achievement on all short courses once you're eligible The freedom to keep access to any of the courses you've gained a digital Certificate of Achievement on The flexibility to complete your choice of short courses in your own time",
//     },
//     {
//       id: "1",
//       question: "What courses are included?",
//       answer:
//         "Almost all of our short courses! Unlimited includes access to all stand-alone short courses which offer a Certificate of Achievement, except Paid Upfront courses (including Microcredentials and Degrees) or Subscription Access courses included in an ExpertTrack. Unlimited does not include: Paid Upfront courses (including Microcredentials) Subscription Access courses included in an ExpertTrack Program assessments Degrees (although open taster courses are included) To find out if a course is included, set the filter to Included in Unlimited on the short courses page and look for the same label on the course card.",
//     },
//     {
//       id: "2",
//       question: "What about courses I've already taken and lost access to?",
//       answer:
//         "If you've lost access to any courses before you buy Unlimited, you'll regain access and receive all the benefits of Unlimited on them. Look for the 'Included in Unlimited' label on the course cards on the 'Your Learning' page to determine which courses you will keep.",
//     },
//     {
//       id: "3",
//       question: "How do I renew Unlimited?",
//       answer:
//         "Your Unlimited subscription will automatically renew at the end of your subscription period. We will notify you three days before your subscription renews. You will be able to cancel at any time before the end of your current subscription period. If you choose to cancel your subscription, you'll keep Unlimited access until your current subscription ends.",
//     },
//     {
//       id: "4",
//       question:
//         "What happens at the end of my subscription period if I cancel my Unlimited subscription?",
//       answer:
//         "You'll keep all of your Certificates of Achievement * You'll keep Unlimited access to every course where you've earned a Certificate of Achievement * You'll go back to having the same experience as a free learner on any courses where you haven't earned a Certificate of Achievement",
//     },
//     {
//       id: "5",
//       question:
//         "What happens if I decide to renew after my subscription expires?",
//       answer:
//         "If you change your mind about cancelling after your Unlimited subscription expires, don't worry! You will regain access to the courses from your last subscription from the moment that you resubscribe.",
//     },
//   ];

//   return (
//     <>
//       <div className="rounded-4xl overflow-hidden w-[90%] lg:w-[80%] py-10">
//         <Accordion defaultActiveKey="0" className="custom-accordion">
//           {faqs.map((faq) => (
//             <AccordionItem key={faq.id} eventKey={faq.id}>
//               <AccordionHeader
//                 id={`faq-${faq.id}`}
//                 className="custom-accordion-header font-bold"
//               >
//                 {faq.question}
//               </AccordionHeader>
//               <AccordionBody aria-labelledby={`faq-${faq.id}`}>
//                 {faq.answer}
//               </AccordionBody>
//             </AccordionItem>
//           ))}
//         </Accordion>

//         <style jsx global>{`
//           .custom-accordion {
//             border-radius: 2rem;
//             overflow: hidden;
//           }

//           .custom-accordion .accordion-item:first-of-type {
//             border-top-left-radius: 2rem;
//             border-top-right-radius: 2rem;
//           }

//           .custom-accordion .accordion-item:last-of-type {
//             border-bottom-left-radius: 1rem;
//             border-bottom-right-radius: 1rem;
//           }

//           .custom-accordion .accordion-button:not(.collapsed) {
//             background-color: #f0bd6c; /* Golden color */
//             color: black;
//           }

//           .custom-accordion .accordion-button:focus {
//             box-shadow: none;
//           }
//         `}</style>
//       </div>
//     </>
//   );
// }

// export default Faq;
