---
id: contributing
title: Contributing to Robot Campus
sidebar_position: 2
---

# Contributing to Robot Campus

> **Join us in building the future of open-source robotics education**

## Why Contribute?

Contributing to Robot Campus helps:
- 🌍 Make robotics education globally accessible
- 🤝 Build your professional network
- 📚 Deepen your own understanding
- 🏆 Gain recognition in the community
- 💼 Enhance your portfolio

## Ways to Contribute

### 📝 Documentation

Help improve our educational materials:
- Fix typos and clarify explanations
- Translate content to other languages
- Add diagrams and visualizations
- Create video tutorials
- Write blog posts

**Getting Started**:
```bash
# Fork and clone the docs repo
git clone https://github.com/robot-campus/documentation
cd documentation

# Create a branch for your changes
git checkout -b improve-kinematics-docs

# Make your changes
edit docs/tutorials/kinematics.md

# Submit pull request
git push origin improve-kinematics-docs
```

### 💻 Code Contributions

Improve our software and frameworks:
- Fix bugs and issues
- Add new features
- Optimize performance
- Write tests
- Create examples

**Contribution Areas**:
- SO-101 control software
- LeRobot framework extensions
- ROS2 packages
- Simulation environments
- Tool development

### 🎨 Design Contributions

Share your mechanical designs:
- CAD models for robot parts
- Printable components
- Assembly improvements
- New gripper designs
- Modular systems

**Design Standards**:
```yaml
File Formats:
  - STEP files for compatibility
  - STL files for 3D printing
  - Native CAD files (Fusion 360, FreeCAD)

Documentation:
  - Assembly instructions
  - Bill of Materials
  - Print settings
  - Photos of built version
```

### 🧪 Testing & Quality Assurance

Help ensure quality:
- Test new features
- Report bugs
- Verify documentation
- Validate tutorials
- Review pull requests

**Bug Report Template**:
```markdown
## Description
Clear description of the issue

## Steps to Reproduce
1. Step one
2. Step two
3. ...

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- OS: Ubuntu 22.04
- ROS2: Humble
- Python: 3.10
```

### 🎓 Educational Content

Create learning materials:
- Course modules
- Lab exercises
- Quiz questions
- Project ideas
- Solution guides

### 🌐 Community Support

Help other learners:
- Answer questions on Discord
- Mentor new members
- Host study groups
- Organize local meetups
- Give presentations

## Contribution Guidelines

### Code Style

#### Python
```python
# Follow PEP 8
class RobotController:
    """Controller for robot movements.

    Args:
        config (dict): Configuration parameters
    """

    def __init__(self, config):
        self.config = config
        self._initialize()

    def move_to_position(self, position):
        """Move robot to specified position.

        Args:
            position (list): Target position [x, y, z]

        Returns:
            bool: Success status
        """
        # Implementation here
        pass
```

#### C++
```cpp
// Follow Google C++ Style Guide
class RobotController {
 public:
  explicit RobotController(const Config& config);

  // Move robot to specified position
  bool MoveToPosition(const Position& position);

 private:
  Config config_;
  void Initialize();
};
```

### Documentation Style

#### Markdown Guidelines
```markdown
# Clear Heading

Brief introduction paragraph.

## Section Title

### Subsection

- Use bullet points for lists
- Keep lines under 80 characters
- Include code examples

#### Code Example
\```python
# Always include examples
def example():
    return "Hello, Robot Campus!"
\```

> **Note**: Important information in callouts
```

### Git Workflow

#### Branch Naming
- `feature/add-gripper-control`
- `fix/servo-calibration-issue`
- `docs/update-ros2-tutorial`
- `test/add-kinematics-tests`

#### Commit Messages
```bash
# Good commit messages
git commit -m "feat: Add inverse kinematics solver"
git commit -m "fix: Correct servo angle conversion"
git commit -m "docs: Update ROS2 installation guide"
git commit -m "test: Add unit tests for trajectory planner"

# Format: <type>: <description>
# Types: feat, fix, docs, test, refactor, style, chore
```

### Pull Request Process

1. **Fork Repository**
```bash
# Fork on GitHub, then clone
git clone https://github.com/YOUR-USERNAME/robot-campus-project
```

2. **Create Branch**
```bash
git checkout -b feature/your-feature-name
```

3. **Make Changes**
```bash
# Make your changes
# Write/update tests
# Update documentation
```

4. **Test Locally**
```bash
# Run tests
pytest tests/

# Check code style
flake8 src/
black src/
```

5. **Submit PR**
- Clear title and description
- Reference related issues
- Include screenshots if UI changes
- Request review from maintainers

### Review Process

#### For Contributors
- Respond to feedback promptly
- Make requested changes
- Keep PR scope focused
- Be patient and respectful

#### For Reviewers
- Be constructive and kind
- Suggest improvements
- Test changes locally
- Approve when ready

## Recognition & Rewards

### Contributor Badges
- 🌱 **First Contribution**: First PR merged
- 🐛 **Bug Hunter**: 5 bugs fixed
- 📚 **Documentarian**: 10 documentation PRs
- 🏗️ **Builder**: Major feature added
- 🌟 **Core Contributor**: 50+ contributions

### Monthly Recognition
- Contributor of the Month
- Most Helpful Community Member
- Best New Feature
- Documentation Hero

### Annual Awards
- Outstanding Contributor Award
- Innovation Award
- Mentorship Award
- Community Champion

## Project Areas

### Core Repositories

#### [robot-campus/so101-ros2](https://github.com/robot-campus/so101-ros2)
ROS2 packages for SO-101 arm control

**Needs Help With**:
- MoveIt2 integration
- Gazebo simulation
- Vision integration
- Documentation

#### [robot-campus/lerobot-extensions](https://github.com/robot-campus/lerobot-extensions)
Extensions and improvements to LeRobot

**Needs Help With**:
- New algorithms
- Dataset tools
- Visualization
- Benchmarks

#### [robot-campus/documentation](https://github.com/robot-campus/documentation)
Main documentation and tutorials

**Needs Help With**:
- Translations
- Video tutorials
- Beginner guides
- API documentation

### Good First Issues

Perfect for beginners:
- [Add servo calibration guide](https://github.com/robot-campus/so101-ros2/issues/42)
- [Fix typos in kinematics tutorial](https://github.com/robot-campus/documentation/issues/15)
- [Add unit tests for trajectory planner](https://github.com/robot-campus/so101-ros2/issues/38)
- [Create installation script for Ubuntu 24.04](https://github.com/robot-campus/setup/issues/7)

## Development Setup

### Local Development Environment

```bash
# Clone repositories
mkdir ~/robot-campus
cd ~/robot-campus

# Clone main repos
git clone https://github.com/robot-campus/documentation
git clone https://github.com/robot-campus/so101-ros2
git clone https://github.com/robot-campus/lerobot-extensions

# Set up Python environment
python -m venv venv
source venv/bin/activate
pip install -r requirements-dev.txt

# Install pre-commit hooks
pre-commit install
```

### Testing

```bash
# Run unit tests
pytest tests/

# Run integration tests
pytest tests/integration/

# Run specific test
pytest tests/test_kinematics.py::test_inverse_kinematics

# Check coverage
pytest --cov=src tests/
```

## Communication Channels

### Discord
- `#contributors`: General discussion
- `#dev-help`: Development questions
- `#pr-reviews`: Pull request discussions
- `#ideas`: Feature proposals

### GitHub Discussions
- Feature requests
- Design proposals
- Community feedback
- Q&A

### Weekly Meetings
- **Contributors Call**: Tuesdays 6 PM UTC
- **Documentation Team**: Thursdays 5 PM UTC
- **Core Team**: Fridays 7 PM UTC

## Legal

### Contributor License Agreement
By contributing, you agree that:
- Your contributions are original
- You grant Robot Campus license to use
- Contributions are under MIT license

### Code of Conduct
- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- No harassment or discrimination

## Getting Help

### Resources
- [Contributor Guide](https://docs.robotcampus.io/contributing)
- [Development Setup](https://docs.robotcampus.io/dev-setup)
- [API Documentation](https://api.robotcampus.io)

### Mentorship
- Request a mentor in #mentorship
- Pair programming sessions available
- Code review walkthroughs
- Architecture discussions

## Start Contributing Today!

1. **Join Discord**: Introduce yourself in #introductions
2. **Find an Issue**: Check "good first issue" labels
3. **Ask Questions**: We're here to help!
4. **Submit PR**: Even small contributions matter
5. **Celebrate**: Share your first contribution!

---

Thank you for contributing to Robot Campus! Together, we're democratizing robotics education. 🚀

[View Open Issues](https://github.com/robot-campus/robot-campus/issues) | [Join Discord](https://discord.gg/robotcampus) | [Contribution Stats](/community/stats)