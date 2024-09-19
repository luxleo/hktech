import styles from './landing.module.css';
import IndexBgImageRenderer from "@/app/(overview)/IndexBgImageRenderer";
export default function Home() {
    const headerHeight = 95;
    const indexBackgroundColor = 'bg-slate-300';
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
          {/*   2page  스크롤 포지션 추적해서 */}
          <div className={'w-full h-[120vw] md:h-[40vw] bg-none flex justify-center items-center flex-col'}>
              <h2 className={'text-[calc(0.82rem+0.2vw)] font-[500]'}>ABOUT US</h2>
              <div className={'flex flex-col items-center'}>
                  <h1 className={'mt-[3vw] text-[calc(1.7rem+1vw)] font-[600]'}>사람과 기술로 혁신합니다</h1>
                  <p className={'mt-[1vw] text-[calc(1rem+0.3vw)] font-[400]'}>2012년 창립 이래 우수한 기술력과 진취적인 사고로 우리나라 건설기술의 선진화를 함께 이루어갑니다.</p>
              </div>
          </div>
          <div className={`w-full h-[100vh] ${indexBackgroundColor}`}>

          </div>
          <div className={`w-full h-[100vh] ${indexBackgroundColor}`}>

          </div>
          <div className={'w-full h-[120vw] md:h-[40vw] bg-none'}>
              good morining
          </div>
      </section>
  );
}
