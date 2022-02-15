import React from 'react'
import styles from '../styles/Affiliateinquiry.module.scss'

const Affiliateinquiry = () => {
  return (
    <div className={styles.affiliateinquiry_wrap}>
        <div className={styles.affiliateinquiry_title_wrap}>
            <h1 className={styles.title}>고객센터</h1>
            <p className={styles.desc}>프리미엄 유통 전문점 우리집놀러와, 성공적인 창업을 위한 첫 걸음</p>
        </div>
        <form className={styles.form}>
            <div className={styles.affiliateinquiry_text_one}>
                <div className={styles.name_wrap}>
                    <p className={styles.title}>이름</p>
                    <input className={styles.name} type="text" name="name" placeholder="이름을 입력하세요" value=""/>
                </div>
                <div className={styles.tel_wrap}>
                    <p className={styles.title}>연락처</p>
                    <input className={styles.tel} type="text" value="" name="telnumber1"/>
                    <input className={styles.tel} type="text" value="" name="telnumber2"/>
                    <input className={styles.tel} type="text" value="" name="telnumber3"/>
                </div>
                <div className={styles.hopearea_wrap}>
                    <p className={styles.title}>희망개설지역</p>
                    <input className={styles.hopearea} type="text" placeholder="가게 오픈 희망 지역은 어디세요?"/>
                </div>
                <div className={styles.estimate_wrap}>
                    <p className={styles.title}>창업 예상 견적</p>
                    <input className={styles.estimate} type="text" placeholder="창업 예산을 알려주시면 좋아요.(부동산임대비 포함)"/>
                </div>
            </div>
            <div className={styles.affiliateinquiry_text_two}>
                <div className={styles.question_wrap}>
                    <p className={styles.title}>기타문의내용</p>
                    <textarea className={styles.question}  name="etc" id="etc" cols="30" rows="10" placeholder='기타 문의내용을 자유롭게 적어주세요.'>

                    </textarea>
                </div>
                <div className={styles.checkbox_btn_wrap}>
                    <div className={styles.chekbox_wrap}>
                        <label className={styles.container}>
                            <input type="checkbox" value="ok" name="agreement" id="agreement" checked="checked"/>
                            개인정보수집관련 동의
                            <span className={styles.checkmark}></span>
                        </label>
                    </div>
                    <button className={styles.submit}>문의하기</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Affiliateinquiry