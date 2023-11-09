import style from "./Header.module.css"

function Header(){
    return (
        <div>
            <div className={style.img}>
                <img src="/Header.svg" />
            </div>
        </div>
    )
}

export default Header