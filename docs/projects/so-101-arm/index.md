---
id: index
title: SO-101 Arm Project
sidebar_position: 1
---

# SO-101 Robotic Arm Project

> **Build a professional 6-DOF robotic arm capable of complex manipulation tasks**

## Project Overview

The SO-101 arm is our flagship project - a fully functional 6 degree-of-freedom robotic arm that you'll build from scratch. This project combines mechanical assembly, electronics integration, software programming, and AI training into one comprehensive learning experience.

## What You'll Build

### Specifications
- **Degrees of Freedom**: 6 (base, shoulder, elbow, 3x wrist)
- **Reach**: 50cm fully extended
- **Payload**: 500g at full extension
- **Repeatability**: ±2mm
- **Control**: ROS2 compatible
- **Power**: 12V DC, 5A peak

### Capabilities
- Pick and place operations
- Drawing and writing
- Object manipulation
- Gesture control
- AI-powered grasping
- Multi-arm coordination

## Project Phases

### Phase 1: Mechanical Assembly (Week 1-2)
- Print/acquire all parts
- Assemble base and joints
- Install servos and bearings
- Cable management
- Initial mechanical testing

### Phase 2: Electronics Integration (Week 3-4)
- Wire servo motors
- Connect control board
- Add power distribution
- Install sensors
- Test electrical systems

### Phase 3: Software Setup (Week 5-6)
- Install ROS2 packages
- Configure URDF model
- Calibrate servos
- Test basic movements
- Implement safety limits

### Phase 4: Advanced Control (Week 7-8)
- Program inverse kinematics
- Add trajectory planning
- Implement MoveIt2
- Create task primitives
- Optimize performance

### Phase 5: AI Integration (Optional)
- Collect training data
- Train grasping model
- Implement computer vision
- Deploy learned policies
- Test and refine

## Bill of Materials

### Core Components
| Component | Quantity | Est. Cost | Supplier |
|-----------|----------|-----------|----------|
| MG996R Servo | 6 | $60 | Amazon/AliExpress |
| Arduino Mega | 1 | $25 | Official Store |
| PCA9685 Board | 1 | $10 | Adafruit |
| 12V 5A Power Supply | 1 | $20 | Amazon |
| Bearings (various) | 12 | $15 | Local/Online |
| M3/M4 Hardware Kit | 1 | $15 | Amazon |
| Jumper Wires | 1 set | $10 | Amazon |

**Total Estimated Cost: $150-200**

### 3D Printed Parts
- Base platform
- Joint housings (6x)
- Link segments (5x)
- Gripper assembly
- Cable guides

**Print Time**: ~40 hours
**Filament**: ~1kg PLA/PETG

### Optional Upgrades
- Raspberry Pi 4 ($55)
- USB Camera ($30)
- Force sensors ($40)
- Better servos ($150)

## Assembly Instructions

### Step 1: Print Parts
Download STL files from our repository:
```bash
git clone https://github.com/robot-campus/so-101-arm
cd so-101-arm/stl
```

Recommended print settings:
- Layer height: 0.2mm
- Infill: 30-40%
- Supports: Yes for complex parts
- Material: PETG preferred, PLA acceptable

### Step 2: Base Assembly
1. Attach base servo to platform
2. Install bearing in rotating base
3. Connect base to servo horn
4. Route power cables
5. Test rotation

### Step 3: Arm Assembly
For each joint:
1. Install servo in housing
2. Add bearings for smooth motion
3. Connect to previous segment
4. Route servo cables
5. Test range of motion

### Step 4: Gripper Installation
1. Assemble gripper mechanism
2. Install micro servo
3. Calibrate open/close positions
4. Add rubber grips
5. Test gripping force

## Electronics Setup

### Wiring Diagram
```
Power Supply (12V) → Buck Converter → 5V
                  ↓
            PCA9685 Board
                  ↓
        Servos (1-6) + Gripper
                  ↓
            Arduino Mega
                  ↓
         Computer (USB)
```

### Arduino Configuration
```cpp
#include <Wire.h>
#include <Adafruit_PWMServoDriver.h>

Adafruit_PWMServoDriver pwm = Adafruit_PWMServoDriver();

#define SERVO_MIN 150
#define SERVO_MAX 600
#define SERVO_FREQ 50

void setup() {
  Serial.begin(115200);
  pwm.begin();
  pwm.setOscillatorFrequency(27000000);
  pwm.setPWMFreq(SERVO_FREQ);
}

void setServoAngle(uint8_t servo, uint16_t angle) {
  uint16_t pulse = map(angle, 0, 180, SERVO_MIN, SERVO_MAX);
  pwm.setPWM(servo, 0, pulse);
}
```

## Software Installation

### ROS2 Setup
```bash
# Install ROS2 dependencies
sudo apt update
sudo apt install ros-humble-moveit

# Clone SO-101 packages
cd ~/ros2_ws/src
git clone https://github.com/robot-campus/so101_ros2

# Build workspace
cd ~/ros2_ws
colcon build --packages-select so101_description so101_control
source install/setup.bash
```

### Launch Robot
```bash
# Start robot controllers
ros2 launch so101_control so101.launch.py

# Launch MoveIt2 planning
ros2 launch so101_moveit move_group.launch.py

# Start visualization
ros2 run rviz2 rviz2 -d $(ros2 pkg prefix so101_description)/config/so101.rviz
```

## Programming Examples

### Python Control
```python
import rclpy
from rclpy.node import Node
from trajectory_msgs.msg import JointTrajectory, JointTrajectoryPoint

class ArmController(Node):
    def __init__(self):
        super().__init__('arm_controller')
        self.publisher = self.create_publisher(
            JointTrajectory,
            '/arm_controller/command',
            10)

    def move_to_position(self, positions):
        msg = JointTrajectory()
        msg.joint_names = ['joint_1', 'joint_2', 'joint_3',
                          'joint_4', 'joint_5', 'joint_6']

        point = JointTrajectoryPoint()
        point.positions = positions
        point.time_from_start.sec = 2

        msg.points = [point]
        self.publisher.publish(msg)

# Usage
controller = ArmController()
controller.move_to_position([0, 0.5, -0.5, 0, 0, 0])
```

## Troubleshooting

### Common Issues

**Servo Jittering**
- Check power supply current
- Add capacitors near servos
- Reduce movement speed
- Calibrate servo centers

**Limited Range of Motion**
- Check mechanical collisions
- Verify servo limits in code
- Ensure proper cable routing
- Lubricate bearings if needed

**Communication Errors**
- Check USB connection
- Verify baud rate settings
- Update firmware
- Test with simple commands

## Testing & Calibration

### Servo Calibration
1. Set all servos to center (90°)
2. Attach horns at neutral position
3. Fine-tune in software
4. Save calibration values

### Accuracy Testing
- Draw test patterns
- Measure repeatability
- Check workspace limits
- Verify payload capacity

## Advanced Features

### Computer Vision Integration
Add object detection and tracking:
```python
from so101_vision import ObjectDetector

detector = ObjectDetector()
objects = detector.detect_objects()

for obj in objects:
    arm.pick_object(obj.position)
```

### LeRobot Training
Train custom behaviors:
```python
from lerobot import Trainer
from so101_env import SO101Env

env = SO101Env()
trainer = Trainer(env)
trainer.collect_demonstrations(100)
trainer.train(epochs=50)
```

## Project Variations

### Mini SO-101
- 50% scale version
- Micro servos
- Lower cost (~$75)
- Desktop friendly

### SO-101 Heavy
- Industrial servos
- 2kg payload
- Aluminum construction
- Professional applications

### Mobile SO-101
- Mounted on mobile base
- Battery powered
- Wireless control
- Autonomous navigation

## Community Resources

### Discord Support
- #so101-builders: Main discussion
- #so101-help: Troubleshooting
- #so101-mods: Modifications
- #so101-showcase: Show your builds

### Documentation
- [Assembly Videos](https://youtube.com/robotcampus)
- [CAD Files](https://github.com/robot-campus/so101-cad)
- [Software Docs](https://docs.robotcampus.io/so101)

## Showcase

### Student Projects
- Chess-playing arm
- 3D printer conversion
- Cocktail mixer
- Sign language interpreter
- Collaborative dual-arm system

## Next Steps

After completing the SO-101:
1. **Enhance**: Add sensors and vision
2. **Optimize**: Improve speed and accuracy
3. **Customize**: Design custom end-effectors
4. **Share**: Document and publish your build
5. **Advance**: Try the dual-arm challenge

---

Ready to build? [Start with mechanical assembly →](/docs/projects/so-101-arm/assembly)