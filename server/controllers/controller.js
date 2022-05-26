let namesArr = []

module.exports = {
    addName: (req,res) => {
        console.log(req.params,req.body,req.query)
        namesArr.push(req.body.name)
        console.log(namesArr)
        res.status(200).send(namesArr)
    },
    updateName: (req,res) => {
        console.log(req.body)
        const { original,changed } = req.body
        namesArr = namesArr.map(el => {
            if(el === original){
                return el = changed
            } else {
                return el
            }
        })
        console.log(namesArr)
        res.status(200).send(namesArr)
    },
    deleteName: (req,res) => {

    }
}