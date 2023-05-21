import { useState } from 'react';
import  Section  from '../components/Section/Section';
import  Statistics  from '../components/Statistics/Statistics';
import  Notification  from '../components/Notification/Notification';
import  Feedback  from '../components/Feedback/Feedback';


export default function App() {
  const [counter, setCounter] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })

  const handleClick = (key) => {
    setCounter((prevState) => ({...prevState, [key]: prevState[key] +1}));
  };

const countTotalFeedback = () => {
  const value = Object.values(counter);
  return value.reduce((acc, value) => acc + value, 0)
};

const counPositiveFeedbackPercentage = (total, good) => {
  const persentage = Math.round((good / total) * 100);
  return persentage;
};


const total = countTotalFeedback();
const options = Object.keys(counter);
const positivePercentage = counPositiveFeedbackPercentage(total, counter.good );
return (
  <>
   <Section title="Please leave feedback">
    <Feedback options={options} onClick={handleClick}/>
  </Section>
  <Section title="Statistics">
    {total > 0 ? (
       <Statistics good={counter.good} 
                  neutral={counter.neutral}
                   bad={counter.bad} 
                   total={total} 
                   positivePercentage={positivePercentage}/>) : 
                   (<Notification message="There is no feedback" />)}
  </Section>
  </>
);
 }

