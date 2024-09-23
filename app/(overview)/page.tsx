import styles from './landing.module.css';
import IndexBgImageRenderer from "@/app/(overview)/IndexBgImageRenderer";
import {FaLink} from "react-icons/fa";
import Link from "next/link";
import BusinessInfoCard, {BusinessLink} from "@/app/(overview)/information_card/BusinessInfoCard";

type FocusPageData = {
    fieldName: string;
    description: string;
    departments: BusinessLink[];
}

const departmentLinks : FocusPageData[] = [
    {fieldName: '토목사업', description: '사회를 연결하며 사회의 기반이 되는 토목사업분야를 수행하고 있습니다', departments: [
            {departmentName: '구조부', link: '/businesses/domains?currentDomain=토목사업분야&currentDepartment=구조부'},
            {departmentName: '지반부',link: '/businesses/domains?currentDomain=토목사업분야&currentDepartment=지반부'}
        ]},
    {fieldName: '국토사업', description: '국토공간의 효율적인 이용과 패러다임의 변화에 적합한 도시·교통계획을 제시합니다', departments: [
            {departmentName: '도시계획부', link: '/businesses/domains?currentDomain=토목사업분야&currentDepartment=구조부'},
            {departmentName: '교통계획부',link: '/businesses/domains?currentDomain=토목사업분야&currentDepartment=지반부'}
        ]},
    {fieldName: '국토사업', description: '국토공간의 효율적인 이용과 패러다임의 변화에 적합한 도시·교통계획을 제시합니다', departments: [
            {departmentName: '도시계획부', link: '/businesses/domains?currentDomain=토목사업분야&currentDepartment=구조부'},
            {departmentName: '교통계획부',link: '/businesses/domains?currentDomain=토목사업분야&currentDepartment=지반부'}
        ]},
    {fieldName: '국토사업', description: '국토공간의 효율적인 이용과 패러다임의 변화에 적합한 도시·교통계획을 제시합니다', departments: [
            {departmentName: '도시계획부', link: '/businesses/domains?currentDomain=토목사업분야&currentDepartment=구조부'},
            {departmentName: '교통계획부',link: '/businesses/domains?currentDomain=토목사업분야&currentDepartment=지반부'}
        ]},
]

export default function Home() {
    const headerHeight = 95;
    const indexBackgroundColor = 'bg-black';
  return (
      <section className={`w-full relative bg-none`}>
          <IndexBgImageRenderer/>
          {/*1page*/}
          <div
              className={`w-full pt-[${headerHeight}px] ${indexBackgroundColor} md:h-[100vh] md:px-[40px] grid grid-cols-1 md:grid-cols-2 gap-x-3`}>
              <div className={'w-full bg-emerald-500 pt-10 flex flex-col items-start gap-y-5'}>
                  <div className={'w-full text-[5rem] text-[#999] font-extrabold leading-none'}>
                      <span className={`${styles.colorChange}`}>H</span>uman <span
                      className={`${styles.colorChange}`}>K</span>orea<br/>
                      Technology
                  </div>
                  <div
                      className={'w-full flex justify-center items-center grow basis-0 bg-black text-white text-[4rem]'}>
                      은하3d 모델
                  </div>
              </div>
              <div className={'w-full h-15 bg-emerald-600'}>
                  다이아몬드 그리드로 메뉴(hover시 플립 카드로) 바로가기
              </div>
          </div>
          {/* 2 section */}
          <div className={'w-full h-[120vw] md:h-[40vw] bg-none flex justify-center items-center flex-col'}>
              <h2 className={'text-[calc(0.82rem+0.2vw)] font-[500]'}>ABOUT US</h2>
              <div className={'flex flex-col items-center'}>
                  <h1 className={'mt-[3vw] text-[calc(1.7rem+1vw)] font-[600]'}>사람과 기술로 혁신합니다</h1>
                  <p className={'mt-[1vw] text-[calc(1rem+0.3vw)] font-[400]'}>2012년 창립 이래 우수한 기술력과 진취적인 사고로 <br/>우리나라 건설기술의 선진화를 함께 이루어갑니다.</p>
              </div>
              <div className={'rounded-full bg-white p-[calc(10px+0.4vw)] bg-opacity-75 mt-[calc(20px+0.3vw)] hover:bg-opacity-90 hover:cursor-pointer text-[calc(12px+0.6vw)] text-green-700'}>
                  <Link href={'/about-us'}>
                    <FaLink/>
                  </Link>
              </div>
          </div>
          {/* 3 section */}
          <div className={`w-full ${indexBackgroundColor} flex flex-col justify-center items-center pt-10`}>
              <h2 className={'text-[calc(0.82rem+0.2vw)] font-[500]'}>FOCUS</h2>
              <div className={'flex flex-col items-center'}>
                  <h1 className={'mt-[3vw] text-[calc(1.7rem+1vw)] font-[600]'}>토목분야의 문제해결과 기술향상에 집중합니다</h1>
                  <p className={'mt-[1vw] text-[calc(1rem+0.3vw)] font-[400]'}>최상의 기술과 다양한 경험으로 건설엔지니어링의 모든 영역의 문제를 해결합니다</p>
              </div>
              <div className={'md:pt-20 flex gap-x-3'}>
                  {departmentLinks.map(el => (
                      <BusinessInfoCard key={el.departments} title={el.fieldName} description={el.description} businessLinks={el.departments}/>
                  ))}
              </div>
          </div>
          <div className={`w-full h-[100vh] ${indexBackgroundColor}`}>

          </div>
          <div className={'w-full h-[120vw] md:h-[40vw] bg-none'}>
              good morining
          </div>
      </section>
  );
}
