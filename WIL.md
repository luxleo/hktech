# TROUBLE SHOOTING
## useContext export error - 24.09.09
    ```Uncaught Error: Element type is invalid: expected a string
    (for built-in components) or a class/function (for
    composite components) but got: undefined. You
    likely forgot to export your component from the
    file it's defined in, or you might have mixed up
    default and named imports.```
    위에러는 useContext 정의시 export 해주지 않으면 일어났다.

## Suspense activate 조건 미숙지
```tsx
import {Suspense} from "react";

export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${notoSansKr.className} antialiased`}
            >
                <Suspense> {/*line 1*/}
                    <NavBar/>
                </Suspense>
                <section className={'w-full min-h-[calc(100vh-25vh)] md:min-h-[calc(100vh-20vh)]'}>
                    {children}
                </section>  
                <Footer/>
            </body>
        </html>
        );
    }
```
상황 NavBar 컴포넌트가 애니메이션등 여러 라이브러리가 많아서 로딩 소요시간이 클 거라 예상했다
따라서 Suspense 태그를 이용하여 모든 외부 라이브러리를 import한 후 렌더링 되도록 하려고 함.

하지만 Suspense 태그는 activate 를 받기 위해서 아래의 세가지 조건이 필요한다.
1.Data fetching with Suspense-enabled frameworks like Relay and Next.js
2.Lazy-loading component code with lazy
3.Reading the value of a Promise with use

따라서 fetch 이후 페이지를 렌더링하여 전송하는 SSR 방식, 컴포넌트 갱신을 위한 fetch를 하는 CSR이 아니라면 사용을 지양해야함.
[참조](https://react.dev/reference/react/Suspense)

# Skills I Learn
## css 애니메이션 처리시 layout 여러개 깔아 주기 
    배경과 컨텐츠를 분리하여 적용하면 굉장히 편하고 좋다.
[참조코드](./app/layout.tsx)

## framer motion 이용해서 애니메이션 상태를 `초기 => 변형 => 초기` ㅎㅏ는 방법
```tsx
<motion.div
    className={'fixed top-0 h-[95px] w-full'}
    initial={{background: 'white', height: '0px', opacity: 0}}
    animate={isScrolled ? "bg-visible" : "bg-transparent"}
    variants={{
        "bg-visible": {
            opacity: 0.8,
            height: '95px'
        },
        "bg-transparent": {

        }
    }}
>
</motion.div>
```
[참조코드](./app/layout.tsx)

## [CSS] sticky 적용 하려면 sticky 적용하는 요소에 높이 설정 해주어야한다.
```html
<div class="sticky h-[300px]"></div>
```