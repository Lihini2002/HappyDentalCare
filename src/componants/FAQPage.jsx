import React, { useState } from "react";
import coverPhoto from '/Users/lihini/dental/src/Assets/Screenshot 2023-05-01 at 21.41.29 copy.png'
import {Slide} from 'react-awesome-reveal'
import QuestionFAQ from "./QuestionFAQ";
import Questions from "../Data/Questions";

function FAQPage(){
    const PreventionQuestions = Questions.filter((question) => question.sectionType === "Prevention");
    const aCareQuestions = Questions.filter((question) => question.sectionType === "aCare");
   
    return(
            <div>
<div className="h-[70vh] bg-gradient-to-b from-[#1e2570] via-[#2250b4] via-[#174cae] via-[#4876e1] to-[#4e86ee] flex justify-start items-center -z-10">
<Slide duration={500}>
<div className="flex items-start flex-col text-[#cfdeff] p-20">
    <p className="text-2xl text-left  my-5">You are not alone in your dental journey. </p>
    <div className="h-[2px] w-[15%] bg-white"></div>

    <p className="text-[3rem] md:text-[4rem] lg:text-[5rem] xl-text-[6rem] font-bold ">FAQs</p>
    <p className="text-2xl text-left">Find answers to your most common dental inquiries here.</p>
    <div className="my-5 flex flex-row gap-5">
            <button class="bg-[#c61f5d] text-lg opacity-80 hover:opacity-100 text-white font-bold py-2 px-4 rounded-lg shadow hover:shadow-md">
        SPEAK TO OUR TEAM</button>
        <button class="bg-[#c61f5d] text-lg opacity-80 hover:opacity-100 text-white font-bold py-2 px-4 rounded-lg shadow hover:shadow-md">
        BOOK NOW </button>
    </div>
</div>
</Slide>

</div>

<div>
  <p className="text-md text-left text-[#c61f5d]">Prevention is key</p>
  <p className="text-xl font-bold text-left">How to take care of your teeth </p>

      {PreventionQuestions.map((question) => (
        <QuestionFAQ
          key={question.id}
          summary={question.summary}
          details={question.details}
          type={question.sectionType}
        />


      ))}
    </div>

</div>


         
         )
}

export default FAQPage