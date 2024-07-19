const data = require("../model/movies.model");

const getMovies = (req, res) => {
    try {
        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getIdMovies = (req, res) => {
    try {
        const { id } = req.params;
        let dataNews = null;

        if(!id.match(/[0-9]+/)){
            return res.status(500).json({ message: "This ID is invalid" })
        }

        data.forEach(iTem => {
            if(iTem.id == id){
                dataNews = iTem;
                return;
            }
        });

        if (dataNews) {
            res.status(200).json({ dataNews });
        } else {
            res.status(404).json({ message: "No Data!" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getMovies,
    getIdMovies
};