export default function Home() {
  return (
      <section className={'w-full'}>
        <div className={'flex justify-center'}>
          <div className={'w-[300px] h-[300px] sticky top-[95px] flex flex-col items-center gap-y-5'}>
            <h1 className={'text-2xl'}>title1</h1>
            <p>
              content is good
            </p>
          </div>
          <div>
            {[...Array(30).keys()].map((el, idx) => {
              return (
                  <div key={`child-${idx}`} className={''}>
                    <div className={'text-xl'}>
                      {`${el} title`}
                    </div>
                    <div>
                      {el}
                    </div>
                  </div>
              )
            })}
          </div>
        </div>
        <div className={'flex justify-center'}>
          <div className={'w-[300px] h-[300px] sticky top-[95px] flex flex-col items-center gap-y-5'}>
            <h1 className={'text-2xl'}>title2</h1>
            <p>
              content is good
            </p>
          </div>
          <div>
            {[...Array(30).keys()].map((el, idx) => {
              return (
                  <div key={`child2-${idx}`} className={''}>
                    <div className={'text-xl'}>
                      {`${el} title`}
                    </div>
                    <div>
                      {el}
                    </div>
                  </div>
              )
            })}
          </div>
        </div>
      </section>
  );
}
