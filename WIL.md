# TROUBLE SHOOTING
## useContext export error - 24.09.09
    ```Uncaught Error: Element type is invalid: expected a string
    (for built-in components) or a class/function (for
    composite components) but got: undefined. You
    likely forgot to export your component from the
    file it's defined in, or you might have mixed up
    default and named imports.```
    위에러는 useContext 정의시 export 해주지 않으면 일어났다.

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