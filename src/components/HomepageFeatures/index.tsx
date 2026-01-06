import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import {Cpu, Sparkles, Users} from 'lucide-react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Icon: typeof Cpu;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Real Hardware, Real Learning',
    Icon: Cpu,
    description: (
      <>
        Build actual robots with the SO-100/SO-101 arm and other hardware projects.
        Move beyond simulation to hands-on experience with real sensors, actuators, and systems.
      </>
    ),
  },
  {
    title: 'Cutting-Edge AI Integration',
    Icon: Sparkles,
    description: (
      <>
        Master modern AI with the LeRobot framework. Learn imitation learning,
        reinforcement learning, and deploy AI models on real robots.
      </>
    ),
  },
  {
    title: 'Open Source Community',
    Icon: Users,
    description: (
      <>
        Join a global community of builders and learners. All materials, designs,
        and code are open source. Learn, build, and share together.
      </>
    ),
  },
];

function Feature({title, Icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>
          <Icon size={40} strokeWidth={1.5} />
        </div>
        <div className={styles.featureContent}>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
