import React, { useState } from "react"
import Layout from "../components/layout"
import ItemAnnounce from "../components/ItemAnnounce"

const ogloszenia = [
    { id: 1, cos: true, help: true, subject: true, title: "Gaze-Button", text: "Dyskalkulia jest deficytem dotyczącym nabywania podstawowych zdolności numerycznych (bazowych kompetencji przetwarzania liczb) występującym przy jednoczesnej normie intelektualnej (ilorazie inteligencji w normie). Oznacza to, że problem osoby z dyskalkulią dotyczy wybiórczo umiejętności związanych z matematyką, podczas gdy nie wykazuje ona innych deficytów. Należy jednak pamiętać, że „czysta” dyskalkulia występuje bardzo rzadko, zaś znacznie częściej spotykamy się ze współwystępowaniem tego zaburzenia z innymi, np. dysleksją czy deficytami uwagi. Literatura podaje, że osoby cierpiące na dyskalkulię stanowią 3-6% ogólnej populacji. Trzeba jednak wiedzieć, że wiele osób z dyskalkulią nie jest diagnozowanych, jak również nierzadko stawiana jest niewłaściwa diagnoza (diagnozuje się dyskalkulię, podczas gdy problem leży zupełnie gdzie indziej, np. w deficytach funkcji językowych czy pamięciowych). Często przyczyną są niedoskonałe narzędzia diagnozy." },
    { id: 2, cos: false, help: false, subject: true, title: "Move-Eye", text: "dsjaudhsauhdsiau" },

]


const OgloszeniaPage = () => {
    const [collapsedtext, setCollapsedText] = useState(ogloszenia)
    
    console.log(collapsedtext)

    const handleText = (id) => {


        let tempHours = collapsedtext.find(item => item.id === id)
        console.log(tempHours.cos = !tempHours.cos)
        // 
        setCollapsedText([...collapsedtext])

        // setCollapsedText(...collapsedtext,!cos)

    }
    return (
        <Layout>
            <div className="title-page-contener">
                <div className="line-left"></div>
                <div className="title-page">OGŁOSZENIA</div>
                <div className="line-right"></div>
            </div>
            {collapsedtext.map(item => {

                return (
                    <ItemAnnounce
                        key={item.id}
                        item={item}
                        handleText={handleText}
                    />
                )
            })}




        </Layout >
    )
}
export default OgloszeniaPage
