import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const questions = [
  "What's the weirdest dream you've ever had?",
  "If you could travel to any time period in a time machine, what time period would you choose and why?",
  "If you could change one thing about yourself, what would it be?",
  "When asked what your most-fun memory from childhood is, what’s the very first memory you think of?",
  "If you could have any fictional character's wardrobe, whose would it be?",
  "What was the first job you ever wanted to have as a kid?",
  "If you could have dinner with a famous person (living or dead), who would you choose?",
  "What's your favorite movie to watch over and over again?",
  "You’re the lead character in a video game. What game is it? (You’re allowed to make one up.)",
  "What's your favorite season of the year?",
  "If you could create your own holiday, what would it be called and how would it be celebrated?",
  "Who is your current celebrity crush?",
  "What’s the most random thing you’ve ever bought online?",
  "If you could invent any gadget, what would it do?",
  "What’s the worst thing you’ve done to get out of trouble?",
  "Do you have a favorite museum? Which one?",
  "What's your biggest fear?",
  "What's the most adventurous thing you've ever done?",
  "What's the best advice you've ever received?",
  "You were just handed $100,000 to open your own business. What kind of business is it?",
  "What's a bad habit you had that you've been able to overcome?",
  "What's your dream road trip destination?",
  "What's your favorite food of all time?",
  "What are three items on your bucket list?",
  "What's your biggest regret?",
  "The only way you can communicate is through movie quotes. What movie are you choosing?",
  "What’s your favorite urban legend?",
  "What's your favorite thing about yourself?",
  "What's the weirdest thing in your closet?",
  "If you had to guess what people appreciate you the most, what would you say?",
  "What's your dream job?",
  "If you could be a part of a family on any TV show, which family would you choose?",
  "Of all the personal questions I could ask you, what's one you wouldn't want to answer?",
  "What's your biggest pet peeve when it comes to social media?",
  "Who's your favorite character from literature?",
  "What's an activity that you do not find fun at all?",
  "What's the weirdest thing you've ever done for a job?",
  "What’s the most recent thing in your internet search history?",
  "What’s the last thing in your phone that you took a screenshot of?",
  "What's your favorite color to wear?",
  "What's your favorite type of dessert?",
  "What's the worst lie you ever told as a kid?",
  "Who in your family are you closest to?",
  "What's your favorite sport to play and why?",
  "If we were in the middle of a zombie apocalypse, who are three people you'd want on your team?",
  "If you were an ice cream flavor, what would it be?",
  "What's your favorite song to sing in the shower?",
  "What's one thing your mom or dad doesn't understand about you?",
  "If you had a kid, what would you name it?",
  "What’s your moon sign?",
  "You’ve just walked into a shopping mall. Where’s the first place you’re going?",
  "What's your favorite way to spend a day off?",
  "What's a skill you'd love to learn?",
  "This or that: Living by the sea, or living in the mountains?",
  "What do you want your funeral to be like?",
  "What’s a tattoo you want to get? Name the first one that comes to mind.",
  "What app do you spend the most time on?",
  "What do you think the No. 1 most important quality in a friend is?",
  "What’s an unpopular opinion you have that you actually feel really strongly about?",
  "What's your favorite thing about your hometown?",
  "What's the best compliment you've ever received?",
  "What's your favorite way to celebrate your birthday?",
  "Do you have any phobias?",
  "What was your first-ever concert?",
  "Who was your first favorite musical artist?",
  "If you could have any job for a day, what would it be?",
  "What's your favorite type of movie snack?",
  "What’s your favorite piece of random trivia? You can only choose one.",
  "What's the best decision you've ever made?",
  "What's the most important lesson you've learned from a mistake?",
  "Do you have a favorite podcast?",
  "What's the best vacation you've ever been on?",
  "What's your favorite memory from the past year?",
  "What's your favorite thing about your best friend(s)?",
  "What's your favorite way to give back?",
  "What’s the last new thing you learned? It can be a skill or a fact.",
  "If you could instantly master any instrument, which one would you choose?",
  "If you could live in any fictional world, which one would it be?",
  "What's your favorite conspiracy theory?",
  "What's the most bizarre coincidence that's ever happened to you?",
  "If you could live in any country for a year, where would you go?",
  "What's the best prank you've ever played on someone?",
  "What's the best gift you've ever received?",
  "What's the weirdest superstition you secretly believe in?",
  "What movie has made you laugh hardest?",
  "If you could instantly be an expert in one subject, what would it be?"
];

export default function CuriousCards() {
  const [question, setQuestion] = useState("Click the button to draw a question!");

  const drawQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setQuestion(questions[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-200 p-4 text-pink-700 bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?funny,meme')" }}>
      <motion.div key={question} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <Card className="w-full max-w-lg p-6 text-center shadow-lg bg-white rounded-2xl border-4 border-pink-500">
          <CardContent className="text-xl font-semibold">{question}</CardContent>
        </Card>
      </motion.div>
      <Button className="mt-6 px-6 py-3 text-lg rounded-lg bg-pink-500 text-white hover:bg-pink-600 shadow-md" onClick={drawQuestion}>
        Draw Question
      </Button>
    </div>
  );
}
