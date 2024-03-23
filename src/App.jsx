import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="https://cdn.discordapp.com/attachments/1140705765573804032/1221114212395520010/S__126246915.jpg?ex=6611663b&is=65fef13b&hm=fd031fa943cfb36b9cf49cbbd1659937c62d77db2eb014993511a33dcbefb816&" />

        <Title title="จุฑาทิพย์ ศรนารายณ์ (ไอซ์)">
          <h3>ตำแหน่ง : UX/UI Design </h3>
        </Title>

        <Title title="ติดต่อ">

          <p>วันที่ปัจจุบัน: {moment().format("D MMM YYYY")}</p>
          <p>วันเกิด: {moment("2002/12/18").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : +66623922745
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button>
          <p>Email : s64122202073@ssru.ac.th</p>
          <p>www.s64122202073@ssru.ac.th</p>
        </Title>

        <Title title="การศึกษา">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="โปรไฟล์">
          <p>ชื่อนางสาวจุฑาทิพย์ ศรนารายณ์ชื่อเล่นไอซ์ ปัจจุบันอายุ 21 ปี ศึกษาอยู่ที่มหาวิทยาลัยราชภัฏ สวนสุนันทา คณะวิทยาศาสตร์และเทคโนโลยีสารสนเทศโดยมีประสบการณ์จากการเรียนการทำงาในชั้นเรียน ออกแบบหน้าตา UX/UI และการสร้างเว็บไซต์กับแอปพลิเคชันเป็นต้น ซึ่งอยากฝึกงานเกี่ยวกับUX/UI Design</p>
        </Title>

        <Title title="ประสบการณ์การทำงาน">
          <p>มีการใช้ wordpress ในการพัฒนาเว็บไซต์ ในลักษณะของ Blog เกี่ยวกับการแนะนำอาหารแต่ละประเภทในท้องถิ่นที่อยู่อาศัยของตัวเองและสามารถให้ user Comment ได้ว่ามีความคิดเห็นอย่างไร
            ,ออกแบบ UX/UI เพื่อใช้ในการออกแบบหน้าโปรไฟล์ของต้นเองนำไปใช้สำหรับเป็นต้นแบบและพัฒนาต่อใน HTML</p>
        </Title>

        <Title title="ทักษะ">
          <p>WordPress พื้นฐาน</p>
          <p>Adobe illustrator พื้นฐาน </p>
          <p>UX/UI พื้นฐาน</p>
        </Title>
      </div>
    </main>
  )
}

export default App
