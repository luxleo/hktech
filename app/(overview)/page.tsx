import styles from './landing.module.css';
import IndexBgImageRenderer from "@/app/(overview)/IndexBgImageRenderer";
export default function Home() {
    const headerHeight = 95;
  return (
      <section className={`w-full relative bg-none`}>
          <IndexBgImageRenderer/>
          {/*1page*/}
          <div
              className={`w-full pt-[${headerHeight}px] bg-slate-300 md:h-[100vh] md:px-[40px] grid grid-cols-1 md:grid-cols-2 gap-x-3`}>
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
          <div className={'w-full h-[70vh] bg-none'}>

          </div>
          <div className={'w-full h-[100vh] bg-none'}>

          </div>
          <div className={'w-full h-[100vh] bg-none'}>

          </div>
          <div className={'w-full h-[100vh] bg-none -z-20'}>
              good morining
          </div>
      </section>
  );
}
