# Academy of Robotic Sciences (ARS) – Context Document

## Brand
**Name:** Academy of Robotic Sciences (ARS)
**Tagline:** *Building the Next Generation of Humanoid Robotics*

**Mission:**
- Train robotic experts through open, project-based learning.
- Use **SO-100/SO-101 Arm**, **LeRobot**, and **3D prototyping** as anchors.
- Build a **community** that learns, builds, and shares together.

---

## Vision
Make humanoid robotics education **accessible, open-source, and hands-on**, creating a new generation of **robotic engineers**.

---

## Specializations (Learning Paths)

| Path | Core Skills | Example Projects |
|------|-------------|------------------|
| **Robotic Designer** | CAD, 3D printing, mechanical systems | Design & print SO-101 joint, custom gripper |
| **Robotic Hardware Engineer** | Electronics, sensors, wiring, servo calibration | Assemble & calibrate SO-101 arm |
| **Robotic Software Engineer** | Kinematics, motion planning, ROS2, simulation | URDF + ROS2 control of SO-101 |
| **Robotic AI Engineer** | LeRobot, ML, vision, sim-to-real | Train pick-and-place with LeRobot |
| **Robotic Systems Engineer** | Integration, safety, architecture, testing | Full SO-101 task pipeline with AI + control |

---

## Core Projects
- **SO-100 / SO-101 Arm** – design, build, program
- **LeRobot AI Framework** – imitation + RL training
- **3D Prototyping** – joints, grippers, enclosures
- **Community Challenges** – hackathons, showcases

---

## Structure (Docusaurus)

```
/docs                    # Documentation & learning tracks
  introduction/          # Welcome, brand context
  tracks/                # Design, Hardware, Software, AI, Systems
  projects/              # SO-101 arm, LeRobot, 3D prototyping
  community/             # Contributing, showcase, events
/src/pages               # Custom pages
  index.tsx              # Homepage
  courses.tsx            # Courses landing page
/static/img              # Logo and images
/blog                    # Announcements & tutorials
```

## External Courses

Courses are hosted separately at: https://academy-of-robotic-sciences.github.io/courses/

Courses use LiaScript for interactive delivery:
```
https://LiaScript.github.io/course/?https://raw.githubusercontent.com/Academy-of-Robotic-Sciences/courses/main/{track}/{course}.md
```

---

## Style
Hands-on • Open • Community-driven • Future-oriented

## Course Writing Guide
To write good courses, read our [writing guide](/writing-guide.md).
