import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Download,
  ExternalLink,
  FileText,
  Mail,
  MapPin,
  Play,
  Search,
  Video,
} from 'lucide-react';
import './styles.css';

const filters = [
  { id: 'all', label: '全部' },
  { id: 'video', label: '视频剪辑' },
  { id: 'article', label: '公众号文章' },
];

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

const featuredWorks = [
  {
    type: 'video',
    title: '城市更新观察：老街区的第二次生长',
    description:
      '以人物采访和街区现场为主线，呈现老街改造中的生活延续、空间变化与居民感受。',
    role: '剪辑 / 采访整理 / 叙事节奏',
    date: '2025',
    href: '#contact',
    imageSlot: 'left',
  },
  {
    type: 'article',
    title: '从一场社区听证会看基层治理',
    description:
      '围绕公共议题的决策过程，梳理居民、街道与专业机构之间的信息流动。',
    role: '选题策划 / 采写 / 编辑',
    date: '2025',
    href: '#contact',
  },
  {
    type: 'video',
    title: '校园人物短片：镜头里的毕业季',
    description:
      '用克制的采访节奏和环境声，记录毕业生在离校节点上的选择与情绪。',
    role: '导演协作 / 剪辑 / 调色',
    date: '2024',
    href: '#contact',
    imageSlot: 'center',
  },
];

const videoWorks = [
  {
    title: '城市更新观察：老街区的第二次生长',
    duration: '06:28',
    role: '剪辑、采访素材梳理',
    imageSlot: 'left',
    href: '#contact',
  },
  {
    title: '校园人物短片：镜头里的毕业季',
    duration: '04:12',
    role: '剪辑、包装字幕、调色',
    imageSlot: 'center',
    href: '#contact',
  },
  {
    title: '一分钟新闻解释：为什么夜间经济回暖',
    duration: '01:05',
    role: '脚本协作、快剪、信息图节奏',
    imageSlot: 'right',
    href: '#contact',
  },
];

const articles = [
  {
    title: '从一场社区听证会看基层治理',
    topic: '公共议题 / 社区观察',
    date: '2025.05',
    href: '#contact',
  },
  {
    title: '一座城市的早高峰，是怎样被调度的',
    topic: '城市运行 / 解释性报道',
    date: '2025.03',
    href: '#contact',
  },
  {
    title: '县域文旅热背后的流量与留量',
    topic: '文旅传播 / 深度采写',
    date: '2024.12',
    href: '#contact',
  },
  {
    title: '当短视频成为新闻入口，标题还重要吗',
    topic: '媒介观察 / 内容策略',
    date: '2024.10',
    href: '#contact',
  },
];

function App() {
  const [activeFilter, setActiveFilter] = useState('all');

  const visibleWorks = useMemo(() => {
    if (activeFilter === 'all') return featuredWorks;
    return featuredWorks.filter((work) => work.type === activeFilter);
  }, [activeFilter]);

  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <section className="section section-compact" id="works">
          <div className="section-heading">
            <p className="section-label">Selected Work</p>
            <h2>代表作品</h2>
            <p>
              把最能体现采编判断、视频叙事和内容策划能力的作品放在前面，方便面试官快速判断匹配度。
            </p>
          </div>
          <div className="filter-row" aria-label="作品筛选">
            {filters.map((filter) => (
              <button
                className={activeFilter === filter.id ? 'filter is-active' : 'filter'}
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                type="button"
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="work-grid">
            {visibleWorks.map((work) => (
              <WorkCard key={work.title} work={work} />
            ))}
          </div>
        </section>
        <section className="section video-band" id="video">
          <div className="split-heading">
            <div>
              <p className="section-label">Video Editing</p>
              <h2>视频剪辑</h2>
            </div>
            <p>
              适合嵌入已发布的视频链接，也可以先放封面、时长和本人职责。涉及版权或未公开素材时，用受控链接替换。
            </p>
          </div>
          <div className="video-grid">
            {videoWorks.map((work) => (
              <VideoCard key={work.title} work={work} />
            ))}
          </div>
        </section>
        <section className="section article-section" id="articles">
          <div className="article-head">
            <div>
              <p className="section-label">WeChat Articles</p>
              <h2>公众号文章</h2>
            </div>
            <div className="search-chip">
              <Search size={16} />
              按真实链接替换
            </div>
          </div>
          <div className="article-list">
            {articles.map((article, index) => (
              <ArticleRow article={article} index={index + 1} key={article.title} />
            ))}
          </div>
        </section>
        <ResumeContact />
      </main>
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="回到首页">
        <span>YX</span>
        袁燮欣
      </a>
      <nav aria-label="主导航">
        <a href="#works">代表作品</a>
        <a href="#video">视频剪辑</a>
        <a href="#articles">公众号文章</a>
        <a href="#resume">简历</a>
        <a href="#contact">联系</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <h1>袁燮欣</h1>
        <p className="hero-role">新闻采编 / 视频剪辑 / 内容策划</p>
        <p className="hero-summary">
          这是一个为求职面试准备的新闻作品集入口，集中展示代表视频、公众号文章和项目职责，让面试官在打开链接后迅速看到作品质量与协作能力。
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#works">
            查看代表作品
            <ArrowUpRight size={18} />
          </a>
          <a className="button secondary" href={assetPath('yuan-xiexin-resume.txt')} download>
            <Download size={18} />
            下载简历
          </a>
        </div>
      </div>
      <div className="hero-visual" aria-label="新闻作品素材拼贴">
        <img src={assetPath('assets/hero-collage.png')} alt="新闻采访、视频剪辑与报道素材拼贴" />
        <div className="visual-note">
          <span>Portfolio 2026</span>
          <strong>Video + Articles</strong>
        </div>
      </div>
    </section>
  );
}

function WorkCard({ work }) {
  const isVideo = work.type === 'video';

  return (
    <article className="work-card">
      <div className="work-type">
        {isVideo ? <Video size={16} /> : <FileText size={16} />}
        {isVideo ? '视频作品' : '公众号文章'}
      </div>
      {isVideo ? <Thumbnail slot={work.imageSlot} /> : null}
      <div className="work-card-body">
        <h3>{work.title}</h3>
        <p>{work.description}</p>
        <dl>
          <div>
            <dt>职责</dt>
            <dd>{work.role}</dd>
          </div>
          <div>
            <dt>时间</dt>
            <dd>{work.date}</dd>
          </div>
        </dl>
        <a className="text-link" href={work.href}>
          查看作品链接
          <ExternalLink size={15} />
        </a>
      </div>
    </article>
  );
}

function VideoCard({ work }) {
  return (
    <article className="video-card">
      <a className="thumbnail-frame" href={work.href} aria-label={`查看${work.title}`}>
        <Thumbnail slot={work.imageSlot} />
        <span className="play-button">
          <Play size={19} fill="currentColor" />
        </span>
        <span className="duration">{work.duration}</span>
      </a>
      <div>
        <h3>{work.title}</h3>
        <p>{work.role}</p>
      </div>
    </article>
  );
}

function Thumbnail({ slot = 'left' }) {
  return (
    <div className={`thumbnail thumbnail-${slot}`} aria-hidden="true">
      <img src={assetPath('assets/video-thumbnails.png')} alt="" />
    </div>
  );
}

function ArticleRow({ article, index }) {
  return (
    <article className="article-row">
      <span className="article-index">{String(index).padStart(2, '0')}</span>
      <div>
        <h3>{article.title}</h3>
        <p>{article.topic}</p>
      </div>
      <time>{article.date}</time>
      <a className="icon-link" href={article.href} aria-label={`打开${article.title}`}>
        <ExternalLink size={18} />
      </a>
    </article>
  );
}

function ResumeContact() {
  return (
    <section className="section resume-section" id="resume">
      <div className="resume-panel">
        <div>
          <p className="section-label">Resume</p>
          <h2>简历与联系</h2>
          <p>
            第一版先保留可替换字段。正式上线前，把邮箱、电话、学校、实习经历和真实 PDF 简历补齐即可。
          </p>
        </div>
        <div className="resume-details" id="contact">
          <a href="mailto:yuanxiexin@example.com">
            <Mail size={17} />
            yuanxiexin@example.com
          </a>
          <span>
            <MapPin size={17} />
            新闻传播 / 内容岗位
          </span>
          <a href={assetPath('yuan-xiexin-resume.txt')} download>
            <Download size={17} />
            下载简历文件
          </a>
        </div>
      </div>
    </section>
  );
}

createRoot(document.getElementById('root')).render(<App />);
