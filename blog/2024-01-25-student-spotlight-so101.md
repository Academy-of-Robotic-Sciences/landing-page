---
slug: student-spotlight-so101
title: "Student Spotlight: Maria's Journey Building the SO-101 Robotic Arm"
authors: [student-spotlight, alex-rivera]
tags: [projects, hardware, community, beginner]
---

# From Zero Experience to Building a 6-DOF Robotic Arm: Maria's Inspiring Story

Meet Maria Rodriguez, a 22-year-old biology student from Barcelona who proved that anyone can learn robotics. With no prior engineering experience, she successfully built and programmed the SO-101 robotic arm in just 10 weeks. Here's her remarkable journey.


<!-- truncate -->

## The Beginning: A Biologist Meets Robotics

"I never thought I'd be building robots," Maria laughs. "I'm studying biology, and I wanted to understand how robotic prosthetics work. When I found Robot Campus, I thought it would be too advanced for me."

But Robot Campus's beginner-friendly approach changed everything.

## Week 1-2: Foundation Courses

Maria started with RC-101 (Introduction to Robotics) with zero background.

> "The foundation courses were amazing. They assumed no prior knowledge. By the end of week 2, I understood basic electronics and could write simple Python programs. I couldn't believe how quickly I was learning!"

### Key Takeaways:
- Started with absolute basics
- Video lectures made concepts clear
- Discord community answered questions within minutes
- Hands-on exercises from day one

## Week 3-4: Choosing the Hardware Track

After foundations, Maria chose the Hardware Engineering track and began planning her SO-101 build.

### The Shopping List:
- 6x MG996R servos ($60)
- Arduino Mega ($25)
- PCA9685 servo driver ($10)
- Power supply ($20)
- 3D printed parts (borrowed printer from university)
- **Total cost: ~$115**

"I was nervous about the cost, but it's less than a textbook! And I was building an actual robot!"

## Week 5-6: 3D Printing and Assembly

### The Challenge:
Maria had never used a 3D printer before.

### The Solution:
- Robot Campus provided detailed printing guides
- University makerspace offered free printer access
- Community members shared optimization tips
- Total print time: 40 hours over 5 days

"Watching the parts come out of the printer was magical. I was creating something real!"

### Assembly Highlights:
- Following step-by-step video guides
- Learning to use basic tools
- Understanding mechanical connections
- First successful joint movement!

## Week 7-8: Electronics and Wiring

This was Maria's biggest fear - working with electronics.

### What Helped:
1. **Clear diagrams**: Color-coded wiring guides
2. **Safety first**: Learned proper procedures
3. **Debugging together**: Discord screen-sharing sessions
4. **Small victories**: LED blink, servo test, full power-on

"When all six servos moved for the first time, I actually cried. I built this!"

## Week 9-10: Programming and Control

Using Arduino and ROS2, Maria programmed her robot to:
- Move to specific positions
- Perform pick-and-place tasks
- Draw simple shapes
- Respond to sensor input

### Her First Program:
```cpp
// Maria's first successful pick-and-place
void pickObject() {
    moveToPosition(object_x, object_y, hover_z);
    delay(500);
    moveToPosition(object_x, object_y, object_z);
    closeGripper();
    delay(500);
    moveToPosition(object_x, object_y, hover_z);
    // Success! Object grabbed!
}
```

## The Final Project: Sorting System

For her capstone, Maria created a color-based sorting system:
- Camera identifies colored blocks
- SO-101 picks up blocks
- Sorts them into correct bins
- 95% accuracy achieved!

## Challenges and Breakthroughs

### Biggest Challenge:
"In week 8, a servo died. I thought my project was ruined."

### The Solution:
- Community member in Barcelona had spare servo
- Met in person, fixed together
- Formed local study group
- Now 5 members meet weekly!

### Breakthrough Moment:
"When my robot successfully sorted 20 blocks without error, I realized I had become an engineer. Me, the biology student!"

## Skills Gained

In just 10 weeks, Maria learned:
- ✅ Basic electronics and circuits
- ✅ 3D printing and CAD basics
- ✅ Arduino programming
- ✅ Servo control and kinematics
- ✅ Problem-solving and debugging
- ✅ Technical documentation

## Impact on Career

"This project changed my career path. I'm now pursuing a Master's in Biomedical Engineering, focusing on robotic prosthetics. The SO-101 showed me I can bridge biology and robotics."

### Opportunities Created:
- Summer internship at prosthetics company
- Research assistant position in robotics lab
- Speaking at local STEM events
- Mentoring new Robot Campus students

## Maria's Advice for Beginners

### 1. **Just Start**
"Don't wait until you feel ready. I knew nothing and built a robot in 10 weeks."

### 2. **Use the Community**
"Every question I had was answered. People celebrate your small wins with you."

### 3. **Document Everything**
"Take photos, write notes. You'll be amazed at your progress."

### 4. **Embrace Failures**
"My robot fell apart twice. Each rebuild made it better."

### 5. **Share Your Journey**
"Teaching others solidified my learning. Plus, it's fun!"

## What's Next for Maria?

- Building a 2-DOF camera gimbal
- Learning Python for computer vision
- Starting AI track courses
- Leading Barcelona Robot Campus meetup
- Developing affordable prosthetic prototype

## The Numbers

Maria tracked her journey:
- **Total hours invested**: 180
- **Community questions asked**: 47
- **YouTube tutorials watched**: 62
- **Code iterations**: 200+
- **Coffee consumed**: Infinite ☕
- **Confidence gained**: Immeasurable

## Community Response

Maria's build thread on Discord has:
- 500+ reactions
- 100+ helpful responses
- 20+ students inspired to start
- 5 local meetup members

## Try It Yourself!

Inspired by Maria's story? You can build the SO-101 too!

### Resources:
- [SO-101 Build Guide](/docs/projects/so-101-arm)
- [Hardware Track](/docs/tracks/hardware)
- [Community Discord](https://discord.gg/robotcampus)
- [Maria's Build Log](https://github.com/maria-rodriguez/so101-build)

## Final Thoughts from Maria

> "Six months ago, I didn't know what a servo was. Today, I'm designing robotic systems for medical applications. Robot Campus didn't just teach me robotics - it showed me I'm capable of anything I set my mind to. If a biology student can build robots, so can you!"

## Watch Maria's Robot in Action

<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Maria's SO-101 Color Sorting Demo" frameborder="0" allowfullscreen></iframe>

## Join the Community

Maria's story is just one of thousands. Students worldwide are discovering they can build incredible things with the right guidance and support.

**Ready to start your robotics journey?**

[Build Your First Robot →](/docs/projects/so-101-arm)

---

*Have a project to showcase? Submit your story to spotlight@robotcampus.io*

*Follow Maria's continued journey on [GitHub](https://github.com/maria-rodriguez) and [LinkedIn](https://linkedin.com/in/maria-rodriguez-robotics)*