import nodemailer from 'nodemailer'

const PageController = {}



PageController.getIndexPage = (req, res) => {
    res.render('index', {
        page_name: 'index'
    })
}

PageController.getAboutPage = (req, res) => {
    res.render('about', {
        page_name: 'about'
    })
}
PageController.getRegisterPage = (req, res) => {
    res.render('register', {
        page_name: 'register'
    })
}
PageController.getLoginPage = (req, res) => {
    res.render('login', {
        page_name: 'login'
    })
}
PageController.getContactPage = (req, res) => {
    res.render('contact', {
        page_name: 'contact'
    })
}
PageController.sendEmail = async (req, res) => {
    const outputMessage = `
    <h1> Email Details </h1>
    <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    </ul>
    <h1>Message</h1>
    <p>${req.body.message}</p>
    `
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "berkmahim620@gmail.com", // gmail user
            pass: "vymmjdqrevqsjcvz", // gmail password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Smart EDU Contact Form" <foo@example.com>', // sender address
        to: "berkmahim@outlook.com", // list of receivers
        subject: "Smart EDU Contact Form", // Subject line
        html: outputMessage, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
res.status(200).redirect('contact')


}


export default PageController

