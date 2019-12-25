import React, { useState } from "react"
import Layout from "../components/layout"


export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <Layout>
        <div className="title-page-contener">
          <div className="line-left"></div>
          <div className="title-page">KONTAKT</div>
          <div className="line-right"></div>
        </div>

        <div className="contact">
          <form
            className="contact-form"
            onSubmit={this.submitForm}
            action="https://formspree.io/xayqovvy"
            method="POST"
          >
            <input name="name" id="name" type="text" placeholder="Imię i Nazwisko" />
            <input name="email" id="email" type="text" placeholder="Adres E-mail" />
            <input name="temat" id="email" type="text" placeholder="Temat" />
            <textarea name="content" id="content" type="text" placeholder="Treść wiadomości"></textarea>


            {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </form>
          <div className="contact-photo-text">
            <div className="contact-photo" style={{ backgroundImage: `url(${require('../images/hardware.jpg')})` }}></div>

            <div className="contact-text">
              <p>mathcoglab@umk.pl</p>

              <p>ICNT na gagarina</p>

              <p>ul. Gagarina</p>

              <p>87-100 Toruń</p>
            </div>
          </div>
        </div>
        <div className="iframe">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2400.007852762975!2d18.565505215165647!3d53.02022180679041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4703344d0f37fee9%3A0x286cc8043ecc16c3!2sInterdyscyplinarne%20Centrum%20Nowoczesnych%20Technologii%20UMK%20w%20Toruniu!5e0!3m2!1sen!2spl!4v1575828457979!5m2!1sen!2spl" width="600" height="450" frameborder="0" style={{ border: 0, borderRadius: 30 }} allowfullscreen=""></iframe>
        </div>
      </Layout>
    );

  }




  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
// const ContactPage = () => {
//   const [name, setName] = useState('')
//   const [sender, setEmail] = useState('')
//   const [content, setContent] = useState('')

//   const handleInputChange = (e) => {
//     if (e.target.id === "name") {
//       setName(e.target.value)
//       console.log(name)
//     }
//     else if (e.target.id === "email") {
//       setEmail(e.target.value)
//     }
//     else {
//       setContent(e.target.value)
//     }

//   }
//   const handleMailSubmit = (e) => {
    // e.preventDefault()


    // const dataToSend = {
    //   recipient: "snikersdro@gmail.com",
    //   sender,
    //   name,
    //   content
    // }
    // console.log(dataToSend.content)
    // fetch(`http://127.0.0.1:4000/send-email?recipient=${dataToSend.recipient}&sender=${dataToSend.sender}&topic=${dataToSend.name}&text=${dataToSend.content}`) //query string url

    //   .catch(err => console.error(err))

  // }

//   return (
//     <Layout>
//       <div className="title-page-contener">
//         <div className="line-left"></div>
//         <div className="title-page">KONTAKT</div>
//         <div className="line-right"></div>
//       </div>


//       <div className="contact">


//         <form action="https://formspree.io/xayqovvy" method="POST"
//           className="contact-form" action="my-project-abcd123.now.sh/contact" onSubmit={handleMailSubmit}>
//           <input name="name" id="name" type="text" value={name} onChange={handleInputChange} placeholder="Imię i Nazwisko" />
//           <input name="email" id="email" type="text" value={sender} onChange={handleInputChange} placeholder="Adres E-mail" />
//           <input name="temat" id="email" type="text" value={sender} onChange={handleInputChange} placeholder="Temat" />
//           <textarea name="content" id="content" type="text" value={content} onChange={handleInputChange} placeholder="Treść wiadomości"></textarea>
//           <button type="submit"> Wyślij</button>
//         </form>

//         <div className="contact-photo-text">
//           <div className="contact-photo" style={{ backgroundImage: `url(${require('../images/hardware.jpg')})` }}></div>

//           <div className="contact-text">
//             <p>mathcoglab@umk.pl</p>

//             <p>ICNT na gagarina</p>

//             <p>ul. Gagarina</p>

//             <p>87-100 Toruń</p>
//           </div>

//         </div>
//       </div>
//       <div className="iframe">
//         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2400.007852762975!2d18.565505215165647!3d53.02022180679041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4703344d0f37fee9%3A0x286cc8043ecc16c3!2sInterdyscyplinarne%20Centrum%20Nowoczesnych%20Technologii%20UMK%20w%20Toruniu!5e0!3m2!1sen!2spl!4v1575828457979!5m2!1sen!2spl" width="600" height="450" frameborder="0" style={{ border: 0, borderRadius: 30 }} allowfullscreen=""></iframe>
//       </div>
//     </Layout>
//   )
// }

// export default ContactPage
