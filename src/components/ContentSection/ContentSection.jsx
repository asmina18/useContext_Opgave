import style from './ContentSection.module.scss'

export const ContentSection = ({children, title}) => {

    return (
        <>
        <div className={style.contentWrapper}>
            <h1>{title}</h1>
            <section>
                {children}
            </section>
        </div>
        </>
    )
}