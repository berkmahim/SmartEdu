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


export default PageController

