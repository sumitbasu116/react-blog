import style from './css/UserProfile.module.css'
function UserProfile(){
    return(
        <div>
            <div className={style.card}>
            <div>
                <img className={style.imgStyle} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
            </div>
            <div className={style.textWrap}>
                <h4 className={style.heading}>Sumit Basu</h4>
                <p>Software Developer</p>
            </div>
            </div>
        </div>
    )
}

export default UserProfile;