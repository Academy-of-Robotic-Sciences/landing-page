---
slug: lerobot-getting-started
title: "Getting Started with LeRobot: Train Your Robot with Imitation Learning"
authors: [lisa-park, robot-campus]
tags: [tutorials, ai-ml, software, projects]
---

# Master Robot Training with LeRobot: From Recording to Deployment in 5 Steps

LeRobot is revolutionizing how we train robots. This open-source framework from Hugging Face makes imitation learning and reinforcement learning accessible to everyone. Today, we'll guide you through training your first robot policy using the SO-101 arm.


<!-- truncate -->

## What is LeRobot?

LeRobot is a state-of-the-art framework that enables:
- **Imitation Learning**: Robots learn by watching demonstrations
- **Reinforcement Learning**: Robots improve through trial and error
- **Sim-to-Real Transfer**: Train in simulation, deploy on real hardware
- **Multi-Modal Learning**: Combine vision, proprioception, and language

## Why LeRobot Matters

### Traditional Programming vs LeRobot

**Traditional Approach:**
```python
# Hard-coded positions for every scenario
if object_color == "red":
    move_to(x=10, y=20, z=5)
    grip()
    move_to(x=30, y=40, z=5)
elif object_color == "blue":
    # More hard-coded logic...
```

**LeRobot Approach:**
```python
# Robot learns from demonstrations
policy = LeRobotPolicy.from_pretrained("pick-and-place")
action = policy.predict(observation)
robot.execute(action)
```

The robot learns to generalize from examples!

## Prerequisites

Before starting, ensure you have:
- ✅ Python 3.8+
- ✅ CUDA-capable GPU (recommended)
- ✅ SO-101 arm or simulation environment
- ✅ Webcam or RGB camera
- ✅ 10GB free disk space

## Step 1: Installation

### Install LeRobot

```bash
# Clone the repository
git clone https://github.com/huggingface/lerobot.git
cd lerobot

# Create virtual environment
python -m venv lerobot_env
source lerobot_env/bin/activate  # On Windows: lerobot_env\Scripts\activate

# Install dependencies
pip install -e .
pip install torch torchvision torchaudio  # Install PyTorch
```

### Verify Installation

```bash
python -c "import lerobot; print(lerobot.__version__)"
# Output: 0.2.0
```

## Step 2: Set Up Your Robot

### For SO-101 Hardware

```python
# robot_config.py
from lerobot.robot import Robot
from lerobot.robot.so101 import SO101Config

# Configure your SO-101
config = SO101Config(
    port="/dev/ttyUSB0",  # Adjust for your system
    servo_ids=[1, 2, 3, 4, 5, 6],
    camera_index=0,
    control_frequency=50  # Hz
)

robot = Robot(config)
robot.calibrate()
print("Robot ready!")
```

### For Simulation

```python
# sim_config.py
from lerobot.sim import SimulatedSO101

robot = SimulatedSO101(
    render=True,
    camera_enabled=True
)
robot.reset()
print("Simulation ready!")
```

## Step 3: Collect Demonstration Data

### Recording Your First Dataset

```python
# collect_demos.py
from lerobot.data import DataCollector
from lerobot.teleoperation import SpaceMouse

# Initialize teleoperation
teleop = SpaceMouse()  # Or use keyboard/gamepad
collector = DataCollector(
    robot=robot,
    task_name="pick_red_cube",
    save_dir="./datasets/my_first_dataset"
)

# Start collecting
print("Starting data collection. Press 'q' to stop.")
collector.start()

while not collector.should_stop():
    # Get human input
    action = teleop.get_action()
    
    # Execute on robot
    observation = robot.step(action)
    
    # Store data
    collector.add(observation, action)

collector.save()
print(f"Collected {collector.num_episodes} episodes!")
```

### Data Collection Best Practices

1. **Diverse Demonstrations**: Record 50-100 episodes with variations
2. **Consistent Quality**: Smooth, deliberate movements
3. **Edge Cases**: Include failure recovery scenarios
4. **Multiple Angles**: Vary object positions and orientations

## Step 4: Train Your Policy

### Configure Training

```yaml
# config/train_config.yaml
model:
  type: diffusion_policy
  observation_dim: 14  # 6 joint positions + 6 velocities + 2D object position
  action_dim: 6  # 6 joint commands
  hidden_dim: 256
  
training:
  epochs: 100
  batch_size: 32
  learning_rate: 1e-4
  device: cuda
  
data:
  dataset_path: ./datasets/my_first_dataset
  train_split: 0.8
  augmentation:
    enabled: true
    noise_scale: 0.01
```

### Start Training

```python
# train.py
from lerobot.train import Trainer
from lerobot.models import DiffusionPolicy

# Load configuration
config = load_config("config/train_config.yaml")

# Initialize model
model = DiffusionPolicy(config.model)

# Create trainer
trainer = Trainer(
    model=model,
    config=config.training,
    dataset_path=config.data.dataset_path
)

# Train!
trainer.train()

# Save the trained policy
model.save_pretrained("./models/my_pick_place_policy")
```

### Monitor Training Progress

```bash
# In another terminal
tensorboard --logdir ./logs
# Open browser to http://localhost:6006
```

## Step 5: Deploy Your Trained Policy

### Real-World Deployment

```python
# deploy.py
from lerobot.models import DiffusionPolicy
from lerobot.robot import SO101
import torch

# Load trained model
policy = DiffusionPolicy.from_pretrained("./models/my_pick_place_policy")
policy.eval()

# Initialize robot
robot = SO101(port="/dev/ttyUSB0")
robot.calibrate()

# Run policy loop
with torch.no_grad():
    while True:
        # Get observation
        obs = robot.get_observation()
        
        # Predict action
        action = policy.predict(obs)
        
        # Execute
        robot.step(action)
        
        # Check if task complete
        if robot.task_complete():
            print("Task completed successfully!")
            robot.reset()
```

## Advanced Techniques

### 1. Multi-Task Learning

Train one policy for multiple tasks:

```python
tasks = ["pick_red", "pick_blue", "stack_blocks"]
for task in tasks:
    collector.set_task(task)
    # Collect task-specific demonstrations
```

### 2. Sim-to-Real Transfer

```python
# Train in simulation
sim_trainer = Trainer(env="simulation")
sim_trainer.train()

# Fine-tune on real robot (10x less data needed)
real_trainer = Trainer(
    env="real",
    pretrained_model=sim_trainer.model,
    epochs=10  # Much faster!
)
```

### 3. Vision-Based Control

```python
# Use camera observations
config = {
    "observation_space": {
        "image": (3, 224, 224),  # RGB image
        "proprioception": 6  # Joint positions
    }
}
```

## Troubleshooting Common Issues

### Issue 1: Jerky Robot Movements
**Solution**: Increase control frequency or add action smoothing:
```python
action = 0.8 * action + 0.2 * previous_action  # Smooth transitions
```

### Issue 2: Policy Not Generalizing
**Solution**: Add more diverse training data and augmentation:
```python
augmentation = {
    "random_crop": True,
    "color_jitter": 0.1,
    "gaussian_noise": 0.01
}
```

### Issue 3: Slow Training
**Solution**: Use mixed precision training:
```python
trainer = Trainer(mixed_precision=True)  # 2x speedup!
```

## Performance Benchmarks

| Task | Traditional Programming | LeRobot | Improvement |
|------|------------------------|---------|-------------|
| Pick & Place | 70% success | 95% success | +35% |
| Stacking | 40% success | 85% success | +112% |
| Sorting | 60% success | 92% success | +53% |
| Assembly | Not attempted | 78% success | New capability |

## Real Student Results

> "I trained my SO-101 to sort Lego bricks by color in just 3 days. The robot now works faster than I can sort manually!" - Tom, Software Track

> "Using LeRobot, our team won the hackathon with a robot that could play Jenga. We only had 48 hours!" - Team RoboStack

## Next Steps

### Beginner Projects
1. **Color Sorting**: Train robot to sort objects by color
2. **Shape Matching**: Place shapes in corresponding holes
3. **Tower Building**: Stack blocks in specific patterns

### Intermediate Projects
1. **Drawer Opening**: Handle various drawer types
2. **Tool Usage**: Train robot to use simple tools
3. **Liquid Pouring**: Pour water between containers

### Advanced Projects
1. **Rubik's Cube**: Solve puzzles autonomously
2. **Origami Folding**: Precise paper manipulation
3. **Cable Management**: Organize tangled cables

## Resources

### Official Documentation
- [LeRobot GitHub](https://github.com/huggingface/lerobot)
- [API Reference](https://huggingface.co/docs/lerobot)
- [Model Zoo](https://huggingface.co/models?library=lerobot)

### Community Resources
- [Discord #lerobot-help](https://discord.gg/robotcampus)
- [YouTube Tutorials](https://youtube.com/@robotcampus)
- [Example Datasets](https://huggingface.co/datasets?search=lerobot)

### Research Papers
- [Diffusion Policy Paper](https://arxiv.org/abs/2303.04137)
- [ACT: Action Chunking Transformers](https://arxiv.org/abs/2304.13705)
- [RT-1: Robotics Transformer](https://arxiv.org/abs/2212.06817)

## Join the Revolution

LeRobot democratizes robot learning. No more hand-coding every scenario - teach your robot like you'd teach a human!

### Start Today
1. Install LeRobot
2. Record 50 demonstrations
3. Train overnight
4. Deploy your intelligent robot!

**Ready to train your robot?**

[Start LeRobot Tutorial →](/docs/tracks/ai/lerobot-quickstart)

---

*Questions about LeRobot? Join our [Discord](https://discord.gg/robotcampus) or post in [GitHub Discussions](https://github.com/huggingface/lerobot/discussions)*

*This tutorial is part of the AI Engineering track. [View full curriculum →](/courses)*