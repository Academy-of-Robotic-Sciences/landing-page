---
id: getting-started
title: Getting Started
sidebar_position: 2
---

# Getting Started with Robot Campus

This guide will help you set up everything you need to begin your robotics learning journey.

## Prerequisites

### Basic Requirements
- **Computer**: Windows, macOS, or Linux with at least 8GB RAM
- **Internet Connection**: For downloading software and accessing resources
- **Enthusiasm**: Ready to learn and build!

### Recommended Background
- Basic programming knowledge (Python or C++)
- High school level mathematics
- Familiarity with basic electronics concepts (optional but helpful)

## Choose Your Setup

Depending on your chosen learning track, you'll need different tools and hardware:

### 🎨 For Robotic Designers
- **CAD Software**: Fusion 360 (free for personal use) or FreeCAD
- **3D Printer Access**: Either personal or through a makerspace
- **Materials**: PLA/PETG filament, basic hand tools

### ⚡ For Hardware Engineers
- **Development Board**: Arduino or Raspberry Pi
- **Electronics Kit**: Breadboard, jumpers, basic components
- **Tools**: Multimeter, soldering iron (optional initially)
- **SO-100/SO-101 Kit**: Available from [partner suppliers]

### 💻 For Software Engineers
- **IDE**: VS Code with ROS extensions
- **Software**: Ubuntu 22.04 LTS (dual boot or VM)
- **ROS2**: Humble Hawksbill installation
- **Simulation**: Gazebo or Isaac Sim

### 🧠 For AI Engineers
- **Python Environment**: Anaconda or Miniconda
- **ML Frameworks**: PyTorch, LeRobot framework
- **GPU**: NVIDIA GPU recommended (GTX 1060 or better)
- **CUDA**: Version 11.7 or later

### 🔧 For Systems Engineers
- **All of the above**: You'll need a complete setup
- **Docker**: For containerized deployments
- **Version Control**: Git and GitHub account

## Software Installation

### Step 1: Development Environment

```bash
# Install Git
sudo apt update
sudo apt install git

# Clone Robot Campus repositories
git clone https://github.com/robot-campus/starter-kit.git
cd starter-kit
```

### Step 2: Python Setup

```bash
# Install Miniconda
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
bash Miniconda3-latest-Linux-x86_64.sh

# Create Robot Campus environment
conda create -n robotcampus python=3.10
conda activate robotcampus

# Install core packages
pip install numpy scipy matplotlib jupyter
pip install torch torchvision torchaudio
```

### Step 3: ROS2 Installation (Software/Systems Track)

```bash
# Add ROS2 repository
sudo apt update && sudo apt install curl gnupg lsb-release
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg

# Install ROS2 Humble
sudo apt update
sudo apt install ros-humble-desktop
```

### Step 4: LeRobot Setup (AI Track)

```bash
# Install LeRobot framework
pip install lerobot

# Verify installation
python -c "import lerobot; print(lerobot.__version__)"
```

## Hardware Setup

### SO-100/SO-101 Arm Assembly

If you're working with the SO-100/SO-101 arm:

1. **Unbox and Inventory**: Check all parts against the BOM
2. **Mechanical Assembly**: Follow the [assembly guide](/docs/projects/so-101-arm/assembly)
3. **Wiring**: Connect servos according to the [wiring diagram](/docs/projects/so-101-arm/wiring)
4. **Calibration**: Run initial calibration routine
5. **Testing**: Execute test movements

### 3D Printer Calibration

For those with 3D printers:

1. **Level the bed**: Critical for good prints
2. **Set temperatures**: PLA: 200°C/60°C, PETG: 240°C/80°C
3. **Calibrate E-steps**: Ensure accurate extrusion
4. **Test print**: Print a calibration cube

## Your First Project

### Hello Robot World

Let's create your first robot program:

```python
# hello_robot.py
import time
from robot_campus import RobotArm

# Initialize the robot
robot = RobotArm()

# Home position
robot.home()

# Wave motion
for i in range(3):
    robot.move_joint(5, 45)  # Move wrist
    time.sleep(0.5)
    robot.move_joint(5, -45)
    time.sleep(0.5)

print("Hello, Robot World!")
robot.home()
```

## Learning Resources

### Documentation
- **[API Reference](/docs/api)**: Complete API documentation
- **[Tutorials](/docs/tutorials)**: Step-by-step guides
- **[Examples](/docs/examples)**: Sample projects and code

### Video Courses
- **YouTube Channel**: [Robot Campus Official](https://youtube.com/@robotcampus)
- **Course Playlist**: Organized by learning track

### Community Resources
- **Discord Study Groups**: Join track-specific channels
- **Weekly Office Hours**: Live Q&A sessions
- **Project Reviews**: Get feedback on your builds

## Troubleshooting

### Common Issues

**Python Import Errors**
```bash
# Ensure you're in the right environment
conda activate robotcampus
# Reinstall packages if needed
pip install --upgrade lerobot
```

**Serial Connection Issues**
```bash
# Add user to dialout group (Linux)
sudo usermod -a -G dialout $USER
# Logout and login again
```

**3D Printing Problems**
- Bed adhesion: Clean with isopropyl alcohol
- Layer shifting: Check belt tension
- Under-extrusion: Calibrate E-steps

## Next Steps

Now that you're set up:

1. **[Explore Learning Tracks](/docs/tracks/overview)**: Deep dive into your chosen specialization
2. **[Start a Project](/docs/projects/overview)**: Begin with a guided project
3. **[Join the Community](https://discord.gg/robotcampus)**: Introduce yourself!
4. **[Track Progress](/docs/community/badges)**: Earn badges as you learn

## Need Help?

- **Discord**: Fastest response in #help channel
- **Forum**: For detailed technical discussions
- **Office Hours**: Weekly live support sessions
- **Email**: support@robotcampus.io

---

Welcome aboard! Your robotics journey starts now. 🚀