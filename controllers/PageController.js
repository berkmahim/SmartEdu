const PageController = {}



PageController.getIndexPage = (req, res) => {
    console.log(req.session.userID)
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


export default PageController

