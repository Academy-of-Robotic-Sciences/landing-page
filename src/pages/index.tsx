import type {ReactNode} from 'react';
import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import {
  Cpu,
  Wrench,
  Code,
  Brain,
  Layers,
  Users,
  Rocket,
  Globe,
  Building2,
  ArrowRight,
  Zap,
  CheckCircle2,
  HelpCircle,
  Clock,
  Target,
  Award,
  Calendar
} from 'lucide-react';

import styles from './index.module.css';

const SITE_TAGLINE = 'Building the Next Generation of Humanoid Robotics';

function Hero() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroIcon}>
            <Cpu size={64} strokeWidth={1.5} />
          </div>
          <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
            {siteConfig.title}
          </Heading>
          <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
            {SITE_TAGLINE}
          </p>
          <p className={styles.heroDescription}>
            Master humanoid robotics through intensive, project-based bootcamps.
            From design to AI—ship working robots in days, not months.
          </p>
          <div className={styles.heroButtons}>
            <Link
              className={clsx('button button--primary button--lg', styles.primaryButton)}
              to="/docs/introduction/welcome">
              Start Learning
              <ArrowRight size={20} className={styles.buttonIcon} />
            </Link>
            <Link
              className={clsx('button button--secondary button--lg', styles.secondaryButton)}
              to="/docs/tracks/overview">
              Explore Tracks
            </Link>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>5</span>
              <span className={styles.statLabel}>Bootcamp Tracks</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>4-8h</span>
              <span className={styles.statLabel}>Daily Sessions</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>Day 1</span>
              <span className={styles.statLabel}>First Build</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function StatsSection() {
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <Users size={32} className={styles.statIcon} />
            <div className={styles.statValue}>5,000+</div>
            <div className={styles.statDesc}>Active Students</div>
          </div>
          <div className={styles.statCard}>
            <Rocket size={32} className={styles.statIcon} />
            <div className={styles.statValue}>1,200+</div>
            <div className={styles.statDesc}>Projects Built</div>
          </div>
          <div className={styles.statCard}>
            <Globe size={32} className={styles.statIcon} />
            <div className={styles.statValue}>45+</div>
            <div className={styles.statDesc}>Countries</div>
          </div>
          <div className={styles.statCard}>
            <Building2 size={32} className={styles.statIcon} />
            <div className={styles.statValue}>25+</div>
            <div className={styles.statDesc}>Industry Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LearningTracks() {
  const tracks = [
    {
      icon: Cpu,
      title: 'Robotic Designer',
      duration: '3 Days (24h)',
      description: 'CAD design, 3D printing, and mechanical prototyping for robotics',
      link: '/docs/tracks/design',
      color: '#DC2626'
    },
    {
      icon: Zap,
      title: 'Hardware Engineer',
      duration: '3 Days (24h)',
      description: 'Assemble and calibrate complete SO-101 robotic arm',
      link: '/docs/tracks/hardware',
      color: '#F59E0B'
    },
    {
      icon: Code,
      title: 'Software Engineer',
      duration: '4 Days (28h)',
      description: 'ROS2 control systems and autonomous motion planning',
      link: '/docs/tracks/software',
      color: '#059669'
    },
    {
      icon: Brain,
      title: 'AI Engineer',
      duration: '5 Days (36h)',
      description: 'Train ML models and deploy AI on real robots',
      link: '/docs/tracks/ai',
      color: '#2563EB'
    },
    {
      icon: Layers,
      title: 'Systems Engineer',
      duration: '4 Days (30h)',
      description: 'Build production-ready integrated robot systems',
      link: '/docs/tracks/systems',
      color: '#7C3AED'
    }
  ];

  return (
    <section className={styles.tracksSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Choose Your Bootcamp Track</h2>
          <p>Intensive, hands-on programs that ship real robots in days</p>
        </div>
        <div className={styles.tracksGrid}>
          {tracks.map((track, idx) => {
            const Icon = track.icon;
            return (
              <Link
                key={idx}
                to={track.link}
                className={styles.trackCard}
                style={{'--track-color': track.color} as React.CSSProperties}>
                <div className={styles.trackIconWrapper}>
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3>{track.title}</h3>
                <p className={styles.trackDuration}>
                  <Clock size={16} />
                  {track.duration}
                </p>
                <p className={styles.trackDesc}>{track.description}</p>
                <div className={styles.trackArrow}>
                  <ArrowRight size={20} />
                </div>
              </Link>
            );
          })}
          <Link
            to="/docs/tracks/comparison"
            className={clsx(styles.trackCard, styles.helpCard)}>
            <div className={styles.trackIconWrapper}>
              <HelpCircle size={32} strokeWidth={1.5} />
            </div>
            <h3>Not Sure Which Track?</h3>
            <p className={styles.trackDuration}>Find Your Path</p>
            <p className={styles.trackDesc}>Compare all tracks and find your perfect fit</p>
            <div className={styles.trackArrow}>
              <ArrowRight size={20} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const projects = [
    {
      title: 'SO-101 Robotic Arm',
      icon: Wrench,
      description: '6-DOF arm with ROS2 integration and force feedback',
      difficulty: 'Intermediate',
      duration: '3 Days'
    },
    {
      title: 'LeRobot Training',
      icon: Brain,
      description: 'AI-powered imitation learning and autonomous behaviors',
      difficulty: 'Advanced',
      duration: '8 Hours'
    },
    {
      title: '3D Printed Gripper',
      icon: Target,
      description: 'Custom end-effector design with adaptive grasping',
      difficulty: 'Beginner',
      duration: '4 Hours'
    }
  ];

  return (
    <section className={styles.projectsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>What You'll Build</h2>
          <p>Ship working robots from day one—no theory without practice</p>
        </div>
        <div className={styles.projectsGrid}>
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div key={idx} className={styles.projectCard}>
                <div className={styles.projectIcon}>
                  <Icon size={48} strokeWidth={1.5} />
                </div>
                <div className={styles.projectContent}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={styles.projectMeta}>
                    <span className={styles.projectDifficulty}>
                      <Award size={16} />
                      {project.difficulty}
                    </span>
                    <span className={styles.projectDuration}>
                      <Clock size={16} />
                      {project.duration}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.sectionFooter}>
          <Link to="/docs/projects/overview" className="button button--primary button--lg">
            View All Projects
            <ArrowRight size={20} className={styles.buttonIcon} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function BootcampSchedules() {
  const schedules = [
    {
      icon: Zap,
      title: 'Full-Time Intensive',
      duration: '1-2 weeks total',
      description: '8-10 hours/day, ship complete project',
      best: 'Career switchers'
    },
    {
      icon: Calendar,
      title: 'Evening Bootcamp',
      duration: '2-4 weeks total',
      description: 'Mon-Fri 6pm-10pm, learn after work',
      best: 'Working professionals'
    },
    {
      icon: Target,
      title: 'Weekend Warrior',
      duration: '6-8 weekends',
      description: 'Sat-Sun intensive sessions',
      best: 'Students & part-timers'
    },
    {
      icon: Rocket,
      title: 'Single-Day Workshop',
      duration: '4-8 hours',
      description: 'Deep dive on specific skills',
      best: 'Quick skill acquisition'
    }
  ];

  return (
    <section className={styles.schedulesSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Flexible Bootcamp Schedules</h2>
          <p>Choose the pace that works for your life</p>
        </div>
        <div className={styles.schedulesGrid}>
          {schedules.map((schedule, idx) => {
            const Icon = schedule.icon;
            return (
              <div key={idx} className={styles.scheduleCard}>
                <div className={styles.scheduleIcon}>
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3>{schedule.title}</h3>
                <p className={styles.scheduleDuration}>
                  <Clock size={16} />
                  {schedule.duration}
                </p>
                <p className={styles.scheduleDesc}>{schedule.description}</p>
                <p className={styles.scheduleBest}>Best for: {schedule.best}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Martinez',
      role: 'Robotics Engineer at Boston Dynamics',
      initials: 'SM',
      quote: 'Academy of Robotic Sciences transformed my career. The hands-on projects and AI track gave me the skills to land my dream job.',
      rating: 5
    },
    {
      name: 'Alex Chen',
      role: 'Founder, RoboStart Inc.',
      initials: 'AC',
      quote: 'The comprehensive curriculum and supportive community helped me launch my robotics startup. Invaluable experience!',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      role: 'PhD Student, MIT',
      initials: 'MR',
      quote: 'The depth of knowledge in the courses is impressive. Perfect preparation for advanced robotics research.',
      rating: 5
    }
  ];

  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Success Stories</h2>
          <p>Hear from our graduates making an impact in robotics</p>
        </div>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className={styles.testimonialCard}>
              <p className={styles.testimonialQuote}>"{testimonial.quote}"</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>{testimonial.initials}</div>
                <div>
                  <div className={styles.testimonialName}>{testimonial.name}</div>
                  <div className={styles.testimonialRole}>{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaContent}>
          <Rocket size={48} className={styles.ctaIcon} />
          <h2>Build Your First Robot Today</h2>
          <p>Next bootcamp starts Monday—Limited spots available!</p>
          <div className={styles.ctaButtons}>
            <Link
              className="button button--primary button--lg"
              to="/courses">
              Register for Bootcamp
              <ArrowRight size={20} className={styles.buttonIcon} />
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/learning-paths">
              View All Tracks
            </Link>
          </div>
          <div className={styles.ctaFeatures}>
            <span><CheckCircle2 size={20} /> Ship Day 1</span>
            <span><CheckCircle2 size={20} /> No Prerequisites</span>
            <span><CheckCircle2 size={20} /> Hardware Included</span>
            <span><CheckCircle2 size={20} /> Job Ready Fast</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Learn Humanoid Robotics`}
      description="Open-source robotics education platform. Learn to design, build, and program robots with hands-on projects, from mechanical design to AI. Join our global community!">
      <Hero />
      <StatsSection />
      <LearningTracks />
      <HomepageFeatures />
      <FeaturedProjects />
      <BootcampSchedules />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
}
