import type {ReactNode} from 'react';
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {
  Cpu,
  Zap,
  Code,
  Brain,
  Layers,
  ArrowRight,
  BookOpen,
  Users,
  Rocket,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
} from 'lucide-react';

import styles from './courses.module.css';

const EXTERNAL_COURSES_URL = 'https://academy-of-robotic-sciences.github.io/courses/';
const LIASCRIPT_BASE = 'https://LiaScript.github.io/course/?https://raw.githubusercontent.com/Academy-of-Robotic-Sciences/courses/main';

function CoursesHero() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroIcon}>
            <GraduationCap size={64} strokeWidth={1.5} />
          </div>
          <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
            Our Curriculum
          </Heading>
          <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
            From Beginner to Robot Builder in Days, Not Months
          </p>
          <p className={styles.heroDescription}>
            Master humanoid robotics through intensive, project-based bootcamps.
            Choose your specialization and start shipping real robots from day one.
          </p>
        </div>
      </div>
    </header>
  );
}

function TrackCards() {
  const tracks = [
    {
      icon: Cpu,
      title: 'Robotic Designer',
      duration: '3 Days (24h)',
      description: 'Master CAD design, 3D printing, and mechanical prototyping. Design custom robot parts and bring your ideas to life.',
      skills: ['CAD/CAM', '3D Printing', 'Mechanical Design'],
      link: `${LIASCRIPT_BASE}/design/design-201.md`,
      color: '#DC2626'
    },
    {
      icon: Zap,
      title: 'Hardware Engineer',
      duration: '3 Days (24h)',
      description: 'Build and calibrate complete robotic systems. Learn electronics, sensors, and servo control hands-on.',
      skills: ['Electronics', 'Sensors', 'Servo Calibration'],
      link: `${LIASCRIPT_BASE}/hardware/hardware-201.md`,
      color: '#F59E0B'
    },
    {
      icon: Code,
      title: 'Software Engineer',
      duration: '4 Days (28h)',
      description: 'Program robots with ROS2, implement motion planning, and create autonomous control systems.',
      skills: ['ROS2', 'Motion Planning', 'Kinematics'],
      link: `${LIASCRIPT_BASE}/software/software-201.md`,
      color: '#059669'
    },
    {
      icon: Brain,
      title: 'AI Engineer',
      duration: '5 Days (36h)',
      description: 'Train ML models with LeRobot, implement computer vision, and deploy AI on real hardware.',
      skills: ['Machine Learning', 'Computer Vision', 'LeRobot'],
      link: `${LIASCRIPT_BASE}/ai/ai-201.md`,
      color: '#2563EB'
    },
    {
      icon: Layers,
      title: 'Systems Engineer',
      duration: '4 Days (30h)',
      description: 'Integrate all components into production-ready systems. Master architecture, safety, and testing.',
      skills: ['Integration', 'Safety', 'Architecture'],
      link: `${LIASCRIPT_BASE}/systems/systems-201.md`,
      color: '#7C3AED'
    }
  ];

  return (
    <section className={styles.tracksSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Choose Your Track</h2>
          <p>Five specialized paths to robotics mastery. Each track is self-contained and project-focused.</p>
        </div>
        <div className={styles.tracksGrid}>
          {tracks.map((track, idx) => {
            const Icon = track.icon;
            return (
              <div
                key={idx}
                className={styles.trackCard}
                style={{'--track-color': track.color} as React.CSSProperties}>
                <div className={styles.trackIconWrapper}>
                  <Icon size={36} strokeWidth={1.5} />
                </div>
                <h3>{track.title}</h3>
                <p className={styles.trackDuration}>{track.duration}</p>
                <p className={styles.trackDesc}>{track.description}</p>
                <div className={styles.trackSkills}>
                  {track.skills.map((skill, i) => (
                    <span key={i} className={styles.skillTag}>{skill}</span>
                  ))}
                </div>
                <Link
                  href={track.link}
                  className={styles.trackButton}>
                  Start Course
                  <ExternalLink size={16} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyARS() {
  const features = [
    {
      icon: Rocket,
      title: 'Ship Day One',
      description: 'No months of theory. Build and program your first robot component on the very first day of training.'
    },
    {
      icon: BookOpen,
      title: '100% Open Source',
      description: 'All course materials, code, and designs are open source. Learn, modify, and share freely.'
    },
    {
      icon: Users,
      title: 'Global Community',
      description: 'Join 5,000+ students from 45+ countries. Collaborate, share projects, and learn together.'
    }
  ];

  return (
    <section className={styles.whySection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Why Academy of Robotic Sciences?</h2>
          <p>We believe robotics education should be accessible, practical, and community-driven.</p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CoursesCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaContent}>
          <BookOpen size={48} className={styles.ctaIcon} />
          <h2>Ready to Start Building?</h2>
          <p>Browse our full course catalog and find the perfect starting point for your robotics journey.</p>
          <div className={styles.ctaButtons}>
            <Link
              className="button button--primary button--lg"
              href={EXTERNAL_COURSES_URL}>
              Browse Full Catalog
              <ExternalLink size={20} className={styles.buttonIcon} />
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/tracks/overview">
              Compare All Tracks
            </Link>
          </div>
          <div className={styles.ctaFeatures}>
            <span><CheckCircle2 size={20} /> No Prerequisites</span>
            <span><CheckCircle2 size={20} /> Self-Paced Options</span>
            <span><CheckCircle2 size={20} /> Certificate on Completion</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Courses(): ReactNode {
  return (
    <Layout
      title="Courses - Academy of Robotic Sciences"
      description="Master humanoid robotics through intensive bootcamps. Choose from 5 specialized tracks: Design, Hardware, Software, AI, and Systems Engineering.">
      <CoursesHero />
      <TrackCards />
      <WhyARS />
      <CoursesCTA />
    </Layout>
  );
}
