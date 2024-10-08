import styles from './landing.module.scss';
import IndexBgImageRenderer from "@/app/(overview)/IndexBgImageRenderer";
import {FaLink} from "react-icons/fa";
import Link from "next/link";
import BusinessInfoCard, {BusinessLink} from "@/app/(overview)/information_card/BusinessInfoCard";
import Spline from "@splinetool/react-spline";
import TypingEffect from "@/app/(overview)/TypingEffect";

type FocusPageData = {
    fieldName: string;
    description: string;
    departments: BusinessLink[];
}

const departmentLinks : FocusPageData[] = [
    {fieldName: '토목사업', description: '안전한 연결, 믿음직한 기반, 아름다움과 가치를 제공하기 위해 전통적 방식에 혁신을 더하여 확장시켜 나아가고 있습니다.', departments: [
            {departmentName: '구조부', link: '/businesses/domains?currentDomain=토목사업분야&currentDepartment=구조부'},
            {departmentName: '지반부',link: '/businesses/domains?currentDomain=토목사업분야&currentDepartment=지반부'},
            {departmentName: '설계부',link: '/businesses/domains?currentDomain=토목사업분야&currentDepartment=설계부'},
            {departmentName: '수자원부',link: '/businesses/domains?currentDomain=토목사업분야&currentDepartment=수자원부'},
            {departmentName: '조경부',link: '/businesses/domains?currentDomain=토목사업분야&currentDepartment=조경부'},
            {departmentName: '상하수도부',link: '/businesses/domains?currentDomain=토목사업분야&currentDepartment=상하수도부'},
        ]},
    {fieldName: '국토사업', description: '국토공간의 효율적인 이용과 패러다임의 변화에 적합한 도시·교통계획을 제시하여 균형있는 국토개발, 녹색도시 구현을 선도합니다.', departments: [
            {departmentName: '도시계획부', link: '/businesses/domains?currentDomain=국토사업분야&currentDepartment=도시계획부'},
            {departmentName: '교통계획부',link: '/businesses/domains?currentDomain=국토사업분야&currentDepartment=교통계획부'}
        ]},
    {fieldName: '진단사업', description: '건설현장의 안전점검과 구조해석을 통한 시설물의 물리적 기능적 결함 및 위험요인을 발견 하는 안정성 평가를 수행합니다.', departments: [
            {departmentName: '안전진단부', link: '/businesses/domains?currentDomain=진단사업분야&currentDepartment=안전진단부'},
        ]},
    {fieldName: '건설관리', description: '토목분야 전반에 걸쳐 품질,환경,공정,리스크 관리에 있어 최상의 시설물을 만들기 위하여 건설사업관리의 체계적인 서비스를 제공합니다.', departments: [
            {departmentName: '건설사업관리부', link: '/businesses/domains?currentDomain=건설관리분야&currentDepartment=건설사업관리부'},
        ]},
]

export default function Home() {
    const indexBackgroundColor = 'bg-black';
  return (
      <section className={`w-full relative bg-none text-white`}>
          <IndexBgImageRenderer/>
          {/*1page*/}
          <div
              className={`w-full ${indexBackgroundColor} h-[100vh] px-[20px] md:px-[40px] flex justify-center items-center`}>
              <div className={'w-full md:w-[80vw] lg:w-[70vw] max-w-[1250px] grid grid-cols-1 md:grid-cols-2 gap-x-1'}>
                  <div
                      className={'w-full h-full lg:h-[600px] flex flex-col justify-center items-start md:order-first order-last'}>
                      <div className={'w-full text-[1.8rem] lg:text-[5.3rem] font-extrabold leading-none'}>
                          <span className={`${styles.colorChange}`}>H</span>uman <span
                          className={`${styles.colorChange}`}>K</span>orea Technology
                      </div>
                      <div className={'pt-[2vw]'}></div>
                      <TypingEffect texts={['사람과 기술로 사회발전에 기여합니다.', '토목분야의 문제해결과 기술향상에 집중합니다']}/>
                      <div className={'pt-[2vw]'}></div>
                      <div className={'flex gap-x-3'}>
                          <Link href={'/about-us/greeting'}>
                              <div
                                  className={'text-base h-12 pl-5 pr-2 gap-0 font-semibold bg-white text-black hover:bg-white/90 focus-visible:ring-4 focus-visible:ring-white/30 focus-visible:outline-none focus-visible:bg-white/90 disabled:hover:bg-white inline-flex items-center border justify-center select-none rounded-full disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200'}>
                                  회사소개
                                  <span className="text-[#70757E]"><svg fill="none" height="24" viewBox="0 0 24 24"
                                                                        width="24" xmlns="http://www.w3.org/2000/svg"><path
                                      d="M10.75 8.75L14.25 12L10.75 15.25" stroke="currentColor" strokeLinecap="round"
                                      strokeLinejoin="round" strokeWidth="1.5"></path></svg></span>
                              </div>
                          </Link>
                          <Link href={'/location'}>
                              <div
                                  className={'text-base h-12 pl-5 pr-2 gap-0 font-semibold hover:bg-gray-800/90 hover:text-slate-12 inline-flex items-center justify-center select-none rounded-full disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200'}>
                                  오시는길
                                  <span className="text-[#70757E]"><svg fill="none" height="24" viewBox="0 0 24 24"
                                                                        width="24" xmlns="http://www.w3.org/2000/svg"><path
                                      d="M10.75 8.75L14.25 12L10.75 15.25" stroke="currentColor" strokeLinecap="round"
                                      strokeLinejoin="round" strokeWidth="1.5"></path></svg></span>
                              </div>
                          </Link>
                      </div>
                  </div>
                  <div
                      className={`${styles.animate_webgl_preload} ${styles.renderingContainer} hidden md:block w-full grayscale`}>
                      <Spline scene="/cube.splinecode"/>
                  </div>
              </div>
          </div>
          {/* 2 section */
}
    <div className={'w-full h-[120vw] md:h-[40vw] bg-none flex justify-center items-center flex-col'}>
              <h2 className={'text-[calc(0.82rem+0.2vw)] font-[500]'}>ABOUT US</h2>
              <div className={'flex flex-col items-center'}>
                  <h1 className={'mt-[3vw] text-[1.5rem] md:text-[calc(1.7rem+1vw)] font-[600]'}>사람과 기술로 사회발전에 기여합니다.</h1>
                  <p className={'mt-[1rem] md:mt-[1vw] text-[1rem] md:text-[calc(1rem+0.3vw)] font-[400]'}>2012년 창립 이래 우수한 기술력과 진취적인 사고로 <br/>우리나라
                      건설기술의 선진화를 함께 이루어갑니다.</p>
              </div>
              <div
                  className={'rounded-full bg-white p-[calc(10px+0.4vw)] bg-opacity-75 mt-[calc(20px+0.3vw)] hover:bg-opacity-90 hover:cursor-pointer text-[1.5rem] md:text-[calc(12px+0.6vw)] text-green-700'}>
                  <Link href={'/about-us/core_value'}>
                      <FaLink/>
                  </Link>
              </div>
          </div>
          {/* 3 section */}
          <div className={`w-full ${indexBackgroundColor} pt-[90px] md:pt-[140px] pb-[90px] md:pb-[140px]`}>
              <div className={'w-[calc(100%-5.6vw)] max-w-[1400px] flex mx-auto flex-col justify-center items-center'}>
                  <h2 className={'text-[calc(0.82rem+0.2vw)] font-[500] pt-[4.4vw] border-t-[1px] border-[#222] w-full text-center'}>FOCUS</h2>
                  <div className={'flex flex-col items-center'}>
                      <h1 className={'mt-[3vw] text-[1.5rem] md:text-[calc(1.7rem+1vw)] font-[600]'}>토목분야의 문제해결과 기술향상에 집중합니다</h1>
                      <p className={'mt-[1rem] md:mt-[1vw] text-[1rem] md:text-[calc(1rem+0.3vw)] font-[400]'}>최상의 기술과 다양한 경험으로 건설엔지니어링의 모든 영역의 문제를
                          해결합니다</p>
                  </div>
                  <div className={'mt-[30px] md:mt-[60px] w-full grid md:grid-cols-4 gap-x-[1.4vw] gap-y-[2rem]'}>
                      {departmentLinks.map(el => (
                          <BusinessInfoCard key={`field_name_${el.fieldName}`} title={el.fieldName}
                                            description={el.description}
                                            businessLinks={el.departments}/>
                      ))}
                  </div>
              </div>
          </div>
          {/* 4 section */}
          <div className={'w-full h-[120vw] md:h-[40vw] bg-none flex justify-center items-center flex-col'}>
              <h2 className={'text-[calc(0.82rem+0.2vw)] font-[500]'}>INNOVATE</h2>
              <div className={'flex flex-col items-center'}>
                  <h1 className={'mt-[3vw] text-[1.5rem] md:text-[calc(1.7rem+1vw)] font-[600]'}>지속가능한 성장을 위해 혁신을 추구합니다</h1>
                  <p className={'mt-[1rem] md:mt-[1vw] text-[1rem] md:text-[calc(1rem+0.3vw)] font-[400]'}>효율성 생산성을 증대시킬 엔지니어링 기술을 연구합니다.</p>
              </div>
              <div
                  className={'rounded-full bg-white p-[calc(10px+0.4vw)] bg-opacity-75 mt-[calc(20px+0.3vw)] hover:bg-opacity-90 hover:cursor-pointer text-[1.5rem] md:text-[calc(12px+0.6vw)] text-green-700'}>
                  <Link href={'/rnd/rnds'}>
                      <FaLink/>
                  </Link>
              </div>
          </div>
          {/*    5 section */}
          <div className={`w-full ${indexBackgroundColor} pt-[90px] md:pt-[140px] pb-[90px] md:pb-[140px] md:h-[40vw]`}>
              <div className={'w-[calc(100%-5.6vw)] max-w-[1400px] flex mx-auto flex-col justify-center items-center'}>
                  <h2 className={'text-[calc(0.82rem+0.2vw)] font-[500] pt-[4.4vw] border-t-[1px] border-[#222] w-full text-center'}>PR CENTER</h2>
                  <div className={'flex flex-col items-center'}>
                      <h1 className={'mt-[3vw] text-[1.5rem] md:text-[calc(1.7rem+1vw)] font-[600]'}>홍보센터</h1>
                      <div
                          className={'rounded-full bg-white p-[calc(10px+0.4vw)] bg-opacity-75 mt-[calc(20px+0.3vw)] hover:bg-opacity-90 hover:cursor-pointer text-[1.5rem] md:text-[calc(12px+0.6vw)] text-green-700'}>
                          <Link href={'/pr_center/cis'}>
                              <FaLink/>
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}
