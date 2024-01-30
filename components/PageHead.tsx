import Head from 'next/head';

interface Props {
  title?: string;
  description?: string;
  imageUrl?: string;
  canonicalUrl?: string;
  type?: string;
  keywords?: string[];
}

function PageHead(props: Props) {
  return <Head>
    <title>
      {props?.title || 'Blog | 星辰代卸'}
    </title>
    <meta
      property="og:title"
      content={props?.title || 'Blog | 星辰代卸'}
      key="title" />
    <meta name="robots" content="index,follow" />
    {props.canonicalUrl && <link rel="canonical" href={props.canonicalUrl} />}
    <meta
      name="description"
      content={props?.description || '我是蔡承哲，畢業於國立中正大學心理學系。' +
        '雖然讀心理系但喜歡研究酷酷的軟體，擅長分析複雜的問題並提供有效的解決方案。歡迎查看我的部落格！'
      } />
    <meta
      name="keywords"
      // eslint-disable-next-line max-len
      content={props.keywords?.join(', ') || '爬山, 軟體, docker, 登山, Blog, 部落格, Cheng Che, 星辰代卸, 蔡承哲, crayon3shawn'} />
    <meta name="author" content="ChengChe Tsai 蔡承哲" />
    <meta property="og:type" content={props.type || 'website'} key="type" />
    <meta
      property="og:description"
      content={props?.description || '我是蔡承哲，畢業於國立中正大學心理學系。' +
        '雖然讀心理系但喜歡研究酷酷的軟體，擅長分析複雜的問題並提供有效的解決方案。歡迎查看我的部落格！'
      }
      key="description" />
    <meta
      property="og:image"
      content={props?.imageUrl || 'https://i.imgur.com/iZI6XtN.jpg'}
      key="image" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="icon" href="/favicon.png" />
    <meta name="theme-color" content="#f2e9e4" />
  </Head>;
}

export default PageHead;
