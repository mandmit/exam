const Pool = require('pg').Pool
const pool = new Pool({
 host: 'ec2-54-155-22-153.eu-west-1.compute.amazonaws.com',
  database: 'de9cqskset4frb',
  user:'uppsrkpggaxtei',
  password: 'eb896e67b04470d000b6671b4252f833f7fde85e50eb8a2d4841336b6ab26f92',
  port: 5432,
  ssl:{rejectUnauthorized:false},
})
const getContent = (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    pool.query('SELECT * FROM public.forexam ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getContentById = (request, response) => {
  const id = parseInt(request.params.id)
    response.header("Access-Control-Allow-Origin", "*");
    pool.query('SELECT * FROM public.forexam WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getContent,
  getContentById
}
