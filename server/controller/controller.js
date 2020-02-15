module.exports = {
    getHomes: (req, res) => {
        const db = req.app.get('db')
        console.log('controller log from getHomes')
        db.getHomes().then(homesList => {
            console.log(homesList)
        })
    }
}