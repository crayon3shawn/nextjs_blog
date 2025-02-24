import SocialLinks from '../components/SocialLinks';
import Link from 'next/link';
import Head from 'next/head';

export default () => {
  return <div
    className="w-full pb-32 pt-16 bg-zinc-50 h-screen
    flex flex-col justify-center">
    <Head>
      <title>蔡承哲 Cheng CHe Tsai 的電子名片</title>
      <meta
        name="og:description"
        content="本頁是 Cheng Che Tsai 蔡承哲的電子名片，有自我介紹、作品集與聯繫方式。"
      />
      <meta
        name="og:image"
        content="/card-og.png"
      />
      <meta name="twitter:card" content="summary_large_image"/>
    </Head>
    <div className="w-full lg:w-[650px] px-16 lg:px-4 mx-auto pb-24">
      <div className="flex items-center mt-12 flex-col justify-center">
        <img
          src="https://avatars.githubusercontent.com/u/21105863?v=4"
          alt="author-avatar"
          className="w-24 h-24 rounded-full"
        />
        <div className="ml-0 mt-12">
          <p className="font-extrabold opacity-60 mb-4 text-center">
            關於我
          </p>
          <p className="font-extrabold text-2xl text-center">
            Cheng Che 蔡承哲
          </p>
          <p className="mt-6 mb-12 opacity-70 text-center">
            台灣高雄人，畢業於中正大學，主修心理學系，同時兼職外包全端開發工程師，熱愛產品設計與軟體開發。
          </p>
          <div className="flex justify-center">
            <SocialLinks/>
          </div>

        </div>
        <a
          href="https://yuanlinlin.notion.site/6ceac3a80f684708ae8efeb5742a8335"
          className="text-center text-blue-500 cursor-pointer mt-12"
          target="_blank"
          rel="noreferrer"
        >
          作品集
        </a>

        <div className="absolute bottom-12 left-0 w-full">
          <Link href="/">
            <p className="text-center text-blue-500 cursor-pointer">
              回部落格首頁
            </p>
          </Link>
        </div>
      </div>
    </div>
  </div>;
};
