# Remi — Swift Student Challenge Writeup

## Purpose

Remi aims to provide psychological relief to patients suffering from dementia, as well as their devoted loved ones.

**For the patient**, Remi aims to turn an environment filled with unrecognizable but familiar faces into a welcoming space where they feel a sense of control over their memories and moments shared with their loved ones. Dementia patients can not only identify faces using Remi's facial scan feature but also add memories associated with them. This restores the patient's autonomy and dignity, transforming strange stares into warm and loving interactions.

**For loved ones and caregivers**, Remi tries to mitigate the chronic emotional toll fueled by the grief of being looked at as a stranger by someone that they deeply love. By bridging the recognition gap, Remi heals the connection between a dementia patient and their loved ones. Therefore, loved ones can spend their precious time actually connecting with the patient rather than re-introducing themselves or reminding the patient of key memories.

---

## Design Philosophy

For a patient suffering from dementia, cognitive friction and a cluttered user interface leads to immediate anxiety. I designed Remi with **Hick's Law** in mind, which states that reducing choices reduces panic. Therefore, Remi's design is very minimalist, with important features like face recognition as the largest button on the home screen rather than buried in a navigation menu. For dementia patients, this instant frictionless experience helps them spend less time on the app and more time connecting with those that they love.

Beyond the user interface's minimalism, I designed the app with the **visual and motor limitations of the elderly** in mind. I carefully placed accessibility labels throughout the SwiftUI codebase, ensuring a seamless, descriptive voiceover experience for visually impaired users.

In short, accessibility was not an afterthought for Remi. The app was built with accessibility in mind from the ground up so that the friction of using the technology disappears, leaving only human connection behind.

---

## Technology

### Machine Learning Model

I used the **SFace** machine learning model in Remi's facial recognition pipeline. The reason for choosing this specific open-source model was that it is lightweight and highly optimized for working with mobile devices, especially Apple's CoreML Framework.

I have reviewed the model's open-source licensing terms and confirmed that my implementation is fully compliant with all copyright obligations for this submission.

I utilized royalty-free stock images from Unsplash to populate the sample memories and user profiles in the app playground.

### Development Tools

I used Xcode's built-in intelligence features, like code completion and the GPT Coding Assistant, not to design the entire system for me, but to act as a pair programmer who helps me refine my ideas and take my designs to the next level. I leveraged these features to quickly generate prototypes, generate boilerplate code, fix syntax errors, and understand the implementation of the face recognition pipeline that feeds into Apple's CoreML framework.

### Apple Frameworks

| Framework     | Role                                                                                                                                                                                       |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **ARKit**     | Creates a live, responsive scanning interface. Gives patients immediate visual feedback of their surroundings, eliminating the anxiety of staring at a delayed camera screen.              |
| **Vision**    | Instantly detects and crops human faces as the user scans the room. Processes everything on-device right away so patients don't have to wait in confusion.                                 |
| **Core ML**   | Runs the SFace model locally to create and match facial fingerprints. Processing sensitive biometric data entirely offline guarantees absolute privacy for vulnerable users.               |
| **SwiftData** | Stores facial fingerprint data and all memories associated with loved ones directly on the device, meaning patients can access their memories without ever needing an internet connection. |
| **SwiftUI**   | Powers the beautiful, responsive layouts — enabling the minimalist, accessible interface that makes the app easy to use for the elderly.                                                   |

---

## Community Impact

My driving philosophy as a developer is that the software I build must actively help the community. This is the foundation of my entire portfolio, where I try to use software as a bridge that helps people live a better quality of life.

I also believe that creating a positive impact requires stepping away from simply coding and walking alongside the community you actually want to help. I have recently connected with **local dementia care facilities in Minnesota** to learn more about the requirements of dementia patients — not to pitch, but to refine my solutions by understanding their pain points.

After the Swift Student Challenge, my plan is to keep iterating on Remi and to use the software I build to improve the lives of people living with dementia.

---

## Other Published Apps

I have independently developed and published two apps on the App Store that leverage AI to improve personal routines and wellness:

1. **HabitMentor AI** — Re-imagines traditional habit tracking by adding a layer of AI-based features that work with you to help you be more consistent. Instead of just counting streaks, HabitMentor utilizes advanced AI to analyze user behavior and generate deeply tailored suggestions, acting as an intelligent mentor for building and sustaining positive habits.
2. **Gains Chat** — Stemming from my personal dedication to weightlifting and fitness, this AI-driven workout tracker introduces a conversational style to logging workouts. Features include chat-based workout logging, real-time guidance, progress visualization graphs, and more.

---

## Closing

Building Remi was an amazing journey — one where I not only learned about the latest AI Vision Technologies and Apple APIs, but also gained profound empathy for the cognitive and emotional realities of those living with dementia. I am grateful to be working towards helping more than **55 million patients living with dementia worldwide**, and the first steps of this journey began with participating in the Swift Student Challenge.
