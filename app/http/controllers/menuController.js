const Menu = require('../../models/menu')
function menuController() {
    return {
        async menu(req, res) {
            const menus = await Menu.find()
            return res.render('menu', { menus: menus })
        }
    }
}

module.exports = menuController