import styles from './ProjectsStyles.module.css';
import Portfolio1 from '../../assets/Portfolio1.png'
import Portfolio2 from '../../assets/Portfolio2.png'
import BookRecommendation from '../../assets/BookRecommendation.png'
import SplitX from '../../assets/SplitX.jpg'
import EDx from '../../assets/EDx.jpg'
import CoinFlip from '../../assets/CoinFlip.jpg'
import NewBalance from '../../assets/NewBalance.jpg'
import ComingSoon from '../../assets/ComingSoon.jpg'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <>
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Designs</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={SplitX}
          link="https://www.figma.com/proto/HZKjOpdmtWzGGNN4Ypmu7s/SpitX-Mobile?node-id=83-535&node-type=canvas&viewport=358%2C313%2C0.37&t=ZQd5BxOmooznrUYM-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=104%3A368"
          h3="SplitX"
          p="Expense Splitting App"
          />
        <ProjectCard
          src={EDx}
          link="https://www.figma.com/proto/69CX6uC7Hi1UFnBghHdPnu/EDx?page-id=0%3A1&node-id=124-385&node-type=canvas&viewport=-562%2C73%2C0.14&t=0IPUfR7ROlInN9N3-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=124%3A385"
          h3="EDx"
          p="E-learning Platform"
        />
        <ProjectCard
          src={CoinFlip}
          link="https://www.figma.com/proto/7HupongMZHrTIyc0LWB2nT/CoinFlip?page-id=2%3A27&node-id=4-897&node-type=canvas&viewport=-1599%2C309%2C0.74&t=KYzgehPk9jIuf1OW-1&scaling=scale-down&content-scaling=fixed"
          h3="CoinFlip"
          p="Stock Prediction App"
          />
        <ProjectCard
          src={NewBalance}
          link="https://www.figma.com/proto/kwS2HkQd0APmqLhjVDFjYL/NewBalance-Shoe-Banner?page-id=0%3A1&node-id=1-3&node-type=canvas&viewport=-970%2C747%2C0.66&t=bjBGEAvE8xFj4Ygb-1&scaling=scale-down&content-scaling=fixed"
          h3="New Balance Sneakers"
          p="Brand Product Page"
          />
        
      </div>
    </section>
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Development</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={SplitX}
          link="https://uzaifansari.github.io/splitx"
          h3="SplitX"
          p="ReactJS & Python"
          />
        <ProjectCard
          src={Portfolio1}
          link="https://uzaifansari.github.io/"
          h3="Portfolio"
          p="HTML, CSS & JavaScript"
          />
        <ProjectCard
          src={Portfolio2}
          link="https://uzaifansari.github.io/DesignsPortfolio"
          h3="Portfolio"
          p="ReactJS"
        />
        <ProjectCard
          src={BookRecommendation}
          link="https://github.com/uzaifansari/Book-Recommendation-System"
          h3="Book Recommender"
          p="Python, HTML & CSS"
          />
        
        
      </div>
    </section>
    </>
  );
}

export default Projects;
