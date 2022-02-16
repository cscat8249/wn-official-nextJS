import React, { useCallback } from 'react';
import useInput from '../hooks/useInput';
import emailjs from 'emailjs-com';
import styles from '../styles/Affiliateinquiry.module.scss'

const Affiliateinquiry = () => {
    const [name, onChangeName] = useInput('');
    const [tel1, onChangeTel1] = useInput('');
    const [tel2, onChangeTel2] = useInput('');
    const [tel3, onChangeTel3] = useInput('');
    const [hopearea, onChangeHopearea] = useInput(''); 
    const [estimate, onChangeEstimate] = useInput(''); 
    const [text, onChangeText] = useInput('');

    const onSubmit = useCallback((e) => { 
        e.preventDefault(); 
        const formData = {}
        let chkform = 0;
        Array.from(e.currentTarget.elements).forEach(field => {
            if (!field.name) {
                chkform++;
                alert('필수항목을 입력해주세요.');
                return;
            }
            formData[field.name] = field.value;
        });
        if(!chkform){
            emailjs.sendForm('service_pxong49', 'template_30xxn2h', e.currentTarget, 'user_6llW9Uy14bLrWZhvtBgBU' )
            .then((result) => { 
                alert('가맹문의가 정상적으로 완료되었습니다.');}, 
                (error) => { console.log(error.text); }); 
            }
        }, []);
        
    return (
    <div className={styles.affiliateinquiry_section}>
        <div className={styles.affiliateinquiry_wrap}>
            <div className={styles.affiliateinquiry_title_wrap}>
                <h1 className={styles.title}>고객센터</h1>
                <p className={styles.desc}>프리미엄 유통 전문점 우리집놀러와, 성공적인 창업을 위한 첫 걸음</p>
            </div>
            <form className={styles.form} method="post" onSubmit={onSubmit}>
                <div className={styles.affiliateinquiry_text_one}>
                    <div className={styles.name_wrap}>
                        <p className={styles.title}>이름</p>
                        <input className={styles.name} type="text" name="name" placeholder="이름을 입력하세요" value={name} onChange={onChangeName}/>
                    </div>
                    <div className={styles.tel_wrap}>
                        <p className={styles.title}>연락처</p>
                        <input className={styles.tel} type="text" name="telnumber1" value={tel1} onChange={onChangeTel1}/>
                        <input className={styles.tel} type="text" name="telnumber2" value={tel2} onChange={onChangeTel2}/>
                        <input className={styles.tel} type="text" name="telnumber3" value={tel3} onChange={onChangeTel3}/>
                    </div>
                    <div className={styles.hopearea_wrap}>
                        <p className={styles.title}>희망개설지역</p>
                        <input className={styles.hopearea} name="hopearea" type="text" placeholder="가게 오픈 희망 지역은 어디세요?" value={estimate} onChange={onChangeEstimate}/>
                    </div>
                    <div className={styles.estimate_wrap}>
                        <p className={styles.title}>창업 예상 견적</p>
                        <input className={styles.estimate} name="estimate" type="text" placeholder="창업 예산을 알려주시면 좋아요.(부동산임대비 포함)" value={hopearea} onChange={onChangeHopearea} />
                    </div>
                </div>
                <div className={styles.affiliateinquiry_text_two}>
                    <div className={styles.question_wrap}>
                        <p className={styles.title}>기타문의내용</p>
                        <textarea className={styles.question}  name="etc" id="etc" cols="30" rows="10" placeholder='기타 문의내용을 자유롭게 적어주세요.' value={text} onChange={onChangeText}>

                        </textarea>
                    </div>
                    <div className={styles.checkbox_btn_wrap}>
                        <div className={styles.chekbox_wrap}>
                            <label className={styles.container}>
                                <input type="checkbox" value="ok" name="agreement" id="agreement" defaultChecked/>
                                개인정보수집관련 동의
                                <span className={styles.checkmark}></span>
                            </label>
                        </div>
                        <button className={styles.submit}>문의하기</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Affiliateinquiry