# TROUBLE SHOOTING
## useContext export error - 24.09.09
    ```Uncaught Error: Element type is invalid: expected a string
    (for built-in components) or a class/function (for
    composite components) but got: undefined. You
    likely forgot to export your component from the
    file it's defined in, or you might have mixed up
    default and named imports.```
    위에러는 useContext 정의시 export 해주지 않으면 일어났다.